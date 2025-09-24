import '@styles/base.css'
import '@styles/animation.css'
import { useMusic } from '@hooks/useMusic'
import FlowerAnimation from '@components/FlowerAnimation'


export default function WeddingCard() {
  const { toggle, isPlaying } = useMusic('tenderness.mp3') // chỉ cần tên file, hook sẽ tự prepend base

  // Hình ảnh placeholder, bạn thay bằng hình thực tế
  const images = [
    'https://via.placeholder.com/300x400?text=Cô+Dâu',
    'https://via.placeholder.com/300x400?text=Chú+Rể',
    'https://via.placeholder.com/600x200?text=Background+Header',
  ]

  return (
    <div className="wedding-card">
      {/* Background Header */}
      <div className="header-img">
        <img src={images[2]} alt="Background Header" />
      </div>

      {/* Thông tin cặp đôi */}
      <div className="couple-section">
        <div className="couple-image">
          <img src={images[0]} alt="Cô Dâu" />
        </div>
        <div className="vs-text">❤️</div>
        <div className="couple-image">
          <img src={images[1]} alt="Chú Rể" />
        </div>
      </div>

      {/* Thông tin ngày giờ */}
      <div className="info-text">
        <h1>Minh Hải & Kim Trang</h1>
        <h2>12/10/2025 nhằm ngày 21/8/2025</h2>
        <p>Trân trọng kính mời quý khách đến chung vui</p>
      </div>

      {/* Nút nhạc */}
      <button onClick={toggle}>
        {isPlaying ? 'Pause Music' : 'Play Music'}
      </button>

      {/* Hoa rơi */}
      <FlowerAnimation count={30} /> {/* Tùy chỉnh số lượng hoa rơi */}
    </div>
  )
}
