
import { Link } from 'react-router-dom';
const Footer = () => (
  <footer className="home-footer">
    <div className="container">
        <p className="home-footer-copyright">
          &copy; {new Date().getFullYear()}{" "}
          <Link to='/'>WeddingCards. </Link>
          All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;


