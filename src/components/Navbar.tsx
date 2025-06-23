
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Search, ShoppingCart, User } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { useLanguage } from '../context/LanguageContext';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const { items } = useCart();
  const { user, signOut } = useAuth();
  const { language } = useLanguage();
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleSignOut = async () => {
    await signOut();
  };

  useEffect(() => {
    setIsMenuOpen(false);
    setIsSearchOpen(false);
  }, [location]);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Brand */}
          <div className="flex-shrink-0">
            <Link to="/" className="font-serif text-2xl font-bold text-temple-brown-deep">
              Sadak
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link to="/" className="text-temple-brown-deep hover:bg-temple-gold-pale hover:text-temple-gold px-3 py-2 rounded-md text-sm font-medium">
                {language === 'hi' ? 'होम' : 'Home'}
              </Link>
              <Link to="/collections" className="text-temple-brown-deep hover:bg-temple-gold-pale hover:text-temple-gold px-3 py-2 rounded-md text-sm font-medium">
                {language === 'hi' ? 'संग्रह' : 'Collections'}
              </Link>
              <Link to="/sacred-blessings" className="text-temple-brown-deep hover:bg-temple-gold-pale hover:text-temple-gold px-3 py-2 rounded-md text-sm font-medium">
                {language === 'hi' ? 'पवित्र आशीर्वाद' : 'Sacred Blessings'}
              </Link>
              <Link to="/about" className="text-temple-brown-deep hover:bg-temple-gold-pale hover:text-temple-gold px-3 py-2 rounded-md text-sm font-medium">
                {language === 'hi' ? 'के बारे में' : 'About'}
              </Link>
              <Link to="/contact" className="text-temple-brown-deep hover:bg-temple-gold-pale hover:text-temple-gold px-3 py-2 rounded-md text-sm font-medium">
                {language === 'hi' ? 'संपर्क' : 'Contact'}
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="bg-white inline-flex items-center justify-center p-2 rounded-md text-temple-brown-deep hover:text-temple-gold hover:bg-temple-gold-pale focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-temple-gold"
              aria-controls="mobile-menu"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>

          {/* Search, Cart, and User Icons */}
          <div className="flex items-center">
            {/* Search Icon */}
            <button
              onClick={toggleSearch}
              className="p-2 text-temple-brown-deep hover:text-temple-gold focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-temple-gold mr-2"
            >
              <Search className="h-5 w-5" />
            </button>

            {/* Cart Icon */}
            <Link to="/cart" className="p-2 text-temple-brown-deep hover:text-temple-gold focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-temple-gold mr-2 relative">
              <ShoppingCart className="h-5 w-5" />
              {items.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-temple-kumkum text-white rounded-full text-xs px-1.5 py-0.5">
                  {items.length}
                </span>
              )}
            </Link>

            {/* User Icon */}
            {user ? (
              <div className="relative inline-block text-left">
                <Link to="/account" className="p-2 text-temple-brown-deep hover:text-temple-gold focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-temple-gold">
                  <User className="h-5 w-5" />
                </Link>
              </div>
            ) : (
              <Link to="/login" className="text-temple-brown-deep hover:bg-temple-gold-pale hover:text-temple-gold px-3 py-2 rounded-md text-sm font-medium">
                {language === 'hi' ? 'लॉग इन' : 'Login'}
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`} id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link to="/" className="text-temple-brown-deep hover:bg-temple-gold-pale hover:text-temple-gold block px-3 py-2 rounded-md text-base font-medium">
            {language === 'hi' ? 'होम' : 'Home'}
          </Link>
          <Link to="/collections" className="text-temple-brown-deep hover:bg-temple-gold-pale hover:text-temple-gold block px-3 py-2 rounded-md text-base font-medium">
            {language === 'hi' ? 'संग्रह' : 'Collections'}
          </Link>
           <Link to="/sacred-blessings" className="text-temple-brown-deep hover:bg-temple-gold-pale hover:text-temple-gold block px-3 py-2 rounded-md text-base font-medium">
              {language === 'hi' ? 'पवित्र आशीर्वाद' : 'Sacred Blessings'}
            </Link>
          <Link to="/about" className="text-temple-brown-deep hover:bg-temple-gold-pale hover:text-temple-gold block px-3 py-2 rounded-md text-base font-medium">
            {language === 'hi' ? 'के बारे में' : 'About'}
          </Link>
          <Link to="/contact" className="text-temple-brown-deep hover:bg-temple-gold-pale hover:text-temple-gold block px-3 py-2 rounded-md text-base font-medium">
            {language === 'hi' ? 'संपर्क' : 'Contact'}
          </Link>
           {user && (
              <button
                onClick={handleSignOut}
                className="text-temple-brown-deep hover:bg-temple-gold-pale hover:text-temple-gold block px-3 py-2 rounded-md text-base font-medium"
              >
                {language === 'hi' ? 'साइन आउट' : 'Sign Out'}
              </button>
            )}
        </div>
      </div>

      {/* Search Bar (Mobile & Desktop) */}
      <div className={`bg-temple-gold-pale/30 ${isSearchOpen ? 'block' : 'hidden'} p-4 md:p-4`}>
        <div className="max-w-md mx-auto">
          <label htmlFor="search" className="sr-only">
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-temple-brown-light" aria-hidden="true" />
            </div>
            <input
              type="text"
              name="search"
              id="search"
              className="block w-full pl-10 pr-3 py-2 border border-temple-gold/30 rounded-md leading-5 bg-white text-temple-brown-deep placeholder-temple-brown-light focus:outline-none focus:ring-2 focus:ring-temple-gold sm:text-sm"
              placeholder={language === 'hi' ? 'खोज...' : 'Search...'}
              value={searchTerm}
              onChange={handleSearchChange}
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
