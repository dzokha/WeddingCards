# WeddingCards
## Run Locally
### 1. Chuẩn bị môi trường:
- Quản lý phiên bản Node.js với nvm: https://github.com/nvm-sh/nvm
- Node.js: `nvm install 22`
- Quản lý source code với Git: https://git-scm.com/downloads
### 2. Clone dự án từ Github: 
```bash
git clone https://github.com/dzokha/WeddingCards.git
cd WeddingCards
```
### 3. Cài dependencies 
```bash
npm install
```
### 4. Cấu hình biến môi trường:
- Tạo file .env.development ở thư mục gốc và thêm nội dung:
```bash
VITE_API_BASE_URL=http://localhost:5000/api
```
### 5. Chạy dư án trên môi trường phát triển 
```bash
npm run dev
```
### 5. Build bản Production 
```bash
npm run build
```
## References



