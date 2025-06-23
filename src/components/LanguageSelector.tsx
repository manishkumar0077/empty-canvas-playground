import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Globe } from 'lucide-react';

const LanguageSelector = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="fixed top-4 right-4 z-50 bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-temple border border-temple-gold/20">
      <div className="flex items-center space-x-2">
        <Globe className="h-4 w-4 text-temple-gold" />
        <button
          onClick={() => setLanguage('en')}
          className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
            language === 'en'
              ? 'bg-temple-gold text-white'
              : 'text-temple-brown-deep hover:bg-temple-gold-pale'
          }`}
        >
          EN
        </button>
        <button
          onClick={() => setLanguage('hi')}
          className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
            language === 'hi'
              ? 'bg-temple-gold text-white'
              : 'text-temple-brown-deep hover:bg-temple-gold-pale'
          }`}
        >
          हिं
        </button>
      </div>
    </div>
  );
};

export default LanguageSelector;