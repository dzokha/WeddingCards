import React from 'react';
import { useMusic } from '@core/hooks/useMusic'
import '@styles/playmusic.scss'

// Định nghĩa props cho component, bao gồm URL của bài hát
interface PlayMusicProps {
  musicUrl?: string; // URL có thể không tồn tại, nên để optional
}

const PlayMusic: React.FC<PlayMusicProps> = ({ musicUrl }) => {
  // Hook useMusic giờ được gọi bên trong component này
  const { toggle, isPlaying } = useMusic(musicUrl, false);

  // Nếu không có URL nhạc, không hiển thị component
  if (!musicUrl) {
    return null;
  }

  return (
    <button className="music-btn" onClick={toggle} aria-label="Play or pause music">
      {isPlaying ? (
        // SVG Icon for Pause
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#FFFFFF">
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
        </svg>
      ) : (
        // SVG Icon for Play
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#FFFFFF">
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path d="M8 5v14l11-7L8 5z" />
        </svg>
      )}
    </button>
  );
};

export default PlayMusic;