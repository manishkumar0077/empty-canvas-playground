import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Instagram, Facebook, Twitter, Phone, Mail, MapPin, Heart, Youtube } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Footer = () => {
  const [currentQuote, setCurrentQuote] = useState(0);
  const { language, t } = useLanguage();
  
  const quotes = [
    "आत्मा को स्मरण रहता है कि वह क्या पहनती है।",
    "धातु और मंत्र मिलकर बनाते हैं असली आभूषण।", 
    "जो भी श्रद्धा से पहना जाए, वह दिव्य हो जाता है।",
    "सच्चा अलंकार वह है जो आत्मा को सुशोभित करे।"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);
  
  return (
    <footer className="bg-temple-brown-deep text-temple-ivory relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-mandala-bg opacity-10"></div>
      
      {/* Quote Section */}
      <div className="relative z-10 bg-gradient-to-r from-temple-gold/20 to-temple-saffron/20 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center space-x-4 mb-4">
            <div className="h-px bg-gradient-to-r from-transparent via-temple-gold to-transparent w-16"></div>
            <Sparkles className="h-6 w-6 text-temple-gold animate-diya-pulse" />
            <div className="h-px bg-gradient-to-r from-transparent via-temple-gold to-transparent w-16"></div>
          </div>
          <blockquote className="font-serif text-xl md:text-2xl text-temple-gold italic font-medium transition-all duration-500">
            "{quotes[currentQuote]}"
          </blockquote>
        </div>
      </div>

      {/* Main Footer */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-temple-gold to-temple-saffron rounded-full flex items-center justify-center shadow-gold-glow">
                  <span className="text-white font-serif text-xl font-bold">स</span>
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-temple-kumkum rounded-full animate-diya-pulse"></div>
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-xl text-temple-ivory font-bold">
                  Sadak
                </span>
                <span className="text-xs text-temple-gold font-medium -mt-1">
                  SACRED ADORNMENTS
                </span>
              </div>
            </div>
            <p className="text-temple-sandalwood text-sm mb-6 leading-relaxed">
              {language === 'hi' 
                ? 'मंत्रों और भक्ति के साथ हस्तनिर्मित पवित्र आभूषण। प्राचीन ज्ञान से आशीर्वादित टुकड़ों के साथ आपकी आध्यात्मिक यात्रा यहाँ शुरू होती है।'
                : 'Sacred jewelry handcrafted with mantras and devotion. Your spiritual journey begins here with pieces blessed by ancient wisdom.'
              }
            </p>
            <div className="flex space-x-4">
              <a href="#" className="group p-2 bg-temple-gold/20 hover:bg-temple-gold rounded-full transition-all duration-300">
                <Instagram className="h-5 w-5 text-temple-gold group-hover:text-white" />
              </a>
              <a href="#" className="group p-2 bg-temple-gold/20 hover:bg-temple-gold rounded-full transition-all duration-300">
                <Facebook className="h-5 w-5 text-temple-gold group-hover:text-white" />
              </a>
              <a href="#" className="group p-2 bg-temple-gold/20 hover:bg-temple-gold rounded-full transition-all duration-300">
                <Twitter className="h-5 w-5 text-temple-gold group-hover:text-white" />
              </a>
              <a href="#" className="group p-2 bg-temple-gold/20 hover:bg-temple-gold rounded-full transition-all duration-300">
                <Youtube className="h-5 w-5 text-temple-gold group-hover:text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-lg text-temple-gold mb-6">{t('quickLinks')}</h3>
            <ul className="space-y-3 text-sm">
              <li><Link to="/collections" className="text-temple-sandalwood hover:text-temple-saffron transition-colors duration-200 flex items-center group">
                <span className="group-hover:translate-x-1 transition-transform duration-200">{t('allProducts')}</span>
              </Link></li>
              <li><Link to="/collections/deities" className="text-temple-sandalwood hover:text-temple-saffron transition-colors duration-200 flex items-center group">
                <span className="group-hover:translate-x-1 transition-transform duration-200">{t('shopByDeity')}</span>
              </Link></li>
              <li><Link to="/collections/gems" className="text-temple-sandalwood hover:text-temple-saffron transition-colors duration-200 flex items-center group">
                <span className="group-hover:translate-x-1 transition-transform duration-200">{t('gemsAndMalas')}</span>
              </Link></li>
              <li><Link to="/about" className="text-temple-sandalwood hover:text-temple-saffron transition-colors duration-200 flex items-center group">
                <span className="group-hover:translate-x-1 transition-transform duration-200">{t('about')}</span>
              </Link></li>
              <li><Link to="/blessings" className="text-temple-sandalwood hover:text-temple-saffron transition-colors duration-200 flex items-center group">
                <span className="group-hover:translate-x-1 transition-transform duration-200">{t('blessings')}</span>
              </Link></li>
            </ul>
          </div>

          {/* Sacred Services */}
          <div>
            <h3 className="font-serif text-lg text-temple-gold mb-6">{t('sacredServices')}</h3>
            <ul className="space-y-3 text-sm text-temple-sandalwood">
              <li className="flex items-center space-x-2">
                <div className="w-1.5 h-1.5 bg-temple-saffron rounded-full"></div>
                <span>{language === 'hi' ? 'गंगाजल पवित्रीकरण' : 'Ganga Jal Purification'}</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-1.5 h-1.5 bg-temple-saffron rounded-full"></div>
                <span>{language === 'hi' ? 'वैदिक मंत्र जप' : 'Vedic Mantra Chanting'}</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-1.5 h-1.5 bg-temple-saffron rounded-full"></div>
                <span>{language === 'hi' ? 'कुमकुम लपेटन' : 'Kumkum Wrapping'}</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-1.5 h-1.5 bg-temple-saffron rounded-full"></div>
                <span>{language === 'hi' ? 'प्रीमियम उपहार पैकेजिंग' : 'Premium Gift Packaging'}</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-1.5 h-1.5 bg-temple-saffron rounded-full"></div>
                <span>{language === 'hi' ? 'पूर्णिमा चार्जिंग' : 'Full Moon Charging'}</span>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-serif text-lg text-temple-gold mb-6">{t('contact')}</h3>
            <div className="space-y-4 text-sm">
              <div className="flex items-start space-x-3 text-temple-sandalwood group cursor-pointer">
                <Phone className="h-4 w-4 mt-0.5 text-temple-gold group-hover:scale-110 transition-transform duration-200" />
                <div>
                  <div className="group-hover:text-temple-saffron transition-colors duration-200">+91 98765 43210</div>
                  <div className="text-xs text-temple-brown-light">{language === 'hi' ? '9 AM से 9 PM दैनिक' : '9 AM to 9 PM Daily'}</div>
                </div>
              </div>
              <div className="flex items-start space-x-3 text-temple-sandalwood group cursor-pointer">
                <Mail className="h-4 w-4 mt-0.5 text-temple-gold group-hover:scale-110 transition-transform duration-200" />
                <div className="group-hover:text-temple-saffron transition-colors duration-200">hello@sadak.com</div>
              </div>
              <div className="flex items-start space-x-3 text-temple-sandalwood">
                <MapPin className="h-4 w-4 mt-0.5 text-temple-gold" />
                <div>
                  <div>{language === 'hi' ? 'गंगा घाट के पास' : 'Near Ganga Ghat'}</div>
                  <div>{language === 'hi' ? 'हरिद्वार, उत्तराखंड 249401' : 'Haridwar, Uttarakhand 249401'}</div>
                  <div className="text-xs text-temple-brown-light">{language === 'hi' ? 'भारत' : 'India'}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative z-10 border-t border-temple-gold/20 bg-temple-brown-deep/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-temple-sandalwood">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <span>© 2024 Sadak.</span>
              <span>{language === 'hi' ? 'सभी अधिकार सुरक्षित।' : 'All rights reserved.'}</span>
              <Heart className="h-3 w-3 text-temple-rose animate-diya-pulse" />
            </div>
            <div className="flex flex-wrap justify-center md:justify-end space-x-6">
              <Link to="/privacy" className="hover:text-temple-saffron transition-colors duration-200">
                {language === 'hi' ? 'गोपनीयता नीति' : 'Privacy Policy'}
              </Link>
              <Link to="/terms" className="hover:text-temple-saffron transition-colors duration-200">
                {language === 'hi' ? 'नियम और शर्तें' : 'Terms & Conditions'}
              </Link>
              <Link to="/shipping" className="hover:text-temple-saffron transition-colors duration-200">
                {language === 'hi' ? 'शिपिंग नीति' : 'Shipping Policy'}
              </Link>
              <Link to="/returns" className="hover:text-temple-saffron transition-colors duration-200">
                {language === 'hi' ? 'वापसी नीति' : 'Return Policy'}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
