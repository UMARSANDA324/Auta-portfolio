import { Link } from 'react-router-dom';
import '../pages/Home.css'; // Reusing some card styles
import './Properties.css';

const properties = [
  {
    id: 1,
    title: 'Modern Luxury Villa',
    location: 'Gwale, Kano',
    price: '₦85,000,000',
    type: 'Sale',
    category: 'House',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 2,
    title: 'Prime Residential Plot',
    location: 'Tarauni, Kano',
    price: '₦25,000,000',
    type: 'Sale',
    category: 'Land',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 3,
    title: 'Executive Family Home',
    location: 'Dala, Kano',
    price: '₦3,500,000 /yr',
    type: 'Rent',
    category: 'House',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 4,
    title: 'Commercial Land Space',
    location: 'Gwale, Kano',
    price: '₦120,000,000',
    type: 'Sale',
    category: 'Land',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 5,
    title: 'Luxury Apartment',
    location: 'Tarauni, Kano',
    price: '₦4,500,000 /yr',
    type: 'Rent',
    category: 'House',
    image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 6,
    title: 'New Construction Duplex',
    location: 'Dala, Kano',
    price: '₦95,000,000',
    type: 'Sale',
    category: 'House',
    image: 'https://images.unsplash.com/photo-1600566753086-00f18efc2291?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
  }
];

const Properties = () => {
  return (
    <div id="properties" className="properties-page fade-in">
      <div className="page-header">
        <div className="container">
          <h1 className="page-title">Our <span className="text-gold">Properties</span></h1>
          <p className="page-subtitle">Discover our exclusive collection of houses and lands across Kano.</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          {/* Filters Placeholder */}
          <div className="filters-container mb-12">
            <div className="filter-btn active">All</div>
            <div className="filter-btn">Houses</div>
            <div className="filter-btn">Lands</div>
            <div className="filter-btn">For Sale</div>
            <div className="filter-btn">For Rent</div>
          </div>

          <div className="grid grid-cols-3 md:grid-cols-1 gap-8">
            {properties.map((property) => (
              <div key={property.id} className="property-card card">
                <div className="property-img-wrapper">
                  <img src={property.image} alt={property.title} className="property-img" />
                  <div className={`property-tag ${property.category === 'Land' ? 'bg-primary' : ''}`}>
                    {property.category === 'Land' ? 'Land' : `For ${property.type}`}
                  </div>
                </div>
                <div className="property-info p-6">
                  <h3 className="property-title">{property.title}</h3>
                  <p className="property-location">{property.location}</p>
                  <div className="property-footer flex justify-between items-center mt-4 pt-4 border-t">

                    <a 
                      href={`https://wa.me/2349036389642?text=I'm%20interested%20in%20the%20${property.title}%20in%20${property.location}`}
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary font-medium hover:text-gold"
                    >
                      Inquire Now
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Properties;
