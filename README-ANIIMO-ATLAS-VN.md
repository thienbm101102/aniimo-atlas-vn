# Aniimo Atlas VN — Nebula UI v9

Bản giao diện tiếng Việt mới dựa trực tiếp trên source MinMax-Aniipedia được cung cấp.

## Giữ nguyên
- `data/` và `assets/` nguyên bản.
- `app.js`, `team-builder.js`, `localization.js`, `styles.css`, `app-config.js` của source gốc, ngoại trừ các thay đổi tối thiểu trong `app.js` để mặc định tiếng Việt, thêm thumbnail UI và tắt GitHub changelog.
- Engine map, pan/zoom/pinch, marker, filter, tracking, checklist, Aniilog, Kho đồ, Đội hình, Settings, underground map và share pins.

## Làm mới
- Một presentation layer duy nhất: `atlas-vn-ui.css`.
- Sidebar / map workspace / catalog sử dụng lại cấu trúc gốc để tránh lỗi regression.
- Map cards có thumbnail.
- Layer cards có artwork + trạng thái.
- Map-first layout, floating map controls và detail surfaces.
- Responsive desktop/mobile có scroll rõ ràng, không nested-scroll ở map workspace.
- UI mặc định Tiếng Việt.
- Changelog GitHub legacy không còn được gọi.

## Kiểm thử
- `data/`: byte/hash giống source gốc.
- `assets/`: byte/hash giống source gốc.
- JavaScript syntax: OK.
- JSON: OK.
- CSS parse: OK.
- Direct HTML resources: OK.

## GitHub Pages
Repository có thể publish trực tiếp từ `main` / root. Không cần build step.
