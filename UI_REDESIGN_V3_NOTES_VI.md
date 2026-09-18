# Aniipedia UI Redesign v0.5.40

## Phạm vi

Bản này được tái thiết kế trực tiếp từ cấu trúc dự án gốc, ưu tiên bảo toàn toàn bộ logic và dữ liệu hiện có.

### Giữ nguyên
- Bản đồ tương tác, zoom/pan, ghim, bộ lọc, tìm kiếm, khu vực ngầm.
- Chia sẻ các ghim hiện tại.
- Theo dõi hồi sinh và bộ đếm thời gian.
- Checklist và tìm kiếm checklist.
- Aniilog, bộ lọc Aniimo, tiến hóa/hình thái, kỹ năng, chỉ số, nghiên cứu và các chi tiết catalogue.
- Item-log, danh mục vật phẩm, lọc/phân loại, công thức, shop, production, expedition và các chi tiết liên quan.
- Settings, theme, language và changelog.
- Toàn bộ JSON dữ liệu gốc.

### Loại bỏ
- Mục giao diện **Đội hình**.
- Team Builder không còn được mount/hiển thị.
- Workspace navigation không còn cho phép chuyển sang `team`, kể cả qua URL cũ.

## UX/UI mới

- Sidebar lớn hơn, phù hợp màn hình 1080p/1440p.
- Header thương hiệu dùng artwork bản đồ thật của dự án.
- Điều hướng workspace chuyển sang các card hình ảnh lớn.
- Map trở thành canvas trung tâm, với toolbar/readout dạng floating glass.
- Search, filter và controls tăng kích thước, giảm mật độ.
- Catalogue dùng card, visual index và hierarchy rõ hơn.
- Typography thống nhất cho tiếng Việt với Be Vietnam Pro + fallback hệ thống.
- Responsive riêng cho desktop/tablet/mobile.
