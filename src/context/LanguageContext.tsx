import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'en' | 'hi';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  showLanguageModal: boolean;
  setShowLanguageModal: (show: boolean) => void;
}

const translations = {
  en: {
    // Navigation
    home: 'Home',
    collections: 'Collections',
    about: 'Our Story',
    cart: 'Cart',
    account: 'Account',
    login: 'Login',
    blessings: 'Sacred Blessings',
    
    // Common
    addToCart: 'Add to Cart',
    buyNow: 'Buy Now',
    price: 'Price',
    quantity: 'Quantity',
    total: 'Total',
    checkout: 'Checkout',
    
    // Product
    inStock: 'In Stock',
    outOfStock: 'Out of Stock',
    reviews: 'Reviews',
    rating: 'Rating',
    
    // Cart
    yourCart: 'Your Sacred Cart',
    emptyCart: 'Your cart is empty',
    continueShopping: 'Continue Shopping',
    
    // Auth
    email: 'Email',
    password: 'Password',
    signIn: 'Sign In',
    signUp: 'Sign Up',
    forgotPassword: 'Forgot Password?',
    
    // Checkout
    shippingAddress: 'Shipping Address',
    paymentMethod: 'Payment Method',
    orderSummary: 'Order Summary',
    placeOrder: 'Place Order',

    // Account
    dashboard: 'Dashboard',
    orders: 'My Orders',
    wishlist: 'Wishlist',
    profile: 'Profile',
    rewards: 'Blessing Points',
    
    // Footer
    quickLinks: 'Quick Links',
    sacredServices: 'Sacred Services',
    contact: 'Contact',
    
    // Categories
    allProducts: 'All Products',
    shopByDeity: 'Shop by Deity',
    gemsAndMalas: 'Gems & Malas',
    newArrivals: 'New Arrivals'
  },
  hi: {
    // Navigation
    home: 'होम',
    collections: 'संग्रह',
    about: 'हमारी कहानी',
    cart: 'कार्ट',
    account: 'खाता',
    login: 'लॉगिन',
    blessings: 'पवित्र आशीर्वाद',
    
    // Common
    addToCart: 'कार्ट में डालें',
    buyNow: 'अभी खरीदें',
    price: 'मूल्य',
    quantity: 'मात्रा',
    total: 'कुल',
    checkout: 'चेकआउट',
    
    // Product
    inStock: 'स्टॉक में',
    outOfStock: 'स्टॉक में नहीं',
    reviews: 'समीक्षाएं',
    rating: 'रेटिंग',
    
    // Cart
    yourCart: 'आपकी पवित्र गाड़ी',
    emptyCart: 'आपकी गाड़ी खाली है',
    continueShopping: 'खरीदारी जारी रखें',
    
    // Auth
    email: 'ईमेल',
    password: 'पासवर्ड',
    signIn: 'साइन इन',
    signUp: 'साइन अप',
    forgotPassword: 'पासवर्ड भूल गए?',
    
    // Checkout
    shippingAddress: 'शिपिंग पता',
    paymentMethod: 'भुगतान विधि',
    orderSummary: 'ऑर्डर सारांश',
    placeOrder: 'ऑर्डर दें',

    // Account
    dashboard: 'डैशबोर्ड',
    orders: 'मेरे ऑर्डर',
    wishlist: 'इच्छा सूची',
    profile: 'प्रोफाइल',
    rewards: 'आशीर्वाद पॉइंट्स',
    
    // Footer
    quickLinks: 'त्वरित लिंक',
    sacredServices: 'पवित्र सेवाएं',
    contact: 'संपर्क',
    
    // Categories
    allProducts: 'सभी उत्पाद',
    shopByDeity: 'देवी-देवता के अनुसार',
    gemsAndMalas: 'रत्न और माला',
    newArrivals: 'नए आगमन'
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');
  const [showLanguageModal, setShowLanguageModal] = useState(false);

  useEffect(() => {
    const savedLanguage = localStorage.getItem('sadak_language') as Language;
    const hasSelectedLanguage = localStorage.getItem('sadak_language_selected');
    
    if (savedLanguage && hasSelectedLanguage) {
      setLanguage(savedLanguage);
    } else {
      setShowLanguageModal(true);
    }
  }, []);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('sadak_language', lang);
    localStorage.setItem('sadak_language_selected', 'true');
    setShowLanguageModal(false);
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  const value = {
    language,
    setLanguage: handleSetLanguage,
    t,
    showLanguageModal,
    setShowLanguageModal
  };

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};