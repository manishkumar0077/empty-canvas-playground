import React, { useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { Star, Heart, Share2, ShoppingBag, Sparkles, Shield, Gift, Zap, ArrowLeft } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { useLanguage } from '../context/LanguageContext';
import { products } from '../data/products';
import AuthGuard from '../components/AuthGuard';

const ProductPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { isAuthenticated } = useAuth();
  const { language } = useLanguage();
  
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedBlessings, setSelectedBlessings] = useState<string[]>([]);
  const [showAuthGuard, setShowAuthGuard] = useState(false);

  const product = products.find(p => p.id === parseInt(id || '0'));

  if (!product) {
    return (
      <div className="min-h-screen bg-temple-ivory flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-serif text-temple-brown-deep mb-4">Product Not Found</h1>
          <Link to="/collections" className="text-temple-saffron hover:text-temple-gold">
            Back to Collections
          </Link>
        </div>
      </div>
    );
  }

  const handleBlessingToggle = (blessingId: string) => {
    setSelectedBlessings(prev => 
      prev.includes(blessingId) 
        ? prev.filter(id => id !== blessingId)
        : [...prev, blessingId]
    );
  };

  const totalBlessingPrice = selectedBlessings.reduce((total, id) => {
    const blessing = product.blessings.find(b => b.id === id);
    return total + (blessing?.price || 0);
  }, 0);

  const totalPrice = (product.price + totalBlessingPrice) * quantity;

  const handleAddToCart = () => {
    if (!isAuthenticated) {
      setShowAuthGuard(true);
      return;
    }

    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      selectedBlessings,
      blessings: product.blessings
    });

    // Show success message or redirect
    navigate('/cart');
  };

  if (showAuthGuard) {
    return (
      <AuthGuard message={language === 'hi' ? 'कार्ट में जोड़ने के लिए कृपया साइन इन करें' : 'Please sign in to add items to cart'}>
        <div></div>
      </AuthGuard>
    );
  }

  return (
    <div className="min-h-screen bg-temple-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center space-x-2 text-temple-brown-deep hover:text-temple-saffron mb-6 transition-colors"
        >
          <ArrowLeft className="h-5 w-5" />
          <span>{language === 'hi' ? 'वापस जाएं' : 'Go Back'}</span>
        </button>

        {/* Breadcrumb */}
        <nav className="flex space-x-2 text-sm text-temple-brown-deep/70 mb-8">
          <Link to="/" className="hover:text-temple-kumkum">{language === 'hi' ? 'होम' : 'Home'}</Link>
          <span>/</span>
          <Link to="/collections" className="hover:text-temple-kumkum">{language === 'hi' ? 'संग्रह' : 'Collections'}</Link>
          <span>/</span>
          <Link to={`/collections/deity/${product.deity.toLowerCase()}`} className="hover:text-temple-kumkum">{product.deity}</Link>
          <span>/</span>
          <span className="text-temple-brown-deep">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Images */}
          <div className="space-y-4">
            <div className="aspect-square bg-white rounded-xl overflow-hidden shadow-lg border border-temple-gold/20">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-3 gap-4">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square bg-white rounded-lg overflow-hidden border-2 transition-all ${
                    selectedImage === index ? 'border-temple-gold' : 'border-temple-gold/20'
                  }`}
                >
                  <img src={image} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center space-x-2 mb-2">
                <span className="bg-temple-kumkum text-white px-2 py-1 rounded text-xs">{product.blessing}</span>
                <span className="bg-temple-gold-light text-temple-brown-deep px-2 py-1 rounded text-xs">{product.deity}</span>
                {product.isNew && (
                  <span className="bg-temple-saffron text-white px-2 py-1 rounded text-xs">
                    {language === 'hi' ? 'नया' : 'New'}
                  </span>
                )}
              </div>
              <h1 className="font-serif text-3xl text-temple-brown-deep mb-2">{product.name}</h1>
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < Math.floor(product.rating)
                          ? 'text-temple-saffron fill-current'
                          : 'text-temple-sandalwood'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-temple-brown-deep">
                  ({product.rating}) • {product.reviews} {language === 'hi' ? 'समीक्षाएं' : 'reviews'}
                </span>
              </div>
              <div className="flex items-baseline space-x-3">
                <span className="text-3xl font-bold text-temple-brown-deep">₹{product.price.toLocaleString()}</span>
                <span className="text-xl text-temple-brown-deep/50 line-through">₹{product.originalPrice.toLocaleString()}</span>
                <span className="bg-temple-saffron text-white px-2 py-1 rounded text-sm">
                  {Math.round((1 - product.price / product.originalPrice) * 100)}% {language === 'hi' ? 'छूट' : 'OFF'}
                </span>
              </div>
              
              {!product.inStock && (
                <div className="mt-4 p-3 bg-red-100 border border-red-300 rounded-lg">
                  <p className="text-red-700 font-medium">
                    {language === 'hi' ? 'स्टॉक में नहीं' : 'Out of Stock'}
                  </p>
                </div>
              )}
            </div>

            {/* Description */}
            <div className="bg-temple-gold-pale/20 rounded-xl p-4">
              <p className="text-temple-brown-medium leading-relaxed">{product.description}</p>
            </div>

            {/* Blessing Options */}
            <div className="bg-white rounded-xl p-6 border border-temple-gold/20">
              <h3 className="font-medium text-temple-brown-deep mb-4 flex items-center">
                <Sparkles className="h-5 w-5 mr-2 text-temple-gold" />
                {language === 'hi' ? 'आशीर्वाद विकल्प' : 'Blessing Options'}
              </h3>
              <div className="space-y-3">
                {product.blessings.map((blessing) => (
                  <label key={blessing.id} className="flex items-start space-x-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={selectedBlessings.includes(blessing.id)}
                      onChange={() => handleBlessingToggle(blessing.id)}
                      className="mt-1 rounded border-temple-gold/40 text-temple-kumkum focus:ring-temple-gold/30"
                    />
                    <div className="flex-1">
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="font-medium text-temple-brown-deep">{blessing.name}</p>
                          <p className="text-sm text-temple-brown-deep/70">{blessing.description}</p>
                        </div>
                        <span className="text-temple-kumkum font-medium">+₹{blessing.price}</span>
                      </div>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            {/* Quantity & Add to Cart */}
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <label className="text-temple-brown-deep font-medium">
                  {language === 'hi' ? 'मात्रा:' : 'Quantity:'}
                </label>
                <div className="flex items-center border border-temple-gold/20 rounded-lg">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-3 py-2 text-temple-brown-deep hover:bg-temple-gold-light transition-colors"
                  >
                    -
                  </button>
                  <span className="px-4 py-2 text-temple-brown-deep">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-3 py-2 text-temple-brown-deep hover:bg-temple-gold-light transition-colors"
                  >
                    +
                  </button>
                </div>
              </div>

              {totalBlessingPrice > 0 && (
                <div className="bg-temple-gold-light/30 rounded-lg p-4">
                  <p className="text-temple-brown-deep font-medium mb-2">
                    {language === 'hi' ? 'चयनित आशीर्वाद:' : 'Selected Blessings:'}
                  </p>
                  {selectedBlessings.map(id => {
                    const blessing = product.blessings.find(b => b.id === id);
                    return blessing ? (
                      <div key={id} className="flex justify-between text-sm text-temple-brown-deep">
                        <span>{blessing.name}</span>
                        <span>₹{blessing.price}</span>
                      </div>
                    ) : null;
                  })}
                  <div className="border-t border-temple-gold/30 mt-2 pt-2 flex justify-between font-medium">
                    <span>{language === 'hi' ? 'कुल आशीर्वाद:' : 'Total Blessings:'}</span>
                    <span>₹{totalBlessingPrice}</span>
                  </div>
                </div>
              )}

              <div className="bg-temple-sandalwood/20 rounded-lg p-4">
                <div className="flex justify-between items-center text-lg font-semibold text-temple-brown-deep">
                  <span>{language === 'hi' ? 'कुल मूल्य:' : 'Total Price:'}</span>
                  <span>₹{totalPrice.toLocaleString()}</span>
                </div>
              </div>

              <div className="flex space-x-4">
                <button 
                  onClick={handleAddToCart}
                  disabled={!product.inStock}
                  className="flex-1 bg-temple-saffron hover:bg-temple-saffron/90 text-white py-4 px-6 rounded-lg font-medium text-lg transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <ShoppingBag className="h-5 w-5" />
                  <span>
                    {product.inStock 
                      ? (language === 'hi' ? 'आशीर्वाद के साथ खरीदें' : 'Add Sacred Blessing')
                      : (language === 'hi' ? 'स्टॉक में नहीं' : 'Out of Stock')
                    }
                  </span>
                </button>
                <button className="p-4 border-2 border-temple-gold text-temple-brown-deep hover:bg-temple-gold hover:text-white rounded-lg transition-colors">
                  <Heart className="h-6 w-6" />
                </button>
                <button className="p-4 border-2 border-temple-gold text-temple-brown-deep hover:bg-temple-gold hover:text-white rounded-lg transition-colors">
                  <Share2 className="h-6 w-6" />
                </button>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { 
                  icon: Shield, 
                  text: language === 'hi' ? 'शिपिंग से पहले पवित्रीकृत' : 'Blessed Before Shipping' 
                },
                { 
                  icon: Gift, 
                  text: language === 'hi' ? 'निःशुल्क उपहार लपेटन' : 'Free Gift Wrapping' 
                },
                { 
                  icon: Zap, 
                  text: language === 'hi' ? '7 दिन की वापसी नीति' : '7 Day Return Policy' 
                },
                { 
                  icon: Sparkles, 
                  text: language === 'hi' ? 'आजीवन ऊर्जा गारंटी' : 'Lifetime Energy Guarantee' 
                }
              ].map((badge, index) => (
                <div key={index} className="flex items-center space-x-2 text-sm text-temple-brown-deep">
                  <badge.icon className="h-4 w-4 text-temple-gold" />
                  <span>{badge.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="mt-16">
          <div className="bg-white rounded-xl border border-temple-gold/20 overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-4 text-center border-b border-temple-gold/20">
              {[
                language === 'hi' ? 'आध्यात्मिक महत्व' : 'Spiritual Significance',
                language === 'hi' ? 'मूल और शिल्प' : 'Origin & Craft',
                language === 'hi' ? 'मंत्र निर्देश' : 'Mantra Instructions',
                language === 'hi' ? 'देखभाल और सफाई' : 'Care & Cleaning'
              ].map((tab, index) => (
                <button
                  key={index}
                  className={`py-4 px-6 font-medium transition-colors ${
                    index === 0 
                      ? 'bg-temple-gold text-white' 
                      : 'text-temple-brown-deep hover:bg-temple-gold-light/30'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
            <div className="p-8">
              <div className="prose max-w-none">
                <h3 className="font-serif text-xl text-temple-brown-deep mb-4">
                  {language === 'hi' ? 'आध्यात्मिक महत्व' : 'Spiritual Significance'}
                </h3>
                <p className="text-temple-brown-deep/80 mb-6 leading-relaxed">
                  {product.description}
                </p>
                
                <h4 className="font-medium text-temple-brown-deep mb-3">
                  {language === 'hi' ? 'विनिर्देश:' : 'Specifications:'}
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  {Object.entries(product.specifications).map(([key, value]) => (
                    <div key={key} className="flex justify-between py-2 border-b border-temple-gold/10">
                      <span className="text-temple-brown-deep/70 capitalize">
                        {key === 'metal' && (language === 'hi' ? 'धातु' : 'Metal')}
                        {key === 'stone' && (language === 'hi' ? 'पत्थर' : 'Stone')}
                        {key === 'size' && (language === 'hi' ? 'आकार' : 'Size')}
                        {key === 'weight' && (language === 'hi' ? 'वजन' : 'Weight')}
                        {key === 'chain' && (language === 'hi' ? 'चेन' : 'Chain')}
                      </span>
                      <span className="text-temple-brown-deep font-medium">{value}</span>
                    </div>
                  ))}
                </div>

                <div className="bg-temple-gold-light/20 rounded-lg p-6">
                  <h4 className="font-medium text-temple-brown-deep mb-3 flex items-center">
                    <Sparkles className="h-5 w-5 mr-2 text-temple-gold" />
                    {language === 'hi' ? 'दैनिक मंत्र' : 'Daily Mantra'}
                  </h4>
                  <p className="text-temple-brown-deep/80 italic font-serif text-lg">
                    "ॐ श्रीं ह्रीं श्रीं कमले कमलालये प्रसीद प्रसीद ॐ श्रीं ह्रीं श्रीं महालक्ष्म्यै नमः॥"
                  </p>
                  <p className="text-sm text-temple-brown-deep/70 mt-2">
                    {language === 'hi' 
                      ? 'इस मंत्र का जाप करते समय अपने लटकन को स्पर्श करें।'
                      : 'Touch your pendant while chanting this mantra.'
                    }
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;