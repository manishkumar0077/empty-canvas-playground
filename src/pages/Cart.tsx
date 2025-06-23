import { Link, useNavigate } from 'react-router-dom';
import { Minus, Plus, X, Sparkles, ShoppingBag, ArrowRight, Heart } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { useLanguage } from '../context/LanguageContext';

const Cart = () => {
  const { items, updateQuantity, removeFromCart, totalPrice } = useCart();
  const { isAuthenticated } = useAuth();
  const { language } = useLanguage();
  const navigate = useNavigate();

  const shipping = totalPrice > 1999 ? 0 : 149;
  const tax = Math.round(totalPrice * 0.18);
  const finalTotal = totalPrice + shipping + tax;

  const calculateItemTotal = (item: any) => {
    const blessingTotal = item.selectedBlessings.reduce((total: number, blessingId: string) => {
      const blessing = item.blessings.find((b: any) => b.id === blessingId);
      return total + (blessing?.price || 0);
    }, 0);
    return (item.price + blessingTotal) * item.quantity;
  };

  const handleCheckout = () => {
    if (!isAuthenticated) {
      navigate('/login');
      return;
    }
    navigate('/checkout');
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-temple-ivory pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <div className="max-w-md mx-auto">
            <ShoppingBag className="h-24 w-24 text-temple-brown-light mx-auto mb-6" />
            <h1 className="font-serif text-3xl text-temple-brown-deep mb-4">
              {language === 'hi' ? 'आपकी गाड़ी खाली है' : 'Your Cart is Empty'}
            </h1>
            <p className="text-temple-brown-medium mb-8">
              {language === 'hi' 
                ? 'अपने पवित्र आभूषण चुनें और आध्यात्मिक यात्रा शुरू करें'
                : 'Choose your sacred jewelry and begin your spiritual journey'
              }
            </p>
            <Link
              to="/collections"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-temple-saffron to-temple-gold text-white px-8 py-4 rounded-full font-medium hover:shadow-gold-glow transition-all duration-300"
            >
              <span>{language === 'hi' ? 'संग्रह देखें' : 'Explore Collections'}</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-temple-ivory pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-12">
          <h1 className="font-serif text-4xl text-temple-brown-deep mb-4">
            {language === 'hi' ? 'आपकी पवित्र गाड़ी' : 'Your Sacred Cart'}
          </h1>
          <p className="text-temple-brown-medium">
            {language === 'hi' ? 'आशीर्वाद के साथ अपने चुने गए आभूषण' : 'Your chosen jewelry with blessings'}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-6">
            {items.map((item) => (
              <div key={item.id} className="bg-white rounded-2xl shadow-temple p-6 hover:shadow-temple-lg transition-shadow duration-300">
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Product Image */}
                  <div className="flex-shrink-0">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full md:w-32 h-32 object-cover rounded-xl"
                    />
                  </div>

                  {/* Product Details */}
                  <div className="flex-grow">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="font-serif text-xl text-temple-brown-deep mb-2">{item.name}</h3>
                        <div className="flex items-baseline space-x-2 mb-3">
                          <span className="text-lg font-bold text-temple-brown-deep">₹{item.price.toLocaleString()}</span>
                        </div>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="p-2 text-temple-brown-light hover:text-temple-kumkum hover:bg-temple-kumkum/10 rounded-full transition-colors duration-200"
                      >
                        <X className="h-5 w-5" />
                      </button>
                    </div>

                    {/* Quantity Controls */}
                    <div className="flex items-center space-x-4 mb-4">
                      <span className="text-temple-brown-medium font-medium">
                        {language === 'hi' ? 'मात्रा:' : 'Quantity:'}
                      </span>
                      <div className="flex items-center border border-temple-gold/30 rounded-lg">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="p-2 text-temple-brown-medium hover:bg-temple-gold-pale transition-colors duration-200"
                        >
                          <Minus className="h-4 w-4" />
                        </button>
                        <span className="px-4 py-2 text-temple-brown-deep font-medium">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="p-2 text-temple-brown-medium hover:bg-temple-gold-pale transition-colors duration-200"
                        >
                          <Plus className="h-4 w-4" />
                        </button>
                      </div>
                    </div>

                    {/* Selected Blessings */}
                    {item.selectedBlessings && item.selectedBlessings.length > 0 && (
                      <div className="bg-temple-gold-pale/30 rounded-xl p-4 mb-4">
                        <h4 className="font-medium text-temple-brown-deep mb-3 flex items-center">
                          <Sparkles className="h-4 w-4 mr-2 text-temple-gold" />
                          {language === 'hi' ? 'चयनित आशीर्वाद' : 'Selected Blessings'}
                        </h4>
                        <div className="space-y-1">
                          {item.selectedBlessings.map((blessingId: string) => {
                            const blessing = item.blessings?.find((b: any) => b.id === blessingId);
                            return blessing ? (
                              <div key={blessingId} className="flex justify-between text-sm">
                                <span className="text-temple-brown-medium">{blessing.name}</span>
                                <span className="text-temple-saffron font-medium">+₹{blessing.price}</span>
                              </div>
                            ) : null;
                          })}
                        </div>
                      </div>
                    )}

                    {/* Item Total */}
                    <div className="text-right">
                      <span className="text-lg font-bold text-temple-brown-deep">
                        {language === 'hi' ? 'कुल:' : 'Total:'} ₹{calculateItemTotal(item).toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Continue Shopping */}
            <div className="text-center py-6">
              <Link
                to="/collections"
                className="inline-flex items-center space-x-2 text-temple-saffron hover:text-temple-gold font-medium transition-colors duration-200"
              >
                <ArrowRight className="h-4 w-4 rotate-180" />
                <span>{language === 'hi' ? 'और आभूषण देखें' : 'Continue Shopping'}</span>
              </Link>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-temple p-6 sticky top-32">
              <h3 className="font-serif text-xl text-temple-brown-deep mb-6">
                {language === 'hi' ? 'आर्डर सारांश' : 'Order Summary'}
              </h3>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-temple-brown-medium">
                  <span>
                    {language === 'hi' ? 'उप-योग' : 'Subtotal'} ({items.length} {language === 'hi' ? 'वस्तुएं' : 'items'})
                  </span>
                  <span>₹{totalPrice.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-temple-brown-medium">
                  <span>{language === 'hi' ? 'शिपिंग' : 'Shipping'}</span>
                  <span>{shipping === 0 ? (language === 'hi' ? 'निःशुल्क' : 'Free') : `₹${shipping}`}</span>
                </div>
                <div className="flex justify-between text-temple-brown-medium">
                  <span>{language === 'hi' ? 'टैक्स (18%)' : 'Tax (18%)'}</span>
                  <span>₹{tax.toLocaleString()}</span>
                </div>
                {shipping === 0 && (
                  <p className="text-xs text-temple-saffron">
                    🎉 {language === 'hi' ? 'आपको निःशुल्क शिपिंग मिल रही है!' : 'You qualify for free shipping!'}
                  </p>
                )}
                <div className="border-t border-temple-gold/20 pt-4">
                  <div className="flex justify-between text-lg font-bold text-temple-brown-deep">
                    <span>{language === 'hi' ? 'कुल राशि' : 'Total'}</span>
                    <span>₹{finalTotal.toLocaleString()}</span>
                  </div>
                </div>
              </div>

              {/* Special Offers */}
              <div className="bg-temple-saffron/10 rounded-xl p-4 mb-6">
                <h4 className="font-medium text-temple-brown-deep mb-2 flex items-center">
                  <Gift className="h-4 w-4 mr-2 text-temple-saffron" />
                  {language === 'hi' ? 'विशेष पेशकश' : 'Special Offer'}
                </h4>
                <p className="text-sm text-temple-brown-medium">
                  {language === 'hi' 
                    ? '₹3999+ पर गंगाजल पवित्रीकरण निःशुल्क'
                    : 'Free Ganga Jal blessing on orders ₹3999+'
                  }
                </p>
              </div>

              {/* Checkout Button */}
              <button 
                onClick={handleCheckout}
                className="w-full bg-gradient-to-r from-temple-saffron to-temple-gold hover:from-temple-gold hover:to-temple-saffron text-white py-4 px-6 rounded-xl font-medium text-lg transition-all duration-300 hover:shadow-gold-glow hover:scale-105 mb-4"
              >
                {language === 'hi' ? 'आशीर्वाद सहित चेकआउट' : 'Checkout with Blessings'}
              </button>

              {/* Save for Later */}
              <button className="w-full border-2 border-temple-gold text-temple-brown-deep hover:bg-temple-gold hover:text-white py-3 px-6 rounded-xl font-medium transition-all duration-300 flex items-center justify-center space-x-2">
                <Heart className="h-4 w-4" />
                <span>{language === 'hi' ? 'बाद के लिए सेव करें' : 'Save for Later'}</span>
              </button>

              {/* Security Badge */}
              <div className="mt-6 text-center">
                <div className="flex items-center justify-center space-x-2 text-xs text-temple-brown-light">
                  <Sparkles className="h-3 w-3" />
                  <span>{language === 'hi' ? '100% सुरक्षित भुगतान' : '100% Secure Payment'}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
