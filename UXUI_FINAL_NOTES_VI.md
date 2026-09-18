# Aniipedia — UX/UI final pass v0.5.42

Bản này được dựng trực tiếp trên bộ `index.html`, `app.js`, `styles.css` người dùng gửi ở phiên làm việc này và giữ nguyên DOM/ID mà JavaScript đang sử dụng.

## Đã sửa
- Loại bỏ xung đột giữa nhiều lớp `redesign*.css`; chỉ còn một lớp `uxui-final.css` ở cuối để kiểm soát cascade.
- Sửa lỗi bố cục mobile bị rơi về hai cột khiến thanh bên chiếm gần toàn chiều ngang và bản đồ chỉ còn một dải nhỏ.
- Làm sidebar mobile thành drawer đáy toàn chiều rộng, có cuộn độc lập và không gây overflow ngang.
- Tạo hierarchy rõ: Hero → Khu vực → Tìm kiếm/Bộ lọc → Danh sách.
- Tăng kích thước vùng bấm và typography, giữ font Be Vietnam Pro cho UI tiếng Việt.
- Làm mới card điều hướng bằng asset hình ảnh thực của dự án.
- Giữ nguyên workspace người dùng: Bản đồ, Theo dõi, Checklist, Aniilog, Vật phẩm.
- Ẩn hoàn toàn Đội hình khỏi trải nghiệm người dùng nhưng không xoá các ID/contract mà app.js đang tham chiếu.
- Giữ nguyên các nguồn dữ liệu map/checklist/itemlog/aniilog và các chức năng điều khiển map/catalog.

## Kiểm tra
- `node --check`: app.js, team-builder.js, localization.js đều hợp lệ.
- JSON hợp lệ: map_site_data, checklist_data, itemlog_data, aniilog_data.
- Không có duplicate HTML id.
- Chỉ còn một stylesheet redesign cuối: `uxui-final.css`.
