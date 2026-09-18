# Aniimo Atlas VN — Constellation UI v7

Bản giao diện được redesign theo hướng map-first, floating command center và card-based catalogue.

## Nguyên tắc
- Giữ nguyên engine JavaScript của source MinMax-Aniipedia.
- Giữ nguyên toàn bộ `data/` và `assets/` của source.
- Chỉ thay presentation layer (`index.html`, `styles.css`) và metadata tĩnh.
- Các tính năng map, marker, filter, tracking, checklist, Aniilog, Item-log, Team Builder, settings, share pin và underground map tiếp tục dùng logic gốc.

## UI
- Map toàn màn hình là vùng trung tâm.
- Sidebar nổi, cuộn độc lập và ổn định.
- Map/Layer selectors dùng thẻ trực quan.
- Mobile dùng map-first và control sheet.
- Settings là modal độc lập, có scroll riêng.
- Changelog cũ của MinMax bị vô hiệu hóa ở UI VN để không gọi GitHub API.

## Deploy
Không cần build step. Có thể chạy static trực tiếp hoặc deploy GitHub Pages.
