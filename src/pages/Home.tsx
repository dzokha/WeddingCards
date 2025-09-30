import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchAllCouples } from "@services/coupleService";
import type { CoupleData } from "@core/types";
import "@styles/base.scss";

const Home: React.FC = () => {
  const [couples, setCouples] = useState<CoupleData[]>([]);

  useEffect(() => {
    // Giả lập việc fetch data để thấy hiệu ứng loading (nếu có)
    const timer = setTimeout(() => {
      fetchAllCouples().then(setCouples);
    }, 500); // Thêm một chút delay để trải nghiệm mượt mà hơn
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="page-home">

      {/* ===== HERO BANNER - THIẾT KẾ MỚI ẤN TƯỢNG ===== */}
      <header className="home-hero">
        <div className="hero-overlay"></div>
        <div className="hero-content container">
          <h1 className="hero-title">WeddingCards</h1>
          <p className="hero-subtitle">Nơi mỗi tấm thiệp là một câu chuyện tình yêu được kể</p>
        </div>
      </header>

      {/* ===== COUPLES LIST SECTION - DANH SÁCH CẶP ĐÔI ===== */}
      <section className="couples-section">
        <div className="container">
          <h2 className="section-title-home">Những Câu Chuyện Tình Yêu</h2>

          <div className="couples-grid">
            {couples.map((couple, index) => (
              // Bọc mỗi card trong Link component để điều hướng
              <Link
                to={`/${couple.slug}`}
                key={couple.id}
                className="couple-card-link"
                // Thêm animation delay để các card xuất hiện lần lượt
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <article className="couple-card">
                  <div className="card-image-wrapper">
                    <img
                      src={couple.imageUrl}
                      alt={`Thiệp cưới của ${couple.groomName} và ${couple.brideName}`}
                      className="couple-image"
                      loading="lazy" // Tối ưu tải ảnh
                    />
                  </div>
                  <div className="card-content">
                    <h3 className="couple-names">
                      {couple.groomName} &amp; {couple.brideName}
                    </h3>
                    <p className="wedding-date">Chung vui ngày: {couple.weddingDate}</p>
                    <span className="view-card-btn">Xem Thiệp Cưới</span>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FOOTER - THIẾT KẾ MỚI SANG TRỌNG ===== */}
      <footer className="home-footer">
        <div className="container">
          <p className="home-footer-message">Thank you for visiting</p>
          <div className="home-footer-separator">❦</div>
          <p className="home-footer-copyright">
            &copy; {new Date().getFullYear()} <a href="https://www.facebook.com/dzokha" target="_blank" rel="noopener noreferrer">Dzokha</a>. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
};

export default Home;