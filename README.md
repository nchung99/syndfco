# SyndFCO Game Portal V13 — Assets Ready

Bản này đã tách ảnh / banner / video ra thành thư mục cố định để về sau chỉ cần ghi đè file là xong.

## Cấu trúc

```text
assets/
├── images/
│   ├── games/
│   │   ├── game-1.webp
│   │   ├── game-2.webp
│   │   ├── game-3.webp
│   │   └── game-4.webp
│   ├── hero/
│   │   ├── hero-1.webp
│   │   ├── hero-2.webp
│   │   └── hero-3.webp
│   ├── news/
│   │   └── news-1.webp
│   └── logo/
│       └── favicon.png
└── videos/
    ├── trailer-1.mp4
    ├── trailer-2.mp4
    ├── trailer-3.mp4
    └── trailer-4.mp4

data/
└── games.js
```

## Thay ảnh mà không sửa code

Ví dụ muốn đổi ảnh game số 1:
1. Chuẩn bị ảnh mới.
2. Xuất WebP.
3. Đổi tên thành `game-1.webp`.
4. Ghi đè `assets/images/games/game-1.webp`.

Hero / news / video cũng tương tự. Chỉ cần giữ nguyên tên file.

## Tỷ lệ khuyên dùng
- `games/game-*.webp`: 4:5, ví dụ 800×1000.
- `hero/hero-*.webp`: 16:9, ví dụ 1920×1080.
- `news/news-1.webp`: 16:9, ví dụ 1280×720.
- `videos/trailer-*.mp4`: 16:9, H.264 MP4 là dễ dùng nhất.

## Đổi link game
Mở `data/games.js`, thay `link: "#"` bằng URL thật. Đây là nơi duy nhất cần sửa khi đổi link mũi tên game.

## Lưu ý
Ảnh/video hiện trong V13 là asset tạm để project chạy local hoàn toàn. Khi có bộ asset chính thức, chỉ việc ghi đè đúng file là xong.


## Ảnh Tin tức / Sự kiện
Bây giờ toàn bộ 4 ảnh trong mục **TIN TỨC & SỰ KIỆN** đều thay trực tiếp bằng file:

- `assets/images/news/news-1.webp` → ảnh tin lớn bên trái
- `assets/images/news/news-2.webp` → tin nhỏ số 1
- `assets/images/news/news-3.webp` → tin nhỏ số 2
- `assets/images/news/news-4.webp` → tin nhỏ số 3

Chỉ cần giữ nguyên tên file và ghi đè ảnh mới. Không cần sửa HTML/CSS.
Gợi ý tỷ lệ: `news-1.webp` dùng 16:9; `news-2.webp` đến `news-4.webp` dùng 4:3 hoặc 16:9 đều ổn vì web dùng `background-size: cover`.
