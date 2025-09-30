# Kiến trúc Dự án WeddingCards

```
.
├── .github/                                # Cấu hình GitHub Actions (CI/CD)
│   └── workflows/
│       └── main.yml                        # Workflow để build và deploy lên Cloudflare Pages
├── public/                                 # Các file tĩnh không qua xử lý của Vite (favicon)
│   ├── CNAME
│   ├── robots.txt
│   ├── sitemap.xml
│   └── tenderness.mp3
├── scripts/                                # Các script tiện ích phục vụ build & deploy
│   ├── build-sitemap.ts				    # Tự động sinh sitemap từ routes & couples
│   ├── generate-couples.ts.                # Sinh dữ liệu mẫu cho các couple
│   ├── optimeize-images.ts.                # Nén & tối ưu hình ảnh trong themes/*
│   └── check-env.ts.                       # Kiểm tra biến môi trường trước khi build
├── src/
│   ├── app/  
│   │   ├── App.tsx
│   │   ├── main.tsx
│   │   └── router.tsx	
│   ├── assets/                             # Tài nguyên tĩnh của ứng dụng (hình ảnh, icons, font tùy chỉnh)
│   │   ├── fonts/
│   │   ├── images/
│   │   └── icons/
│   ├── core/							
│   │   ├── components/
│   │   │   ├── common/
│   │   │   │   └── Button.tsx
│   │   │   ├── wedding/
│   │   │   │   ├── BrideGroom/index.tsx
│   │   │   │   ├── Countdown/index.tsx
│   │   │   │   ├── EventInfo/index.tsx
│   │   │   │   └── Gallery/index.tsx
│   │   │   └── ui/
│   │   │       └── FlowerAnimation.tsx 
│   │   ├── hooks/
│   │   │   ├── useAnalytics.ts  
│   │   │   └── useMusic.ts  
│   │   ├── layout/	
│   │   │   ├── WeddingCardLayout.tsx
│   │   │   ├── Navbar.tsx
│   │   │   ├── SEO.tsx	
│   │   │   └── Footer.tsx
│   │   ├── types/							# Định nghĩa TypeScript cho cấu trúc dữ liệu cốt lõi
│   │   │   └── index.ts
│   │   └── index.tsx						# Barrel export cho toàn bộ core (dễ import ở ngoài)
│   ├── lib/								# Các hàm tiện ích thuần túy (formatDate, v.v.)
│   │   ├── sitemapGenerator.ts                     
│   │   └── utils.ts   
│   ├── pages/										
│   │   ├── Home.tsx                     	
│   │   ├── NotFound.tsx        
│   │   └── WeddingCard.tsx             	# Một trang duy nhất để render tất cả thiệp cưới
│   ├── services/          					# API layer (fetch couples, analytics)
│   │   └── coupleService.ts
│   ├── styles/                             # Các file CSS/SCSS
│   │   ├── animation.scss 
│   │   └── base.scss                        # Reset + CSS chung nhất
│   ├── themes/
│   │   ├── index.tsx						# Nơi đăng ký tất cả các theme
│   │   ├── couple1/                        # Thiep cua Hai - Trang
│   │   │   ├── assets/                     # Ảnh riêng couple1
│   │   │   ├── data.ts                 
│   │   │   └── style.scss 
│   │   └── couple2/                        # Thiep cua Client - Server
│   │       ├── assets/                     # Ảnh riêng couple1
│   │       ├── data.ts                 
│   │       ├── style.scss 
│   │       └── overrides/
│   │           └── Gallery/				# Ghi đè component Gallery mặc định
│   │               └── index.tsx         
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