
import { useState, useEffect } from 'react';
import { User, Settings, Package, Heart, LogOut, Shield } from 'lucide-react';
import { useAuth } from '../hooks/useAuth';
import { supabase } from '../lib/supabase';

const Account = () => {
  const { user, profile, signOut } = useAuth();
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user) {
      fetchUserOrders();
    }
  }, [user]);

  const fetchUserOrders = async () => {
    try {
      const { data, error } = await supabase
        .from('orders')
        .select('*')
        .eq('user_id', user?.id)
        .order('created_at', { ascending: false })
        .limit(5);

      if (error) throw error;
      setOrders(data || []);
    } catch (error) {
      console.error('Error fetching orders:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSignOut = async () => {
    await signOut();
  };

  if (!user) {
    return (
      <div className="min-h-screen bg-temple-ivory pt-20 flex items-center justify-center">
        <div className="text-center">
          <Shield className="h-16 w-16 text-temple-gold mx-auto mb-4" />
          <h1 className="text-2xl font-serif text-temple-brown-deep mb-2">Please Login</h1>
          <p className="text-temple-brown-medium">You need to be logged in to view your account.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-temple-ivory pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-temple p-6 border border-temple-gold/20">
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-temple-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <User className="h-10 w-10 text-white" />
                </div>
                <h2 className="text-xl font-serif text-temple-brown-deep">{profile?.full_name || 'Sacred Devotee'}</h2>
                <p className="text-temple-brown-medium">{profile?.email}</p>
              </div>

              <nav className="space-y-2">
                <button className="w-full flex items-center space-x-3 px-4 py-3 text-left rounded-lg bg-temple-gold text-white">
                  <User className="h-5 w-5" />
                  <span>Profile</span>
                </button>
                <button className="w-full flex items-center space-x-3 px-4 py-3 text-left rounded-lg text-temple-brown-deep hover:bg-temple-gold-pale/30 transition-colors duration-200">
                  <Package className="h-5 w-5" />
                  <span>Orders</span>
                </button>
                <button className="w-full flex items-center space-x-3 px-4 py-3 text-left rounded-lg text-temple-brown-deep hover:bg-temple-gold-pale/30 transition-colors duration-200">
                  <Heart className="h-5 w-5" />
                  <span>Wishlist</span>
                </button>
                <button className="w-full flex items-center space-x-3 px-4 py-3 text-left rounded-lg text-temple-brown-deep hover:bg-temple-gold-pale/30 transition-colors duration-200">
                  <Settings className="h-5 w-5" />
                  <span>Settings</span>
                </button>
                <button 
                  onClick={handleSignOut}
                  className="w-full flex items-center space-x-3 px-4 py-3 text-left rounded-lg text-red-600 hover:bg-red-50 transition-colors duration-200"
                >
                  <LogOut className="h-5 w-5" />
                  <span>Sign Out</span>
                </button>
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Profile Information */}
            <div className="bg-white rounded-2xl shadow-temple p-6 border border-temple-gold/20">
              <h3 className="text-xl font-serif text-temple-brown-deep mb-6">Profile Information</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-temple-brown-deep mb-2">Full Name</label>
                  <input
                    type="text"
                    value={profile?.full_name || ''}
                    readOnly
                    className="w-full px-4 py-2 bg-temple-gold-pale/20 border border-temple-gold/30 rounded-lg"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-temple-brown-deep mb-2">Email</label>
                  <input
                    type="email"
                    value={profile?.email || ''}
                    readOnly
                    className="w-full px-4 py-2 bg-temple-gold-pale/20 border border-temple-gold/30 rounded-lg"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-temple-brown-deep mb-2">Phone</label>
                  <input
                    type="tel"
                    value={profile?.phone || 'Not provided'}
                    readOnly
                    className="w-full px-4 py-2 bg-temple-gold-pale/20 border border-temple-gold/30 rounded-lg"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-temple-brown-deep mb-2">Role</label>
                  <input
                    type="text"
                    value={profile?.role || 'customer'}
                    readOnly
                    className="w-full px-4 py-2 bg-temple-gold-pale/20 border border-temple-gold/30 rounded-lg"
                  />
                </div>
              </div>

              <button className="mt-6 bg-gradient-to-r from-temple-saffron to-temple-gold text-white px-6 py-2 rounded-lg font-medium hover:shadow-gold-glow transition-all duration-300">
                Edit Profile
              </button>
            </div>

            {/* Recent Orders */}
            <div className="bg-white rounded-2xl shadow-temple p-6 border border-temple-gold/20">
              <h3 className="text-xl font-serif text-temple-brown-deep mb-6">Recent Orders</h3>
              
              {loading ? (
                <div className="flex items-center justify-center py-8">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-temple-gold"></div>
                </div>
              ) : orders.length > 0 ? (
                <div className="space-y-4">
                  {orders.map((order: any) => (
                    <div key={order.id} className="border border-temple-gold/20 rounded-lg p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium text-temple-brown-deep">Order #{order.order_number}</p>
                          <p className="text-sm text-temple-brown-light">
                            {new Date(order.created_at).toLocaleDateString()}
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="font-bold text-temple-brown-deep">₹{order.total_amount}</p>
                          <span className={`text-xs px-2 py-1 rounded-full ${
                            order.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                            order.status === 'confirmed' ? 'bg-blue-100 text-blue-800' :
                            order.status === 'shipped' ? 'bg-purple-100 text-purple-800' :
                            'bg-green-100 text-green-800'
                          }`}>
                            {order.status}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8">
                  <Package className="h-12 w-12 text-temple-brown-light mx-auto mb-4" />
                  <p className="text-temple-brown-medium">No orders found</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
