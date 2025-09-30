
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCoupleBySlug } from '@services/coupleService'; 

import NotFound from '@pages/NotFound';

import WeddingCardLayout from '@core/layouts/WeddingCardLayout';
import HeadCouplePage from '@core/components/wedding/HeadCouplePage';
import BrideGroom from '@core/components/wedding/BrideGroom';
import Countdown from '@core/components/wedding/Countdown';
import EventInfo from '@core/components/wedding/EventInfo';
import Gallery from '@core/components/wedding/Gallery';
import PlayMusic from '@core/components/ui/PlayMusic'; 
import MapGoogle from '@core/components/ui/MapGoogle'; 
import FlowerAnimation from '@core/components/ui/FlowerAnimation';
import { useAnalytics } from '@core/hooks/useAnalytics';


const WeddingCard: React.FC = () => {

  const { slug } = useParams<{ slug: string }>();
  const [data, setData] = useState<any /* CoupleData */ | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {

    if (!slug) {
      setData(null); 
      setIsLoading(false);
      return;
    }

    const loadWeddingCard = async () => {
      try {
        setIsLoading(true);
        setError(null);
        
        const coupleData = await fetchCoupleBySlug(slug);

        if (coupleData) {
          setData(coupleData);
        } else {
          setData(null);
        }
      } catch (err) {
        console.error("Lỗi từ service:", err);
        setData(null);
      } finally {
        setIsLoading(false);
      }
    };

    loadWeddingCard();
  }, [slug]);


  useAnalytics(slug);


  if (isLoading) return <div>Đang tải thiệp...</div>;
  if (error) return <div>{error}</div>;
  if (!data) return <NotFound />;
  
  return (
    <WeddingCardLayout themeClass={`theme-${data.slug}`}>
      {/*<div className="wedding-card">*/}
      <FlowerAnimation count={25}/>
      <HeadCouplePage data={data}/>

      {/* Shape Divider */}
      <div className="shape-divider"></div>

      <main className="content-wrapper">

        <h2 className="section-title">HAPPY WEDDING</h2>
        <BrideGroom data={data} />
        <EventInfo data={data} />
        <Countdown targetDate={data.countdownTargetDate} />
        <Gallery items={data.gallery || []} />
        <MapGoogle mapUrl={data.mapUrl} />
        
        <footer className="footer">
          <p className="footer-message">
              {data.footerMessage}
          </p>
        </footer>
      </main>
      <PlayMusic musicUrl={data.music} />
    {/*</div>*/}
    </WeddingCardLayout>
  );
};

export default WeddingCard;