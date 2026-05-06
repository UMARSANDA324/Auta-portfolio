import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Award, Home as HomeIcon } from 'lucide-react';
import './Home.css';

const Home = () => {
  return (
    <div id="home" className="home fade-in">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="container hero-content">
          <h1 className="hero-title">
            Where Your Dream Property <br />
            <span className="text-gold">Becomes Reality</span>
          </h1>
          <p className="hero-subtitle">
            Premium real estate services in Kano. We build trust through property excellence with over 10 years of experience.
          </p>
          <div className="hero-cta flex gap-4 md:flex-col">
            <a 
              href="https://wa.me/2349036389642?text=Hello,%20I%E2%80%99m%20interested%20in%20your%20properties" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-primary"
            >
              Contact on WhatsApp
            </a>
            <Link to="/properties" className="btn btn-white">
              Explore Properties
            </Link>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="section-title">Our Premium Services</h2>
            <div className="title-divider"></div>
            <p className="section-description">Comprehensive real estate solutions tailored to your needs</p>
          </div>

          <div className="grid grid-cols-3 md:grid-cols-1 gap-8">
            <div className="service-card card text-center p-8">
              <div className="service-icon">
                <HomeIcon size={40} className="text-gold" />
              </div>
              <h3 className="service-title">House Sales</h3>
              <p className="service-desc">Find your perfect home from our curated selection of premium properties across Kano.</p>
            </div>
            <div className="service-card card text-center p-8">
              <div className="service-icon">
                <div className="icon-placeholder text-gold">🌍</div>
              </div>
              <h3 className="service-title">Land Sales</h3>
              <p className="service-desc">Secure prime land for development or investment in strategic locations.</p>
            </div>
            <div className="service-card card text-center p-8">
              <div className="service-icon">
                <div className="icon-placeholder text-gold">🔑</div>
              </div>
              <h3 className="service-title">Property Rentals</h3>
              <p className="service-desc">Discover high-quality rental properties that meet your lifestyle requirements.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="section trust-section">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-1 gap-12 items-center">
            <div className="trust-content">
              <h2 className="section-title text-white">Building Trust Through Property Excellence</h2>
              <div className="title-divider left bg-gold"></div>
              <p className="trust-desc">
                With a family legacy and over a decade of experience in the real estate business, Auta Tajiri stands as a pillar of reliability in Kano's property market.
              </p>
              
              <div className="trust-features flex flex-col gap-6 mt-8">
                <div className="trust-feature flex items-center gap-4">
                  <div className="feature-icon-wrapper">
                    <Award size={24} className="text-gold" />
                  </div>
                  <div>
                    <h4 className="feature-title">10+ Years Experience</h4>
                    <p className="feature-desc">A decade of delivering excellence and building dreams.</p>
                  </div>
                </div>
                <div className="trust-feature flex items-center gap-4">
                  <div className="feature-icon-wrapper">
                    <Shield size={24} className="text-gold" />
                  </div>
                  <div>
                    <h4 className="feature-title">Family Legacy</h4>
                    <p className="feature-desc">Inherited passion and deep understanding of customer needs.</p>
                  </div>
                </div>
              </div>

              <Link to="/about" className="btn btn-primary mt-8">
                Read Our Story <ArrowRight size={18} />
              </Link>
            </div>
            <div className="trust-image-wrapper relative">
              <img src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Luxury Home" className="trust-image" />
              <div className="experience-badge">
                <span className="exp-number">10+</span>
                <span className="exp-text">Years<br/>Experience</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Properties Preview */}
      <section className="section">
        <div className="container">
          <div className="flex justify-between items-center mb-12 md:flex-col md:gap-4 md:items-start">
            <div>
              <h2 className="section-title">Featured Properties</h2>
              <div className="title-divider left"></div>
            </div>
            <Link to="/properties" className="btn btn-outline">
              View All Properties
            </Link>
          </div>

          <div className="grid grid-cols-3 md:grid-cols-1 gap-8">
            {/* Property 1 */}
            <div className="property-card card">
              <div className="property-img-wrapper">
                <img src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Modern Villa" className="property-img" />
                <div className="property-tag">For Sale</div>
              </div>
              <div className="property-info p-6">
                <h3 className="property-title">Modern Luxury Villa</h3>
                <p className="property-location">Gwale, Kano</p>
                <div className="property-footer flex justify-between items-center mt-4 pt-4 border-t">

                  <a href="https://wa.me/2349036389642?text=I'm%20interested%20in%20the%20Modern%20Luxury%20Villa%20in%20Gwale" className="text-primary font-medium hover:text-gold">Inquire Now</a>
                </div>
              </div>
            </div>
            
            {/* Property 2 */}
            <div className="property-card card">
              <div className="property-img-wrapper">
                <img src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Premium Land" className="property-img" />
                <div className="property-tag bg-primary">Land</div>
              </div>
              <div className="property-info p-6">
                <h3 className="property-title">Prime Residential Plot</h3>
                <p className="property-location">Tarauni, Kano</p>
                <div className="property-footer flex justify-between items-center mt-4 pt-4 border-t">

                  <a href="https://wa.me/2349036389642?text=I'm%20interested%20in%20the%20Prime%20Residential%20Plot%20in%20Tarauni" className="text-primary font-medium hover:text-gold">Inquire Now</a>
                </div>
              </div>
            </div>

            {/* Property 3 */}
            <div className="property-card card">
              <div className="property-img-wrapper">
                <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Executive Home" className="property-img" />
                <div className="property-tag">For Rent</div>
              </div>
              <div className="property-info p-6">
                <h3 className="property-title">Executive Family Home</h3>
                <p className="property-location">Dala, Kano</p>
                <div className="property-footer flex justify-between items-center mt-4 pt-4 border-t">

                  <a href="https://wa.me/2349036389642?text=I'm%20interested%20in%20the%20Executive%20Family%20Home%20in%20Dala" className="text-primary font-medium hover:text-gold">Inquire Now</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-box fade-in">
            <h2 className="cta-title">Ready to find your <span className="text-gold">dream property</span>?</h2>
            <p className="cta-subtitle">
              Whether you're looking for a luxury home or a strategic land investment, our experts are here to guide you every step of the way.
            </p>
            <div className="cta-buttons">
              <a 
                href="https://wa.me/2349036389642?text=Hello,%20I%E2%80%99m%20interested%20in%20your%20properties" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-primary btn-lg"
              >
                Contact via WhatsApp
              </a>
              <Link to="/contact" className="btn btn-outline-white btn-lg">
                Send an Email
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
