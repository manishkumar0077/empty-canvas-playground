
import { useState, useEffect } from 'react';
import { 
  TrendingUp, 
  Users, 
  ShoppingCart, 
  DollarSign,
  Package,
  Eye,
  Star,
  Calendar
} from 'lucide-react';
import { supabase } from '../../lib/supabase';

interface AnalyticsData {
  totalOrders: number;
  totalRevenue: number;
  totalCustomers: number;
  totalProducts: number;
  recentOrders: any[];
  topProducts: any[];
  salesData: any[];
}

const Analytics = () => {
  const [data, setData] = useState<AnalyticsData>({
    totalOrders: 0,
    totalRevenue: 0,
    totalCustomers: 0,
    totalProducts: 0,
    recentOrders: [],
    topProducts: [],
    salesData: []
  });
  const [loading, setLoading] = useState(true);
  const [selectedPeriod, setSelectedPeriod] = useState('30');

  useEffect(() => {
    fetchAnalytics();
  }, [selectedPeriod]);

  const fetchAnalytics = async () => {
    try {
      const dateFilter = new Date();
      dateFilter.setDate(dateFilter.getDate() - parseInt(selectedPeriod));

      // Fetch orders
      const { data: orders } = await supabase
        .from('orders')
        .select(`
          *,
          profiles!orders_user_id_fkey(full_name, email),
          order_items(
            quantity,
            unit_price,
            total_price,
            product:products(title, image_url)
          )
        `)
        .gte('created_at', dateFilter.toISOString())
        .order('created_at', { ascending: false });

      // Fetch customers
      const { data: customers } = await supabase
        .from('profiles')
        .select('*')
        .eq('role', 'customer');

      // Fetch products
      const { data: products } = await supabase
        .from('products')
        .select('*');

      // Calculate analytics
      const totalOrders = orders?.length || 0;
      const totalRevenue = orders?.reduce((sum, order) => sum + order.total_amount, 0) || 0;
      const totalCustomers = customers?.length || 0;
      const totalProducts = products?.length || 0;

      // Get recent orders (last 5)
      const recentOrders = orders?.slice(0, 5) || [];

      // Calculate top products
      const productSales = {};
      orders?.forEach(order => {
        order.order_items?.forEach(item => {
          if (productSales[item.product.title]) {
            productSales[item.product.title] += item.quantity;
          } else {
            productSales[item.product.title] = item.quantity;
          }
        });
      });

      const topProducts = Object.entries(productSales)
        .map(([title, quantity]) => ({ title, quantity }))
        .sort((a, b) => b.quantity - a.quantity)
        .slice(0, 5);

      setData({
        totalOrders,
        totalRevenue,
        totalCustomers,
        totalProducts,
        recentOrders,
        topProducts,
        salesData: []
      });
    } catch (error) {
      console.error('Error fetching analytics:', error);
    } finally {
      setLoading(false);
    }
  };

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
            <h1 className="text-2xl font-serif text-temple-brown-deep">Analytics Dashboard</h1>
            <p className="text-temple-brown-medium">
              "ज्ञान ही शक्ति है" - Knowledge is power
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <select
              value={selectedPeriod}
              onChange={(e) => setSelectedPeriod(e.target.value)}
              className="px-4 py-2 border border-temple-gold/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-temple-gold/50"
            >
              <option value="7">Last 7 days</option>
              <option value="30">Last 30 days</option>
              <option value="90">Last 90 days</option>
              <option value="365">Last year</option>
            </select>
          </div>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl shadow-temple p-6 border border-temple-gold/20">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-temple-brown-light text-sm font-medium">Total Orders</p>
              <p className="text-2xl font-bold text-temple-brown-deep">{data.totalOrders}</p>
            </div>
            <div className="w-12 h-12 bg-temple-gold-pale rounded-full flex items-center justify-center">
              <ShoppingCart className="h-6 w-6 text-temple-saffron" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-temple p-6 border border-temple-gold/20">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-temple-brown-light text-sm font-medium">Total Revenue</p>
              <p className="text-2xl font-bold text-temple-brown-deep">₹{data.totalRevenue.toLocaleString()}</p>
            </div>
            <div className="w-12 h-12 bg-temple-gold-pale rounded-full flex items-center justify-center">
              <DollarSign className="h-6 w-6 text-temple-saffron" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-temple p-6 border border-temple-gold/20">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-temple-brown-light text-sm font-medium">Total Customers</p>
              <p className="text-2xl font-bold text-temple-brown-deep">{data.totalCustomers}</p>
            </div>
            <div className="w-12 h-12 bg-temple-gold-pale rounded-full flex items-center justify-center">
              <Users className="h-6 w-6 text-temple-saffron" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-temple p-6 border border-temple-gold/20">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-temple-brown-light text-sm font-medium">Total Products</p>
              <p className="text-2xl font-bold text-temple-brown-deep">{data.totalProducts}</p>
            </div>
            <div className="w-12 h-12 bg-temple-gold-pale rounded-full flex items-center justify-center">
              <Package className="h-6 w-6 text-temple-saffron" />
            </div>
          </div>
        </div>
      </div>

      {/* Charts and Tables */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Orders */}
        <div className="bg-white rounded-xl shadow-temple border border-temple-gold/20 overflow-hidden">
          <div className="p-6 border-b border-temple-gold/20">
            <h3 className="text-lg font-medium text-temple-brown-deep">Recent Orders</h3>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {data.recentOrders.map((order) => (
                <div key={order.id} className="flex items-center justify-between p-3 bg-temple-gold-pale/20 rounded-lg">
                  <div>
                    <p className="font-medium text-temple-brown-deep">{order.order_number}</p>
                    <p className="text-sm text-temple-brown-light">
                      {order.profiles?.full_name || 'Guest'}
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
          </div>
        </div>

        {/* Top Products */}
        <div className="bg-white rounded-xl shadow-temple border border-temple-gold/20 overflow-hidden">
          <div className="p-6 border-b border-temple-gold/20">
            <h3 className="text-lg font-medium text-temple-brown-deep">Top Selling Products</h3>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {data.topProducts.map((product, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-temple-gold-pale/20 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-temple-gold rounded-full flex items-center justify-center">
                      <span className="text-white text-sm font-bold">{index + 1}</span>
                    </div>
                    <div>
                      <p className="font-medium text-temple-brown-deep">{product.title}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-temple-brown-deep">{product.quantity} sold</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Spiritual Quote */}
      <div className="bg-gradient-to-r from-temple-sandalwood/20 to-temple-gold-light/20 rounded-2xl p-6 border border-temple-gold/20 text-center">
        <blockquote className="font-serif text-xl text-temple-brown-deep italic mb-3">
          "सफलता का मापदंड केवल धन नहीं, बल्कि ग्राहकों की संतुष्टि है।"
        </blockquote>
        <p className="text-temple-brown-light">
          The measure of success is not just wealth, but customer satisfaction.
        </p>
      </div>
    </div>
  );
};

export default Analytics;
