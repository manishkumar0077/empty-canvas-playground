import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Database types
export interface Profile {
  id: string;
  email: string;
  full_name?: string;
  phone?: string;
  role: 'customer' | 'admin';
  avatar_url?: string;
  shipping_address?: any;
  created_at: string;
  updated_at: string;
}

export interface Category {
  id: string;
  name: string;
  hindi_name?: string;
  description?: string;
  icon?: string;
  image_url?: string;
  is_active: boolean;
  is_featured: boolean;
  sort_order: number;
  created_at: string;
  updated_at: string;
}

export interface Product {
  id: string;
  title: string;
  hindi_title?: string;
  description: string;
  hindi_description?: string;
  category_id?: string;
  original_price: number;
  discounted_price?: number;
  sku?: string;
  tags?: string[];
  status: 'in_stock' | 'out_of_stock' | 'deal_of_day' | 'trending';
  shipping_methods: string[];
  weight?: number;
  dimensions?: any;
  materials?: string[];
  deity?: string;
  spiritual_benefits?: string[];
  mantra?: string;
  blessing_type?: string;
  is_featured: boolean;
  view_count: number;
  rating: number;
  review_count: number;
  created_at: string;
  updated_at: string;
  category?: Category;
  images?: ProductImage[];
}

export interface ProductImage {
  id: string;
  product_id: string;
  image_url: string;
  alt_text?: string;
  sort_order: number;
  is_primary: boolean;
  created_at: string;
}

export interface Coupon {
  id: string;
  code: string;
  name: string;
  description?: string;
  discount_type: 'percentage' | 'fixed_amount';
  discount_value: number;
  minimum_order_amount: number;
  maximum_discount_amount?: number;
  applicable_categories?: string[];
  applicable_products?: string[];
  usage_limit?: number;
  used_count: number;
  is_active: boolean;
  starts_at: string;
  expires_at?: string;
  created_at: string;
  updated_at: string;
}

export interface Order {
  id: string;
  user_id: string;
  order_number: string;
  status: 'pending' | 'confirmed' | 'processing' | 'shipped' | 'delivered' | 'cancelled' | 'refunded';
  payment_method: 'cod' | 'upi' | 'razorpay' | 'paypal';
  payment_status: 'pending' | 'paid' | 'failed' | 'refunded';
  payment_id?: string;
  subtotal: number;
  discount_amount: number;
  shipping_amount: number;
  tax_amount: number;
  total_amount: number;
  coupon_code?: string;
  shipping_address: any;
  billing_address?: any;
  notes?: string;
  tracking_number?: string;
  shipped_at?: string;
  delivered_at?: string;
  created_at: string;
  updated_at: string;
  order_items?: OrderItem[];
  profile?: Profile;
}

export interface OrderItem {
  id: string;
  order_id: string;
  product_id: string;
  quantity: number;
  unit_price: number;
  total_price: number;
  product_snapshot?: any;
  created_at: string;
  product?: Product;
}

export interface CartItem {
  id: string;
  user_id: string;
  product_id: string;
  quantity: number;
  created_at: string;
  updated_at: string;
  product?: Product;
}