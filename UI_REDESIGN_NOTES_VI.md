# Aniipedia — Ghi chú bản tái thiết kế UI/UX

## Mục tiêu
- Chuyển ngôn ngữ giao diện website sang tiếng Việt mặc định.
- Giữ nguyên cấu trúc dữ liệu, bản đồ, Aniilog, Item-log, Checklist và Team Builder.
- Làm rõ phân cấp thông tin và tách vùng cuộn của từng workspace.
- Chuẩn hóa typography, trạng thái hover/focus, nút, thẻ, bộ lọc và panel.
- Cải thiện responsive để mobile vẫn giữ mô hình bản đồ + khu vực điều khiển bên dưới của dự án gốc.

## Tệp chính đã thay đổi
- `index.html`: Việt hóa nội dung nền, bổ sung font Be Vietnam Pro và stylesheet redesign.
- `redesign.css`: lớp giao diện mới, không thay đổi logic ứng dụng.
- `localization.js`: bổ sung locale `vi` và các quy tắc hiển thị/đếm cơ bản.
- `data/i18n/vi.json`: bộ chữ giao diện tiếng Việt.
- `app.js`: mặc định locale `vi`, tăng version UI lên `v0.5.38`.

## Ghi chú
Các tên riêng, tên Aniimo, tên khu vực và nội dung game không có bản dịch chính thức được giữ nguyên để tránh dịch sai dữ liệu nguồn.
