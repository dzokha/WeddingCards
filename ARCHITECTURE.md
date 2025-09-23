# Kiến trúc Dự án WeddingCards

```
.
├── .github/                                # Cấu hình GitHub Actions (CI/CD)
│   └── workflows/
│       └── main.yml                        # Workflow để build và deploy lên Cloudflare Pages
├── public/                                 # Các file tĩnh không qua xử lý của Vite (favicon)
│   ├── CNAME
│   └── mucsic.mp3
├── src/
│   ├── assets/                             # Tài nguyên tĩnh của ứng dụng (hình ảnh, icons, font tùy chỉnh)
│   │   ├── fonts/
│   │   ├── images/
│   │   └── icons/
│   ├── components/
│   │   ├── ui/                             # Các UI component cơ bản, thuần túy (Button, Input, Modal, Table)                    
│   │   │   └── FlowerAnimation.tsx
│   │   └── layout/                         # Các component định hình bố cục trang (Header, Sidebar, Footer)
│   ├── hooks/                              # Custom hooks để tái sử dụng logic có stateful
│   │   └── useMusic.ts                     # Hook bật/tắt nhạc nền
│   ├── modules/
│   │   ├── couple1/                        # Thiep cua Hai - Trang
│   │   │   ├── assets/                    
│   │   │   │   └── codau.jpg
│   │   │   ├── components/                    
│   │   │   │   ├── BrideGroom.tsx
│   │   │   │   ├── Countdown.tsx
│   │   │   │   ├── EventInfo.tsx
│   │   │   │   └── Gallery.tsx
│   │   │   ├── pages/                    
│   │   │   │   └── WeddingCard.tsx
│   │   ├── couple2/                        # Thiep cua Client - Server
│   │   │   ├── assets/                    
│   │   │   │   └── codau.jpg
│   │   │   ├── components/                    
│   │   │   │   └── BrideGroom.tsx
│   │   │   ├── pages/                    
│   │   │   │   └── WeddingCard.tsx
│   ├── styles/                             # Các file CSS/SCSS
│   │   ├── base.css                        # Reset + CSS chung nhất
│   │   └── animation.css                   # Hiệu ứng hoa rơi
│   ├── App.tsx                             # Component gốc của ứng dụng
│   ├── main.tsx                            # Entry point của ứng dụng
│   ├── router.tsx                          # Định nghĩa tất cả các routes của ứng dụng
│   └── vite-env.d.ts                       # Type definitions cho biến môi trường Vite
├── .env.development                        # Biến môi trường cho môi trường phát triển (KHÔNG COMMIT)
├── .env.production                         # Biến môi trường cho môi trường production (KHÔNG COMMIT)
├── .gitignore                              # Danh sách các file/thư mục không đưa lên Git
├── eslint.config.js                        # Cấu hình ESLint
├── index.html
├── package.json                            # Thông tin dự án và dependencies
├── README.md                               # Tài liệu chính của dự án
├── tsconfig.app.json                       # Cấu hình TypeScript cho ứng dụng
├── tsconfig.json                           # Cấu hình TypeScript tổng thể
├── tsconfig.node.json                      # Cấu hình TypeScript cho môi trường Node.js
└── vite.config.ts                          # Cấu hình Vite

```