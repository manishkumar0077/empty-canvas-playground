import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Star, Shield, Gift, Users, ArrowRight, Sparkles, Heart, Eye, ShoppingBag } from 'lucide-react';

const Homepage = () => {
  const [currentQuote, setCurrentQuote] = useState(0);

  const quotes = [
    "आत्मा को स्मरण रहता है कि वह क्या पहनती है।",
    "धातु और मंत्र मिलकर बनाते हैं असली आभूषण।",
    "जो भी श्रद्धा से पहना जाए, वह दिव्य हो जाता है।",
    "सच्चा अलंकार वह है जो आत्मा को सुशोभित करे।"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const deities = [
    {
      name: 'Lakshmi',
      subtitle: 'Abundance & Prosperity',
      image: 'https://images.pexels.com/photos/3714743/pexels-photo-3714743.jpeg?auto=compress&cs=tinysrgb&w=400',
      count: '25+ Products',
      color: 'from-temple-gold to-temple-saffron',
    },
    {
      name: 'Shiva',
      subtitle: 'Peace & Meditation',
      image: 'https://images.pexels.com/photos/8471811/pexels-photo-8471811.jpeg?auto=compress&cs=tinysrgb&w=400',
      count: '18+ Products',
      color: 'from-temple-sandalwood to-temple-gold-light',
    },
    {
      name: 'Durga',
      subtitle: 'Strength & Protection',
      image: 'https://images.pexels.com/photos/6045104/pexels-photo-6045104.jpeg?auto=compress&cs=tinysrgb&w=400',
      count: '22+ Products',
      color: 'from-temple-kumkum to-temple-rose',
    },
    {
      name: 'Ganesha',
      subtitle: 'Wisdom & New Beginnings',
      image: 'https://images.pexels.com/photos/12896892/pexels-photo-12896892.jpeg?auto=compress&cs=tinysrgb&w=400',
      count: '30+ Products',
      color: 'from-temple-saffron to-temple-gold',
    },
  ];

  const featuredProducts = [
    {
      id: 1,
      name: 'Lakshmi Citrine Pendant',
      price: 1999,
      originalPrice: 2499,
      image: 'https://images.pexels.com/photos/5378700/pexels-photo-5378700.jpeg?auto=compress&cs=tinysrgb&w=500',
      blessing: 'Ganga Jal Blessed',
      rating: 4.8,
      reviews: 124,
      isNew: true,
      category: 'Pendant',
    },
    {
      id: 2,
      name: 'Shiva Rudraksha Mala',
      price: 2799,
      originalPrice: 3199,
      image: 'https://images.pexels.com/photos/8112458/pexels-photo-8112458.jpeg?auto=compress&cs=tinysrgb&w=500',
      blessing: 'Vedic Chant Energized',
      rating: 4.9,
      reviews: 89,
      isNew: false,
      category: 'Mala',
    },
    {
      id: 3,
      name: 'Durga Garnet Ring',
      price: 3299,
      originalPrice: 3799,
      image: 'https://images.pexels.com/photos/1191531/pexels-photo-1191531.jpeg?auto=compress&cs=tinysrgb&w=500',
      blessing: 'Navratri Blessed',
      rating: 4.7,
      reviews: 156,
      isNew: false,
      category: 'Ring',
    },
    {
      id: 4,
      name: 'Ganesha Ivory Pendant',
      price: 1499,
      originalPrice: 1899,
      image: 'https://images.pexels.com/photos/12896892/pexels-photo-12896892.jpeg?auto=compress&cs=tinysrgb&w=500',
      blessing: 'Kumkum Wrapped',
      rating: 4.6,
      reviews: 201,
      isNew: true,
      category: 'Pendant',
    },
  ];

  return (
    <div className="bg-temple-ivory">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-temple-cream via-temple-sandalwood-light to-temple-gold-pale bg-mandala-bg overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-temple-gold/10 rounded-full animate-float-gentle"></div>
          <div className="absolute bottom-32 right-16 w-24 h-24 bg-temple-saffron/10 rounded-full animate-float-gentle" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-temple-kumkum/10 rounded-full animate-float-gentle" style={{animationDelay: '2s'}}></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div data-aos="fade-up" data-aos-delay="200">
            {/* Main Headline */}
            <div className="mb-8">
              <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-temple-brown-deep mb-4 leading-tight">
                <span className="bg-gradient-to-r from-temple-gold via-temple-saffron to-temple-kumkum bg-clip-text text-transparent">
                  Sacred
                </span>
                <br />
                Adornments
                <br />
                <span className="text-temple-brown-deep">for the Soul</span>
              </h1>
              <div className="flex items-center justify-center space-x-2 mb-6">
                <div className="h-px bg-gradient-to-r from-transparent via-temple-gold to-transparent w-16"></div>
                <Sparkles className="h-6 w-6 text-temple-gold animate-diya-pulse" />
                <div className="h-px bg-gradient-to-r from-transparent via-temple-gold to-transparent w-16"></div>
              </div>
            </div>

            {/* Rotating Quote */}
            <div className="mb-12 h-16 flex items-center justify-center" data-aos="fade-in" data-aos-delay="400">
              <p className="text-lg md:text-xl text-temple-brown-medium font-medium max-w-2xl mx-auto italic transition-all duration-500">
                "{quotes[currentQuote]}"
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16" data-aos="fade-up" data-aos-delay="600">
              <Link
                to="/collections"
                className="group bg-gradient-to-r from-temple-saffron to-temple-gold hover:from-temple-gold hover:to-temple-saffron text-white px-10 py-4 rounded-full font-medium text-lg transition-all duration-500 hover:shadow-gold-glow hover:scale-105 flex items-center space-x-3 min-w-[200px] justify-center"
              >
                <span>Explore Collections</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              <Link
                to="/collections/deities"
                className="group border-2 border-temple-gold text-temple-brown-deep hover:bg-temple-gold hover:text-white px-10 py-4 rounded-full font-medium text-lg transition-all duration-500 hover:shadow-temple-lg hover:scale-105 min-w-[200px]"
              >
                Shop by Deity
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto" data-aos="fade-up" data-aos-delay="800">
              {[
                { icon: Shield, text: 'Blessed Before Shipping', color: 'text-temple-gold' },
                { icon: Sparkles, text: 'Vedic Mantra Charged', color: 'text-temple-saffron' },
                { icon: Gift, text: 'Free Sacred Gift Box', color: 'text-temple-kumkum' },
                { icon: Users, text: '50,000+ Devotees', color: 'text-temple-brown-medium' }
              ].map((item, index) => (
                <div key={index} className="flex flex-col items-center space-y-3 group">
                  <div className="p-4 bg-white/60 backdrop-blur-sm rounded-full group-hover:bg-white/80 transition-all duration-300 group-hover:scale-110">
                    <item.icon className={`h-6 w-6 ${item.color}`} />
                  </div>
                  <span className="text-sm font-medium text-temple-brown-deep text-center">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Shop by Deity Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="font-serif text-4xl md:text-5xl text-temple-brown-deep mb-6">
              Divine Collections
            </h2>
            <div className="flex items-center justify-center space-x-4 mb-6">
              <div className="h-px bg-gradient-to-r from-transparent via-temple-gold to-transparent w-24"></div>
              <div className="w-2 h-2 bg-temple-gold rounded-full"></div>
              <div className="h-px bg-gradient-to-r from-transparent via-temple-gold to-transparent w-24"></div>
            </div>
            <p className="text-lg text-temple-brown-medium max-w-2xl mx-auto leading-relaxed">
              Sacred jewelry crafted with devotion for each divine energy
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {deities.map((deity, index) => (
              <Link
                key={index}
                to={`/collections/deity/${deity.name.toLowerCase()}`}
                className="group relative overflow-hidden rounded-2xl bg-white shadow-temple hover:shadow-temple-lg transition-all duration-500 hover:-translate-y-3"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="aspect-[4/5] overflow-hidden relative">
                  <img
                    src={deity.image}
                    alt={deity.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${deity.color} opacity-60`}></div>
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-temple-brown-deep/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="font-serif text-xl mb-2 group-hover:scale-105 transition-transform duration-300">{deity.name}</h3>
                  <p className="text-temple-gold-pale text-sm mb-2 font-medium">{deity.subtitle}</p>
                  <p className="text-xs opacity-90">{deity.count}</p>
                </div>
                
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="p-2 bg-white/20 backdrop-blur-sm rounded-full">
                    <ArrowRight className="h-5 w-5 text-white" />
                  </div>
                </div>

                {/* Decorative Element */}
                <div className="absolute top-4 left-4 opacity-20 group-hover:opacity-40 transition-opacity duration-300">
                  <Sparkles className="h-6 w-6 text-white" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-temple-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="font-serif text-4xl md:text-5xl text-temple-brown-deep mb-6">
              Sacred Bestsellers
            </h2>
            <div className="flex items-center justify-center space-x-4 mb-6">
              <div className="h-px bg-gradient-to-r from-transparent via-temple-gold to-transparent w-24"></div>
              <div className="w-2 h-2 bg-temple-gold rounded-full"></div>
              <div className="h-px bg-gradient-to-r from-transparent via-temple-gold to-transparent w-24"></div>
            </div>
            <p className="text-lg text-temple-brown-medium max-w-2xl mx-auto leading-relaxed">
              Most beloved and powerful pieces that enhance your spiritual journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product, index) => (
              <div
                key={product.id}
                className="group bg-white rounded-2xl shadow-temple hover:shadow-temple-lg transition-all duration-500 overflow-hidden hover:-translate-y-2"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="aspect-square overflow-hidden relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  
                  {/* Badges */}
                  <div className="absolute top-4 left-4 flex flex-col space-y-2">
                    {product.isNew && (
                      <span className="bg-temple-kumkum text-white px-2 py-1 rounded-full text-xs font-medium">
                        New
                      </span>
                    )}
                    <span className="bg-temple-saffron/90 backdrop-blur-sm text-white px-2 py-1 rounded-full text-xs">
                      {product.blessing}
                    </span>
                  </div>

                  {/* Quick Actions */}
                  <div className="absolute top-4 right-4 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors duration-200">
                      <Heart className="h-4 w-4 text-temple-brown-deep hover:text-temple-rose" />
                    </button>
                    <button className="p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors duration-200">
                      <Eye className="h-4 w-4 text-temple-brown-deep" />
                    </button>
                  </div>

                  {/* Discount Badge */}
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-temple-gold text-white px-2 py-1 rounded-full text-xs font-bold">
                      {Math.round((1 - product.price / product.originalPrice) * 100)}% OFF
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  {/* Category */}
                  <span className="text-xs text-temple-brown-light font-medium bg-temple-gold-pale px-2 py-1 rounded-full">
                    {product.category}
                  </span>
                  
                  <h3 className="font-serif text-lg text-temple-brown-deep mt-3 mb-2 group-hover:text-temple-saffron transition-colors duration-300">
                    {product.name}
                  </h3>
                  
                  {/* Rating */}
                  <div className="flex items-center space-x-2 mb-3">
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < Math.floor(product.rating)
                              ? 'text-temple-saffron fill-current'
                              : 'text-temple-sandalwood'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-temple-brown-light">({product.reviews})</span>
                  </div>
                  
                  {/* Price */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-baseline space-x-2">
                      <span className="text-xl font-bold text-temple-brown-deep">₹{product.price.toLocaleString()}</span>
                      <span className="text-sm text-temple-brown-light line-through">₹{product.originalPrice.toLocaleString()}</span>
                    </div>
                  </div>

                  {/* Add to Cart Button */}
                  <Link
                    to={`/product/${product.id}`}
                    className="w-full bg-gradient-to-r from-temple-saffron to-temple-gold hover:from-temple-gold hover:to-temple-saffron text-white py-3 px-4 rounded-xl font-medium transition-all duration-300 hover:shadow-gold-glow flex items-center justify-center space-x-2 group/btn"
                  >
                    <ShoppingBag className="h-4 w-4 group-hover/btn:scale-110 transition-transform duration-300" />
                    <span>Add Sacred Blessing</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12" data-aos="fade-up" data-aos-delay="400">
            <Link
              to="/collections"
              className="inline-flex items-center space-x-2 bg-temple-brown-deep hover:bg-temple-brown-medium text-white px-8 py-4 rounded-full font-medium text-lg transition-all duration-300 hover:shadow-temple-lg hover:scale-105"
            >
              <span>View All Sacred Pieces</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Sacred Promise Section */}
      <section className="py-20 bg-gradient-to-br from-temple-sandalwood-light via-temple-gold-pale to-temple-cream relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-lotus-pattern opacity-50"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center" data-aos="fade-up">
          <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-12 shadow-temple-lg">
            <Sparkles className="h-16 w-16 text-temple-gold mx-auto mb-8 animate-diya-pulse" />
            
            <h2 className="font-serif text-4xl md:text-5xl text-temple-brown-deep mb-8">
              Our Sacred Promise
            </h2>
            
            <div className="space-y-6 text-lg text-temple-brown-medium leading-relaxed mb-8">
              <p>
                We never sell anything unblessed. Every piece is purified with Ganga Jal, 
                energized with Vedic mantras, and reaches you with divine grace.
              </p>
              <p>
                This isn't just jewelry. It's your spiritual companion, crafted with devotion 
                and blessed with ancient wisdom.
              </p>
            </div>
            
            <blockquote className="font-serif text-3xl md:text-4xl text-temple-saffron italic mb-8 font-bold">
              "धातु + मंत्र = दिव्य आभूषण"
            </blockquote>
            
            <div className="flex items-center justify-center space-x-4">
              <div className="h-px bg-gradient-to-r from-transparent via-temple-gold to-transparent w-16"></div>
              <span className="text-2xl">🕉️</span>
              <div className="h-px bg-gradient-to-r from-transparent via-temple-gold to-transparent w-16"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;