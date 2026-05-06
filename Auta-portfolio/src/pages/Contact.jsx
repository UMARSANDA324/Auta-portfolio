import { Mail, Phone, MapPin } from 'lucide-react';
import './Contact.css';

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

const Contact = () => {
  return (
    <div id="contact" className="contact-page fade-in">
      <div className="page-header">
        <div className="container">
          <h1 className="page-title">Contact <span className="text-gold">Us</span></h1>
          <p className="page-subtitle">We're here to help you find your perfect property.</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-1 gap-12">
            
            <div className="contact-info-container">
              <h2 className="section-title">Get In Touch</h2>
              <div className="title-divider left"></div>
              <p className="contact-desc mb-8">
                Whether you're looking to buy, sell, or rent, our team is ready to assist you. Reach out to us through any of the channels below.
              </p>

              <div className="contact-methods flex flex-col gap-6">
                <div className="contact-method flex items-start gap-4 p-6 bg-light rounded-lg">
                  <div className="contact-icon-wrapper">
                    <Phone size={24} className="text-gold" />
                  </div>
                  <div>
                    <h3 className="text-xl mb-2">Phone / WhatsApp</h3>
                    <p className="text-gray-600 mb-2">+234 903 638 9642</p>
                    <a 
                      href="https://wa.me/2349036389642?text=Hello,%20I%E2%80%99m%20interested%20in%20your%20properties" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-primary font-medium hover:text-gold"
                    >
                      Chat on WhatsApp &rarr;
                    </a>
                  </div>
                </div>

                <div className="contact-method flex items-start gap-4 p-6 bg-light rounded-lg">
                  <div className="contact-icon-wrapper">
                    <Mail size={24} className="text-gold" />
                  </div>
                  <div>
                    <h3 className="text-xl mb-2">Email Address</h3>
                    <p className="text-gray-600 mb-2">abdulshahidabdullahi738@gmail.com</p>
                    <a href="mailto:abdulshahidabdullahi738@gmail.com" className="text-primary font-medium hover:text-gold">
                      Send an Email &rarr;
                    </a>
                  </div>
                </div>

                <div className="contact-method flex items-start gap-4 p-6 bg-light rounded-lg">
                  <div className="contact-icon-wrapper">
                    <MapPin size={24} className="text-gold" />
                  </div>
                  <div>
                    <h3 className="text-xl mb-2">Our Locations</h3>
                    <p className="text-gray-600">Gwale, Tarauni, Dala<br/>Kano, Nigeria</p>
                  </div>
                </div>
              </div>

              <div className="social-connect mt-8">
                <h3 className="text-xl mb-4">Connect With Us</h3>
                <div className="flex gap-4">
                  <a href="https://www.facebook.com/profile.php?id=100091379536015" target="_blank" rel="noopener noreferrer" className="social-btn">
                    <FacebookIcon size={20} />
                  </a>
                  <a href="https://www.instagram.com/abdulshahid703" target="_blank" rel="noopener noreferrer" className="social-btn">
                    <InstagramIcon size={20} />
                  </a>
                </div>
              </div>
            </div>

            <div className="contact-form-container card p-8">
              <h2 className="text-2xl font-heading mb-6">Send us a Message</h2>
              <form className="contact-form flex flex-col gap-4">
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input type="text" id="name" placeholder="Your Name" className="form-input" />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input type="tel" id="phone" placeholder="Your Phone Number" className="form-input" />
                </div>
                <div className="form-group">
                  <label htmlFor="service">Service Interested In</label>
                  <select id="service" className="form-input">
                    <option value="">Select a Service</option>
                    <option value="buy_house">Buying a House</option>
                    <option value="buy_land">Buying Land</option>
                    <option value="rent">Renting a Property</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" rows="4" placeholder="How can we help you?" className="form-input"></textarea>
                </div>
                <button type="button" className="btn btn-primary mt-4" onClick={() => window.open('https://wa.me/2349036389642?text=Hello', '_blank')}>
                  Send via WhatsApp
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
