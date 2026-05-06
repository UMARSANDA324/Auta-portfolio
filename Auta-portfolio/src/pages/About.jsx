import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import ceoImage from '../assets/images/autaa.jpg';
import './About.css';

const About = () => {
  return (
    <div id="about" className="about-page fade-in">
      <div className="page-header">
        <div className="container">
          <h1 className="page-title">About <span className="text-gold">Auta Tajiri</span></h1>
          <p className="page-subtitle">A legacy of excellence, building dreams since childhood.</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-1 gap-16 items-center">
            <div className="about-image-wrapper relative">
              <img 
                src={ceoImage} 
                alt="Abdulshahid Abdullahi" 
                className="about-image"
              />
              <div className="founder-badge">
                <span className="founder-name">Abdulshahid Abdullahi</span>
                <span className="founder-title">CEO & Founder</span>
              </div>
            </div>
            
            <div className="about-content">
              <h2 className="section-title">A Passion for Real Estate Since Childhood</h2>
              <div className="title-divider left"></div>
              
              <p className="about-text">
                Welcome to Auta Tajiri Real Estate. Founded by Abdulshahid Abdullahi, our company represents more than just property transactions; it embodies a lifelong passion and a proud family legacy.
              </p>
              
              <p className="about-text">
                Inherited from his father, Abdulshahid's deep-rooted understanding of the real estate market spans over 10 years. What started as a childhood fascination has grown into a premier real estate firm serving Gwale, Tarauni, Dala, and the wider Kano region.
              </p>

              <div className="vision-box mt-8">
                <h3 className="vision-title text-gold mb-4">Our Vision</h3>
                <p className="about-text">
                  To expand our legacy of trust, reliability, and excellence across the entirety of Nigeria, becoming the foremost choice for land sales, house sales, and property rentals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-light">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="section-title">Why Choose Us</h2>
            <div className="title-divider"></div>
          </div>

          <div className="grid grid-cols-3 md:grid-cols-1 gap-8">
            <div className="card p-8 bg-white">
              <CheckCircle2 size={40} className="text-gold mb-4" />
              <h3 className="text-xl font-heading mb-3">Deep Local Knowledge</h3>
              <p className="text-gray-600">Our intimate understanding of Gwale, Tarauni, and Dala ensures you get the best properties at the right price.</p>
            </div>
            <div className="card p-8 bg-white">
              <CheckCircle2 size={40} className="text-gold mb-4" />
              <h3 className="text-xl font-heading mb-3">Family Legacy</h3>
              <p className="text-gray-600">Built on values passed down through generations, we treat every client like family with utmost respect and transparency.</p>
            </div>
            <div className="card p-8 bg-white">
              <CheckCircle2 size={40} className="text-gold mb-4" />
              <h3 className="text-xl font-heading mb-3">Comprehensive Service</h3>
              <p className="text-gray-600">From land acquisition to luxury rentals, we handle every aspect of your real estate journey with professionalism.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section text-center py-20 bg-primary text-white">
        <div className="container">
          <h2 className="text-4xl font-heading mb-6">Let's build your future together</h2>
          <Link to="/contact" className="btn btn-primary btn-lg mt-4">
            Contact Us Today
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;
