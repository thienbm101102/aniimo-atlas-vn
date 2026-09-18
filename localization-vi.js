(() => {
  "use strict";
  const base = window.AniipediaI18n;
  if (!base) return;

  const VI = new Map(Object.entries({
    "Map": "Bản đồ",
    "Tracking": "Theo dõi",
    "Checklist": "Checklist",
    "Aniilog": "Aniilog",
    "Item-log": "Kho đồ",
    "Team": "Đội hình",
    "Settings": "Cài đặt",
    "Language": "Ngôn ngữ",
    "Search": "Tìm kiếm",
    "Name, area, coordinate": "Tên, khu vực, tọa độ",
    "Aniimo, form, or location": "Aniimo, hình thái hoặc khu vực",
    "All": "Bật tất cả",
    "Reset": "Tắt tất cả",
    "Share current pins": "Chia sẻ các ghim",
    "Share current pin": "Chia sẻ ghim hiện tại",
    "Filter": "Lớp hiển thị",
    "Filters": "Bộ lọc",
    "Fit": "Vừa bản đồ",
    "Area": "Khu vực",
    "All underground areas": "Tất cả khu vực ngầm",
    "Marker layers": "Các lớp đánh dấu",
    "Map shortcuts": "Phím tắt bản đồ",
    "Filter shortcuts": "Phím tắt bộ lọc",
    "Double-click a filter tab to select every result currently shown in that tab.": "Nhấp đúp vào một lớp để chọn toàn bộ kết quả đang hiển thị.",
    "Right-click a map icon to deselect that location and remove its pin.": "Nhấp chuột phải vào marker để bỏ chọn vị trí và xóa ghim.",
    "Select at least one pin": "Hãy chọn ít nhất một ghim",
    "Select at least one pin to create a link": "Hãy chọn ít nhất một ghim để tạo liên kết",
    "Creating short link…": "Đang tạo liên kết ngắn…",
    "Creating a 3-hour link…": "Đang tạo liên kết có hiệu lực 3 giờ…",
    "Pin link copied": "Đã sao chép liên kết ghim",
    "Could not copy pin link": "Không thể sao chép liên kết ghim",
    "Loading markers": "Đang tải marker",
    "Marker data unavailable": "Không tải được dữ liệu marker",
    "Loading": "Đang tải",
    "Load failed": "Tải dữ liệu thất bại",
    "No marker selected": "Chưa chọn marker",
    "Selection": "Chi tiết đã chọn",
    "Close selection": "Đóng chi tiết",
    "Minimize selection": "Thu gọn chi tiết",
    "Expand selection": "Mở rộng chi tiết",
    "Zoom out": "Thu nhỏ",
    "Zoom in": "Phóng to",
    "Fit": "Vừa bản đồ",
    "Show underground map": "Hiện bản đồ ngầm",
    "Switch underground area": "Đổi khu vực ngầm",
    "Items": "Vật phẩm",
    "Aniimo": "Aniimo",
    "Eggs": "Trứng",
    "Teleports": "Dịch chuyển",
    "Misc": "Khác",
    "Lumens": "Lumens",
    "Boss & Challenges": "Boss & Thử thách",
    "Chests & Exploration": "Rương & Khám phá",
    "Gathering": "Thu thập",
    "Animo": "Aniimo",
    "Breezy Plains": "Đồng cỏ Gió",
    "Whisperwake Isles": "Quần đảo Whisperwake",
    "The Lost Islets": "Quần đảo Thất Lạc",
    "Astra": "Astra",
    "Idyll": "Idyll",
    "Active": "Đang chọn",
    "Inactive": "Chưa chọn",
    "Enabled": "Đang bật",
    "Disabled": "Đang tắt",
    "Choose a base stat": "Chọn chỉ số cơ bản",
    "Base stat": "Chỉ số cơ bản",
    "Stat comparison": "So sánh chỉ số",
    "Value": "Giá trị",
    "Add": "Thêm",
    "Any": "Bất kỳ",
    "Any tier": "Mọi bậc",
    "Tier": "Bậc",
    "Level": "Cấp",
    "Source": "Nguồn",
    "How to obtain": "Cách nhận",
    "Item filter": "Lọc vật phẩm",
    "All filters": "Tất cả bộ lọc",
    "Featured filters": "Bộ lọc nổi bật",
    "Possible reward": "Phần thưởng có thể nhận",
    "No catalogue records are available": "Không có dữ liệu bộ sưu tập",
    "No ability data available": "Chưa có dữ liệu kỹ năng",
    "No combat skill data is currently available": "Hiện chưa có dữ liệu kỹ năng chiến đấu",
    "No Mobility skill is currently listed for this form": "Hình thái này hiện chưa có kỹ năng di chuyển",
    "No Homeland ability is listed for this form": "Hình thái này hiện chưa có kỹ năng Home",
    "No Trait is currently listed for this form": "Hình thái này hiện chưa có Trait",
    "No Ultimate ability is currently listed for this form": "Hình thái này hiện chưa có Ultimate",
    "No overworld location is currently confirmed for this form": "Hình thái này hiện chưa có vị trí ngoài thế giới được xác nhận",
    "Loading Team Builder…": "Đang tải Đội hình…",
    "Team overview": "Tổng quan đội hình",
    "Team Builder": "Xây dựng đội hình",
    "Main Aniimo": "Aniimo chính",
    "Core skill ally": "Đồng đội kỹ năng Core",
    "Empty slot": "Ô trống",
    "Choose an Aniimo": "Chọn Aniimo",
    "Choose a skill": "Chọn kỹ năng",
    "Active skill": "Kỹ năng chủ động",
    "Passive": "Bị động",
    "Active": "Chủ động",
    "Core skill": "Kỹ năng Core",
    "Switch-skill": "Kỹ năng chuyển đổi",
    "No switch-skill": "Không có kỹ năng chuyển đổi",
    "Carried item": "Vật phẩm mang theo",
    "No carried item": "Không có vật phẩm mang theo",
    "No rune": "Không có rune",
    "Main stat": "Chỉ số chính",
    "Secondary roll": "Thuộc tính phụ",
    "Minimum": "Tối thiểu",
    "Perfect": "Hoàn hảo",
    "Aniimo level": "Cấp Aniimo",
    "Training level": "Cấp huấn luyện",
    "Selected item": "Vật phẩm đã chọn",
    "Selected Aniimo": "Aniimo đã chọn",
    "Pack contents": "Nội dung gói",
    "Contains all listed items": "Bao gồm toàn bộ vật phẩm được liệt kê",
    "Choose one listed item": "Chọn một vật phẩm được liệt kê",
    "Choose one bundle": "Chọn một gói",
    "Randomly grants one result": "Ngẫu nhiên nhận một kết quả",
    "Known contents": "Nội dung đã biết",
    "Shop listings": "Danh sách cửa hàng",
    "Item Shop": "Cửa hàng vật phẩm",
    "Crafting & production": "Chế tạo & sản xuất",
    "Progression uses": "Dùng cho tiến trình",
    "Aniimo progression": "Tiến trình Aniimo",
    "Item crafting": "Chế tạo vật phẩm",
    "Home production": "Sản xuất tại nhà",
    "Document Pickups": "Tài liệu thu thập",
    "Document Pickup": "Tài liệu",
    "Lore & Research": "Cốt truyện & Nghiên cứu",
    "Collectibles": "Đồ sưu tầm",
    "Chests": "Rương",
    "Challenges": "Thử thách",
    "Activities": "Hoạt động",
    "Dig Spots": "Điểm đào",
    "Entrances": "Lối vào",
    "Locations & Services": "Địa điểm & Dịch vụ",
    "Other": "Khác",
    "Series": "Chuỗi",
    "Sanctums": "Thánh điện",
    "Branches": "Điểm nhánh",
    "Outposts": "Tiền đồn",
    "Nurture Sites": "Điểm nuôi dưỡng",
    "Vein Abundance Sites": "Điểm mạch khoáng",
    "Research topic": "Chủ đề nghiên cứu",
    "Research level rewards": "Phần thưởng cấp nghiên cứu",
    "Accessory slot": "Ô phụ kiện",
    "Unlock by obtaining": "Mở khóa khi nhận",
    "The Lost Islets": "Quần đảo Thất Lạc",
    "Settings sections": "Các mục cài đặt",
    "General Settings": "Cài đặt chung",
    "Themes": "Chủ đề",
    "Display language": "Ngôn ngữ hiển thị",
    "Game data and website interface": "Dữ liệu game và giao diện website",
    "Language changes apply after the page reloads.": "Thay đổi ngôn ngữ sẽ áp dụng sau khi tải lại trang.",
    "Website theme": "Chủ đề website",
    "Apply theme": "Áp dụng chủ đề",
    "Reset preview": "Đặt lại xem trước",
    "Custom": "Tùy chỉnh",
    "Live preview": "Xem trước trực tiếp",
    "Desktop position": "Vị trí trên desktop",
    "Desktop default state": "Trạng thái mặc định desktop",
    "Top left": "Góc trên trái",
    "Top right (recommended)": "Góc trên phải (khuyên dùng)",
    "Bottom left": "Góc dưới trái",
    "Bottom right": "Góc dưới phải",
    "Sidebar": "Thanh bên",
    "Expanded": "Mở rộng",
    "Minimized": "Thu gọn",
    "Current map": "Bản đồ hiện tại",
  }));

  const COUNT_REPLACEMENTS = [
    [/^(\d+) tracked$/, "$1 đang theo dõi"],
    [/^(\d+) markers$/, "$1 marker"],
    [/^(\d+) locations$/, "$1 vị trí"],
    [/^(\d+) documents?$/, "$1 tài liệu"],
    [/^(\d+) items$/, "$1 vật phẩm"],
    [/^(\d+) eggs$/, "$1 trứng"],
    [/^(\d+) teleports$/, "$1 điểm dịch chuyển"],
    [/^(\d+) misc$/, "$1 mục khác"],
    [/^Tier (\d+)$/, "Bậc $1"],
    [/^Level (\d+)$/, "Cấp $1"],
    [/^(\d+) research topics$/, "$1 chủ đề nghiên cứu"],
    [/^(\d+) total research points$/, "Tổng $1 điểm nghiên cứu"],
    [/^(\d+) Aniimo forms$/, "$1 hình thái Aniimo"],
    [/^(\d+) Aniimo$/, "$1 Aniimo"],

  ];

  const sourceLanguages = base.languages || {};
  const languages = Object.freeze({
    ...sourceLanguages,
    vi: { label: "Tiếng Việt", htmlLang: "vi" },
  });

  let locale = "vi";
  let observer = null;
  const registeredDisplay = new Map();

  const normalizeLocale = (value) => {
    const candidate = String(value || "").trim();
    return Object.hasOwn(languages, candidate) ? candidate : "vi";
  };

  function translateVi(value) {
    const source = String(value ?? "");
    if (!source) return source;
    const direct = registeredDisplay.get(source) || VI.get(source);
    if (direct) return direct;
    for (const [pattern, replacement] of COUNT_REPLACEMENTS) {
      if (pattern.test(source)) return source.replace(pattern, replacement);
    }
    const labeled = source.match(/^(Class|Type|Role|Element|Region|Area):\s*(.+)$/);
    if (labeled) {
      const labels = { Class: "Lớp", Type: "Loại", Role: "Vai trò", Element: "Nguyên tố", Region: "Khu vực", Area: "Vùng" };
      return `${labels[labeled[1]]}: ${translateVi(labeled[2])}`;
    }
    const composite = source.match(/^(.+?)\s·\s(.+)$/);
    if (composite) {
      const left = translateVi(composite[1]);
      const right = translateVi(composite[2]);
      if (left !== composite[1] || right !== composite[2]) return `${left} · ${right}`;
    }
    const spawnMeta = source.match(/^(\d+) spawns?(?: · (\d+) habitats?)?$/);
    if (spawnMeta) return `${spawnMeta[1]} điểm spawn${spawnMeta[2] ? ` · ${spawnMeta[2]} khu vực sinh sống` : ""}`;
    const range = source.match(/^(.+?)\s([+-]?\d+(?:\.\d+)?%?(?:–[+-]?\d+(?:\.\d+)?%?)?)$/);
    if (range) {
      const label = translateVi(range[1]);
      if (label !== range[1]) return `${label} ${range[2]}`;
    }
    return source;
  }

  function translateUid(uid, fallback = "") {
    const direct = registeredDisplay.get(String(fallback || ""));
    return direct || translateVi(fallback);
  }

  function translateAttributes(element) {
    if (!(element instanceof Element) || element.matches("[data-i18n-skip]")) return;
    for (const attribute of ["placeholder", "title", "aria-label"]) {
      const source = element.getAttribute(attribute);
      if (!source) continue;
      const translated = translateVi(source);
      if (translated !== source) element.setAttribute(attribute, translated);
    }
  }

  function translateTextNode(node) {
    const parent = node.parentElement;
    if (!parent || parent.closest("script,style,[data-i18n-skip]")) return;
    const source = node.nodeValue || "";
    const trimmed = source.trim();
    if (!trimmed) return;
    const translated = translateVi(trimmed);
    if (translated === trimmed) return;
    const start = source.indexOf(trimmed);
    node.nodeValue = `${source.slice(0, start)}${translated}${source.slice(start + trimmed.length)}`;
  }

  function translateTree(root = document.body) {
    if (locale !== "vi" || !root) return;
    if (root.nodeType === Node.TEXT_NODE) {
      translateTextNode(root);
      return;
    }
    if (!(root instanceof Element) && !(root instanceof DocumentFragment)) return;
    if (root instanceof Element) translateAttributes(root);
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    let node = walker.nextNode();
    while (node) {
      translateTextNode(node);
      node = walker.nextNode();
    }
    root.querySelectorAll?.("*").forEach(translateAttributes);
  }

  async function load(nextLocale) {
    locale = normalizeLocale(nextLocale);
    document.documentElement.lang = languages[locale].htmlLang;
    if (locale !== "vi") return base.load(locale);
  }

  function registerDisplay(localizations) {
    const additions = localizations?.vi;
    if (additions && typeof additions === "object") {
      Object.entries(additions).forEach(([source, target]) => {
        if (source && target) registeredDisplay.set(source, target);
      });
      translateTree(document.body);
      return;
    }
    if (locale !== "vi") base.registerDisplay(localizations);
  }

  function start() {
    if (locale !== "vi") return base.start();
    translateTree(document.body);
    observer?.disconnect();
    observer = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        if (mutation.type === "attributes" && mutation.target instanceof Element) translateAttributes(mutation.target);
        if (mutation.type === "characterData") translateTextNode(mutation.target);
        mutation.addedNodes.forEach(translateTree);
      }
    });
    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ["placeholder", "title", "aria-label"],
      characterData: true,
      childList: true,
      subtree: true,
    });
  }

  window.AniipediaI18n = Object.freeze({
    languages,
    load,
    normalizeLocale,
    registerDisplay,
    searchAlias: (value) => {
      const source = String(value ?? "");
      const translated = translateVi(source);
      return translated !== source ? `${source} ${translated}` : source;
    },
    start,
    translate: translateVi,
    translateUid,
    translateTree,
    get locale() { return locale; },
  });
})();
