import BrideGroom from '../components/BrideGroom'
import EventInfo from '../components/EventInfo'
import Countdown from '../components/Countdown'
import Gallery from '../components/Gallery'
import { useMusic } from '@hooks/useMusic'
import FlowerAnimation from '@components/ui/FlowerAnimation'

// Import cấu hình dữ liệu
import { weddingData } from '@/wedding.config';

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

        <footer className="footer">
          <p>{weddingData.footerMessage}</p>
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