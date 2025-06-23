import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { useLanguage } from '../context/LanguageContext';
import AuthGuard from '../components/AuthGuard';
import { CreditCard, Truck, Shield, MapPin, Phone, Mail, User, ArrowLeft, CheckCircle } from 'lucide-react';

const Checkout = () => {
  const navigate = useNavigate();
  const { items, totalPrice, clearCart } = useCart();
  const { user } = useAuth();
  const { language } = useLanguage();
  const [currentStep, setCurrentStep] = useState(1);
  const [orderPlaced, setOrderPlaced] = useState(false);

  const [shippingInfo, setShippingInfo] = useState({
    fullName: user?.name || '',
    email: user?.email || '',
    phone: user?.phone || '',
    address: '',
    city: '',
    state: '',
    pincode: '',
    landmark: ''
  });

  const [paymentMethod, setPaymentMethod] = useState('card');
  const [cardInfo, setCardInfo] = useState({
    number: '',
    expiry: '',
    cvv: '',
    name: ''
  });

  const shipping = totalPrice > 1999 ? 0 : 149;
  const tax = Math.round(totalPrice * 0.18);
  const finalTotal = totalPrice + shipping + tax;

  const handleInputChange = (section: string, field: string, value: string) => {
    if (section === 'shipping') {
      setShippingInfo(prev => ({ ...prev, [field]: value }));
    } else if (section === 'card') {
      setCardInfo(prev => ({ ...prev, [field]: value }));
    }
  };

  const handlePlaceOrder = () => {
    // Simulate order placement
    setOrderPlaced(true);
    clearCart();
    
    // Redirect to account page after 3 seconds
    setTimeout(() => {
      navigate('/account');
    }, 3000);
  };

  if (orderPlaced) {
    return (
      <div className="min-h-screen bg-temple-ivory flex items-center justify-center p-4">
        <div className="max-w-md w-full text-center">
          <div className="bg-white/80 backdrop-blur-md rounded-3xl shadow-temple-lg p-8 border border-temple-gold/20">
            <div className="flex items-center justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center shadow-lg">
                <CheckCircle className="h-10 w-10 text-white" />
              </div>
            </div>
            
            <h2 className="font-serif text-2xl text-temple-brown-deep mb-4">
              {language === 'hi' ? 'ऑर्डर सफल!' : 'Order Successful!'}
            </h2>
            
            <div className="mb-6">
              <blockquote className="font-serif text-lg text-temple-brown-deep italic mb-3">
                "आपका आशीर्वाद आपके पास आ रहा है।"
              </blockquote>
              <p className="text-sm text-temple-brown-light">
                Your blessings are on their way
              </p>
            </div>
            
            <p className="text-temple-brown-medium mb-6">
              {language === 'hi' 
                ? 'आपका ऑर्डर सफलतापूर्वक प्लेस हो गया है। आपको जल्द ही ईमेल मिलेगा।'
                : 'Your order has been placed successfully. You will receive an email confirmation shortly.'
              }
            </p>
            
            <div className="text-sm text-temple-brown-light">
              {language === 'hi' ? 'खाता पृष्ठ पर रीडायरेक्ट हो रहे हैं...' : 'Redirecting to account page...'}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <AuthGuard message={language === 'hi' ? 'चेकआउट के लिए कृपया साइन इन करें' : 'Please sign in to proceed with checkout'}>
      <div className="min-h-screen bg-temple-ivory pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Header */}
          <div className="mb-8">
            <button
              onClick={() => navigate('/cart')}
              className="flex items-center space-x-2 text-temple-brown-deep hover:text-temple-saffron mb-4 transition-colors"
            >
              <ArrowLeft className="h-5 w-5" />
              <span>{language === 'hi' ? 'कार्ट पर वापस जाएं' : 'Back to Cart'}</span>
            </button>
            <h1 className="font-serif text-4xl text-temple-brown-deep mb-4">
              {language === 'hi' ? 'पवित्र चेकआउट' : 'Sacred Checkout'}
            </h1>
            <p className="text-temple-brown-medium">
              {language === 'hi' ? 'आपके आशीर्वाद की अंतिम पुष्टि' : 'Final confirmation of your blessings'}
            </p>
          </div>

          {/* Progress Steps */}
          <div className="mb-8">
            <div className="flex items-center justify-center space-x-4 mb-6">
              {[1, 2, 3].map((step) => (
                <div key={step} className="flex items-center">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-medium ${
                    currentStep >= step 
                      ? 'bg-temple-gold text-white' 
                      : 'bg-temple-gold-pale text-temple-brown-deep'
                  }`}>
                    {step}
                  </div>
                  {step < 3 && (
                    <div className={`w-16 h-1 mx-2 ${
                      currentStep > step ? 'bg-temple-gold' : 'bg-temple-gold-pale'
                    }`}></div>
                  )}
                </div>
              ))}
            </div>
            <div className="flex justify-center space-x-8 text-sm">
              <span className={currentStep >= 1 ? 'text-temple-gold font-medium' : 'text-temple-brown-light'}>
                {language === 'hi' ? 'शिपिंग' : 'Shipping'}
              </span>
              <span className={currentStep >= 2 ? 'text-temple-gold font-medium' : 'text-temple-brown-light'}>
                {language === 'hi' ? 'भुगतान' : 'Payment'}
              </span>
              <span className={currentStep >= 3 ? 'text-temple-gold font-medium' : 'text-temple-brown-light'}>
                {language === 'hi' ? 'समीक्षा' : 'Review'}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Step 1: Shipping Information */}
              {currentStep === 1 && (
                <div className="bg-white rounded-2xl shadow-temple p-6">
                  <h3 className="font-serif text-xl text-temple-brown-deep mb-6 flex items-center">
                    <Truck className="h-6 w-6 mr-3 text-temple-gold" />
                    {language === 'hi' ? 'शिपिंग जानकारी' : 'Shipping Information'}
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-temple-brown-deep mb-2">
                        <User className="h-4 w-4 inline mr-2" />
                        {language === 'hi' ? 'पूरा नाम' : 'Full Name'}
                      </label>
                      <input
                        type="text"
                        value={shippingInfo.fullName}
                        onChange={(e) => handleInputChange('shipping', 'fullName', e.target.value)}
                        className="w-full px-4 py-3 border border-temple-gold/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-temple-gold/50"
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-temple-brown-deep mb-2">
                        <Mail className="h-4 w-4 inline mr-2" />
                        {language === 'hi' ? 'ईमेल' : 'Email'}
                      </label>
                      <input
                        type="email"
                        value={shippingInfo.email}
                        onChange={(e) => handleInputChange('shipping', 'email', e.target.value)}
                        className="w-full px-4 py-3 border border-temple-gold/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-temple-gold/50"
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-temple-brown-deep mb-2">
                        <Phone className="h-4 w-4 inline mr-2" />
                        {language === 'hi' ? 'मोबाइल नंबर' : 'Phone Number'}
                      </label>
                      <input
                        type="tel"
                        value={shippingInfo.phone}
                        onChange={(e) => handleInputChange('shipping', 'phone', e.target.value)}
                        className="w-full px-4 py-3 border border-temple-gold/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-temple-gold/50"
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-temple-brown-deep mb-2">
                        {language === 'hi' ? 'पिन कोड' : 'PIN Code'}
                      </label>
                      <input
                        type="text"
                        value={shippingInfo.pincode}
                        onChange={(e) => handleInputChange('shipping', 'pincode', e.target.value)}
                        className="w-full px-4 py-3 border border-temple-gold/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-temple-gold/50"
                        required
                      />
                    </div>
                    
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-temple-brown-deep mb-2">
                        <MapPin className="h-4 w-4 inline mr-2" />
                        {language === 'hi' ? 'पूरा पता' : 'Full Address'}
                      </label>
                      <textarea
                        value={shippingInfo.address}
                        onChange={(e) => handleInputChange('shipping', 'address', e.target.value)}
                        rows={3}
                        className="w-full px-4 py-3 border border-temple-gold/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-temple-gold/50"
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-temple-brown-deep mb-2">
                        {language === 'hi' ? 'शहर' : 'City'}
                      </label>
                      <input
                        type="text"
                        value={shippingInfo.city}
                        onChange={(e) => handleInputChange('shipping', 'city', e.target.value)}
                        className="w-full px-4 py-3 border border-temple-gold/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-temple-gold/50"
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-temple-brown-deep mb-2">
                        {language === 'hi' ? 'राज्य' : 'State'}
                      </label>
                      <input
                        type="text"
                        value={shippingInfo.state}
                        onChange={(e) => handleInputChange('shipping', 'state', e.target.value)}
                        className="w-full px-4 py-3 border border-temple-gold/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-temple-gold/50"
                        required
                      />
                    </div>
                  </div>
                  
                  <button
                    onClick={() => setCurrentStep(2)}
                    className="mt-6 w-full bg-gradient-to-r from-temple-saffron to-temple-gold text-white py-4 px-6 rounded-xl font-medium transition-all duration-300 hover:shadow-gold-glow"
                  >
                    {language === 'hi' ? 'भुगतान पर जाएं' : 'Continue to Payment'}
                  </button>
                </div>
              )}

              {/* Step 2: Payment Method */}
              {currentStep === 2 && (
                <div className="bg-white rounded-2xl shadow-temple p-6">
                  <h3 className="font-serif text-xl text-temple-brown-deep mb-6 flex items-center">
                    <CreditCard className="h-6 w-6 mr-3 text-temple-gold" />
                    {language === 'hi' ? 'भुगतान विधि' : 'Payment Method'}
                  </h3>
                  
                  <div className="space-y-4 mb-6">
                    <label className="flex items-center space-x-3 p-4 border border-temple-gold/30 rounded-xl cursor-pointer hover:bg-temple-gold-pale/30">
                      <input
                        type="radio"
                        name="payment"
                        value="card"
                        checked={paymentMethod === 'card'}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                        className="text-temple-gold"
                      />
                      <CreditCard className="h-5 w-5 text-temple-gold" />
                      <span className="font-medium text-temple-brown-deep">
                        {language === 'hi' ? 'क्रेडिट/डेबिट कार्ड' : 'Credit/Debit Card'}
                      </span>
                    </label>
                    
                    <label className="flex items-center space-x-3 p-4 border border-temple-gold/30 rounded-xl cursor-pointer hover:bg-temple-gold-pale/30">
                      <input
                        type="radio"
                        name="payment"
                        value="upi"
                        checked={paymentMethod === 'upi'}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                        className="text-temple-gold"
                      />
                      <div className="w-5 h-5 bg-temple-gold rounded text-white text-xs flex items-center justify-center font-bold">₹</div>
                      <span className="font-medium text-temple-brown-deep">UPI</span>
                    </label>
                    
                    <label className="flex items-center space-x-3 p-4 border border-temple-gold/30 rounded-xl cursor-pointer hover:bg-temple-gold-pale/30">
                      <input
                        type="radio"
                        name="payment"
                        value="cod"
                        checked={paymentMethod === 'cod'}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                        className="text-temple-gold"
                      />
                      <Truck className="h-5 w-5 text-temple-gold" />
                      <span className="font-medium text-temple-brown-deep">
                        {language === 'hi' ? 'कैश ऑन डिलीवरी' : 'Cash on Delivery'}
                      </span>
                    </label>
                  </div>
                  
                  {paymentMethod === 'card' && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                      <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-temple-brown-deep mb-2">
                          {language === 'hi' ? 'कार्ड नंबर' : 'Card Number'}
                        </label>
                        <input
                          type="text"
                          value={cardInfo.number}
                          onChange={(e) => handleInputChange('card', 'number', e.target.value)}
                          placeholder="1234 5678 9012 3456"
                          className="w-full px-4 py-3 border border-temple-gold/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-temple-gold/50"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-temple-brown-deep mb-2">
                          {language === 'hi' ? 'समाप्ति तिथि' : 'Expiry Date'}
                        </label>
                        <input
                          type="text"
                          value={cardInfo.expiry}
                          onChange={(e) => handleInputChange('card', 'expiry', e.target.value)}
                          placeholder="MM/YY"
                          className="w-full px-4 py-3 border border-temple-gold/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-temple-gold/50"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-temple-brown-deep mb-2">CVV</label>
                        <input
                          type="text"
                          value={cardInfo.cvv}
                          onChange={(e) => handleInputChange('card', 'cvv', e.target.value)}
                          placeholder="123"
                          className="w-full px-4 py-3 border border-temple-gold/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-temple-gold/50"
                        />
                      </div>
                      <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-temple-brown-deep mb-2">
                          {language === 'hi' ? 'कार्डधारक का नाम' : 'Cardholder Name'}
                        </label>
                        <input
                          type="text"
                          value={cardInfo.name}
                          onChange={(e) => handleInputChange('card', 'name', e.target.value)}
                          className="w-full px-4 py-3 border border-temple-gold/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-temple-gold/50"
                        />
                      </div>
                    </div>
                  )}
                  
                  <div className="flex space-x-4">
                    <button
                      onClick={() => setCurrentStep(1)}
                      className="flex-1 border-2 border-temple-gold text-temple-brown-deep py-4 px-6 rounded-xl font-medium transition-all duration-300 hover:bg-temple-gold hover:text-white"
                    >
                      {language === 'hi' ? 'वापस' : 'Back'}
                    </button>
                    <button
                      onClick={() => setCurrentStep(3)}
                      className="flex-1 bg-gradient-to-r from-temple-saffron to-temple-gold text-white py-4 px-6 rounded-xl font-medium transition-all duration-300 hover:shadow-gold-glow"
                    >
                      {language === 'hi' ? 'समीक्षा करें' : 'Review Order'}
                    </button>
                  </div>
                </div>
              )}

              {/* Step 3: Order Review */}
              {currentStep === 3 && (
                <div className="bg-white rounded-2xl shadow-temple p-6">
                  <h3 className="font-serif text-xl text-temple-brown-deep mb-6 flex items-center">
                    <Shield className="h-6 w-6 mr-3 text-temple-gold" />
                    {language === 'hi' ? 'ऑर्डर समीक्षा' : 'Order Review'}
                  </h3>
                  
                  <div className="space-y-6">
                    {/* Order Items */}
                    <div>
                      <h4 className="font-medium text-temple-brown-deep mb-4">
                        {language === 'hi' ? 'आपके आइटम' : 'Your Items'}
                      </h4>
                      <div className="space-y-4">
                        {items.map((item) => (
                          <div key={item.id} className="flex items-center space-x-4 p-4 bg-temple-gold-pale/20 rounded-xl">
                            <img src={item.image} alt={item.name} className="w-16 h-16 rounded-lg object-cover" />
                            <div className="flex-grow">
                              <h5 className="font-medium text-temple-brown-deep">{item.name}</h5>
                              <p className="text-sm text-temple-brown-medium">
                                {language === 'hi' ? 'मात्रा' : 'Quantity'}: {item.quantity}
                              </p>
                            </div>
                            <div className="text-right">
                              <p className="font-bold text-temple-brown-deep">₹{(item.price * item.quantity).toLocaleString()}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Shipping Info */}
                    <div>
                      <h4 className="font-medium text-temple-brown-deep mb-4">
                        {language === 'hi' ? 'शिपिंग पता' : 'Shipping Address'}
                      </h4>
                      <div className="p-4 bg-temple-gold-pale/20 rounded-xl">
                        <p className="font-medium text-temple-brown-deep">{shippingInfo.fullName}</p>
                        <p className="text-temple-brown-medium">{shippingInfo.address}</p>
                        <p className="text-temple-brown-medium">{shippingInfo.city}, {shippingInfo.state} - {shippingInfo.pincode}</p>
                        <p className="text-temple-brown-medium">{shippingInfo.phone}</p>
                      </div>
                    </div>
                    
                    {/* Payment Method */}
                    <div>
                      <h4 className="font-medium text-temple-brown-deep mb-4">
                        {language === 'hi' ? 'भुगतान विधि' : 'Payment Method'}
                      </h4>
                      <div className="p-4 bg-temple-gold-pale/20 rounded-xl">
                        <p className="text-temple-brown-medium">
                          {paymentMethod === 'card' && (language === 'hi' ? 'क्रेडिट/डेबिट कार्ड' : 'Credit/Debit Card')}
                          {paymentMethod === 'upi' && 'UPI'}
                          {paymentMethod === 'cod' && (language === 'hi' ? 'कैश ऑन डिलीवरी' : 'Cash on Delivery')}
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex space-x-4 mt-8">
                    <button
                      onClick={() => setCurrentStep(2)}
                      className="flex-1 border-2 border-temple-gold text-temple-brown-deep py-4 px-6 rounded-xl font-medium transition-all duration-300 hover:bg-temple-gold hover:text-white"
                    >
                      {language === 'hi' ? 'वापस' : 'Back'}
                    </button>
                    <button
                      onClick={handlePlaceOrder}
                      className="flex-1 bg-gradient-to-r from-temple-saffron to-temple-gold text-white py-4 px-6 rounded-xl font-medium transition-all duration-300 hover:shadow-gold-glow"
                    >
                      {language === 'hi' ? 'ऑर्डर दें' : 'Place Order'}
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Order Summary Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl shadow-temple p-6 sticky top-32">
                <h3 className="font-serif text-xl text-temple-brown-deep mb-6">
                  {language === 'hi' ? 'ऑर्डर सारांश' : 'Order Summary'}
                </h3>
                
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between text-temple-brown-medium">
                    <span>{language === 'hi' ? 'उप-योग' : 'Subtotal'} ({items.length} {language === 'hi' ? 'वस्तुएं' : 'items'})</span>
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
                  <div className="border-t border-temple-gold/20 pt-4">
                    <div className="flex justify-between text-lg font-bold text-temple-brown-deep">
                      <span>{language === 'hi' ? 'कुल राशि' : 'Total'}</span>
                      <span>₹{finalTotal.toLocaleString()}</span>
                    </div>
                  </div>
                </div>

                {/* Trust Badges */}
                <div className="space-y-3 text-sm text-temple-brown-medium">
                  <div className="flex items-center space-x-2">
                    <Shield className="h-4 w-4 text-temple-gold" />
                    <span>{language === 'hi' ? '100% सुरक्षित भुगतान' : '100% Secure Payment'}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Truck className="h-4 w-4 text-temple-gold" />
                    <span>{language === 'hi' ? 'मुफ्त शिपिंग ₹1999+' : 'Free Shipping ₹1999+'}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-temple-gold" />
                    <span>{language === 'hi' ? '7 दिन वापसी नीति' : '7 Day Return Policy'}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AuthGuard>
  );
};

export default Checkout;