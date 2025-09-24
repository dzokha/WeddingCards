import { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

interface Image {
  src: string;
}

interface Props {
  images: Image[];
}

export default function Gallery({ images }: Props) {
  const [index, setIndex] = useState(-1);

  return (
    <section className="gallery">
      <h2 className="section-title">Khoảnh khắc đáng nhớ</h2>
      <div className="gallery-grid">
        {images.map((img, idx) => (
          <div key={idx} className="gallery-item" onClick={() => setIndex(idx)}>
            <img src={img.src} alt={`gallery-${idx}`} className="gallery-img" />
            <div className="gallery-overlay">
              <span>Xem ảnh</span>
            </div>
          </div>
        ))}
      </div>

      <Lightbox
        open={index >= 0}
        close={() => setIndex(-1)}
        slides={images}
        index={index}
      />
    </section>
  );
}