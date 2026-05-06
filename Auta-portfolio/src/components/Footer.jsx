import { Link } from 'react-router-dom';
import { Building2, Mail, Phone, MapPin } from 'lucide-react';
import logo from '../assets/images/auta.jpg';
import './Footer.css';

const FacebookIcon = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);

const InstagramIcon = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid grid grid-cols-3 md:grid-cols-1 gap-8">
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              <img src={logo} alt="Auta Tajiri Logo" className="logo-img" style={{ height: '30px', width: 'auto' }} />
              <span>Auta <span className="text-gold">Tajiri</span></span>
            </Link>
            <p className="footer-description">
              Building Trust Through Property Excellence. With over 10 years of experience, we make your dream property a reality in Kano and across Nigeria.
            </p>
            <div className="footer-socials">
              <a href="https://www.facebook.com/profile.php?id=100091379536015" target="_blank" rel="noopener noreferrer">
                <FacebookIcon size={20} />
              </a>
              <a href="https://www.instagram.com/abdulshahid703" target="_blank" rel="noopener noreferrer">
                <InstagramIcon size={20} />
              </a>
            </div>
          </div>

          <div className="footer-links-group">
            <h4 className="footer-heading">Quick Links</h4>
            <div className="footer-links">
              <Link to="/">Home</Link>
              <Link to="/properties">Properties</Link>
              <Link to="/about">About Us</Link>
              <Link to="/contact">Contact</Link>
            </div>
          </div>

          <div className="footer-contact">
            <h4 className="footer-heading">Contact Info</h4>
            <div className="contact-item">
              <MapPin size={20} className="text-gold" />
              <span>Gwale, Tarauni, Dala - Kano, Nigeria</span>
            </div>
            <div className="contact-item">
              <Phone size={20} className="text-gold" />
              <span>+234 903 638 9642</span>
            </div>
            <div className="contact-item">
              <Mail size={20} className="text-gold" />
              <span>abdulshahidabdullahi738@gmail.com</span>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Auta Tajiri Real Estate. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
