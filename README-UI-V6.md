# Aniimo Atlas VN — Glass UI v6

Bản UI v6 giữ nguyên `data/`, `assets/`, map engine và các module chức năng của source MinMax-Aniipedia; chỉ thay lớp trình bày/UX và bổ sung theme sáng.

## Thay đổi
- Glassmorphism đồng nhất cho shell, workspace, catalog, modal và map controls.
- Dark mode + Light mode, lưu lựa chọn bằng localStorage.
- Nút ☾/☀ trên header để chuyển nhanh giữa tối/sáng.
- Aniilog hiển thị toàn bộ 227 form entries với artwork và panel chi tiết.
- Kho đồ hiển thị toàn bộ 2.543 item entries với artwork, quality, acquisition, crafting, pack, shop và liên kết liên quan.
- Chuẩn hóa đường dẫn icon local `assets/...` để chạy ổn định khi deploy dưới GitHub Pages.
- Item-log được preload khi mở tab để không hiện trạng thái trống do lazy-load chậm.
- Catalog list không còn virtual scroll phụ thuộc vào kích thước panel; toàn bộ trang cuộn tự nhiên, giảm lỗi cuộn/không hiện item.
- Mobile dùng một vùng cuộn chính, tránh nested scroll trap.
