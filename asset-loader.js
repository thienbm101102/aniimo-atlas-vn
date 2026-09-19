(() => {
  "use strict";

  const ABSOLUTE_URL_RE = /^(?:[a-z][a-z0-9+.-]*:|\/\/|#|data:|blob:)/i;

  function addCandidate(list, value) {
    if (!value) return;
    try {
      const url = new URL(String(value), document.baseURI || window.location.href).href;
      if (!list.includes(url)) list.push(url);
    } catch {
      // Ignore malformed candidates and continue with the remaining roots.
    }
  }

  function localCandidates(path) {
    const raw = String(path ?? "").trim();
    if (!raw) return [];
    if (ABSOLUTE_URL_RE.test(raw)) return [raw];

    const relative = raw.replace(/^\/+/, "");
    const candidates = [];

    // Keep the existing resolver first so correctly configured deployments are
    // unchanged. The additional roots below recover from deep-link/404.html
    // cases where the current URL is not the physical directory of index.html.
    if (typeof window.ANIIPEDIA_URL === "function") {
      addCandidate(candidates, window.ANIIPEDIA_URL(raw));
    }
    addCandidate(candidates, new URL(raw, document.baseURI || window.location.href));

    const pathname = window.location.pathname || "/";
    const directory = pathname.endsWith("/")
      ? pathname
      : pathname.slice(0, pathname.lastIndexOf("/") + 1) || "/";
    addCandidate(candidates, new URL(relative, `${window.location.origin}${directory}`));

    // GitHub Pages project sites live at /REPOSITORY/. Prefer that stable root
    // when a deep URL was loaded through 404.html.
    if (/(^|\.)github\.io$/i.test(window.location.hostname || "")) {
      const firstSegment = pathname.split("/").filter(Boolean)[0] || "";
      if (firstSegment) {
        addCandidate(candidates, new URL(relative, `${window.location.origin}/${firstSegment}/`));
      }
    }

    // Also try each parent path. This covers static hosts serving an app from
    // a nested folder without requiring a manually configured public base URL.
    const parts = pathname.split("/").filter(Boolean);
    for (let count = parts.length; count >= 1; count -= 1) {
      const prefix = `/${parts.slice(0, count).join("/")}/`;
      addCandidate(candidates, new URL(relative, `${window.location.origin}${prefix}`));
    }
    addCandidate(candidates, new URL(relative, `${window.location.origin}/`));

    return candidates;
  }

  function isJsonResponse(response) {
    const type = String(response.headers.get("content-type") || "").toLowerCase();
    return !type || type.includes("json") || type.includes("javascript") || type.includes("text/plain");
  }

  async function fetchJson(path, options = {}) {
    const candidates = localCandidates(path);
    if (!candidates.length) throw new Error("Aniipedia asset URL is empty");

    const attempts = [];
    const requestInit = { cache: "no-cache", ...options };
    delete requestInit.url;

    for (const url of candidates) {
      try {
        const response = await fetch(url, requestInit);
        const status = response.status;
        if (!response.ok) {
          attempts.push(`${status} ${url}`);
          continue;
        }
        if (!isJsonResponse(response)) {
          attempts.push(`HTML/non-JSON ${url}`);
          continue;
        }
        try {
          return await response.json();
        } catch (error) {
          attempts.push(`invalid JSON ${url}`);
        }
      } catch (error) {
        attempts.push(`${error instanceof Error ? error.message : String(error)} ${url}`);
      }
    }

    const detail = attempts.length ? ` Đã thử: ${attempts.join(" | ")}` : "";
    const error = new Error(`Không thể tải dữ liệu từ ${String(path)}.${detail}`);
    error.attempts = attempts;
    error.candidates = candidates;
    throw error;
  }

  function resolve(path) {
    return localCandidates(path)[0] || String(path ?? "");
  }

  window.AniipediaAssets = Object.freeze({
    fetchJson,
    resolve,
    candidates: localCandidates,
  });
})();
