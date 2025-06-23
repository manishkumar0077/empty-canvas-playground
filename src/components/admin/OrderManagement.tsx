import React, { useState, useEffect } from 'react';
import { 
  Search, 
  Filter, 
  Eye, 
  Package, 
  Truck, 
  CheckCircle,
  Clock,
  X,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';
import { supabase, Order } from '../../lib/supabase';

const OrderManagement = () => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('');
  const [filterPayment, setFilterPayment] = useState('');
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);
  const [showOrderModal, setShowOrderModal] = useState(false);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const { data, error } = await supabase
        .from('orders')
        .select(`
          *,
          profile:profiles!orders_user_id_fkey(full_name, email, phone),
          order_items(
            *,
            product:products(title, original_price)
          )
        `)
        .order('created_at', { ascending: false });

      if (error) throw error;
      setOrders(data || []);
    } catch (error) {
      console.error('Error fetching orders:', error);
    } finally {
      setLoading(false);
    }
  };

  const updateOrderStatus = async (orderId: string, newStatus: string) => {
    try {
      const updateData: any = { status: newStatus };
      
      if (newStatus === 'shipped') {
        updateData.shipped_at = new Date().toISOString();
        updateData.tracking_number = `TRK${Date.now()}`;
      } else if (newStatus === 'delivered') {
        updateData.delivered_at = new Date().toISOString();
      }

      const { error } = await supabase
        .from('orders')
        .update(updateData)
        .eq('id', orderId);

      if (error) throw error;
      fetchOrders();
    } catch (error) {
      console.error('Error updating order status:', error);
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'confirmed': return 'bg-blue-100 text-blue-800';
      case 'processing': return 'bg-purple-100 text-purple-800';
      case 'shipped': return 'bg-indigo-100 text-indigo-800';
      case 'delivered': return 'bg-green-100 text-green-800';
      case 'cancelled': return 'bg-red-100 text-red-800';
      case 'refunded': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getPaymentStatusColor = (status: string) => {
    switch (status) {
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'paid': return 'bg-green-100 text-green-800';
      case 'failed': return 'bg-red-100 text-red-800';
      case 'refunded': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'pending': return Clock;
      case 'confirmed': return CheckCircle;
      case 'processing': return Package;
      case 'shipped': return Truck;
      case 'delivered': return CheckCircle;
      default: return Clock;
    }
  };

  const filteredOrders = orders.filter(order => {
    const matchesSearch = order.order_number.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         order.profile?.full_name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         order.profile?.email?.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = !filterStatus || order.status === filterStatus;
    const matchesPayment = !filterPayment || order.payment_status === filterPayment;
    
    return matchesSearch && matchesStatus && matchesPayment;
  });

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
            <h1 className="text-2xl font-serif text-temple-brown-deep">Order Management</h1>
            <p className="text-temple-brown-medium">
              "सेवा ही सबसे बड़ा धर्म है" - Service is the greatest virtue
            </p>
          </div>
          <div className="text-right">
            <p className="text-2xl font-bold text-temple-brown-deep">{orders.length}</p>
            <p className="text-sm text-temple-brown-medium">Total Orders</p>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl shadow-temple p-6 border border-temple-gold/20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-temple-brown-light" />
            <input
              type="text"
              placeholder="Search orders..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-temple-gold/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-temple-gold/50"
            />
          </div>
          
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="px-4 py-2 border border-temple-gold/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-temple-gold/50"
          >
            <option value="">All Status</option>
            <option value="pending">Pending</option>
            <option value="confirmed">Confirmed</option>
            <option value="processing">Processing</option>
            <option value="shipped">Shipped</option>
            <option value="delivered">Delivered</option>
            <option value="cancelled">Cancelled</option>
            <option value="refunded">Refunded</option>
          </select>

          <select
            value={filterPayment}
            onChange={(e) => setFilterPayment(e.target.value)}
            className="px-4 py-2 border border-temple-gold/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-temple-gold/50"
          >
            <option value="">All Payment Status</option>
            <option value="pending">Pending</option>
            <option value="paid">Paid</option>
            <option value="failed">Failed</option>
            <option value="refunded">Refunded</option>
          </select>

          <div className="flex items-center space-x-2">
            <Filter className="h-5 w-5 text-temple-brown-light" />
            <span className="text-sm text-temple-brown-medium">
              {filteredOrders.length} orders found
            </span>
          </div>
        </div>
      </div>

      {/* Orders Table */}
      <div className="bg-white rounded-xl shadow-temple border border-temple-gold/20 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-temple-gold-pale/30">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-temple-brown-deep uppercase tracking-wider">
                  Order
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-temple-brown-deep uppercase tracking-wider">
                  Customer
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-temple-brown-deep uppercase tracking-wider">
                  Items
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-temple-brown-deep uppercase tracking-wider">
                  Total
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-temple-brown-deep uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-temple-brown-deep uppercase tracking-wider">
                  Payment
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-temple-brown-deep uppercase tracking-wider">
                  Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-temple-brown-deep uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-temple-gold/10">
              {filteredOrders.map((order) => {
                const StatusIcon = getStatusIcon(order.status);
                return (
                  <tr key={order.id} className="hover:bg-temple-gold-pale/10">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div>
                        <div className="text-sm font-medium text-temple-brown-deep">
                          {order.order_number}
                        </div>
                        <div className="text-sm text-temple-brown-light">
                          {order.payment_method?.toUpperCase()}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div>
                        <div className="text-sm font-medium text-temple-brown-deep">
                          {order.profile?.full_name || 'Guest'}
                        </div>
                        <div className="text-sm text-temple-brown-light">
                          {order.profile?.email}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-temple-brown-deep">
                        {order.order_items?.length || 0} items
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-temple-brown-deep">
                        ₹{order.total_amount.toLocaleString()}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center space-x-2">
                        <StatusIcon className="h-4 w-4" />
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(order.status)}`}>
                          {order.status}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPaymentStatusColor(order.payment_status)}`}>
                        {order.payment_status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-temple-brown-light">
                      {new Date(order.created_at).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => {
                            setSelectedOrder(order);
                            setShowOrderModal(true);
                          }}
                          className="p-1 text-temple-brown-light hover:text-temple-saffron transition-colors duration-200"
                        >
                          <Eye className="h-4 w-4" />
                        </button>
                        <select
                          value={order.status}
                          onChange={(e) => updateOrderStatus(order.id, e.target.value)}
                          className="text-xs border border-temple-gold/30 rounded px-2 py-1 focus:outline-none focus:ring-1 focus:ring-temple-gold/50"
                        >
                          <option value="pending">Pending</option>
                          <option value="confirmed">Confirmed</option>
                          <option value="processing">Processing</option>
                          <option value="shipped">Shipped</option>
                          <option value="delivered">Delivered</option>
                          <option value="cancelled">Cancelled</option>
                          <option value="refunded">Refunded</option>
                        </select>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Order Detail Modal */}
      {showOrderModal && selectedOrder && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-temple-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-temple-gold/20">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-serif text-temple-brown-deep">
                  Order Details - {selectedOrder.order_number}
                </h2>
                <button
                  onClick={() => setShowOrderModal(false)}
                  className="p-2 text-temple-brown-light hover:text-temple-brown-deep transition-colors duration-200"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
            </div>

            <div className="p-6 space-y-6">
              {/* Order Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="font-medium text-temple-brown-deep">Order Information</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-temple-brown-light">Order Number:</span>
                      <span className="font-medium">{selectedOrder.order_number}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-temple-brown-light">Date:</span>
                      <span>{new Date(selectedOrder.created_at).toLocaleDateString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-temple-brown-light">Status:</span>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(selectedOrder.status)}`}>
                        {selectedOrder.status}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-temple-brown-light">Payment:</span>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPaymentStatusColor(selectedOrder.payment_status)}`}>
                        {selectedOrder.payment_status}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-temple-brown-light">Payment Method:</span>
                      <span className="uppercase">{selectedOrder.payment_method}</span>
                    </div>
                    {selectedOrder.tracking_number && (
                      <div className="flex justify-between">
                        <span className="text-temple-brown-light">Tracking:</span>
                        <span className="font-mono">{selectedOrder.tracking_number}</span>
                      </div>
                    )}
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="font-medium text-temple-brown-deep">Customer Information</h3>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <span className="font-medium">{selectedOrder.profile?.full_name || 'Guest'}</span>
                    </div>
                    {selectedOrder.profile?.email && (
                      <div className="flex items-center space-x-2">
                        <Mail className="h-4 w-4 text-temple-brown-light" />
                        <span className="text-sm">{selectedOrder.profile.email}</span>
                      </div>
                    )}
                    {selectedOrder.profile?.phone && (
                      <div className="flex items-center space-x-2">
                        <Phone className="h-4 w-4 text-temple-brown-light" />
                        <span className="text-sm">{selectedOrder.profile.phone}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Shipping Address */}
              <div>
                <h3 className="font-medium text-temple-brown-deep mb-3">Shipping Address</h3>
                <div className="bg-temple-gold-pale/20 rounded-lg p-4">
                  <div className="flex items-start space-x-2">
                    <MapPin className="h-4 w-4 text-temple-brown-light mt-1" />
                    <div className="text-sm">
                      {selectedOrder.shipping_address && typeof selectedOrder.shipping_address === 'object' ? (
                        <div>
                          <p>{selectedOrder.shipping_address.street}</p>
                          <p>{selectedOrder.shipping_address.city}, {selectedOrder.shipping_address.state}</p>
                          <p>{selectedOrder.shipping_address.pincode}</p>
                        </div>
                      ) : (
                        <p>Address information not available</p>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Order Items */}
              <div>
                <h3 className="font-medium text-temple-brown-deep mb-3">Order Items</h3>
                <div className="space-y-3">
                  {selectedOrder.order_items?.map((item) => (
                    <div key={item.id} className="flex items-center justify-between p-3 bg-temple-gold-pale/20 rounded-lg">
                      <div>
                        <p className="font-medium text-temple-brown-deep">
                          {item.product?.title || 'Product'}
                        </p>
                        <p className="text-sm text-temple-brown-light">
                          Quantity: {item.quantity} × ₹{item.unit_price}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-temple-brown-deep">₹{item.total_price}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Order Summary */}
              <div className="border-t border-temple-gold/20 pt-4">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-temple-brown-light">Subtotal:</span>
                    <span>₹{selectedOrder.subtotal}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-temple-brown-light">Shipping:</span>
                    <span>₹{selectedOrder.shipping_amount}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-temple-brown-light">Tax:</span>
                    <span>₹{selectedOrder.tax_amount}</span>
                  </div>
                  {selectedOrder.discount_amount > 0 && (
                    <div className="flex justify-between">
                      <span className="text-temple-brown-light">Discount:</span>
                      <span className="text-green-600">-₹{selectedOrder.discount_amount}</span>
                    </div>
                  )}
                  <div className="flex justify-between text-lg font-bold text-temple-brown-deep border-t border-temple-gold/20 pt-2">
                    <span>Total:</span>
                    <span>₹{selectedOrder.total_amount}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderManagement;
