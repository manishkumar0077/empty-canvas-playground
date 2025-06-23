import React from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { ShoppingBag, Sparkles, ArrowRight } from 'lucide-react';

interface AuthGuardProps {
  children: React.ReactNode;
  message?: string;
}

const AuthGuard: React.FC<AuthGuardProps> = ({ children, message = "Please sign in to continue your sacred journey" }) => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-temple-ivory flex items-center justify-center p-4">
        <div className="max-w-md w-full text-center">
          <div className="bg-white/80 backdrop-blur-md rounded-3xl shadow-temple-lg p-8 border border-temple-gold/20">
            {/* Sacred Symbol */}
            <div className="flex items-center justify-center mb-6">
              <div className="relative">
                <div className="w-20 h-20 bg-gradient-to-br from-temple-gold to-temple-saffron rounded-full flex items-center justify-center shadow-gold-glow">
                  <ShoppingBag className="h-10 w-10 text-white" />
                </div>
                <div className="absolute -top-1 -right-1 w-6 h-6 bg-temple-kumkum rounded-full animate-diya-pulse"></div>
              </div>
            </div>

            {/* Sacred Quote */}
            <div className="mb-6">
              <blockquote className="font-serif text-2xl text-temple-brown-deep italic mb-3">
                "आत्मा की यात्रा प्रामाणिकता से शुरू होती है।"
              </blockquote>
              <p className="text-sm text-temple-brown-light">
                The soul's journey begins with authenticity
              </p>
            </div>

            {/* Message */}
            <p className="text-temple-brown-medium mb-6 leading-relaxed">
              {message}
            </p>

            {/* Decorative Line */}
            <div className="flex items-center justify-center space-x-2 mb-6">
              <div className="h-px bg-gradient-to-r from-transparent via-temple-gold to-transparent w-12"></div>
              <Sparkles className="h-4 w-4 text-temple-gold animate-diya-pulse" />
              <div className="h-px bg-gradient-to-r from-transparent via-temple-gold to-transparent w-12"></div>
            </div>

            {/* Sign In Button */}
            <button
              onClick={() => navigate('/login')}
              className="w-full bg-gradient-to-r from-temple-saffron to-temple-gold hover:from-temple-gold hover:to-temple-saffron text-white py-4 px-6 rounded-xl font-medium text-lg transition-all duration-300 hover:shadow-gold-glow hover:scale-105 flex items-center justify-center space-x-2"
            >
              <span>Enter Sacred Space</span>
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    );
  }

  return <>{children}</>;
};

export default AuthGuard;