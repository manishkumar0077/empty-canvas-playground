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
  FolderOpen
} from 'lucide-react';
import { useForm } from 'react-hook-form';
import { supabase, Category } from '../../lib/supabase';

const CategoryManagement = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [editingCategory, setEditingCategory] = useState<Category | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  const { register, handleSubmit, reset, setValue } = useForm();

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const { data, error } = await supabase
        .from('categories')
        .select('*')
        .order('sort_order', { ascending: true });

      if (error) throw error;
      setCategories(data || []);
    } catch (error) {
      console.error('Error fetching categories:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleCreateCategory = () => {
    setEditingCategory(null);
    reset();
    setShowModal(true);
  };

  const handleEditCategory = (category: Category) => {
    setEditingCategory(category);
    // Populate form with category data
    Object.keys(category).forEach(key => {
      setValue(key, category[key as keyof Category]);
    });
    setShowModal(true);
  };

  const handleDeleteCategory = async (categoryId: string) => {
    if (!confirm('Are you sure you want to delete this category? This will affect all products in this category.')) return;

    try {
      const { error } = await supabase
        .from('categories')
        .delete()
        .eq('id', categoryId);

      if (error) throw error;
      fetchCategories();
    } catch (error) {
      console.error('Error deleting category:', error);
    }
  };

  const toggleCategoryStatus = async (categoryId: string, currentStatus: boolean) => {
    try {
      const { error } = await supabase
        .from('categories')
        .update({ is_active: !currentStatus })
        .eq('id', categoryId);

      if (error) throw error;
      fetchCategories();
    } catch (error) {
      console.error('Error updating category status:', error);
    }
  };

  const toggleFeaturedStatus = async (categoryId: string, currentStatus: boolean) => {
    try {
      const { error } = await supabase
        .from('categories')
        .update({ is_featured: !currentStatus })
        .eq('id', categoryId);

      if (error) throw error;
      fetchCategories();
    } catch (error) {
      console.error('Error updating featured status:', error);
    }
  };

  const onSubmit = async (data: any) => {
    try {
      const categoryData = {
        name: data.name,
        hindi_name: data.hindi_name,
        description: data.description,
        icon: data.icon,
        image_url: data.image_url,
        is_active: data.is_active || false,
        is_featured: data.is_featured || false,
        sort_order: parseInt(data.sort_order) || 0,
      };

      let result;
      if (editingCategory) {
        result = await supabase
          .from('categories')
          .update(categoryData)
          .eq('id', editingCategory.id);
      } else {
        result = await supabase
          .from('categories')
          .insert([categoryData]);
      }

      if (result.error) throw result.error;

      setShowModal(false);
      fetchCategories();
      reset();
    } catch (error) {
      console.error('Error saving category:', error);
    }
  };

  const filteredCategories = categories.filter(category =>
    category.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    (category.hindi_name && category.hindi_name.includes(searchTerm))
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
            <h1 className="text-2xl font-serif text-temple-brown-deep">Category Management</h1>
            <p className="text-temple-brown-medium">
              "वर्गीकरण ही व्यवस्था का आधार है" - Classification is the foundation of organization
            </p>
          </div>
          <button
            onClick={handleCreateCategory}
            className="bg-gradient-to-r from-temple-saffron to-temple-gold text-white px-6 py-3 rounded-lg font-medium hover:shadow-gold-glow transition-all duration-300 flex items-center space-x-2"
          >
            <Plus className="h-5 w-5" />
            <span>Add Category</span>
          </button>
        </div>
      </div>

      {/* Search */}
      <div className="bg-white rounded-xl shadow-temple p-6 border border-temple-gold/20">
        <div className="relative max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-temple-brown-light" />
          <input
            type="text"
            placeholder="Search categories..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-temple-gold/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-temple-gold/50"
          />
        </div>
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCategories.map(category => (
          <div key={category.id} className="bg-white rounded-xl shadow-temple border border-temple-gold/20 overflow-hidden hover:shadow-temple-lg transition-shadow duration-300">
            <div className="aspect-video bg-temple-gold-pale/20 flex items-center justify-center">
              {category.image_url ? (
                <img
                  src={category.image_url}
                  alt={category.name}
                  className="w-full h-full object-cover"
                />
              ) : (
                <FolderOpen className="h-16 w-16 text-temple-brown-light" />
              )}
            </div>
            
            <div className="p-4">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <h3 className="font-medium text-temple-brown-deep">{category.name}</h3>
                  {category.hindi_name && (
                    <p className="text-sm text-temple-saffron">{category.hindi_name}</p>
                  )}
                </div>
                <div className="flex items-center space-x-1">
                  {category.is_featured && (
                    <Star className="h-4 w-4 text-temple-saffron fill-current" />
                  )}
                  <div className={`w-3 h-3 rounded-full ${
                    category.is_active ? 'bg-green-500' : 'bg-red-500'
                  }`} />
                </div>
              </div>
              
              {category.description && (
                <p className="text-sm text-temple-brown-light mb-3 line-clamp-2">{category.description}</p>
              )}
              
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs text-temple-brown-light">
                  Sort Order: {category.sort_order}
                </span>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                  category.is_active ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                }`}>
                  {category.is_active ? 'Active' : 'Inactive'}
                </span>
              </div>
              
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => handleEditCategory(category)}
                  className="flex-1 bg-temple-gold text-white py-2 px-3 rounded-lg text-sm font-medium hover:bg-temple-gold/90 transition-colors duration-200 flex items-center justify-center space-x-1"
                >
                  <Edit className="h-4 w-4" />
                  <span>Edit</span>
                </button>
                <button
                  onClick={() => toggleCategoryStatus(category.id, category.is_active)}
                  className="p-2 text-temple-brown-light hover:text-temple-saffron transition-colors duration-200"
                  title={category.is_active ? 'Deactivate' : 'Activate'}
                >
                  {category.is_active ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
                <button
                  onClick={() => toggleFeaturedStatus(category.id, category.is_featured)}
                  className="p-2 text-temple-brown-light hover:text-temple-saffron transition-colors duration-200"
                  title={category.is_featured ? 'Remove from featured' : 'Add to featured'}
                >
                  <Star className={`h-4 w-4 ${category.is_featured ? 'fill-current text-temple-saffron' : ''}`} />
                </button>
                <button
                  onClick={() => handleDeleteCategory(category.id)}
                  className="p-2 text-temple-brown-light hover:text-red-600 transition-colors duration-200"
                >
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Category Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-temple-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-temple-gold/20">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-serif text-temple-brown-deep">
                  {editingCategory ? 'Edit Category' : 'Add New Category'}
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
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-temple-brown-deep mb-2">
                    Category Name *
                  </label>
                  <input
                    {...register('name', { required: true })}
                    className="w-full px-4 py-2 border border-temple-gold/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-temple-gold/50"
                    placeholder="Enter category name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-temple-brown-deep mb-2">
                    Hindi Name
                  </label>
                  <input
                    {...register('hindi_name')}
                    className="w-full px-4 py-2 border border-temple-gold/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-temple-gold/50"
                    placeholder="हिंदी नाम"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-temple-brown-deep mb-2">
                  Description
                </label>
                <textarea
                  {...register('description')}
                  rows={3}
                  className="w-full px-4 py-2 border border-temple-gold/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-temple-gold/50"
                  placeholder="Enter category description"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-temple-brown-deep mb-2">
                    Icon (Lucide React icon name)
                  </label>
                  <input
                    {...register('icon')}
                    className="w-full px-4 py-2 border border-temple-gold/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-temple-gold/50"
                    placeholder="Package, Heart, Circle, etc."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-temple-brown-deep mb-2">
                    Sort Order
                  </label>
                  <input
                    {...register('sort_order')}
                    type="number"
                    className="w-full px-4 py-2 border border-temple-gold/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-temple-gold/50"
                    placeholder="0"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-temple-brown-deep mb-2">
                  Image URL
                </label>
                <input
                  {...register('image_url')}
                  className="w-full px-4 py-2 border border-temple-gold/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-temple-gold/50"
                  placeholder="https://example.com/image.jpg"
                />
              </div>

              <div className="flex items-center space-x-6">
                <div className="flex items-center space-x-2">
                  <input
                    {...register('is_active')}
                    type="checkbox"
                    className="rounded border-temple-gold/40 text-temple-saffron focus:ring-temple-gold/30"
                  />
                  <label className="text-sm font-medium text-temple-brown-deep">
                    Active
                  </label>
                </div>

                <div className="flex items-center space-x-2">
                  <input
                    {...register('is_featured')}
                    type="checkbox"
                    className="rounded border-temple-gold/40 text-temple-saffron focus:ring-temple-gold/30"
                  />
                  <label className="text-sm font-medium text-temple-brown-deep">
                    Featured
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
                  <span>{editingCategory ? 'Update Category' : 'Create Category'}</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default CategoryManagement;
