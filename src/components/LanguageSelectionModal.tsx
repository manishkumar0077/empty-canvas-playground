import React, { useState } from 'react';
import { Globe, Sparkles, Star } from 'lucide-react';

interface LanguageSelectionModalProps {
  isOpen: boolean;
  onLanguageSelect: (language: 'en' | 'hi') => void;
}

const LanguageSelectionModal: React.FC<LanguageSelectionModalProps> = ({ isOpen, onLanguageSelect }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-gradient-to-br from-temple-cream via-temple-sandalwood-light to-temple-gold-pale rounded-3xl p-8 max-w-md w-full relative overflow-hidden border border-temple-gold/30 shadow-temple-lg">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-4 left-4 w-16 h-16 bg-temple-gold/10 rounded-full animate-float-gentle"></div>
          <div className="absolute bottom-4 right-4 w-12 h-12 bg-temple-saffron/10 rounded-full animate-float-gentle" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 right-8 w-8 h-8 bg-temple-kumkum/10 rounded-full animate-float-gentle" style={{animationDelay: '2s'}}></div>
        </div>

        <div className="relative z-10 text-center">
          {/* Sacred Symbol */}
          <div className="flex items-center justify-center mb-6">
            <div className="relative">
              <div className="w-20 h-20 bg-gradient-to-br from-temple-gold to-temple-saffron rounded-full flex items-center justify-center shadow-gold-glow animate-diya-pulse">
                <Globe className="h-10 w-10 text-white" />
              </div>
              <div className="absolute -top-1 -right-1 w-6 h-6 bg-temple-kumkum rounded-full animate-diya-pulse"></div>
              <div className="absolute -bottom-1 -left-1 w-4 h-4 bg-temple-rose rounded-full animate-diya-pulse" style={{animationDelay: '1s'}}></div>
            </div>
          </div>

          {/* Welcome Message */}
          <div className="mb-6">
            <h2 className="font-serif text-3xl text-temple-brown-deep mb-3">
              स्वागतम् | Welcome
            </h2>
            <p className="text-temple-brown-medium font-medium text-lg mb-4">
              Choose Your Sacred Language
            </p>
            
            {/* Decorative Line */}
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="h-px bg-gradient-to-r from-transparent via-temple-gold to-transparent w-12"></div>
              <Sparkles className="h-4 w-4 text-temple-gold animate-diya-pulse" />
              <div className="h-px bg-gradient-to-r from-transparent via-temple-gold to-transparent w-12"></div>
            </div>
          </div>

          {/* Sacred Quote */}
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 mb-6 border border-temple-gold/20">
            <blockquote className="font-serif text-xl text-temple-brown-deep italic mb-3">
              "भाषा आत्मा की अभिव्यक्ति है।"
            </blockquote>
            <p className="text-sm text-temple-brown-light">
              Language is the expression of the soul
            </p>
          </div>

          {/* Language Selection Buttons */}
          <div className="space-y-4">
            <button
              onClick={() => onLanguageSelect('hi')}
              className="w-full bg-gradient-to-r from-temple-saffron to-temple-gold hover:from-temple-gold hover:to-temple-saffron text-white py-4 px-6 rounded-xl font-medium text-lg transition-all duration-300 hover:shadow-gold-glow hover:scale-105 flex items-center justify-center space-x-3"
            >
              <span className="text-2xl">🕉️</span>
              <span>हिंदी में जारी रखें</span>
            </button>
            
            <button
              onClick={() => onLanguageSelect('en')}
              className="w-full border-2 border-temple-gold text-temple-brown-deep hover:bg-temple-gold hover:text-white py-4 px-6 rounded-xl font-medium text-lg transition-all duration-300 hover:shadow-temple-lg hover:scale-105 flex items-center justify-center space-x-3"
            >
              <span className="text-2xl">🌸</span>
              <span>Continue in English</span>
            </button>
          </div>

          {/* Sacred Elements */}
          <div className="flex items-center justify-center space-x-2 text-temple-gold mt-6">
            <Star className="h-4 w-4 animate-diya-pulse" />
            <Sparkles className="h-5 w-5 animate-diya-pulse" style={{animationDelay: '0.5s'}} />
            <Star className="h-4 w-4 animate-diya-pulse" style={{animationDelay: '1s'}} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LanguageSelectionModal;