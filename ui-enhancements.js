(() => {
  "use strict";

  const $ = (selector) => document.querySelector(selector);
  const $$ = (selector) => Array.from(document.querySelectorAll(selector));
  const state = {
    catalogIndex: null,
    aniilog: null,
    results: [],
    activeIndex: -1,
    catalogIndexPromise: null,
    aniilogPromise: null,
  };

  const ICONS = {
    aniimo: "✦",
    item: "◈",
    map: "⌖",
    skill: "✺",
  };

  function showToast(message, tone = "info") {
    const region = $("#appToastRegion");
    if (!region || !message) return;
    const toast = document.createElement("div");
    toast.className = `app-toast is-${tone}`;
    const dot = document.createElement("span");
    const text = document.createElement("span");
    text.textContent = message;
    toast.append(dot, text);
    region.append(toast);
    window.setTimeout(() => {
      toast.style.opacity = "0";
      toast.style.transform = "translateY(5px)";
      window.setTimeout(() => toast.remove(), 180);
    }, 2400);
  }

  function normalize(value) {
    return String(value ?? "")
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()
      .trim();
  }

  function limit(text, size = 120) {
    const source = String(text ?? "");
    return source.length > size ? `${source.slice(0, size - 1)}…` : source;
  }

  async function ensureCatalogIndex() {
    if (state.catalogIndex) return state.catalogIndex;
    state.catalogIndexPromise ||= fetch(window.ANIIPEDIA_URL ? window.ANIIPEDIA_URL("./data/catalog-index-v2.json?v=20260919-0648") : "./data/catalog-index-v2.json?v=20260919-0648", { cache: "no-cache" })
      .then((r) => {
        if (!r.ok) throw new Error("Không thể tải chỉ mục vật phẩm.");
        return r.json();
      })
      .then((data) => (state.catalogIndex = data));
    return state.catalogIndexPromise;
  }

  async function ensureAniilog() {
    if (state.aniilog) return state.aniilog;
    state.aniilogPromise ||= fetch(window.ANIIPEDIA_URL ? window.ANIIPEDIA_URL("./data/aniilog_data.json?v=20260919-0648") : "./data/aniilog_data.json?v=20260919-0648", { cache: "no-cache" })
      .then((r) => {
        if (!r.ok) throw new Error("Không thể tải Aniilog.");
        return r.json();
      })
      .then((data) => (state.aniilog = data));
    return state.aniilogPromise;
  }

  function flattenAniilog(data) {
    if (!data) return [];
    if (Array.isArray(data)) return data;
    if (Array.isArray(data.entries)) return data.entries;
    if (Array.isArray(data.aniimo)) return data.aniimo;
    return Object.values(data.entries || data.aniimo || {});
  }

  function resultRecord(type, entry) {
    const isAniimo = type === "aniimo";
    const id = entry?.id ?? entry?.item_id ?? entry?.aniimo_id ?? entry?.number ?? "";
    const name = entry?.name ?? entry?.display_name ?? entry?.species_name ?? entry?.title ?? id;
    const subtitle = isAniimo
      ? [entry?.classification, entry?.form_label, entry?.form].filter(Boolean).join(" · ")
      : [entry?.catalog_category, entry?.quality_display ?? entry?.quality, entry?.type].filter(Boolean).join(" · ");
    return {
      type,
      id: String(id),
      name: String(name),
      subtitle: String(subtitle || (type === "item" ? "Vật phẩm" : "Aniimo")),
      icon: entry?.icon || "",
      raw: entry,
    };
  }

  function searchCatalog(query) {
    if (!state.catalogIndex?.entries) return [];
    const q = normalize(query);
    if (!q) return [];
    const matches = [];
    for (const entry of state.catalogIndex.entries) {
      const haystack = normalize([
        entry.name,
        entry.item_id,
        entry.type,
        entry.catalog_category,
        entry.quality,
        entry.description,
      ].join(" "));
      if (!haystack.includes(q)) continue;
      matches.push(resultRecord("item", entry));
      if (matches.length >= 12) break;
    }
    return matches;
  }

  function searchAniilog(query) {
    const entries = flattenAniilog(state.aniilog);
    const q = normalize(query);
    if (!q) return [];
    return entries.filter((entry) => {
      const haystack = normalize([
        entry.name,
        entry.display_name,
        entry.form_name,
        entry.form_label,
        entry.classification,
        entry.aniilog_number,
      ].join(" "));
    return haystack.includes(q);
    }).slice(0, 12).map((entry) => resultRecord("aniimo", entry));
  }

  function searchMapNames(query) {
    const q = normalize(query);
    if (!q) return [];
    const names = [
      ["country-of-time", "Breezy Plains", "Idyll"],
      ["whisperwake-isles", "Whisperwake Isles", "Idyll"],
      ["astra", "Astra", "Astra"],
      ["lost-islets", "The Lost Islets", "Idyll"],
    ];
    return names.filter(([, name, world]) => normalize(`${name} ${world}`).includes(q)).map(([id, name, world]) => ({
      type: "map",
      id,
      name,
      subtitle: world,
      icon: "",
      raw: { mapId: id, name, world },
    }));
  }

  function renderIcon(result) {
    const wrapper = document.createElement("span");
    wrapper.className = "global-search-result-icon";
    if (result.icon) {
      const img = document.createElement("img");
      img.src = result.icon.startsWith(".") ? result.icon : `./${result.icon}`;
      img.alt = "";
      img.loading = "lazy";
      wrapper.append(img);
    } else {
      wrapper.textContent = ICONS[result.type] || "•";
    }
    return wrapper;
  }

  function groupResults(results) {
    return results.reduce((map, result) => {
      const key = result.type === "aniimo" ? "ANIIMO" : result.type === "item" ? "VẬT PHẨM" : "ĐỊA ĐIỂM";
      if (!map[key]) map[key] = [];
      map[key].push(result);
      return map;
    }, {});
  }

  function closeResults() {
    const el = $("#globalSearchResults");
    if (!el) return;
    el.hidden = true;
    el.replaceChildren();
    state.results = [];
    state.activeIndex = -1;
  }

  function renderResults(results, query) {
    const panel = $("#globalSearchResults");
    if (!panel) return;
    panel.replaceChildren();
    if (!query.trim()) {
      closeResults();
      return;
    }
    if (!results.length) {
      const empty = document.createElement("div");
      empty.className = "global-search-result-copy";
      empty.style.padding = "12px 10px 13px";
      empty.innerHTML = "<strong>Không tìm thấy kết quả</strong><small>Thử tên Aniimo, vật phẩm hoặc bản đồ khác.</small>";
      panel.append(empty);
      panel.hidden = false;
      return;
    }
    const groups = groupResults(results);
    let absoluteIndex = 0;
    Object.entries(groups).forEach(([title, entries]) => {
      const heading = document.createElement("div");
      heading.className = "global-search-result-section";
      heading.textContent = title;
      panel.append(heading);
      entries.forEach((result) => {
        const button = document.createElement("button");
        button.type = "button";
        button.className = "global-search-result";
        button.dataset.resultIndex = String(absoluteIndex);
        button.append(renderIcon(result));
        const copy = document.createElement("span");
        copy.className = "global-search-result-copy";
        const name = document.createElement("strong");
        name.textContent = limit(result.name);
        const subtitle = document.createElement("small");
        subtitle.textContent = limit(result.subtitle, 90);
        copy.append(name, subtitle);
        const type = document.createElement("span");
        type.className = "global-search-result-type";
        type.textContent = result.type === "map" ? "BẢN ĐỒ" : result.type === "item" ? "ITEM" : "ANIIMO";
        button.append(copy, type);
        button.addEventListener("click", () => openResult(result));
        panel.append(button);
        absoluteIndex += 1;
      });
    });
    panel.hidden = false;
  }

  async function getResults(query) {
    const trimmed = String(query ?? "").trim();
    if (!trimmed) return [];
    const mapResults = searchMapNames(trimmed);
    const [aniimo, items] = await Promise.allSettled([ensureAniilog(), ensureCatalogIndex()]);
    const results = [];
    if (aniimo.status === "fulfilled") results.push(...searchAniilog(trimmed));
    if (items.status === "fulfilled") results.push(...searchCatalog(trimmed));
    return [...mapResults, ...results].slice(0, 36);
  }

  function clickWorkspace(view) {
    const button = document.querySelector(`[data-workspace-view="${view}"]`);
    if (button) button.click();
  }

  function dispatchInput(input, value) {
    if (!input) return;
    input.value = value;
    input.dispatchEvent(new Event("input", { bubbles: true }));
  }

  function openCatalogResult(view, query) {
    clickWorkspace(view);
    window.setTimeout(() => {
      const selector = view === "aniilog" ? ".catalog-search" : ".catalog-search";
      const input = document.querySelector(selector);
      if (input) dispatchInput(input, query);
      else {
        const sidebarInput = document.querySelector("#searchInput");
        if (sidebarInput) dispatchInput(sidebarInput, query);
      }
    }, 70);
  }

  function openResult(result) {
    closeResults();
    const input = $("#globalSearchInput");
    if (input) input.blur();
    if (result.type === "map") {
      clickWorkspace("map");
      window.setTimeout(() => {
        const tab = document.querySelector(`.map-tab[data-map-id="${CSS.escape(result.id)}"]`);
        if (tab) tab.click();
      }, 60);
      showToast(`Đã mở bản đồ ${result.name}.`, "success");
      return;
    }
    if (result.type === "aniimo") {
      openCatalogResult("aniilog", result.name);
      showToast(`Đã mở Aniilog cho ${result.name}.`, "success");
      return;
    }
    openCatalogResult("itemlog", result.name);
    showToast(`Đã mở kho vật phẩm cho ${result.name}.`, "success");
  }

  async function runSearch(value) {
    const query = String(value ?? "");
    if (!query.trim()) {
      closeResults();
      return;
    }
    const panel = $("#globalSearchResults");
    if (panel) {
      panel.hidden = false;
      panel.innerHTML = '<div class="global-search-result-copy" style="padding:12px 10px;color:var(--muted)">Đang tìm kiếm…</div>';
    }
    try {
      const results = await getResults(query);
      state.results = results;
      renderResults(results, query);
    } catch (error) {
      console.error(error);
      renderResults([], query);
      showToast("Không thể hoàn tất tìm kiếm.", "error");
    }
  }

  function updateActiveSearchResult(direction) {
    const buttons = $$(".global-search-result");
    if (!buttons.length) return;
    state.activeIndex = (state.activeIndex + direction + buttons.length) % buttons.length;
    buttons.forEach((button, index) => button.classList.toggle("is-active", index === state.activeIndex));
    buttons[state.activeIndex]?.scrollIntoView({ block: "nearest" });
  }

  function installGlobalSearch() {
    const input = $("#globalSearchInput");
    const shell = $("#globalSearchShell");
    if (!input || !shell) return;
    let timer = 0;
    input.addEventListener("input", () => {
      window.clearTimeout(timer);
      timer = window.setTimeout(() => void runSearch(input.value), 130);
    });
    input.addEventListener("keydown", (event) => {
      if (event.key === "ArrowDown") {
        event.preventDefault();
        updateActiveSearchResult(1);
        return;
      }
      if (event.key === "ArrowUp") {
        event.preventDefault();
        updateActiveSearchResult(-1);
        return;
      }
      if (event.key === "Enter") {
        const result = state.results[state.activeIndex];
        if (result) {
          event.preventDefault();
          openResult(result);
        } else {
          const first = state.results[0];
          if (first) openResult(first);
        }
        return;
      }
      if (event.key === "Escape") {
        input.value = "";
        closeResults();
        input.blur();
      }
    });
    document.addEventListener("pointerdown", (event) => {
      if (!shell.contains(event.target)) closeResults();
    });
  }

  function installShortcuts() {
    const overlay = $("#shortcutOverlay");
    const close = $("#shortcutCloseButton");
    const input = $("#globalSearchInput");
    const show = () => {
      if (!overlay) return;
      overlay.hidden = false;
      close?.focus();
    };
    const hide = () => {
      if (overlay) overlay.hidden = true;
    };
    close?.addEventListener("click", hide);
    overlay?.addEventListener("click", (event) => {
      if (event.target === overlay) hide();
    });
    document.addEventListener("keydown", (event) => {
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        input?.focus();
        input?.select();
      }
      if (event.key === "?" && !event.ctrlKey && !event.metaKey && !event.altKey && !/INPUT|TEXTAREA|SELECT/.test(event.target?.tagName || "")) {
        event.preventDefault();
        show();
      }
      if (event.key === "Escape" && !overlay?.hidden) hide();
    });
    window.AniipediaUI = Object.freeze({ showToast });
  }

  function enhanceContextTitle() {
    const title = $("#contextTitle");
    if (!title) return;
    const update = () => {
      const active = document.querySelector(".workspace-tab[aria-selected=\"true\"]");
      const view = active?.dataset.workspaceView;
      const mapNames = { map: "Bản đồ thế giới", tracking: "Theo dõi hồi sinh", checklist: "Checklist tiến độ", aniilog: "Aniilog — Bách khoa Aniimo", itemlog: "Kho vật phẩm", team: "Đội hình / Team Lab" };
      if (view && mapNames[view]) title.textContent = mapNames[view];
    };
    update();
    const observer = new MutationObserver(update);
    observer.observe($("#workspaceTabs"), { subtree: true, attributes: true, attributeFilter: ["aria-selected"] });
  }

  document.addEventListener("DOMContentLoaded", () => {
    installGlobalSearch();
    installShortcuts();
    enhanceContextTitle();
  });
})();
