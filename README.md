# Aniimo Atlas VN — Full Interactive Edition

Bản giao diện tiếng Việt của MinMax's Aniipedia, giữ nguyên engine bản đồ, schema dữ liệu, marker, tiles và assets của source gốc; phần giao diện được thiết kế lại theo phong cách Aniimo Atlas VN.

## Đã giữ nguyên từ source gốc

- 4 bản đồ: Breezy Plains, Whisperwake Isles, Astra, The Lost Islets.
- Pan/drag, zoom, fit, pinch zoom, canvas marker mode và hit-test marker.
- Marker DOM + Canvas, tooltip, tọa độ con trỏ và chọn marker.
- Underground map, chuyển khu vực underground và boundary/overlay.
- Filter/layer, select all/reset, lọc theo search, grouped marker controls.
- Tracking/respawn timers lưu trên trình duyệt.
- Checklist, Aniilog, Item-log và Team Builder.
- Chia sẻ các ghim qua share service cấu hình sẵn trong `app-config.js`.
- GitHub Pages/static hosting, không cần build step.

## Thay đổi giao diện Aniimo Atlas VN

- Giao diện mặc định tiếng Việt.
- Bộ lọc hiển thị bằng thẻ trực quan có hình ảnh + số lượng.
- Các lớp marker mặc định **không bật**; người chơi tự bật lớp cần xem.
- Khi chọn marker, panel chi tiết hiển thị artwork lớn, tên, hình thái, loại, khu vực, vùng, tọa độ và mô tả nếu dataset có.
- Thẻ bản đồ có thumbnail và số lượng marker.
- Giữ toàn bộ `data/` và `assets/` của source gốc; không migrate sang schema mới.

## Chạy local

Từ thư mục này:

```powershell
python -m http.server 5173
```

Mở:

```text
http://127.0.0.1:5173/
```

## GitHub Desktop

Clone repository bằng GitHub Desktop, giải nén toàn bộ gói vào thư mục repository, commit rồi Push origin. Có thể publish trực tiếp từ branch `main`/`/(root)` hoặc dùng workflow có sẵn trong `.github/`.

## Nguồn dữ liệu

Dữ liệu map, marker, tiles và assets được giữ nguyên từ source MinMax-Aniipedia mà bản này được xây dựng dựa trên. Phần giao diện tiếng Việt là lớp tùy biến của Aniimo Atlas VN.

Xem `NOTICE.md` để biết thông tin nguồn và ghi công.
