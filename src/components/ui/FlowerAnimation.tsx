import { useEffect, useState } from 'react'
import '@styles/Animation.css'
import flowerImg from '@assets/images/flower.png' // Vite sẽ xử lý import hình ảnh

interface FlowerProps {
  count?: number // số lượng hoa
}

interface FlowerItem {
  id: number
  left: number
  delay: number
  duration: number
  size: number
}

export default function FlowerAnimation({ count = 20 }: FlowerProps) {
  const [flowers, setFlowers] = useState<FlowerItem[]>([])

  useEffect(() => {
    const items: FlowerItem[] = Array.from({ length: count }).map((_, idx) => ({
      id: idx,
      left: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 3 + Math.random() * 5,
      size: 20 + Math.random() * 20,
    }))
    setFlowers(items)
  }, [count])

  return (
    <div className="flower-container">
      {flowers.map((f) => (
        <div
          key={f.id}
          className="flower"
          style={{
            left: `${f.left}%`,
            animationDelay: `${f.delay}s`,
            animationDuration: `${f.duration}s`,
            width: `${f.size}px`,
            height: `${f.size}px`,
            backgroundImage: `url(${flowerImg})`, // import trực tiếp
          }}
        />
      ))}
    </div>
  )
}
