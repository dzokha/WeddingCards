
import { useEffect, useRef, useState } from 'react';

/**
 * Hook quản lý phát nhạc trong thiệp cưới
 * @param src Đường dẫn file nhạc (ví dụ: "/tenderness.mp3" hoặc import từ assets)
 * @param autoplay Có tự động phát nhạc khi load không (default = false)
 */
export function useMusic(src: string | undefined, autoplay: boolean = false) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (!src) return;

    // Xử lý đường dẫn: nếu src bắt đầu bằng "/" thì giữ nguyên, ngược lại thêm BASE_URL
    const audioSrc = src.startsWith("/")
      ? src
      : import.meta.env.BASE_URL + src;

    const audio = new Audio(audioSrc);
    audio.loop = true; // lặp nhạc
    audioRef.current = audio;

    if (autoplay) {
      audio.play()
        .then(() => setIsPlaying(true))
        .catch(err => {
          console.warn("Autoplay bị chặn:", err);
          setIsPlaying(false);
        });
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.src = ""; // giải phóng bộ nhớ
        audioRef.current = null;
      }
      setIsPlaying(false);
    };
  }, [src, autoplay]);

  const toggle = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.play()
        .then(() => setIsPlaying(true))
        .catch(err => {
          console.error("Không phát được nhạc:", err);
          setIsPlaying(false);
        });
    }
  };

  return { toggle, isPlaying };
}