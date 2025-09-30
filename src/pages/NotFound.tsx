
import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Facebook } from 'lucide-react'; 

import '@styles/notfound.scss';

const NotFound: React.FC = () => {
  return (
    <div className="not-found-page container text-center">
      
      <h1 className="error-code">404</h1>
      <h2 className="error-title">Xin lỗi, chúng tôi lạc mất trang này!</h2>
      
      <p className="error-message">
        Có vẻ như đường dẫn bạn tìm kiếm đã bị gỡ bỏ, đổi tên, hoặc có thể bạn đã gõ nhầm địa chỉ. 
        Đừng lo, mọi con đường đều dẫn đến tình yêu!
      </p>

      <div className="suggestion-actions">
        <Link to="/" className="btn btn-primary large-btn">
          <Home size={18} className="icon-left" /> Trở về Trang Chủ
        </Link>
        
{/*        <Link to="/" className="btn btn-secondary">
          <Heart size={18} className="icon-left" /> Khám phá Mẫu Thiệp
        </Link>*/}
      </div>
      
      <div className="support-info">
        <p>
          Nếu bạn tin rằng đây là một lỗi, vui lòng liên hệ với chúng tôi:
        </p>
        <p className="contact-link">
          <Facebook size={16} className="icon-left" /> 
          <a href="https://www.facebook.com/dzokha">facebook.com/dzokha</a>
        </p>
      </div>
      
      <div className="brand-footer">
        <img 
          src="/weddingcards.png" 
          alt="WeddingCards Logo" 
          className="logo-img" 
        />
        <p className="brand-text">WEDDINGCARDS</p>
      </div> 
      
    </div>
  );
};

export default NotFound;