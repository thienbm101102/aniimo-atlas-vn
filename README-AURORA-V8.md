# Aniimo Atlas VN — Aurora UI v8

Bản này giữ nguyên engine JavaScript, `data/` và `assets/` của source MinMax-Aniipedia; chỉ thêm một presentation layer `atlas-vn-ui.css` và Việt hóa shell giao diện.

Mục tiêu UI:
- Map-first trên desktop và mobile.
- Sidebar có một luồng cuộn chính, tránh scroll lồng làm mất wheel.
- Không dùng sticky header bên trong sidebar, tránh chồng lớp.
- Layer cards, map cards và workspace tabs đồng bộ visual.
- Settings tách biệt, đóng/mở đúng theo `[hidden]`.
- Changelog cũ không còn xuất hiện trong UI.
