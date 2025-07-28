import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ShoppingBag, Facebook, Twitter, Instagram, 
  Mail, Phone, MapPin 
} from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="relative w-8 h-8 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg flex items-center justify-center transform -rotate-12">
                <ShoppingBag className="h-5 w-5 text-white" />
              </div>
              <span className="text-lg font-bold">Shopis</span>
            </div>
            <p className="text-gray-400 mb-4">
              Making grocery shopping easier, more organized, and more economical with our smart shopping list application.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Our Services
                </Link>
              </li>
              <li>
                <Link to="/features" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link to="/stats" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Statistics & Advice
                </Link>
              </li>
              <li>
                <Link to="/community" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Community
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Cookie Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                  GDPR Compliance
                </a>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <Mail size={16} className="text-gray-400" />
                <a href="mailto:support@shopyz.com" className="text-gray-400 hover:text-blue-400 transition-colors">
                  support@shopyz.com
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Phone size={16} className="text-gray-400" />
                <a href="tel:+1234567890" className="text-gray-400 hover:text-blue-400 transition-colors">
                  +1 (234) 567-890
                </a>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin size={16} className="text-gray-400 mt-1 flex-shrink-0" />
                <span className="text-gray-400">
                  1234 Market Street, Suite 1000, San Francisco, CA 94103
                </span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Shopis. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
