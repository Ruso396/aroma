import React, { useState, useEffect } from 'react';
import { Menu, X, Mail, Phone } from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebookF, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const transparentHeaderPaths = ['/', '/amenities'];
  const isTransparentPage = transparentHeaderPaths.includes(location.pathname);

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Rooms', path: '/rooms' },
    { label: 'Amenities', path: '/amenities' },
    { label: 'Location', path: '/location' },
    { label: 'Contact', path: '/contact' },
  ];

  // Header background logic
  const headerBg = isMobileMenuOpen
    ? 'bg-white shadow-lg'
    : isTransparentPage && !isScrolled
    ? 'bg-transparent'
    : 'bg-white shadow-lg';

  const topBarBg = isMobileMenuOpen
    ? 'bg-white text-gray-800'
    : isTransparentPage && !isScrolled
    ? 'bg-black/30 text-white'
    : 'bg-white text-gray-800';

  const navTextColor = isMobileMenuOpen
    ? 'text-gray-800'
    : isTransparentPage && !isScrolled
    ? 'text-white'
    : 'text-gray-800';

  const navHoverColor = isMobileMenuOpen
    ? 'hover:text-amber-600'
    : isTransparentPage && !isScrolled
    ? 'hover:text-amber-300'
    : 'hover:text-amber-600';

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all ${headerBg}`}>
      {/* Top Bar */}
      <div className={`py-2 transition-colors ${topBarBg}`}>
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
            <a href="#" className="hover:text-amber-500 transition"><FontAwesomeIcon icon={faTwitter} /></a>
            <a href="#" className="hover:text-amber-500 transition"><FontAwesomeIcon icon={faFacebookF} /></a>
            <a href="#" className="hover:text-amber-500 transition"><FontAwesomeIcon icon={faInstagram} /></a>
            <a href="#" className="hover:text-amber-500 transition"><FontAwesomeIcon icon={faLinkedinIn} /></a>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <div className="transition-colors">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <Link to="/" className={`text-2xl font-bold transition-colors ${navTextColor}`}>
              Aroma
            </Link>

            {/* Desktop Menu */}
            <nav className="hidden lg:flex items-center gap-8">
              {links.map((link) => (
                <Link
                  key={link.label}
                  to={link.path}
                  className={`transition-colors font-medium ${navTextColor} ${navHoverColor}`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`lg:hidden transition-colors ${navTextColor}`}
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <nav className="lg:hidden pb-4 space-y-3">
              {links.map((link) => (
                <Link
                  key={link.label}
                  to={link.path}
                  className={`block py-2 font-medium transition ${navTextColor} ${navHoverColor}`}
                  onClick={() => setIsMobileMenuOpen(false)} // Close menu on click
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
