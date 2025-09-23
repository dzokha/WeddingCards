import BrideGroom from "../components/BrideGroom"
import EventInfo from "../components/EventInfo"
import Countdown from "../components/Countdown"
import Gallery from "../components/Gallery"
import { useMusic } from '@hooks/useMusic'
import FlowerAnimation from '@components/ui/FlowerAnimation'

import "../assets/codau.jpg" // ví dụ asset, thay bằng ảnh thật

export default function WeddingCard() {
  const { toggle, isPlaying } = useMusic('tenderness.mp3')

  return (
    <div className="wedding-card">
      {/* Header */}
      <header className="header">
        <h1>Thiệp Cưới</h1>
        <h2>Minh Hải 💖 Kim Trang</h2>
      </header>

      {/* Bride & Groom */}
      <section className="bride-groom-section">
        <BrideGroom
          name="Nguyễn Minh Hải"
          role="Chú Rể"
          image="/src/modules/couple1/assets/chure.jpg"
        />
        <BrideGroom
          name="Trần Kim Trang"
          role="Cô Dâu"
          image="/src/modules/couple1/assets/codau.jpg"
        />
      </section>

      {/* Event Info */}
      <EventInfo
        date="12/10/2025 (Nhằm 21/8 Âm lịch)"
        time="10:00 sáng"
        location="Nhà hàng Hoa Sen, TP Pleiku, Gia Lai"
      />

      {/* Countdown */}
      <Countdown targetDate="2025-10-12T10:00:00" />

      {/* Gallery */}
      <Gallery
        images={[
          "/src/assets/images/bride.jpg",
          "/src/assets/images/groom.jpg",
          "/src/assets/images/header-bg.jpg",
        ]}
      />

      {/* Music Button */}
      <button className="music-btn" onClick={toggle}>
        {isPlaying ? "⏸ Tắt nhạc" : "▶️ Phát nhạc"}
      </button>

      {/* Flower Animation */}
      <FlowerAnimation count={25} />

      {/* Footer */}
      <footer className="footer">
        <p>Rất hân hạnh được đón tiếp quý khách!</p>
      </footer>
    </div>
  )
}
