import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, User, Menu, X, Heart, Phone, LogOut } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';
import { useLanguage } from '../context/LanguageContext';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const location = useLocation();
  const { user, logout } = useAuth();
  const { totalItems } = useCart();
  const { language, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t('home'), path: '/' },
    { 
      name: t('collections'), 
      path: '/collections', 
      dropdown: [
        { name: t('allProducts'), path: '/collections' },
        { name: t('shopByDeity'), path: '/collections/deities' },
        { name: t('gemsAndMalas'), path: '/collections/gems' },
        { name: t('newArrivals'), path: '/collections/new' },
      ]
    },
    { name: t('blessings'), path: '/blessings' },
    { name: t('about'), path: '/about' },
  ];

  const handleLogout = () => {
    logout();
    setShowUserMenu(false);
  };

  return (
    <>
      {/* Top Bar */}
      <div className="bg-temple-brown-deep text-temple-ivory text-xs py-2 fixed top-0 left-0 right-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <span className="flex items-center space-x-1">
                <Phone className="h-3 w-3" />
                <span>+91 98765 43210</span>
              </span>
              <span className="hidden md:inline">
                {language === 'hi' ? '₹1999+ पर मुफ्त शिपिंग' : 'Free Shipping on ₹1999+'}
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <span>🕉️ {language === 'hi' ? 'दैनिक धर्म ज्ञान' : 'Daily Dharma Wisdom'}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className={`fixed top-8 left-0 right-0 z-40 transition-all duration-500 ${
        isScrolled 
          ? 'bg-temple-ivory/95 backdrop-blur-md shadow-temple-lg' 
          : 'bg-temple-ivory/80 backdrop-blur-sm'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-temple-gold to-temple-saffron rounded-full flex items-center justify-center shadow-gold-glow group-hover:shadow-temple-lg transition-all duration-300">
                  <span className="text-white font-serif text-xl font-bold">स</span>
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-temple-kumkum rounded-full animate-diya-pulse"></div>
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-2xl text-temple-brown-deep font-bold tracking-tight">
                  Sadak
                </span>
                <span className="text-xs text-temple-gold font-medium -mt-1">
                  SACRED ADORNMENTS
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link, index) => (
                <div key={index} className="relative group">
                  <Link
                    to={link.path}
                    className={`font-medium transition-all duration-300 hover:text-temple-saffron relative ${
                      location.pathname === link.path
                        ? 'text-temple-saffron'
                        : 'text-temple-brown-deep'
                    }`}
                  >
                    {link.name}
                    {location.pathname === link.path && (
                      <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-temple-gold to-temple-saffron rounded-full"></div>
                    )}
                  </Link>
                  
                  {/* Dropdown */}
                  {link.dropdown && (
                    <div className="absolute top-full left-0 mt-2 w-56 bg-white/95 backdrop-blur-md rounded-xl shadow-temple-lg border border-temple-gold/20 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                      <div className="py-2">
                        {link.dropdown.map((item, idx) => (
                          <Link
                            key={idx}
                            to={item.path}
                            className="block px-4 py-2 text-temple-brown-deep hover:bg-temple-gold-pale hover:text-temple-saffron transition-colors duration-200"
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Right Icons */}
            <div className="flex items-center space-x-2">
              <button className="p-2.5 text-temple-brown-deep hover:text-temple-saffron hover:bg-temple-gold-pale rounded-full transition-all duration-300 group">
                <Search className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
              </button>
              
              {user ? (
                <div className="relative">
                  <button
                    onClick={() => setShowUserMenu(!showUserMenu)}
                    className="p-2.5 text-temple-brown-deep hover:text-temple-saffron hover:bg-temple-gold-pale rounded-full transition-all duration-300 group"
                  >
                    <User className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                  </button>
                  
                  {showUserMenu && (
                    <div className="absolute right-0 top-full mt-2 w-48 bg-white/95 backdrop-blur-md rounded-xl shadow-temple-lg border border-temple-gold/20">
                      <div className="py-2">
                        <div className="px-4 py-2 border-b border-temple-gold/20">
                          <p className="font-medium text-temple-brown-deep">{user.name}</p>
                          <p className="text-sm text-temple-brown-light">{user.email}</p>
                        </div>
                        <Link
                          to="/account"
                          className="block px-4 py-2 text-temple-brown-deep hover:bg-temple-gold-pale hover:text-temple-saffron transition-colors duration-200"
                          onClick={() => setShowUserMenu(false)}
                        >
                          {t('account')}
                        </Link>
                        <button
                          onClick={handleLogout}
                          className="w-full text-left px-4 py-2 text-temple-brown-deep hover:bg-temple-gold-pale hover:text-temple-saffron transition-colors duration-200 flex items-center space-x-2"
                        >
                          <LogOut className="h-4 w-4" />
                          <span>{language === 'hi' ? 'लॉग आउट' : 'Logout'}</span>
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Link to="/login" className="p-2.5 text-temple-brown-deep hover:text-temple-saffron hover:bg-temple-gold-pale rounded-full transition-all duration-300 group">
                  <User className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                </Link>
              )}
              
              <button className="p-2.5 text-temple-brown-deep hover:text-temple-rose hover:bg-temple-gold-pale rounded-full transition-all duration-300 group">
                <Heart className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
              </button>
              
              <Link to="/cart" className="relative p-2.5 text-temple-brown-deep hover:text-temple-saffron hover:bg-temple-gold-pale rounded-full transition-all duration-300 group">
                <ShoppingBag className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 bg-temple-kumkum text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-medium animate-diya-pulse">
                    {totalItems}
                  </span>
                )}
              </Link>
              
              {/* Mobile Menu Button */}
              <button
                className="lg:hidden p-2.5 text-temple-brown-deep hover:bg-temple-gold-pale rounded-full transition-colors duration-300"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden py-4 border-t border-temple-gold/20 bg-white/95 backdrop-blur-md rounded-b-xl">
              {navLinks.map((link, index) => (
                <div key={index}>
                  <Link
                    to={link.path}
                    className="block py-3 text-temple-brown-deep hover:text-temple-saffron transition-colors duration-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                  {link.dropdown && (
                    <div className="pl-4 space-y-2 pb-2">
                      {link.dropdown.map((item, idx) => (
                        <Link
                          key={idx}
                          to={item.path}
                          className="block py-1 text-sm text-temple-brown-light hover:text-temple-saffron transition-colors duration-200"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </nav>
      
      {/* Spacer for fixed navbar */}
      <div className="h-28"></div>
    </>
  );
};

export default Navbar;