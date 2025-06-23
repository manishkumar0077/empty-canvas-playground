import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Eye, EyeOff, Sparkles, ArrowRight, Star } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useLanguage } from '../context/LanguageContext';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    name: '',
    phone: ''
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const { login } = useAuth();
  const { language } = useLanguage();
  const navigate = useNavigate();

  const dharmaQuotes = {
    login: [
      "आत्मा की यात्रा प्रामाणिकता से शुरू होती है।",
      "सत्य का मार्ग ही मोक्ष का द्वार है।",
      "जो अपने को जानता है, वह ब्रह्म को जानता है।",
      "आंतरिक शुद्धता ही बाहरी सुंदरता है।"
    ],
    signup: [
      "नई शुरुआत, नया आशीर्वाद।",
      "हर यात्रा एक कदम से शुरू होती है।",
      "आत्मा का स्वागत करें, नया जन्म लें।",
      "दिव्यता की खोज यहीं से शुरू होती है।"
    ]
  };

  const [currentQuote, setCurrentQuote] = useState(0);

  React.useEffect(() => {
    const quotes = isLogin ? dharmaQuotes.login : dharmaQuotes.signup;
    const timer = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [isLogin]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      if (isLogin) {
        const success = await login(formData.email, formData.password);
        if (success) {
          navigate('/');
        } else {
          setError(language === 'hi' ? 'गलत ईमेल या पासवर्ड' : 'Invalid email or password. Try: sadak / sadak');
        }
      } else {
        // For demo, just switch to login
        setIsLogin(true);
        setError('');
      }
    } catch (err) {
      setError(language === 'hi' ? 'कुछ गलत हुआ है' : 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const quotes = isLogin ? dharmaQuotes.login : dharmaQuotes.signup;

  return (
    <div className="min-h-screen bg-gradient-to-br from-temple-cream via-temple-sandalwood-light to-temple-gold-pale relative overflow-hidden">
      {/* Sacred Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-temple-gold/10 rounded-full animate-float-gentle"></div>
        <div className="absolute bottom-32 right-16 w-24 h-24 bg-temple-saffron/10 rounded-full animate-float-gentle" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-temple-kumkum/10 rounded-full animate-float-gentle" style={{animationDelay: '2s'}}></div>
        
        {/* Lotus Pattern */}
        <div className="absolute inset-0 bg-lotus-pattern opacity-30"></div>
        
        {/* Sacred Geometry */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-temple-gold rounded-full animate-diya-pulse"></div>
        <div className="absolute bottom-1/4 right-1/3 w-1 h-1 bg-temple-saffron rounded-full animate-diya-pulse" style={{animationDelay: '1.5s'}}></div>
        <div className="absolute top-3/4 left-1/3 w-1.5 h-1.5 bg-temple-kumkum rounded-full animate-diya-pulse" style={{animationDelay: '2.5s'}}></div>
      </div>

      <div className="relative z-10 min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full">
          {/* Sacred Header */}
          <div className="text-center mb-8" data-aos="fade-down">
            <div className="flex items-center justify-center mb-6">
              <div className="relative">
                <div className="w-20 h-20 bg-gradient-to-br from-temple-gold to-temple-saffron rounded-full flex items-center justify-center shadow-gold-glow">
                  <span className="text-white font-serif text-3xl font-bold">स</span>
                </div>
                <div className="absolute -top-1 -right-1 w-6 h-6 bg-temple-kumkum rounded-full animate-diya-pulse"></div>
                <div className="absolute -bottom-1 -left-1 w-4 h-4 bg-temple-rose rounded-full animate-diya-pulse" style={{animationDelay: '1s'}}></div>
              </div>
            </div>
            
            {/* Sacred Welcome */}
            <div className="mb-6">
              <h1 className="font-serif text-4xl text-temple-brown-deep mb-3 bg-gradient-to-r from-temple-gold via-temple-saffron to-temple-kumkum bg-clip-text text-transparent">
                {isLogin ? 'अतिथि देवो भव:' : 'नवागत स्वागतम्'}
              </h1>
              <p className="text-temple-brown-medium font-medium text-lg mb-2">
                {isLogin ? 'The Seeker is Divine' : 'Welcome New Soul'}
              </p>
              <div className="flex items-center justify-center space-x-2 mb-4">
                <div className="h-px bg-gradient-to-r from-transparent via-temple-gold to-transparent w-12"></div>
                <Sparkles className="h-4 w-4 text-temple-gold animate-diya-pulse" />
                <div className="h-px bg-gradient-to-r from-transparent via-temple-gold to-transparent w-12"></div>
              </div>
            </div>

            {/* Rotating Dharma Quote */}
            <div className="h-12 flex items-center justify-center mb-6">
              <p className="text-temple-brown-light italic font-medium transition-all duration-500 text-center">
                {quotes[currentQuote]}
              </p>
            </div>
            
            <p className="text-temple-brown-medium">
              {isLogin 
                ? (language === 'hi' ? 'अपनी आध्यात्मिक यात्रा जारी रखें' : 'Continue your spiritual journey')
                : (language === 'hi' ? 'हमारे साथ अपना पवित्र पथ शुरू करें' : 'Begin your sacred path with us')
              }
            </p>
          </div>

          {/* Sacred Form Card */}
          <div className="bg-white/80 backdrop-blur-md rounded-3xl shadow-temple-lg p-8 border border-temple-gold/20" data-aos="fade-up" data-aos-delay="200">
            {error && (
              <div className="mb-4 p-3 bg-red-100 border border-red-300 rounded-lg text-red-700 text-sm">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {!isLogin && (
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-temple-brown-deep mb-2">
                    {language === 'hi' ? 'पूरा नाम' : 'Full Name'}
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required={!isLogin}
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-temple-gold/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-temple-gold/50 focus:border-temple-gold bg-white/50 backdrop-blur-sm transition-all duration-300"
                    placeholder={language === 'hi' ? 'अपना पूरा नाम दर्ज करें' : 'Enter your full name'}
                  />
                </div>
              )}

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-temple-brown-deep mb-2">
                  {language === 'hi' ? 'ईमेल पता' : 'Email Address'}
                </label>
                <input
                  id="email"
                  name="email"
                  type="text"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-temple-gold/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-temple-gold/50 focus:border-temple-gold bg-white/50 backdrop-blur-sm transition-all duration-300"
                  placeholder={isLogin ? "sadak" : "your@email.com"}
                />
              </div>

              {!isLogin && (
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-temple-brown-deep mb-2">
                    {language === 'hi' ? 'मोबाइल नंबर' : 'Mobile Number'}
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required={!isLogin}
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-temple-gold/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-temple-gold/50 focus:border-temple-gold bg-white/50 backdrop-blur-sm transition-all duration-300"
                    placeholder="+91 98765 43210"
                  />
                </div>
              )}

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-temple-brown-deep mb-2">
                  {language === 'hi' ? 'पासवर्ड' : 'Password'}
                </label>
                <div className="relative">
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? 'text' : 'password'}
                    required
                    value={formData.password}
                    onChange={handleChange}
                    className="w-full px-4 py-3 pr-12 border border-temple-gold/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-temple-gold/50 focus:border-temple-gold bg-white/50 backdrop-blur-sm transition-all duration-300"
                    placeholder={isLogin ? "sadak" : "••••••••"}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-temple-brown-light hover:text-temple-brown-medium transition-colors duration-200"
                  >
                    {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>
              </div>

              {!isLogin && (
                <div>
                  <label htmlFor="confirmPassword" className="block text-sm font-medium text-temple-brown-deep mb-2">
                    {language === 'hi' ? 'पासवर्ड की पुष्टि करें' : 'Confirm Password'}
                  </label>
                  <div className="relative">
                    <input
                      id="confirmPassword"
                      name="confirmPassword"
                      type={showPassword ? 'text' : 'password'}
                      required={!isLogin}
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-temple-gold/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-temple-gold/50 focus:border-temple-gold bg-white/50 backdrop-blur-sm transition-all duration-300"
                      placeholder="••••••••"
                    />
                  </div>
                </div>
              )}

              {isLogin && (
                <div className="flex items-center justify-between">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      className="rounded border-temple-gold/40 text-temple-saffron focus:ring-temple-gold/30"
                    />
                    <span className="ml-2 text-sm text-temple-brown-medium">
                      {language === 'hi' ? 'मुझे याद रखें' : 'Remember me'}
                    </span>
                  </label>
                  <Link to="/forgot-password" className="text-sm text-temple-saffron hover:text-temple-gold transition-colors duration-200">
                    {language === 'hi' ? 'पासवर्ड भूल गए?' : 'Forgot password?'}
                  </Link>
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-temple-saffron to-temple-gold hover:from-temple-gold hover:to-temple-saffron text-white py-4 px-6 rounded-xl font-medium text-lg transition-all duration-300 hover:shadow-gold-glow hover:scale-105 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span>
                  {loading 
                    ? (language === 'hi' ? 'प्रतीक्षा करें...' : 'Please wait...')
                    : isLogin 
                      ? (language === 'hi' ? 'पवित्र स्थान में प्रवेश' : 'Enter Sacred Space')
                      : (language === 'hi' ? 'पवित्र यात्रा शुरू करें' : 'Begin Sacred Journey')
                  }
                </span>
                {!loading && <ArrowRight className="h-5 w-5" />}
              </button>
            </form>

            {/* Demo Credentials */}
            {isLogin && (
              <div className="mt-4 p-3 bg-temple-gold-pale/30 rounded-lg border border-temple-gold/20">
                <p className="text-xs text-temple-brown-medium text-center">
                  <strong>Demo Credentials:</strong> Email: sadak | Password: sadak
                </p>
              </div>
            )}

            {/* Sacred Divider */}
            <div className="relative my-8">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-temple-gold/20"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-white/80 text-temple-brown-light flex items-center space-x-2">
                  <Sparkles className="h-3 w-3 text-temple-gold" />
                  <span>{language === 'hi' ? 'या' : 'or'}</span>
                  <Sparkles className="h-3 w-3 text-temple-gold" />
                </span>
              </div>
            </div>

            {/* Social Login */}
            <div className="space-y-3">
              <button className="w-full flex items-center justify-center px-4 py-3 border border-temple-gold/30 rounded-xl text-temple-brown-deep hover:bg-temple-gold-pale/50 transition-all duration-300 group">
                <img src="https://developers.google.com/identity/images/g-logo.png" alt="Google" className="h-5 w-5 mr-3" />
                <span>{language === 'hi' ? 'Google के साथ जारी रखें' : 'Continue with Google'}</span>
              </button>
            </div>

            {/* Toggle Form */}
            <div className="mt-8 text-center">
              <p className="text-temple-brown-medium">
                {isLogin 
                  ? (language === 'hi' ? 'हमारे पवित्र समुदाय में नए हैं?' : 'New to our sacred community?')
                  : (language === 'hi' ? 'पहले से खाता है?' : 'Already have an account?')
                }{' '}
                <button
                  onClick={() => {
                    setIsLogin(!isLogin);
                    setError('');
                    setFormData({ email: '', password: '', confirmPassword: '', name: '', phone: '' });
                  }}
                  className="text-temple-saffron hover:text-temple-gold font-medium transition-colors duration-200"
                >
                  {isLogin 
                    ? (language === 'hi' ? 'खाता बनाएं' : 'Create Account')
                    : (language === 'hi' ? 'साइन इन करें' : 'Sign In')
                  }
                </button>
              </p>
            </div>
          </div>

          {/* Sacred Wisdom Footer */}
          <div className="text-center mt-8" data-aos="fade-up" data-aos-delay="400">
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-temple-gold/20">
              <div className="flex items-center justify-center space-x-2 mb-3">
                <Star className="h-4 w-4 text-temple-gold animate-diya-pulse" />
                <Sparkles className="h-5 w-5 text-temple-saffron animate-diya-pulse" style={{animationDelay: '0.5s'}} />
                <Star className="h-4 w-4 text-temple-gold animate-diya-pulse" style={{animationDelay: '1s'}} />
              </div>
              <blockquote className="font-serif text-temple-brown-deep italic text-lg">
                "आत्मा को स्मरण रहता है कि वह क्या पहनती है।"
              </blockquote>
              <p className="text-sm text-temple-brown-light mt-2">
                The soul remembers what it wears
              </p>
            </div>
          </div>

          {/* Sacred Elements */}
          <div className="absolute top-8 left-8 opacity-20">
            <Sparkles className="h-8 w-8 text-temple-gold animate-float-gentle" />
          </div>
          <div className="absolute bottom-8 right-8 opacity-20">
            <Sparkles className="h-6 w-6 text-temple-saffron animate-float-gentle" style={{animationDelay: '1s'}} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;