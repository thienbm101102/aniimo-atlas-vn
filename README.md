# Aniimo Atlas VN — Final UI v4

Bản giao diện tiếng Việt được xây trên chính runtime/data/assets của MinMax-Aniipedia source mà người dùng cung cấp.

## Nguyên tắc
- Giữ nguyên schema dữ liệu map, spawn, catalog, checklist, Aniilog, Item-log và Team Builder.
- Giữ nguyên engine tương tác map: pan, zoom, pinch, marker hit testing, canvas mode, underground layer, share pins, tracking, checklist, catalog, team builder.
- Redesign toàn bộ lớp presentation bằng CSS mới; không phụ thuộc UI cũ.
- Bộ lớp marker mặc định không bật; người chơi tự chọn lớp.
- Bấm marker mở drawer chi tiết có artwork, thông tin và thao tác theo dõi.

## Chạy local
Khởi chạy một static server trong thư mục này, ví dụ:

```bash
python -m http.server 8000
```

Mở `http://127.0.0.1:8000/`.

## GitHub Pages
Push toàn bộ thư mục lên branch `main`, sau đó chọn:
Settings → Pages → Deploy from a branch → `main` → `/(root)`.
