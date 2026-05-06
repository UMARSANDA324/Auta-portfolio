import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from '../assets/images/auta.jpg';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/', hash: '#home' },
    { name: 'Properties', path: '/properties', hash: '#properties' },
    { name: 'About', path: '/about', hash: '#about' },
    { name: 'Contact', path: '/contact', hash: '#contact' }
  ];

  const handleNavClick = (e, path, hash) => {
    if (location.pathname === '/') {
      e.preventDefault();
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsOpen(false);
  };

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <Link to="/" className="navbar-logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <img 
            src={logo} 
            alt="Auta Tajiri Logo" 
            className="logo-img" 
            style={{ height: '40px', width: '40px', borderRadius: '50%', objectFit: 'cover' }} 
          />
          <span>Auta <span className="text-gold">Tajiri</span></span>
        </Link>

        {/* Desktop Menu */}
        <div className="navbar-links desktop-only">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path}
              className={isActive(link.path) ? 'active' : ''}
              onClick={(e) => handleNavClick(e, link.path, link.hash)}
            >
              {link.name}
            </Link>
          ))}
          <a 
            href="https://wa.me/2349036389642?text=Hello,%20I%E2%80%99m%20interested%20in%20your%20properties" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn btn-primary"
          >
            Contact on WhatsApp
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="mobile-toggle mobile-only" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="mobile-menu">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path}
              className={isActive(link.path) ? 'active' : ''}
              onClick={(e) => handleNavClick(e, link.path, link.hash)}
            >
              {link.name}
            </Link>
          ))}
          <a 
            href="https://wa.me/2349036389642?text=Hello,%20I%E2%80%99m%20interested%20in%20your%20properties" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn btn-primary"
            style={{marginTop: '1rem'}}
            onClick={() => setIsOpen(false)}
          >
            Contact on WhatsApp
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
