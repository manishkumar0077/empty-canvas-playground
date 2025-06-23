import React, { useState, useEffect } from 'react';
import { 
  Package, 
  ShoppingCart, 
  Users, 
  TrendingUp, 
  Eye,
  Star,
  Calendar,
  Sparkles
} from 'lucide-react';
import { supabase } from '../../lib/supabase';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';

interface SalesData {
  date: string;
  sales: number;
  orders: number;
}

interface RecentOrder {
  id: string;
  order_number: string;
  total_amount: number;
  status: string;
  profile?: {
    full_name?: string;
  };
}

interface TopProduct {
  id: string;
  title: string;
  view_count: number;
  original_price: number;
  rating: number;
}

const Dashboard = () => {
  const [stats, setStats] = useState({
    totalProducts: 0,
    totalOrders: 0,
    totalCustomers: 0,
    totalRevenue: 0,
    pendingOrders: 0,
    lowStockProducts: 0,
  });
  const [recentOrders, setRecentOrders] = useState<RecentOrder[]>([]);
  const [topProducts, setTopProducts] = useState<TopProduct[]>([]);
  const [salesData, setSalesData] = useState<SalesData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    try {
      // Fetch stats
      const [
        { count: productsCount },
        { count: ordersCount },
        { count: customersCount },
        { data: revenueData },
        { count: pendingCount },
        { data: ordersData },
        { data: productsData }
      ] = await Promise.all([
        supabase.from('products').select('*', { count: 'exact', head: true }),
        supabase.from('orders').select('*', { count: 'exact', head: true }),
        supabase.from('profiles').select('*', { count: 'exact', head: true }).eq('role', 'customer'),
        supabase.from('orders').select('total_amount').eq('payment_status', 'paid'),
        supabase.from('orders').select('*', { count: 'exact', head: true }).eq('status', 'pending'),
        supabase.from('orders').select(`
          *,
          profile:profiles!orders_user_id_fkey(full_name, email),
          order_items(quantity, product:products(title))
        `).order('created_at', { ascending: false }).limit(5),
        supabase.from('products').select('*').order('view_count', { ascending: false }).limit(5)
      ]);

      const totalRevenue = revenueData?.reduce((sum, order) => sum + order.total_amount, 0) || 0;

      setStats({
        totalProducts: productsCount || 0,
        totalOrders: ordersCount || 0,
        totalCustomers: customersCount || 0,
        totalRevenue,
        pendingOrders: pendingCount || 0,
        lowStockProducts: 0, // You can implement stock tracking
      });

      setRecentOrders(ordersData || []);
      setTopProducts(productsData || []);

      // Generate sample sales data (you can replace with real data)
      const last7Days = Array.from({ length: 7 }, (_, i) => {
        const date = new Date();
        date.setDate(date.getDate() - i);
        return {
          date: date.toLocaleDateString(),
          sales: Math.floor(Math.random() * 50000) + 10000,
          orders: Math.floor(Math.random() * 20) + 5,
        };
      }).reverse();

      setSalesData(last7Days);
    } catch (error) {
      console.error('Error fetching dashboard data:', error);
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

  const statCards = [
    {
      title: 'Total Products',
      value: stats.totalProducts,
      icon: Package,
      color: 'from-blue-500 to-blue-600',
      change: '+12%',
    },
    {
      title: 'Total Orders',
      value: stats.totalOrders,
      icon: ShoppingCart,
      color: 'from-green-500 to-green-600',
      change: '+8%',
    },
    {
      title: 'Total Customers',
      value: stats.totalCustomers,
      icon: Users,
      color: 'from-purple-500 to-purple-600',
      change: '+15%',
    },
    {
      title: 'Total Revenue',
      value: `₹${stats.totalRevenue.toLocaleString()}`,
      icon: TrendingUp,
      color: 'from-temple-gold to-temple-saffron',
      change: '+23%',
    },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="bg-gradient-to-r from-temple-sandalwood/20 to-temple-gold-light/20 rounded-2xl p-6 border border-temple-gold/20">
        <div className="flex items-center space-x-4">
          <Sparkles className="h-8 w-8 text-temple-gold animate-diya-pulse" />
          <div>
            <h1 className="text-2xl font-serif text-temple-brown-deep">Sacred Dashboard</h1>
            <p className="text-temple-brown-medium">
              "व्यापार में धर्म, धर्म में व्यापार" - Righteousness in business, business in righteousness
            </p>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {statCards.map((stat, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-temple p-6 border border-temple-gold/20 hover:shadow-temple-lg transition-shadow duration-300"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-temple-brown-light">{stat.title}</p>
                <p className="text-2xl font-bold text-temple-brown-deep">{stat.value}</p>
                <p className="text-sm text-green-600 font-medium">{stat.change} from last month</p>
              </div>
              <div className={`p-3 rounded-full bg-gradient-to-r ${stat.color}`}>
                <stat.icon className="h-6 w-6 text-white" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Sales Chart */}
        <div className="bg-white rounded-xl shadow-temple p-6 border border-temple-gold/20">
          <h3 className="text-lg font-serif text-temple-brown-deep mb-4">Sales Overview</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={salesData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="sales" fill="#D97706" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Orders Chart */}
        <div className="bg-white rounded-xl shadow-temple p-6 border border-temple-gold/20">
          <h3 className="text-lg font-serif text-temple-brown-deep mb-4">Orders Trend</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={salesData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="orders" stroke="#F97316" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Recent Orders and Top Products */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Orders */}
        <div className="bg-white rounded-xl shadow-temple p-6 border border-temple-gold/20">
          <h3 className="text-lg font-serif text-temple-brown-deep mb-4">Recent Orders</h3>
          <div className="space-y-4">
            {recentOrders.map((order: any) => (
              <div key={order.id} className="flex items-center justify-between p-3 bg-temple-gold-pale/20 rounded-lg">
                <div>
                  <p className="font-medium text-temple-brown-deep">{order.order_number}</p>
                  <p className="text-sm text-temple-brown-light">
                    {order.profiles?.full_name || 'Guest'}
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
            ))}
          </div>
        </div>

        {/* Top Products */}
        <div className="bg-white rounded-xl shadow-temple p-6 border border-temple-gold/20">
          <h3 className="text-lg font-serif text-temple-brown-deep mb-4">Top Products</h3>
          <div className="space-y-4">
            {topProducts.map((product: any) => (
              <div key={product.id} className="flex items-center justify-between p-3 bg-temple-gold-pale/20 rounded-lg">
                <div>
                  <p className="font-medium text-temple-brown-deep">{product.title}</p>
                  <div className="flex items-center space-x-2">
                    <Eye className="h-4 w-4 text-temple-brown-light" />
                    <span className="text-sm text-temple-brown-light">{product.view_count} views</span>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-bold text-temple-brown-deep">₹{product.original_price}</p>
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 text-temple-saffron fill-current" />
                    <span className="text-sm text-temple-brown-light">{product.rating}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-xl shadow-temple p-6 border border-temple-gold/20">
        <h3 className="text-lg font-serif text-temple-brown-deep mb-4">Quick Actions</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <button className="p-4 bg-temple-gold-pale/30 rounded-lg hover:bg-temple-gold-pale/50 transition-colors duration-200 text-center">
            <Package className="h-6 w-6 text-temple-gold mx-auto mb-2" />
            <span className="text-sm font-medium text-temple-brown-deep">Add Product</span>
          </button>
          <button className="p-4 bg-temple-gold-pale/30 rounded-lg hover:bg-temple-gold-pale/50 transition-colors duration-200 text-center">
            <ShoppingCart className="h-6 w-6 text-temple-gold mx-auto mb-2" />
            <span className="text-sm font-medium text-temple-brown-deep">View Orders</span>
          </button>
          <button className="p-4 bg-temple-gold-pale/30 rounded-lg hover:bg-temple-gold-pale/50 transition-colors duration-200 text-center">
            <Users className="h-6 w-6 text-temple-gold mx-auto mb-2" />
            <span className="text-sm font-medium text-temple-brown-deep">Customers</span>
          </button>
          <button className="p-4 bg-temple-gold-pale/30 rounded-lg hover:bg-temple-gold-pale/50 transition-colors duration-200 text-center">
            <Calendar className="h-6 w-6 text-temple-gold mx-auto mb-2" />
            <span className="text-sm font-medium text-temple-brown-deep">Reports</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
