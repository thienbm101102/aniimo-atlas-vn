# Aniimo Atlas VN

Giao diện tiếng Việt mới dùng **trực tiếp cấu trúc dữ liệu và assets của MinMax-Aniipedia** mà không đổi schema trong `data/`.

## Dữ liệu được giữ nguyên
- `data/map_site_data.json`
- `data/maps/*.json`
- `data/catalog-index-v2.json`
- `data/aniilog_data.json`
- `data/itemlog_data.json`
- `data/checklist_data.json`
- `data/team_builder_mechanics.json`
- `data/i18n/*`
- toàn bộ `assets/`

## Chạy local
```text
python -m http.server 5173
```
Mở `http://127.0.0.1:5173/`.

## GitHub Pages
Upload toàn bộ nội dung thư mục này vào repository và bật Settings → Pages → Deploy from a branch → main → /(root).

## Giao diện mới
`index.html`, `app-vn.js`, `styles-vn.css` là lớp presentation mới. Dữ liệu và asset gốc không bị migrate sang schema khác.

## Tính năng
- Bản đồ đa vùng, pan/zoom, tọa độ, filter layer, marker click, ghim, export ghim.
- Aniimo browser dựa trên `aniilog_data.json`.
- Kho dữ liệu dựa trên `catalog-index-v2.json`.
- Checklist lưu localStorage.
- Chia sẻ link map và responsive mobile.

## Nguồn
Cấu trúc dữ liệu/assets được giữ từ MinMax-Aniipedia source được cung cấp trong yêu cầu. Aniimo Atlas VN là lớp giao diện cộng đồng mới, không phải website chính thức của Aniimo.
