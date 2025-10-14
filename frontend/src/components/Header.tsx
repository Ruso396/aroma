import React, { useState, useEffect } from 'react';
import { Menu, X, Mail, Phone } from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebookF, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all ${isScrolled ? 'shadow-lg' : ''}`}>
      {/* Top Bar */}
      <div className="bg-gray-900 text-white py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center gap-4">
            <a href="mailto:contact@example.com" className="flex items-center gap-2 hover:text-amber-500 transition">
              <Mail size={16} />
              <span className="hidden md:inline">contact@example.com</span>
            </a>
            <a href="tel:+15589554885" className="flex items-center gap-2 hover:text-amber-500 transition">
              <Phone size={16} />
              <span>+1 5589 55488 55</span>
            </a>
          </div>
          <div className="hidden md:flex items-center gap-3">
            <a href="#" className="hover:text-amber-500 transition">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="#" className="hover:text-amber-500 transition">
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a href="#" className="hover:text-amber-500 transition">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="#" className="hover:text-amber-500 transition">
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="bg-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <a href="/" className="text-2xl font-bold text-gray-800">Aroma</a>

            {/* Desktop Menu */}
            <nav className="hidden lg:flex items-center gap-8">
              <a href="/" className="text-gray-700 hover:text-amber-600 transition font-medium">Home</a>
              <a href="#about" className="text-gray-700 hover:text-amber-600 transition font-medium">About</a>
              <a href="#rooms" className="text-gray-700 hover:text-amber-600 transition font-medium">Rooms</a>
              <a href="GrandoriaAmenities" className="text-gray-700 hover:text-amber-600 transition font-medium">Amenities</a>
              <a href="GrandoriaLocation" className="text-gray-700 hover:text-amber-600 transition font-medium">Location</a>
              <a href="#contact" className="text-gray-700 hover:text-amber-600 transition font-medium">Contact</a>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden text-gray-700 hover:text-amber-600"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <nav className="lg:hidden pb-4 space-y-3">
              <a href="/" className="block text-gray-700 hover:text-amber-600 transition font-medium py-2">Home</a>
              <a href="#about" className="block text-gray-700 hover:text-amber-600 transition font-medium py-2">About</a>
              <a href="#rooms" className="block text-gray-700 hover:text-amber-600 transition font-medium py-2">Rooms</a>
              <a href="#amenities" className="block text-gray-700 hover:text-amber-600 transition font-medium py-2">Amenities</a>
              <a href="#location" className="block text-gray-700 hover:text-amber-600 transition font-medium py-2">Location</a>
              <a href="#contact" className="block text-gray-700 hover:text-amber-600 transition font-medium py-2">Contact</a>
            </nav>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
