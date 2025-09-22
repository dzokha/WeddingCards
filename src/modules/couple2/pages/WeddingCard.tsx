import '@styles/base.css'
import '@styles/animation.css'
import { useMusic } from '@hooks/useMusic'

export default function WeddingCard() {
  const { toggle, isPlaying } = useMusic('tenderness.mp3') // chỉ cần tên file, hook sẽ tự prepend base

  return (
    <div className="wedding-card">
      <h1>Couple 1 Wedding Card</h1>
      <button onClick={toggle}>
        {isPlaying ? 'Pause Music' : 'Play Music'}
      </button>
      <div className="flower-container"></div>
    </div>
  )
}
