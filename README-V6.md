# Aniimo Atlas VN — UI v6

## Mục tiêu
Giữ nguyên dataset, map engine và tính năng của MinMax-Aniipedia, nhưng dùng một giao diện Glassmorphism mới, ổn định trên desktop/mobile và có Light/Dark mode.

## Catalog
- Aniilog: 227 form entries, artwork local/external, evolution, stats, skills, spawn/location, progression/research và nút xem trên bản đồ.
- Kho đồ: 2.543 item entries, artwork, quality, nguồn nhận, crafting, pack, shop, progression, rune/carried effects và liên kết item.
- Local item/Aniimo artwork paths được chuẩn hóa với `./assets/...` khi chạy dưới GitHub Pages.
- Item-log được preload khi tab được chọn.

## Giao diện
- Glassmorphism: blur + translucent layers + subtle borders/shadows.
- Dark mode mặc định.
- Light mode song song; nút ☾/☀ trên header và lựa chọn trong Cài đặt.
- Mobile: một vùng cuộn chính, tránh nested scroll trap.

## Deploy
Không cần build step. Có thể deploy trực tiếp lên GitHub Pages từ branch `main` / root.
