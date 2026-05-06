import { MessageCircle } from 'lucide-react';
import './WhatsAppButton.css';

const WhatsAppButton = () => {
  return (
    <a 
      href="https://wa.me/2349036389642?text=Hello,%20I%E2%80%99m%20interested%20in%20your%20properties" 
      target="_blank" 
      rel="noopener noreferrer"
      className="whatsapp-float"
      aria-label="Contact on WhatsApp"
    >
      <MessageCircle size={32} />
    </a>
  );
};

export default WhatsAppButton;
