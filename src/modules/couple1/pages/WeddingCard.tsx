import "../couple1.css";
import BrideGroom from '@components/BrideGroom'
import EventInfo from '@components/EventInfo'
import Countdown from '@components/Countdown'
import Gallery from '@components/Gallery'
import { useMusic } from '@hooks/useMusic'
import FlowerAnimation from '@components/FlowerAnimation'

// Import cấu hình dữ liệu
import { weddingData } from '@modules/couple1/wedding.config';

export default function WeddingCard() {
  const { toggle, isPlaying } = useMusic(weddingData.musicFile);

  return (
    <div className="wedding-card">
      <header className="header">
        <img src={weddingData.header.image} alt="Header Background" className="header-img" />
        <h1>{weddingData.header.title}</h1>
        <h2>{weddingData.header.subtitle}</h2>
      </header>

      

      {/* Shape Divider */}
      <div className="shape-divider"></div>

      <main className="content-wrapper">

        
        <h2 className="section-title">HAPPY WEDDING</h2>
        

        <section className="bride-groom-section">
          <BrideGroom name={weddingData.groom.name} role={weddingData.groom.role} image={weddingData.groom.image} />
          <BrideGroom name={weddingData.bride.name} role={weddingData.bride.role} image={weddingData.bride.image} />
        </section>

        <EventInfo
          date={weddingData.event.date}
          time={weddingData.event.time}
          location={weddingData.event.location}
        />

        <Countdown targetDate={weddingData.countdownTargetDate} />

        <Gallery images={weddingData.galleryImages} />

        {/*
          Thêm section Bản đồ vào đây
          Đặt section này trước footer để tuân thủ bố cục chung của trang
        */}
        <section className="map-section">
          <h2 className="section-title">
            <span role="img" aria-label="map">📍</span> Địa Điểm Tổ Chức
          </h2>
          <div className="map-container">
            <iframe 
                title="Địa Điểm Tổ Chức"
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3927.011403516329!2d105.41723097503355!3d10.179727989934971!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTDCsDEwJzQ3LjAiTiAxMDXCsDI1JzExLjMiRQ!5e0!3m2!1sen!2s!4v1758701390888!5m2!1sen!2s" 
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade">
              </iframe>
          </div>
        </section>
      

        <footer className="footer">
          <p className="footer-message">
            Rất hân hạnh được đón tiếp quý khách!
          </p>
        </footer>

      </main>

      {/* Music Button - Floating */}
      <button className="music-btn" onClick={toggle} aria-label="Play or pause music">
        {isPlaying ? 
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#FFFFFF"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg> :
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#FFFFFF"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M8 5v14l11-7L8 5z"/></svg>
        }
      </button>

      <FlowerAnimation count={25} />
    </div>
  );
}