import React from 'react';
import '@styles/mapgoogle.scss'

// Định nghĩa props cho component bằng TypeScript
interface MapGoogleProps {
  /**
   * URL nhúng (embed URL) từ Google Maps.
   * Ví dụ: "https://www.google.com/maps/embed?pb=..."
   */
  mapUrl?: string;
  /**
   * Tiêu đề cho section, có thể tùy chỉnh.
   */
  title?: string;
}

const MapGoogle: React.FC<MapGoogleProps> = ({ 
  mapUrl, 
  title = "Địa Điểm Tổ Chức" // Giá trị mặc định cho tiêu đề
}) => {
  // Nếu không có mapUrl, component sẽ không được render ra
  // Điều này giúp tránh hiển thị một iframe trống hoặc bị lỗi
  if (!mapUrl) {
    return null;
  }

  return (
    <section className="map-section">
      <h2 className="section-title">
        <span role="img" aria-label="map" style={{ marginRight: '0.5rem' }}>📍</span>
        {title}
      </h2>
      <div className="map-container">
        <iframe
          title={title}
          src={mapUrl} // <-- Sử dụng prop được truyền vào
          width="100%"
          height="450"
          style={{ border: 0, borderRadius: '16px' }} // Thêm bo góc cho đẹp hơn
          allowFullScreen={false} // Khuyến nghị để false vì ít khi cần full-screen
          loading="lazy" // Tải ảnh sau khi các nội dung khác đã tải xong
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
};

export default MapGoogle;