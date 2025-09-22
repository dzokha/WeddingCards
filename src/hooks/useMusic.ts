// src/hooks/useMusic.ts
import { useRef, useState, useEffect } from 'react'

export function useMusic(src: string) {
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)

  useEffect(() => {
    // prepend base path /WeddingCards nếu bạn deploy dưới subpath
    const audioSrc = import.meta.env.BASE_URL + src
    audioRef.current = new Audio(audioSrc)
    audioRef.current.loop = true
    audioRef.current.volume = 0.5

    return () => {
      audioRef.current?.pause()
      audioRef.current = null
    }
  }, [src])

  const toggle = () => {
    if (!audioRef.current) return

    if (isPlaying) {
      audioRef.current.pause()
    } else {
      audioRef.current.play().catch((err) => console.error('Audio play failed:', err))
    }

    setIsPlaying(!isPlaying)
  }

  return { toggle, isPlaying }
}
