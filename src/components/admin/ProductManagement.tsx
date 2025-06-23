import React, { useState, useEffect } from 'react';
import { 
  Plus, 
  Edit, 
  Trash2, 
  Search, 
  Eye,
  EyeOff,
  Star,
  Save,
  X,
  Package
} from 'lucide-react';
import { useForm } from 'react-hook-form';
import { supabase, Product, Category } from '../../lib/supabase';

const ProductManagement = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  const { register, handleSubmit, reset, setValue } = useForm();

  useEffect(() => {
    fetchProducts();
    fetchCategories();
  }, []);

  const fetchProducts = async () => {
    try {
      const { data, error } = await supabase
        .from('products')
        .select(`
          *,
          category:categories(name)
        `)
        .order('created_at', { ascending: false });

      if (error) throw error;
      setProducts(data || []);
    } catch (error) {
      console.error('Error fetching products:', error);
    } finally {
      setLoading(false);
    }
  };

  const fetchCategories = async () => {
    try {
      const { data, error } = await supabase
        .from('categories')
        .select('*')
        .eq('is_active', true)
        .order('name');

      if (error) throw error;
      setCategories(data || []);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  const handleCreateProduct = () => {
    setEditingProduct(null);
    reset();
    setShowModal(true);
  };

  const handleEditProduct = (product: Product) => {
    setEditingProduct(product);
    // Populate form with product data
    Object.keys(product).forEach(key => {
      setValue(key, product[key as keyof Product]);
    });
    setShowModal(true);
  };

  const handleDeleteProduct = async (productId: string) => {
    if (!confirm('Are you sure you want to delete this product?')) return;

    try {
      const { error } = await supabase
        .from('products')
        .delete()
        .eq('id', productId);

      if (error) throw error;
      fetchProducts();
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  const toggleProductStatus = async (productId: string, currentStatus: string) => {
    const newStatus = currentStatus === 'in_stock' ? 'out_of_stock' : 'in_stock';
    
    try {
      const { error } = await supabase
        .from('products')
        .update({ status: newStatus })
        .eq('id', productId);

      if (error) throw error;
      fetchProducts();
    } catch (error) {
      console.error('Error updating product status:', error);
    }
  };

  const toggleFeaturedStatus = async (productId: string, currentStatus: boolean) => {
    try {
      const { error } = await supabase
        .from('products')
        .update({ is_featured: !currentStatus })
        .eq('id', productId);

      if (error) throw error;
      fetchProducts();
    } catch (error) {
      console.error('Error updating featured status:', error);
    }
  };

  const onSubmit = async (data: any) => {
    try {
      const productData = {
        title: data.title,
        hindi_title: data.hindi_title,
        description: data.description,
        hindi_description: data.hindi_description,
        original_price: parseFloat(data.original_price),
        discounted_price: data.discounted_price ? parseFloat(data.discounted_price) : null,
        category_id: data.category_id,
        sku: data.sku,
        status: data.status || 'in_stock',
        is_featured: data.is_featured || false,
        deity: data.deity,
        materials: data.materials ? data.materials.split(',').map((m: string) => m.trim()) : [],
        spiritual_benefits: data.spiritual_benefits ? data.spiritual_benefits.split(',').map((b: string) => b.trim()) : [],
        mantra: data.mantra,
        blessing_type: data.blessing_type,
        weight: data.weight ? parseFloat(data.weight) : null,
        dimensions: data.dimensions ? JSON.parse(data.dimensions) : null,
        tags: data.tags ? data.tags.split(',').map((t: string) => t.trim()) : [],
      };

      let result;
      if (editingProduct) {
        result = await supabase
          .from('products')
          .update(productData)
          .eq('id', editingProduct.id);
      } else {
        result = await supabase
          .from('products')
          .insert([productData]);
      }

      if (result.error) throw result.error;

      setShowModal(false);
      fetchProducts();
      reset();
    } catch (error) {
      console.error('Error saving product:', error);
    }
  };

  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    (product.hindi_title && product.hindi_title.includes(searchTerm)) ||
    (product.sku && product.sku.toLowerCase().includes(searchTerm.toLowerCase()))
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
            <h1 className="text-2xl font-serif text-temple-brown-deep">Product Management</h1>
            <p className="text-temple-brown-medium">
              "वस्तु संग्रह ही व्यापार का आधार है" - Product collection is the foundation of commerce
            </p>
          </div>
          <button
            onClick={handleCreateProduct}
            className="bg-gradient-to-r from-temple-saffron to-temple-gold text-white px-6 py-3 rounded-lg font-medium hover:shadow-gold-glow transition-all duration-300 flex items-center space-x-2"
          >
            <Plus className="h-5 w-5" />
            <span>Add Product</span>
          </button>
        </div>
      </div>

      {/* Search */}
      <div className="bg-white rounded-xl shadow-temple p-6 border border-temple-gold/20">
        <div className="relative max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-temple-brown-light" />
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-temple-gold/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-temple-gold/50"
          />
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map(product => (
          <div key={product.id} className="bg-white rounded-xl shadow-temple border border-temple-gold/20 overflow-hidden hover:shadow-temple-lg transition-shadow duration-300">
            <div className="aspect-square bg-temple-gold-pale/20 flex items-center justify-center">
              <Package className="h-16 w-16 text-temple-brown-light" />
            </div>
            
            <div className="p-4">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <h3 className="font-medium text-temple-brown-deep line-clamp-1">{product.title}</h3>
                  {product.hindi_title && (
                    <p className="text-sm text-temple-saffron line-clamp-1">{product.hindi_title}</p>
                  )}
                </div>
                <div className="flex items-center space-x-1">
                  {product.is_featured && (
                    <Star className="h-4 w-4 text-temple-saffron fill-current" />
                  )}
                  <div className={`w-3 h-3 rounded-full ${
                    product.status === 'in_stock' ? 'bg-green-500' : 'bg-red-500'
                  }`} />
                </div>
              </div>
              
              <p className="text-sm text-temple-brown-light mb-3 line-clamp-2">{product.description}</p>
              
              <div className="flex items-center justify-between mb-3">
                <div>
                  <span className="text-lg font-bold text-temple-brown-deep">₹{product.original_price}</span>
                  {product.discounted_price && (
                    <span className="text-sm text-temple-saffron ml-2">₹{product.discounted_price}</span>
                  )}
                </div>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                  product.status === 'in_stock' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                }`}>
                  {product.status === 'in_stock' ? 'In Stock' : 'Out of Stock'}
                </span>
              </div>
              
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => handleEditProduct(product)}
                  className="flex-1 bg-temple-gold text-white py-2 px-3 rounded-lg text-sm font-medium hover:bg-temple-gold/90 transition-colors duration-200 flex items-center justify-center space-x-1"
                >
                  <Edit className="h-4 w-4" />
                  <span>Edit</span>
                </button>
                <button
                  onClick={() => toggleProductStatus(product.id, product.status)}
                  className="p-2 text-temple-brown-light hover:text-temple-saffron transition-colors duration-200"
                  title={product.status === 'in_stock' ? 'Mark as out of stock' : 'Mark as in stock'}
                >
                  {product.status === 'in_stock' ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
                <button
                  onClick={() => toggleFeaturedStatus(product.id, product.is_featured)}
                  className="p-2 text-temple-brown-light hover:text-temple-saffron transition-colors duration-200"
                  title={product.is_featured ? 'Remove from featured' : 'Add to featured'}
                >
                  <Star className={`h-4 w-4 ${product.is_featured ? 'fill-current text-temple-saffron' : ''}`} />
                </button>
                <button
                  onClick={() => handleDeleteProduct(product.id)}
                  className="p-2 text-temple-brown-light hover:text-red-600 transition-colors duration-200"
                >
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Product Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-temple-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-temple-gold/20">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-serif text-temple-brown-deep">
                  {editingProduct ? 'Edit Product' : 'Add New Product'}
                </h2>
                <button
                  onClick={() => setShowModal(false)}
                  className="p-2 text-temple-brown-light hover:text-temple-brown-deep transition-colors duration-200"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="p-6 space-y-6">
              {/* Basic Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-temple-brown-deep mb-2">
                    Product Title *
                  </label>
                  <input
                    {...register('title', { required: true })}
                    className="w-full px-4 py-2 border border-temple-gold/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-temple-gold/50"
                    placeholder="Enter product title"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-temple-brown-deep mb-2">
                    Hindi Title
                  </label>
                  <input
                    {...register('hindi_title')}
                    className="w-full px-4 py-2 border border-temple-gold/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-temple-gold/50"
                    placeholder="हिंदी शीर्षक"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-temple-brown-deep mb-2">
                    Description *
                  </label>
                  <textarea
                    {...register('description', { required: true })}
                    rows={4}
                    className="w-full px-4 py-2 border border-temple-gold/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-temple-gold/50"
                    placeholder="Enter product description"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-temple-brown-deep mb-2">
                    Hindi Description
                  </label>
                  <textarea
                    {...register('hindi_description')}
                    rows={4}
                    className="w-full px-4 py-2 border border-temple-gold/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-temple-gold/50"
                    placeholder="हिंदी विवरण"
                  />
                </div>
              </div>

              {/* Pricing */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-medium text-temple-brown-deep mb-2">
                    Original Price *
                  </label>
                  <input
                    {...register('original_price', { required: true })}
                    type="number"
                    step="0.01"
                    className="w-full px-4 py-2 border border-temple-gold/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-temple-gold/50"
                    placeholder="0.00"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-temple-brown-deep mb-2">
                    Discounted Price
                  </label>
                  <input
                    {...register('discounted_price')}
                    type="number"
                    step="0.01"
                    className="w-full px-4 py-2 border border-temple-gold/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-temple-gold/50"
                    placeholder="0.00"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-temple-brown-deep mb-2">
                    SKU
                  </label>
                  <input
                    {...register('sku')}
                    className="w-full px-4 py-2 border border-temple-gold/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-temple-gold/50"
                    placeholder="SKU-001"
                  />
                </div>
              </div>

              {/* Category and Status */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-temple-brown-deep mb-2">
                    Category
                  </label>
                  <select
                    {...register('category_id')}
                    className="w-full px-4 py-2 border border-temple-gold/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-temple-gold/50"
                  >
                    <option value="">Select a category</option>
                    {categories.map(category => (
                      <option key={category.id} value={category.id}>
                        {category.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-temple-brown-deep mb-2">
                    Status
                  </label>
                  <select
                    {...register('status')}
                    className="w-full px-4 py-2 border border-temple-gold/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-temple-gold/50"
                  >
                    <option value="in_stock">In Stock</option>
                    <option value="out_of_stock">Out of Stock</option>
                    <option value="discontinued">Discontinued</option>
                  </select>
                </div>
              </div>

              {/* Spiritual Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-temple-brown-deep mb-2">
                    Deity
                  </label>
                  <input
                    {...register('deity')}
                    className="w-full px-4 py-2 border border-temple-gold/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-temple-gold/50"
                    placeholder="Lord Ganesha, Goddess Lakshmi, etc."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-temple-brown-deep mb-2">
                    Blessing Type
                  </label>
                  <input
                    {...register('blessing_type')}
                    className="w-full px-4 py-2 border border-temple-gold/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-temple-gold/50"
                    placeholder="Prosperity, Protection, Peace, etc."
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-temple-brown-deep mb-2">
                  Mantra
                </label>
                <textarea
                  {...register('mantra')}
                  rows={2}
                  className="w-full px-4 py-2 border border-temple-gold/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-temple-gold/50"
                  placeholder="Sacred mantra associated with this product"
                />
              </div>

              {/* Materials and Benefits */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-temple-brown-deep mb-2">
                    Materials (comma-separated)
                  </label>
                  <input
                    {...register('materials')}
                    className="w-full px-4 py-2 border border-temple-gold/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-temple-gold/50"
                    placeholder="Gold, Silver, Gemstone, etc."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-temple-brown-deep mb-2">
                    Spiritual Benefits (comma-separated)
                  </label>
                  <input
                    {...register('spiritual_benefits')}
                    className="w-full px-4 py-2 border border-temple-gold/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-temple-gold/50"
                    placeholder="Peace, Prosperity, Protection, etc."
                  />
                </div>
              </div>

              {/* Physical Properties */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-medium text-temple-brown-deep mb-2">
                    Weight (grams)
                  </label>
                  <input
                    {...register('weight')}
                    type="number"
                    step="0.01"
                    className="w-full px-4 py-2 border border-temple-gold/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-temple-gold/50"
                    placeholder="0.00"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-temple-brown-deep mb-2">
                    Tags (comma-separated)
                  </label>
                  <input
                    {...register('tags')}
                    className="w-full px-4 py-2 border border-temple-gold/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-temple-gold/50"
                    placeholder="tag1, tag2, tag3"
                  />
                </div>

                <div className="flex items-center space-x-2 pt-8">
                  <input
                    {...register('is_featured')}
                    type="checkbox"
                    className="rounded border-temple-gold/40 text-temple-saffron focus:ring-temple-gold/30"
                  />
                  <label className="text-sm font-medium text-temple-brown-deep">
                    Featured Product
                  </label>
                </div>
              </div>

              {/* Form Actions */}
              <div className="flex items-center justify-end space-x-4 pt-6 border-t border-temple-gold/20">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="px-6 py-2 border border-temple-gold/30 text-temple-brown-deep rounded-lg hover:bg-temple-gold-pale/30 transition-colors duration-200"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-gradient-to-r from-temple-saffron to-temple-gold text-white px-6 py-2 rounded-lg font-medium hover:shadow-gold-glow transition-all duration-300 flex items-center space-x-2"
                >
                  <Save className="h-4 w-4" />
                  <span>{editingProduct ? 'Update Product' : 'Create Product'}</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductManagement;
