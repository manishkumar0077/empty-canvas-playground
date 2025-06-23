
import { useState, useEffect } from 'react';
import { 
  Search, 
  Filter, 
  Eye, 
  Mail, 
  Phone,
  MapPin,
  ShoppingBag,
  Calendar,
  User
} from 'lucide-react';
import { supabase } from '../../lib/supabase';

interface Customer {
  id: string;
  full_name?: string;
  email: string;
  phone?: string;
  shipping_address?: any;
  created_at: string;
  orders?: any[];
}

const CustomerManagement = () => {
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCustomer, setSelectedCustomer] = useState<Customer | null>(null);
  const [showCustomerModal, setShowCustomerModal] = useState(false);

  useEffect(() => {
    fetchCustomers();
  }, []);

  const fetchCustomers = async () => {
    try {
      const { data, error } = await supabase
        .from('profiles')
        .select(`
          *,
          orders(
            id,
            order_number,
            total_amount,
            status,
            created_at
          )
        `)
        .eq('role', 'customer')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setCustomers(data || []);
    } catch (error) {
      console.error('Error fetching customers:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleViewCustomer = (customer: Customer) => {
    setSelectedCustomer(customer);
    setShowCustomerModal(true);
  };

  const filteredCustomers = customers.filter(customer =>
    customer.full_name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    customer.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    customer.phone?.includes(searchTerm)
  );

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-temple-gold"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-temple-sandalwood/20 to-temple-gold-light/20 rounded-2xl p-6 border border-temple-gold/20">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-serif text-temple-brown-deep">Customer Management</h1>
            <p className="text-temple-brown-medium">
              "ग्राहक देवो भव:" - Customer is God
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <div className="bg-white rounded-lg px-4 py-2 border border-temple-gold/30">
              <span className="text-temple-brown-deep font-medium">
                Total Customers: {customers.length}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Search */}
      <div className="bg-white rounded-xl shadow-temple p-6 border border-temple-gold/20">
        <div className="relative max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-temple-brown-light" />
          <input
            type="text"
            placeholder="Search customers..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-temple-gold/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-temple-gold/50"
          />
        </div>
      </div>

      {/* Customers Table */}
      <div className="bg-white rounded-xl shadow-temple border border-temple-gold/20 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-temple-gold-pale/30">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-temple-brown-deep uppercase tracking-wider">
                  Customer
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-temple-brown-deep uppercase tracking-wider">
                  Contact
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-temple-brown-deep uppercase tracking-wider">
                  Orders
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-temple-brown-deep uppercase tracking-wider">
                  Total Spent
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-temple-brown-deep uppercase tracking-wider">
                  Joined
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-temple-brown-deep uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-temple-gold/20">
              {filteredCustomers.map((customer) => {
                const totalSpent = customer.orders?.reduce((sum, order) => sum + order.total_amount, 0) || 0;
                const orderCount = customer.orders?.length || 0;

                return (
                  <tr key={customer.id} className="hover:bg-temple-gold-pale/20 transition-colors duration-200">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-temple-gold rounded-full flex items-center justify-center">
                          <User className="h-5 w-5 text-white" />
                        </div>
                        <div>
                          <div className="text-sm font-medium text-temple-brown-deep">
                            {customer.full_name || 'No Name'}
                          </div>
                          <div className="text-sm text-temple-brown-light">
                            ID: {customer.id.slice(0, 8)}...
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="space-y-1">
                        <div className="flex items-center space-x-2 text-sm text-temple-brown-medium">
                          <Mail className="h-4 w-4" />
                          <span>{customer.email}</span>
                        </div>
                        {customer.phone && (
                          <div className="flex items-center space-x-2 text-sm text-temple-brown-medium">
                            <Phone className="h-4 w-4" />
                            <span>{customer.phone}</span>
                          </div>
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center space-x-2">
                        <ShoppingBag className="h-4 w-4 text-temple-saffron" />
                        <span className="text-sm font-medium text-temple-brown-deep">
                          {orderCount} orders
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-temple-brown-deep">
                        ₹{totalSpent.toLocaleString()}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-temple-brown-medium">
                      <div className="flex items-center space-x-2">
                        <Calendar className="h-4 w-4" />
                        <span>{new Date(customer.created_at).toLocaleDateString()}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <button
                        onClick={() => handleViewCustomer(customer)}
                        className="text-temple-saffron hover:text-temple-gold transition-colors duration-200"
                      >
                        <Eye className="h-4 w-4" />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Customer Details Modal */}
      {showCustomerModal && selectedCustomer && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-temple-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-temple-gold/20">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-serif text-temple-brown-deep">
                  Customer Details - {selectedCustomer.full_name || 'No Name'}
                </h2>
                <button
                  onClick={() => setShowCustomerModal(false)}
                  className="p-2 text-temple-brown-light hover:text-temple-brown-deep transition-colors duration-200"
                >
                  ×
                </button>
              </div>
            </div>

            <div className="p-6 space-y-6">
              {/* Customer Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-medium text-temple-brown-deep mb-3">Personal Information</h3>
                  <div className="space-y-2 text-sm">
                    <p><strong>Name:</strong> {selectedCustomer.full_name || 'Not provided'}</p>
                    <p><strong>Email:</strong> {selectedCustomer.email}</p>
                    <p><strong>Phone:</strong> {selectedCustomer.phone || 'Not provided'}</p>
                    <p><strong>Joined:</strong> {new Date(selectedCustomer.created_at).toLocaleDateString()}</p>
                  </div>
                </div>
                <div>
                  <h3 className="font-medium text-temple-brown-deep mb-3">Address Information</h3>
                  {selectedCustomer.shipping_address ? (
                    <div className="bg-temple-gold-pale/20 rounded-lg p-4">
                      <p className="text-sm text-temple-brown-medium">
                        {selectedCustomer.shipping_address.street}<br />
                        {selectedCustomer.shipping_address.city}, {selectedCustomer.shipping_address.state}<br />
                        {selectedCustomer.shipping_address.postal_code}<br />
                        {selectedCustomer.shipping_address.country}
                      </p>
                    </div>
                  ) : (
                    <p className="text-sm text-temple-brown-light">No address provided</p>
                  )}
                </div>
              </div>

              {/* Order History */}
              <div>
                <h3 className="font-medium text-temple-brown-deep mb-3">Order History</h3>
                {selectedCustomer.orders && selectedCustomer.orders.length > 0 ? (
                  <div className="space-y-3">
                    {selectedCustomer.orders.map((order) => (
                      <div key={order.id} className="flex items-center justify-between p-3 bg-temple-gold-pale/20 rounded-lg">
                        <div>
                          <p className="font-medium text-temple-brown-deep">{order.order_number}</p>
                          <p className="text-sm text-temple-brown-light">
                            {new Date(order.created_at).toLocaleDateString()}
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="font-medium text-temple-brown-deep">₹{order.total_amount.toLocaleString()}</p>
                          <p className={`text-xs px-2 py-1 rounded-full ${
                            order.status === 'delivered' ? 'bg-green-100 text-green-800' : 
                            order.status === 'shipped' ? 'bg-blue-100 text-blue-800' :
                            'bg-yellow-100 text-yellow-800'
                          }`}>
                            {order.status}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-temple-brown-light">No orders found</p>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomerManagement;
