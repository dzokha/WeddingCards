import BrideGroom from '../components/BrideGroom'
import EventInfo from '../components/EventInfo'
import Countdown from '../components/Countdown'
import Gallery from '../components/Gallery'
import { useMusic } from '@hooks/useMusic'
import FlowerAnimation from '@components/ui/FlowerAnimation'

// Import ảnh (Vite xử lý và build đúng)
import CoDauImg from '../assets/codau.jpg'
import ChuReImg from '../assets/chure.jpg'
import BrideImg from '../assets/codau.jpg'
import GroomImg from '../assets/codau.jpg'
import HeaderBgImg from '../assets/codau.jpg'

export default function WeddingCard() {
  const { toggle, isPlaying } = useMusic('tenderness.mp3')

  return (
    <div className="wedding-card">
      {/* Header */}
      <header
        className="header h-60 flex flex-col items-center justify-center text-white"
        style={{
          backgroundImage: `url(${HeaderBgImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h1 className="text-4xl font-bold">Thiệp Cưới</h1>
        <h2 className="text-2xl">Minh Hải 💖 Kim Trang</h2>
      </header>

      {/* Bride & Groom */}
      <section className="bride-groom-section flex justify-center gap-10 my-10">
        <BrideGroom name="Bùi Mạnh Hải" role="Chú Rể" image={ChuReImg} />
        <BrideGroom name="Huỳnh Thị Kim Trang" role="Cô Dâu" image={CoDauImg} />
      </section>

      {/* Event Info */}
      <EventInfo
        date="12/10/2025 (Nhằm 21/8 Âm lịch)"
        time="11:00 sáng"
        location="Tư gia – Ấp Thắng Lợi, Xã Vĩnh Thạnh, TP. Cần Thơ"
      />

      {/* Countdown */}
      <Countdown targetDate="2025-10-12T10:00:00" />

      {/* Gallery */}
      <Gallery images={[BrideImg, GroomImg, HeaderBgImg, HeaderBgImg]} />

      {/* Music Button */}
      <div className="flex justify-center my-6">
        <button
          className="music-btn px-4 py-2 bg-pink-500 text-white rounded-lg shadow-lg"
          onClick={toggle}
        >
          {isPlaying ? "⏸ Tắt nhạc" : "▶️ Phát nhạc"}
        </button>
      </div>

      {/* Flower Animation */}
      <FlowerAnimation count={25} />

      {/* Footer */}
      <footer className="footer text-center py-6 text-gray-600">
        <p>Rất hân hạnh được đón tiếp quý khách!</p>
      </footer>
    </div>
  )
}
