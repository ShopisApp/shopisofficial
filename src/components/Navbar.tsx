import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { ShoppingBag, Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled || !isHomePage ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <NavLink to="/" className="flex items-center space-x-2">
            <div className={`relative w-10 h-10 ${isScrolled || !isHomePage ? 'bg-gradient-to-br from-blue-600 to-blue-800' : 'bg-white'} rounded-lg flex items-center justify-center transform -rotate-12 hover:rotate-0 transition-transform duration-300`}>
              <ShoppingBag className={`h-6 w-6 ${isScrolled || !isHomePage ? 'text-white' : 'text-blue-800'}`} />
            </div>
            <span className={`text-xl font-bold ${isScrolled || !isHomePage ? 'text-blue-800' : 'text-white'}`}>ShoppingListApp</span>
          </NavLink>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <NavLink 
              to="/" 
              className={({ isActive }) => 
                `font-medium hover:text-blue-700 transition-colors ${
                  isActive 
                    ? 'text-blue-800' 
                    : isScrolled || !isHomePage 
                      ? 'text-gray-800' 
                      : 'text-gray-100'
                }`
              }
            >
              Home
            </NavLink>
            <NavLink 
              to="/services" 
              className={({ isActive }) => 
                `font-medium hover:text-blue-700 transition-colors ${
                  isActive 
                    ? 'text-blue-800' 
                    : isScrolled || !isHomePage 
                      ? 'text-gray-800' 
                      : 'text-gray-100'
                }`
              }
            >
              Services
            </NavLink>
            <NavLink 
              to="/features" 
              className={({ isActive }) => 
                `font-medium hover:text-blue-700 transition-colors ${
                  isActive 
                    ? 'text-blue-800' 
                    : isScrolled || !isHomePage 
                      ? 'text-gray-800' 
                      : 'text-gray-100'
                }`
              }
            >
              Features
            </NavLink>
            <NavLink 
              to="/stats" 
              className={({ isActive }) => 
                `font-medium hover:text-blue-700 transition-colors ${
                  isActive 
                    ? 'text-blue-800' 
                    : isScrolled || !isHomePage 
                      ? 'text-gray-800' 
                      : 'text-gray-100'
                }`
              }
            >
              Stats & Advice
            </NavLink>
            <NavLink 
              to="/community" 
              className={({ isActive }) => 
                `font-medium hover:text-blue-700 transition-colors ${
                  isActive 
                    ? 'text-blue-800' 
                    : isScrolled || !isHomePage 
                      ? 'text-gray-800' 
                      : 'text-gray-100'
                }`
              }
            >
              Community
            </NavLink>
          </nav>
          
          <button className="hidden md:block px-5 py-2 bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white rounded-full shadow-md transition-all transform hover:scale-105">
            Download App
          </button>
          
          {/* Mobile Menu Button */}
          <button 
            className={`md:hidden ${isScrolled || !isHomePage ? 'text-blue-800' : 'text-white'}`}
            onClick={toggleMenu}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation Menu */}
      <div 
        className={`md:hidden absolute w-full bg-white shadow-md transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-screen py-4' : 'max-h-0'
        }`}
      >
        <div className="container mx-auto px-4 flex flex-col space-y-4">
          <NavLink 
            to="/" 
            className={({ isActive }) => 
              `py-2 px-4 font-medium ${isActive ? 'text-blue-800' : 'text-gray-800'}`
            }
            onClick={() => setIsOpen(false)}
          >
            Home
          </NavLink>
          <NavLink 
            to="/services" 
            className={({ isActive }) => 
              `py-2 px-4 font-medium ${isActive ? 'text-blue-800' : 'text-gray-800'}`
            }
            onClick={() => setIsOpen(false)}
          >
            Services
          </NavLink>
          <NavLink 
            to="/features" 
            className={({ isActive }) => 
              `py-2 px-4 font-medium ${isActive ? 'text-blue-800' : 'text-gray-800'}`
            }
            onClick={() => setIsOpen(false)}
          >
            Features
          </NavLink>
          <NavLink 
            to="/stats" 
            className={({ isActive }) => 
              `py-2 px-4 font-medium ${isActive ? 'text-blue-800' : 'text-gray-800'}`
            }
            onClick={() => setIsOpen(false)}
          >
            Stats & Advice
          </NavLink>
          <NavLink 
            to="/community" 
            className={({ isActive }) => 
              `py-2 px-4 font-medium ${isActive ? 'text-blue-800' : 'text-gray-800'}`
            }
            onClick={() => setIsOpen(false)}
          >
            Community
          </NavLink>
          <button className="mx-4 py-2 bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white rounded-full shadow-md transition-all">
            Login/ Sign Up
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
