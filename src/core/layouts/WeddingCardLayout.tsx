
import Footer from './Footer';

interface Props { children: React.ReactNode; themeClass?: string; }

const WeddingCardLayout: React.FC<Props> = ({ children, themeClass }) => {
  return (
    <div className={`wc-layout ${themeClass || ''}`}>
      {children}
      <Footer />
    </div>
  );
};

export default WeddingCardLayout;
