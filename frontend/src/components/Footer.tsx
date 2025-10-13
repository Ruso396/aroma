import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebookF, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2">
            <a href="/" className="text-2xl font-bold mb-4 inline-block">Grandoria</a>
            <div className="space-y-2 text-gray-400">
              <p>A108 Adam Street</p>
              <p>New York, NY 535022</p>
              <p className="mt-4"><strong className="text-white">Phone:</strong> +1 5589 55488 55</p>
              <p><strong className="text-white">Email:</strong> info@example.com</p>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Useful Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-amber-500 transition">Home</a></li>
              <li><a href="#" className="hover:text-amber-500 transition">About us</a></li>
              <li><a href="#" className="hover:text-amber-500 transition">Services</a></li>
              <li><a href="#" className="hover:text-amber-500 transition">Terms of service</a></li>
              <li><a href="#" className="hover:text-amber-500 transition">Privacy policy</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-amber-500 transition">Room Service</a></li>
              <li><a href="#" className="hover:text-amber-500 transition">Spa & Wellness</a></li>
              <li><a href="#" className="hover:text-amber-500 transition">Restaurant</a></li>
              <li><a href="#" className="hover:text-amber-500 transition">Events</a></li>
              <li><a href="#" className="hover:text-amber-500 transition">Concierge</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-amber-600 transition">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-amber-600 transition">
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-amber-600 transition">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-amber-600 transition">
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800 py-6">
        <div className="container mx-auto px-4 text-center text-gray-400 text-sm">
          <p>© Copyright <strong className="text-white">Grandoria</strong>. All Rights Reserved</p>
          <p className="mt-1">Designed by <a href="https://bootstrapmade.com/" className="text-amber-500 hover:underline">BootstrapMade</a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
