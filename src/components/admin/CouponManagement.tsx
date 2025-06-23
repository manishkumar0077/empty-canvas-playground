import { useState, useEffect } from 'react';
import { 
  Plus, 
  Edit, 
  Trash2, 
  Search, 
  Eye,
  EyeOff,
  Save,
  X,
  Ticket,
  Calendar,
  Percent,
  DollarSign
} from 'lucide-react';
import { useForm } from 'react-hook-form';
import { supabase, Coupon } from '../../lib/supabase';

const CouponManagement = () => {
  const [coupons, setCoupons] = useState<Coupon[]>([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [editingCoupon, setEditingCoupon] = useState<Coupon | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  const { register, handleSubmit, reset, setValue, watch } = useForm();
  const discountType = watch('discount_type');

  useEffect(() => {
    fetchCoupons();
  }, []);

  const fetchCoupons = async () => {
    try {
      const { data, error } = await supabase
        .from('coupons')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setCoupons(data || []);
    } catch (error) {
      console.error('Error fetching coupons:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleCreateCoupon = () => {
    setEditingCoupon(null);
    reset({
      discount_type: 'percentage',
      is_active: true,
      minimum_order_amount: 0,
      usage_limit: null,
      starts_at: new Date().toISOString().slice(0, 16),
    });
    setShowModal(true);
  };

  const handleEditCoupon = (coupon: Coupon) => {
    setEditingCoupon(coupon);
    // Populate form with coupon data
    Object.keys(coupon).forEach(key => {
      let value = coupon[key as keyof Coupon];
      if (key === 'starts_at' || key === 'expires_at') {
        value = value && typeof value === 'string' ? new Date(value).toISOString().slice(0, 16) : '';
      }
      setValue(key, value);
    });
    setShowModal(true);
  };

  const handleDeleteCoupon = async (couponId: string) => {
    if (!confirm('Are you sure you want to delete this coupon?')) return;

    try {
      const { error } = await supabase
        .from('coupons')
        .delete()
        .eq('id', couponId);

      if (error) throw error;
      fetchCoupons();
    } catch (error) {
      console.error('Error deleting coupon:', error);
    }
  };

  const toggleCouponStatus = async (couponId: string, currentStatus: boolean) => {
    try {
      const { error } = await supabase
        .from('coupons')
        .update({ is_active: !currentStatus })
        .eq('id', couponId);

      if (error) throw error;
      fetchCoupons();
    } catch (error) {
      console.error('Error updating coupon status:', error);
    }
  };

  const onSubmit = async (data: any) => {
    try {
      const couponData = {
        code: data.code.toUpperCase(),
        name: data.name,
        description: data.description,
        discount_type: data.discount_type,
        discount_value: parseFloat(data.discount_value),
        minimum_order_amount: parseFloat(data.minimum_order_amount) || 0,
        maximum_discount_amount: data.maximum_discount_amount ? parseFloat(data.maximum_discount_amount) : null,
        usage_limit: data.usage_limit ? parseInt(data.usage_limit) : null,
        is_active: data.is_active || false,
        starts_at: data.starts_at ? new Date(data.starts_at).toISOString() : new Date().toISOString(),
        expires_at: data.expires_at ? new Date(data.expires_at).toISOString() : null,
      };

      let result;
      if (editingCoupon) {
        result = await supabase
          .from('coupons')
          .update(couponData)
          .eq('id', editingCoupon.id);
      } else {
        result = await supabase
          .from('coupons')
          .insert([couponData]);
      }

      if (result.error) throw result.error;

      setShowModal(false);
      fetchCoupons();
      reset();
    } catch (error) {
      console.error('Error saving coupon:', error);
    }
  };

  const filteredCoupons = coupons.filter(coupon =>
    coupon.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
    coupon.name.toLowerCase().includes(searchTerm.toLowerCase())
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
            <h1 className="text-2xl font-serif text-temple-brown-deep">Coupon Management</h1>
            <p className="text-temple-brown-medium">
              "उदारता ही धन की सच्ची शोभा है" - Generosity is the true beauty of wealth
            </p>
          </div>
          <button
            onClick={handleCreateCoupon}
            className="bg-gradient-to-r from-temple-saffron to-temple-gold text-white px-6 py-3 rounded-lg font-medium hover:shadow-gold-glow transition-all duration-300 flex items-center space-x-2"
          >
            <Plus className="h-5 w-5" />
            <span>Add Coupon</span>
          </button>
        </div>
      </div>

      {/* Search */}
      <div className="bg-white rounded-xl shadow-temple p-6 border border-temple-gold/20">
        <div className="relative max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-temple-brown-light" />
          <input
            type="text"
            placeholder="Search coupons..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-temple-gold/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-temple-gold/50"
          />
        </div>
      </div>

      {/* Coupons Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCoupons.map(coupon => (
          <div key={coupon.id} className="bg-white rounded-xl shadow-temple border border-temple-gold/20 overflow-hidden hover:shadow-temple-lg transition-shadow duration-300">
            <div className="bg-gradient-to-r from-temple-gold-pale/50 to-temple-saffron/20 p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-temple-gold rounded-full flex items-center justify-center">
                    <Ticket className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-temple-brown-deep text-lg">{coupon.code}</h3>
                    <p className="text-sm text-temple-brown-medium">{coupon.name}</p>
                  </div>
                </div>
                <div className={`w-3 h-3 rounded-full ${
                  coupon.is_active ? 'bg-green-500' : 'bg-red-500'
                }`} />
              </div>
            </div>
            
            <div className="p-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-temple-brown-light">Discount:</span>
                  <div className="flex items-center space-x-1">
                    {coupon.discount_type === 'percentage' ? (
                      <Percent className="h-4 w-4 text-temple-saffron" />
                    ) : (
                      <DollarSign className="h-4 w-4 text-temple-saffron" />
                    )}
                    <span className="font-medium text-temple-brown-deep">
                      {coupon.discount_type === 'percentage' ? `${coupon.discount_value}%` : `₹${coupon.discount_value}`}
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-temple-brown-light">Min Order:</span>
                  <span className="font-medium text-temple-brown-deep">₹{coupon.minimum_order_amount}</span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-temple-brown-light">Used:</span>
                  <span className="font-medium text-temple-brown-deep">
                    {coupon.used_count}{coupon.usage_limit ? `/${coupon.usage_limit}` : ''}
                  </span>
                </div>

                {coupon.expires_at && (
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-temple-brown-light">Expires:</span>
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4 text-temple-saffron" />
                      <span className="text-sm font-medium text-temple-brown-deep">
                        {new Date(coupon.expires_at).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                )}

                <div className={`px-3 py-1 rounded-full text-xs font-medium text-center ${
                  coupon.is_active ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                }`}>
                  {coupon.is_active ? 'Active' : 'Inactive'}
                </div>
              </div>
              
              <div className="flex items-center space-x-2 mt-4 pt-4 border-t border-temple-gold/20">
                <button
                  onClick={() => handleEditCoupon(coupon)}
                  className="flex-1 bg-temple-gold text-white py-2 px-3 rounded-lg text-sm font-medium hover:bg-temple-gold/90 transition-colors duration-200 flex items-center justify-center space-x-1"
                >
                  <Edit className="h-4 w-4" />
                  <span>Edit</span>
                </button>
                <button
                  onClick={() => toggleCouponStatus(coupon.id, coupon.is_active)}
                  className="p-2 text-temple-brown-light hover:text-temple-saffron transition-colors duration-200"
                  title={coupon.is_active ? 'Deactivate' : 'Activate'}
                >
                  {coupon.is_active ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
                <button
                  onClick={() => handleDeleteCoupon(coupon.id)}
                  className="p-2 text-temple-brown-light hover:text-red-600 transition-colors duration-200"
                >
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Coupon Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-temple-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-temple-gold/20">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-serif text-temple-brown-deep">
                  {editingCoupon ? 'Edit Coupon' : 'Add New Coupon'}
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
                    Coupon Code *
                  </label>
                  <input
                    {...register('code', { required: true })}
                    className="w-full px-4 py-2 border border-temple-gold/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-temple-gold/50 uppercase"
                    placeholder="SAVE20"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-temple-brown-deep mb-2">
                    Coupon Name *
                  </label>
                  <input
                    {...register('name', { required: true })}
                    className="w-full px-4 py-2 border border-temple-gold/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-temple-gold/50"
                    placeholder="20% Off Spiritual Items"
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
                  placeholder="Special discount for spiritual jewelry"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-temple-brown-deep mb-2">
                    Discount Type *
                  </label>
                  <select
                    {...register('discount_type', { required: true })}
                    className="w-full px-4 py-2 border border-temple-gold/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-temple-gold/50"
                  >
                    <option value="percentage">Percentage</option>
                    <option value="fixed_amount">Fixed Amount</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-temple-brown-deep mb-2">
                    Discount Value *
                  </label>
                  <input
                    {...register('discount_value', { required: true })}
                    type="number"
                    step="0.01"
                    className="w-full px-4 py-2 border border-temple-gold/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-temple-gold/50"
                    placeholder={discountType === 'percentage' ? '20' : '100'}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-temple-brown-deep mb-2">
                    Minimum Order Amount
                  </label>
                  <input
                    {...register('minimum_order_amount')}
                    type="number"
                    step="0.01"
                    className="w-full px-4 py-2 border border-temple-gold/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-temple-gold/50"
                    placeholder="0"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-temple-brown-deep mb-2">
                    Maximum Discount Amount
                  </label>
                  <input
                    {...register('maximum_discount_amount')}
                    type="number"
                    step="0.01"
                    className="w-full px-4 py-2 border border-temple-gold/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-temple-gold/50"
                    placeholder="Leave empty for no limit"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-temple-brown-deep mb-2">
                    Usage Limit
                  </label>
                  <input
                    {...register('usage_limit')}
                    type="number"
                    className="w-full px-4 py-2 border border-temple-gold/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-temple-gold/50"
                    placeholder="Leave empty for unlimited"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-temple-brown-deep mb-2">
                    Starts At
                  </label>
                  <input
                    {...register('starts_at')}
                    type="datetime-local"
                    className="w-full px-4 py-2 border border-temple-gold/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-temple-gold/50"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-temple-brown-deep mb-2">
                  Expires At
                </label>
                <input
                  {...register('expires_at')}
                  type="datetime-local"
                  className="w-full px-4 py-2 border border-temple-gold/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-temple-gold/50"
                />
              </div>

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
                  <span>{editingCoupon ? 'Update Coupon' : 'Create Coupon'}</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default CouponManagement;
