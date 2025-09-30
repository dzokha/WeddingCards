import React from 'react';

interface GalleryItem { src: string; alt?: string; }
interface Props { items: GalleryItem[]; }

const GalleryOverride: React.FC<Props> = ({ items }) => {
  return (
    <div className="gallery-override">
      {items.map((it, i) => (
        <figure key={i}>
          <img src={it.src} alt={it.alt || `g-${i}`} />
          <figcaption>{it.alt || 'Photo'}</figcaption>
        </figure>
      ))}
    </div>
  );
};

export default GalleryOverride;
