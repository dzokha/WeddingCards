import '@styles/base.css'; // Import file CSS chung
import CoupleIMG from '@modules/couple1/assets/headbg.jpg'

// Định nghĩa kiểu dữ liệu cho mỗi cặp đôi để đảm bảo type-safety
interface Couple {
  id: number;
  slug: string; // Dùng để tạo URL duy nhất, ví dụ: /thiep/anh-tuan-thuy-linh
  groomName: string;
  brideName:string;
  weddingDate: string;
  imageUrl: string; // Đường dẫn đến ảnh đại diện của cặp đôi
}

// Dữ liệu mẫu - Sau này bạn sẽ thay thế bằng việc gọi API để lấy dữ liệu động
const sampleCouples: Couple[] = [
  {
    id: 1,
    slug: 'hai-trang',
    groomName: 'Mạnh Hải',
    brideName: 'Kim Trang',
    weddingDate: '12.10.2025',
    imageUrl: CoupleIMG,
  },
  {
    id: 2,
    slug: 'hai-trang',
    groomName: 'Mạnh Hải',
    brideName: 'Kim Trang',
    weddingDate: '12.10.2025',
    imageUrl: CoupleIMG,
  },
  {
    id: 3,
    slug: 'hai-trang',
    groomName: 'Mạnh Hải',
    brideName: 'Kim Trang',
    weddingDate: '12.10.2025',
    imageUrl: CoupleIMG,
  },
];

const HomePage: React.FC = () => {
  return (
    <>
      {/* ===== HERO SECTION - BANNER CHÍNH ===== */}
      <header className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">WeddingCards</h1>
          <p className="hero-subtitle">Nơi mỗi tấm thiệp là một câu chuyện tình yêu được kể</p>
        </div>
      </header>

      <main>
        {/* ===== COUPLES LIST SECTION - DANH SÁCH CÁC CẶP ĐÔI ===== */}
        <div className="content-wrapper">
          <h2 className="section-title">Những Câu Chuyện Tình Yêu</h2>

          <div className="couples-grid">
            {sampleCouples.map((couple) => (
              // Bọc mỗi card trong thẻ 'a' để có thể click vào toàn bộ card
              <a href={`/${couple.slug}`} key={couple.id} className="couple-card-link">
                <div className="couple-card">
                  <div className="card-image-wrapper">
                     <img src={couple.imageUrl} alt={`Thiệp cưới của ${couple.groomName} và ${couple.brideName}`} className="couple-image" />
                  </div>
                  <div className="card-content">
                    <h3 className="couple-names">
                      {couple.groomName} &amp; {couple.brideName}
                    </h3>
                    <p className="wedding-date">Chung vui ngày: {couple.weddingDate}</p>
                    <span className="view-card-btn">Xem Thiệp Cưới</span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </main>

      {/* ===== FOOTER ===== */}
      <footer className="footer">
         <p className="footer-message">Cảm ơn đã ghé thăm!</p>
         <p>&copy; {new Date().getFullYear()} Dzokha. All rights reserved.</p>
      </footer>

      {/* Nút chơi nhạc có thể giữ lại, vì nó là position fixed và không ảnh hưởng bố cục */}
      {/* <button className="music-btn">🎵</button> */}
    </>
  );
};

export default HomePage;