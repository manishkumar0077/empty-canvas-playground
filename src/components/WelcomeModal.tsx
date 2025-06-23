import React from 'react';
import { X, Sparkles, Star } from 'lucide-react';

interface WelcomeModalProps {
  isOpen: boolean;
  onClose: () => void;
  userName: string;
}

const WelcomeModal: React.FC<WelcomeModalProps> = ({ isOpen, onClose, userName }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-gradient-to-br from-temple-cream via-temple-sandalwood-light to-temple-gold-pale rounded-3xl p-8 max-w-md w-full relative overflow-hidden border border-temple-gold/30 shadow-temple-lg">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-4 left-4 w-16 h-16 bg-temple-gold/10 rounded-full animate-float-gentle"></div>
          <div className="absolute bottom-4 right-4 w-12 h-12 bg-temple-saffron/10 rounded-full animate-float-gentle" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 right-8 w-8 h-8 bg-temple-kumkum/10 rounded-full animate-float-gentle" style={{animationDelay: '2s'}}></div>
        </div>

        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-temple-brown-light hover:text-temple-brown-deep hover:bg-temple-gold-pale rounded-full transition-colors z-10"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="relative z-10 text-center">
          {/* Sacred Symbol */}
          <div className="flex items-center justify-center mb-6">
            <div className="relative">
              <div className="w-20 h-20 bg-gradient-to-br from-temple-gold to-temple-saffron rounded-full flex items-center justify-center shadow-gold-glow animate-diya-pulse">
                <span className="text-white font-serif text-3xl font-bold">🕉️</span>
              </div>
              <div className="absolute -top-1 -right-1 w-6 h-6 bg-temple-kumkum rounded-full animate-diya-pulse"></div>
              <div className="absolute -bottom-1 -left-1 w-4 h-4 bg-temple-rose rounded-full animate-diya-pulse" style={{animationDelay: '1s'}}></div>
            </div>
          </div>

          {/* Welcome Message */}
          <div className="mb-6">
            <h2 className="font-serif text-3xl text-temple-brown-deep mb-3">
              स्वागतम्, {userName}!
            </h2>
            <p className="text-temple-brown-medium font-medium text-lg mb-4">
              Welcome to Your Sacred Journey
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
              "आत्मा को स्मरण रहता है कि वह क्या पहनती है।"
            </blockquote>
            <p className="text-sm text-temple-brown-light">
              The soul remembers what it wears
            </p>
          </div>

          {/* Blessing Message */}
          <div className="space-y-3 text-temple-brown-medium">
            <p className="leading-relaxed">
              Your spiritual journey with sacred adornments begins now. 
              May each piece you choose bring divine blessings and positive energy to your life.
            </p>
            <div className="flex items-center justify-center space-x-2 text-temple-gold">
              <Star className="h-4 w-4 animate-diya-pulse" />
              <Sparkles className="h-5 w-5 animate-diya-pulse" style={{animationDelay: '0.5s'}} />
              <Star className="h-4 w-4 animate-diya-pulse" style={{animationDelay: '1s'}} />
            </div>
          </div>

          {/* Continue Button */}
          <button
            onClick={onClose}
            className="mt-6 bg-gradient-to-r from-temple-saffron to-temple-gold hover:from-temple-gold hover:to-temple-saffron text-white py-3 px-8 rounded-full font-medium transition-all duration-300 hover:shadow-gold-glow hover:scale-105"
          >
            Begin Sacred Shopping
          </button>
        </div>
      </div>
    </div>
  );
};

export default WelcomeModal;