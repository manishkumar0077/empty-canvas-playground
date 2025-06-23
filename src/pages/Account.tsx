import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { User, ShoppingBag, Heart, Settings, Gift, Star, Calendar, Phone, Mail, MapPin, Edit2, Package, Truck, CheckCircle } from 'lucide-react';

const Account = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  const user = {
    name: 'प्रिया शर्मा',
    email: 'priya.sharma@email.com',
    phone: '+91 98765 43210',
    address: 'हरिद्वार, उत्तराखंड',
    joinDate: 'मार्च 2024',
    totalOrders: 12,
    totalSpent: 24750,
    loyaltyPoints: 1250
  };

  const orders = [
    {
      id: '#SD2024001',
      date: '15 दिसंबर 2024',
      status: 'delivered',
      items: 2,
      total: 4298,
      image: 'https://images.pexels.com/photos/5378700/pexels-photo-5378700.jpeg?auto=compress&cs=tinysrgb&w=100',
      name: 'लक्ष्मी चित्रीन लटकन + शिव माला'
    },
    {
      id: '#SD2024002',
      date: '10 दिसंबर 2024',
      status: 'shipped',
      items: 1,
      total: 1999,
      image: 'https://images.pexels.com/photos/8112458/pexels-photo-8112458.jpeg?auto=compress&cs=tinysrgb&w=100',
      name: 'दुर्गा गार्नेट अंगूठी'
    },
    {
      id: '#SD2024003',
      date: '05 दिसंबर 2024',
      status: 'processing',
      items: 3,
      total: 5799,
      image: 'https://images.pexels.com/photos/1191531/pexels-photo-1191531.jpeg?auto=compress&cs=tinysrgb&w=100',
      name: 'सरस्वती पर्ल सेट'
    }
  ];

  const wishlist = [
    {
      id: 1,
      name: 'कृष्णा सैफायर ब्रेसलेट',
      price: 3299,
      originalPrice: 3799,
      image: 'https://images.pexels.com/photos/12896892/pexels-photo-12896892.jpeg?auto=compress&cs=tinysrgb&w=200',
      inStock: true
    },
    {
      id: 2,
      name: 'हनुमान रूबी पेंडेंट',
      price: 2199,
      originalPrice: 2599,
      image: 'https://images.pexels.com/photos/6045104/pexels-photo-6045104.jpeg?auto=compress&cs=tinysrgb&w=200',
      inStock: false
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'delivered': return 'text-green-600 bg-green-100';
      case 'shipped': return 'text-blue-600 bg-blue-100';
      case 'processing': return 'text-orange-600 bg-orange-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'delivered': return 'पहुंचा दिया';
      case 'shipped': return 'भेज दिया';
      case 'processing': return 'तैयार हो रहा';
      default: return status;
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'delivered': return CheckCircle;
      case 'shipped': return Truck;
      case 'processing': return Package;
      default: return Package;
    }
  };

  const tabs = [
    { id: 'dashboard', name: 'डैशबोर्ड', icon: User },
    { id: 'orders', name: 'मेरे ऑर्डर', icon: ShoppingBag },
    { id: 'wishlist', name: 'इच्छा सूची', icon: Heart },
    { id: 'profile', name: 'प्रोफाइल', icon: Settings },
    { id: 'rewards', name: 'आशीर्वाद पॉइंट्स', icon: Gift }
  ];

  const renderDashboard = () => (
    <div className="space-y-8">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-temple-gold-pale to-temple-saffron/20 rounded-2xl p-8">
        <h2 className="font-serif text-3xl text-temple-brown-deep mb-2">
          नमस्ते, {user.name} जी
        </h2>
        <p className="text-temple-brown-medium mb-6">
          आपकी आध्यात्मिक यात्रा का स्वागत है। आपके साथ {user.joinDate} से हैं।
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 text-center">
            <div className="text-2xl font-bold text-temple-saffron">{user.totalOrders}</div>
            <div className="text-sm text-temple-brown-medium">कुल ऑर्डर</div>
          </div>
          <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 text-center">
            <div className="text-2xl font-bold text-temple-saffron">₹{user.totalSpent.toLocaleString()}</div>
            <div className="text-sm text-temple-brown-medium">कुल खर्च</div>
          </div>
          <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 text-center">
            <div className="text-2xl font-bold text-temple-saffron">{user.loyaltyPoints}</div>
            <div className="text-sm text-temple-brown-medium">आशीर्वाद पॉइंट्स</div>
          </div>
        </div>
      </div>

      {/* Recent Orders */}
      <div className="bg-white rounded-2xl shadow-temple p-6">
        <div className="flex justify-between items-center mb-6">
          <h3 className="font-serif text-xl text-temple-brown-deep">हाल के ऑर्डर</h3>
          <button
            onClick={() => setActiveTab('orders')}
            className="text-temple-saffron hover:text-temple-gold font-medium transition-colors duration-200"
          >
            सभी देखें →
          </button>
        </div>
        <div className="space-y-4">
          {orders.slice(0, 3).map((order) => {
            const StatusIcon = getStatusIcon(order.status);
            return (
              <div key={order.id} className="flex items-center space-x-4 p-4 border border-temple-gold/20 rounded-xl hover:shadow-temple transition-shadow duration-300">
                <img src={order.image} alt={order.name} className="w-16 h-16 rounded-lg object-cover" />
                <div className="flex-grow">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <p className="font-medium text-temple-brown-deep">{order.id}</p>
                      <p className="text-sm text-temple-brown-medium">{order.name}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-temple-brown-deep">₹{order.total.toLocaleString()}</p>
                      <p className="text-xs text-temple-brown-light">{order.date}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <StatusIcon className="h-4 w-4" />
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(order.status)}`}>
                      {getStatusText(order.status)}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );

  const renderOrders = () => (
    <div className="bg-white rounded-2xl shadow-temple">
      <div className="p-6 border-b border-temple-gold/20">
        <h3 className="font-serif text-xl text-temple-brown-deep">मेरे सभी ऑर्डर</h3>
      </div>
      <div className="p-6 space-y-6">
        {orders.map((order) => {
          const StatusIcon = getStatusIcon(order.status);
          return (
            <div key={order.id} className="border border-temple-gold/20 rounded-xl p-6 hover:shadow-temple transition-shadow duration-300">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <div>
                  <h4 className="font-medium text-temple-brown-deep text-lg">{order.id}</h4>
                  <p className="text-temple-brown-medium">{order.date} • {order.items} आइटम</p>
                </div>
                <div className="flex items-center space-x-4 mt-4 md:mt-0">
                  <div className="text-right">
                    <p className="font-bold text-temple-brown-deep text-lg">₹{order.total.toLocaleString()}</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <StatusIcon className="h-5 w-5" />
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(order.status)}`}>
                      {getStatusText(order.status)}
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <img src={order.image} alt={order.name} className="w-20 h-20 rounded-lg object-cover" />
                <div className="flex-grow">
                  <p className="text-temple-brown-deep font-medium">{order.name}</p>
                  <div className="flex space-x-4 mt-3">
                    <button className="text-temple-saffron hover:text-temple-gold font-medium transition-colors duration-200">
                      ट्रैक करें
                    </button>
                    <button className="text-temple-saffron hover:text-temple-gold font-medium transition-colors duration-200">
                      डिटेल्स देखें
                    </button>
                    {order.status === 'delivered' && (
                      <button className="text-temple-saffron hover:text-temple-gold font-medium transition-colors duration-200">
                        रिव्यू लिखें
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );

  const renderWishlist = () => (
    <div className="bg-white rounded-2xl shadow-temple">
      <div className="p-6 border-b border-temple-gold/20">
        <h3 className="font-serif text-xl text-temple-brown-deep">मेरी इच्छा सूची</h3>
      </div>
      <div className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {wishlist.map((item) => (
            <div key={item.id} className="border border-temple-gold/20 rounded-xl overflow-hidden hover:shadow-temple transition-shadow duration-300">
              <div className="aspect-square overflow-hidden">
                <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
              </div>
              <div className="p-4">
                <h4 className="font-medium text-temple-brown-deep mb-2">{item.name}</h4>
                <div className="flex items-baseline space-x-2 mb-3">
                  <span className="text-lg font-bold text-temple-brown-deep">₹{item.price.toLocaleString()}</span>
                  <span className="text-sm text-temple-brown-light line-through">₹{item.originalPrice.toLocaleString()}</span>
                </div>
                {item.inStock ? (
                  <button className="w-full bg-gradient-to-r from-temple-saffron to-temple-gold text-white py-2 px-4 rounded-lg font-medium hover:shadow-gold-glow transition-all duration-300">
                    कार्ट में डालें
                  </button>
                ) : (
                  <button className="w-full border-2 border-temple-gold/30 text-temple-brown-light py-2 px-4 rounded-lg font-medium cursor-not-allowed">
                    स्टॉक में नहीं
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderProfile = () => (
    <div className="bg-white rounded-2xl shadow-temple">
      <div className="p-6 border-b border-temple-gold/20">
        <h3 className="font-serif text-xl text-temple-brown-deep">प्रोफाइल सेटिंग्स</h3>
      </div>
      <div className="p-6 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-temple-brown-deep mb-2">पूरा नाम</label>
            <div className="flex items-center space-x-2">
              <input
                type="text"
                value={user.name}
                className="flex-grow px-4 py-3 border border-temple-gold/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-temple-gold/50"
                readOnly
              />
              <button className="p-3 text-temple-saffron hover:bg-temple-gold-pale rounded-xl transition-colors duration-200">
                <Edit2 className="h-4 w-4" />
              </button>
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-temple-brown-deep mb-2">ईमेल</label>
            <div className="flex items-center space-x-2">
              <input
                type="email"
                value={user.email}
                className="flex-grow px-4 py-3 border border-temple-gold/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-temple-gold/50"
                readOnly
              />
              <button className="p-3 text-temple-saffron hover:bg-temple-gold-pale rounded-xl transition-colors duration-200">
                <Edit2 className="h-4 w-4" />
              </button>
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-temple-brown-deep mb-2">मोबाइल</label>
            <div className="flex items-center space-x-2">
              <input
                type="tel"
                value={user.phone}
                className="flex-grow px-4 py-3 border border-temple-gold/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-temple-gold/50"
                readOnly
              />
              <button className="p-3 text-temple-saffron hover:bg-temple-gold-pale rounded-xl transition-colors duration-200">
                <Edit2 className="h-4 w-4" />
              </button>
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-temple-brown-deep mb-2">पता</label>
            <div className="flex items-center space-x-2">
              <input
                type="text"
                value={user.address}
                className="flex-grow px-4 py-3 border border-temple-gold/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-temple-gold/50"
                readOnly
              />
              <button className="p-3 text-temple-saffron hover:bg-temple-gold-pale rounded-xl transition-colors duration-200">
                <Edit2 className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
        
        <div className="pt-6 border-t border-temple-gold/20">
          <button className="bg-gradient-to-r from-temple-saffron to-temple-gold text-white py-3 px-6 rounded-xl font-medium hover:shadow-gold-glow transition-all duration-300">
            प्रोफाइल अपडेट करें
          </button>
        </div>
      </div>
    </div>
  );

  const renderRewards = () => (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-temple-gold-pale to-temple-saffron/20 rounded-2xl p-8">
        <h3 className="font-serif text-2xl text-temple-brown-deep mb-4">आशीर्वाद पॉइंट्स</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 text-center">
            <div className="text-4xl font-bold text-temple-saffron mb-2">{user.loyaltyPoints}</div>
            <div className="text-temple-brown-medium">उपलब्ध पॉइंट्स</div>
            <div className="text-sm text-temple-brown-light mt-1">= ₹{(user.loyaltyPoints * 0.5).toFixed(0)} की छूट</div>
          </div>
          <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6">
            <h4 className="font-medium text-temple-brown-deep mb-3">पॉइंट्स कमाएं:</h4>
            <ul className="text-sm text-temple-brown-medium space-y-1">
              <li>• हर ₹100 पर 5 पॉइंट्स</li>
              <li>• रिव्यू लिखने पर 50 पॉइंट्स</li>
              <li>• रेफरल पर 200 पॉइंट्स</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="bg-white rounded-2xl shadow-temple p-6">
        <h4 className="font-serif text-lg text-temple-brown-deep mb-4">पॉइंट्स हिस्ट्री</h4>
        <div className="space-y-3">
          <div className="flex justify-between items-center py-3 border-b border-temple-gold/10">
            <div>
              <p className="font-medium text-temple-brown-deep">ऑर्डर #SD2024001</p>
              <p className="text-sm text-temple-brown-light">15 दिसंबर 2024</p>
            </div>
            <span className="text-green-600 font-medium">+215 पॉइंट्स</span>
          </div>
          <div className="flex justify-between items-center py-3 border-b border-temple-gold/10">
            <div>
              <p className="font-medium text-temple-brown-deep">प्रोडक्ट रिव्यू</p>
              <p className="text-sm text-temple-brown-light">12 दिसंबर 2024</p>
            </div>
            <span className="text-green-600 font-medium">+50 पॉइंट्स</span>
          </div>
        </div>
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard': return renderDashboard();
      case 'orders': return renderOrders();
      case 'wishlist': return renderWishlist();
      case 'profile': return renderProfile();
      case 'rewards': return renderRewards();
      default: return renderDashboard();
    }
  };

  return (
    <div className="min-h-screen bg-temple-ivory pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-temple p-6 sticky top-32">
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-temple-gold to-temple-saffron rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white font-serif text-2xl font-bold">प्र</span>
                </div>
                <h2 className="font-serif text-xl text-temple-brown-deep">{user.name}</h2>
                <p className="text-temple-brown-medium text-sm">{user.email}</p>
              </div>
              
              <nav className="space-y-2">
                {tabs.map((tab) => {
                  const Icon = tab.icon;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl font-medium transition-all duration-200 ${
                        activeTab === tab.id
                          ? 'bg-temple-gold-pale text-temple-saffron'
                          : 'text-temple-brown-medium hover:bg-temple-gold-pale/50 hover:text-temple-saffron'
                      }`}
                    >
                      <Icon className="h-5 w-5" />
                      <span>{tab.name}</span>
                    </button>
                  );
                })}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {renderContent()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;