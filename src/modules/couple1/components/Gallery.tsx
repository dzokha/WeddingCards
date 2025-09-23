import React from "react"

interface Props {
  images: string[]
}

export default function Gallery({ images }: Props) {
  return (
    <section className="gallery">
      <h2>Thư viện ảnh</h2>
      <div className="gallery-grid">
        {images.map((img, idx) => (
          <img key={idx} src={img} alt={`gallery-${idx}`} className="gallery-img" />
        ))}
      </div>
    </section>
  )
}
