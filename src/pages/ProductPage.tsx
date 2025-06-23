
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Star, Heart, Share2, Minus, Plus, ArrowLeft, Sparkles, Package } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useLanguage } from '../context/LanguageContext';

const ProductPage = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<any>(null);
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(true);
  const [selectedBlessings, setSelectedBlessings] = useState<string[]>([]);
  const { addToCart } = useCart();
  const { language } = useLanguage();

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      try {
        // Replace with your actual data fetching logic (e.g., from an API)
        // For now, using dummy data
        const dummyProduct = {
          id: '1',
          name: 'Sacred Rudraksha Mala',
          hindiName: 'पवित्र रुद्राक्ष माला',
          description: 'Authentic Rudraksha beads strung together with love and blessed for spiritual growth.',
          price: 999,
          original_price: 1299,
          image: 'https://images.unsplash.com/photo-1607798504244-48e2942d3076?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          rating: 4.5,
          reviews: 120,
          stock: 50,
          category: 'Mala',
          benefits: [
            'Spiritual growth',
            'Inner peace',
            'Protection'
          ],
          blessings: [
            { id: 'gangajal', name: 'Ganga Jal Purification', price: 99 },
            { id: 'mantra', name: 'Vedic Mantra Chanting', price: 199 },
            { id: 'kumkum', name: 'Kumkum Wrapping', price: 49 },
          ],
          details: [
            { title: 'Material', value: 'Rudraksha Beads' },
            { title: 'Origin', value: 'Nepal' },
            { title: 'Length', value: '32 inches' }
          ],
          careInstructions: [
            'Keep away from water',
            'Store in a dry place',
            'Clean with soft cloth'
          ],
          shippingInfo: {
            returns: '7 day return policy',
            delivery: '3-5 business days'
          }
        };
        setProduct(dummyProduct);
      } catch (error) {
        console.error('Error fetching product:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const handleAddToCart = () => {
    if (product) {
      addToCart({
        ...product,
        quantity,
        selectedBlessings: product.blessings ? selectedBlessings : []
      });
      alert('Added to cart!');
    }
  };

  const incrementQuantity = () => {
    if (product && quantity < product.stock) {
      setQuantity(quantity + 1);
    }
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const toggleBlessing = (blessingId: string) => {
    setSelectedBlessings((prev) =>
      prev.includes(blessingId)
        ? prev.filter((id) => id !== blessingId)
        : [...prev, blessingId]
    );
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-temple-ivory flex items-center justify-center">
        <div className="text-center">
          <Sparkles className="h-10 w-10 text-temple-gold animate-diya-pulse mx-auto mb-4" />
          <p className="text-temple-brown-medium">Loading...</p>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-temple-ivory flex items-center justify-center">
        <div className="text-center">
          <Package className="h-10 w-10 text-temple-brown-light mx-auto mb-4" />
          <p className="text-temple-brown-medium">Product not found</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-temple-ivory pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <button className="mb-6 flex items-center space-x-2 text-temple-brown-deep hover:text-temple-saffron transition-colors duration-200">
          <ArrowLeft className="h-5 w-5" />
          <span>Back to Products</span>
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Product Image */}
          <div>
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-auto rounded-2xl shadow-temple"
            />
          </div>

          {/* Product Details */}
          <div className="space-y-4">
            {/* Title and Price */}
            <div>
              <h1 className="font-serif text-3xl text-temple-brown-deep mb-2">{product.name}</h1>
              <p className="text-temple-saffron font-medium">{product.hindiName}</p>
              <div className="flex items-center space-x-3">
                <span className="text-2xl font-bold text-temple-brown-deep">₹{product.price.toLocaleString()}</span>
                {product.original_price && (
                  <span className="text-lg text-temple-brown-light line-through">₹{product.original_price.toLocaleString()}</span>
                )}
              </div>
            </div>

            {/* Rating and Reviews */}
            <div className="flex items-center space-x-2">
              <div className="flex items-center space-x-1">
                {[...Array(Math.floor(product.rating))].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-temple-saffron fill-current" />
                ))}
              </div>
              <span className="text-temple-brown-medium">{product.rating} ({product.reviews} reviews)</span>
            </div>

            {/* Description */}
            <div>
              <h3 className="font-medium text-temple-brown-deep mb-2">Description</h3>
              <p className="text-temple-brown-medium leading-relaxed">{product.description}</p>
            </div>

            {/* Benefits */}
            {product.benefits && product.benefits.length > 0 && (
              <div>
                <h3 className="font-medium text-temple-brown-deep mb-2">Benefits</h3>
                <ul className="list-disc pl-5 space-y-1">
                  {product.benefits.map((benefit: string, index: number) => (
                    <li key={index} className="text-temple-brown-medium">{benefit}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Quantity */}
            <div className="flex items-center space-x-4">
              <span className="text-temple-brown-deep font-medium">Quantity:</span>
              <div className="flex items-center border border-temple-gold/30 rounded-lg">
                <button
                  onClick={decrementQuantity}
                  className="p-2 text-temple-brown-medium hover:bg-temple-gold-pale transition-colors duration-200"
                >
                  <Minus className="h-4 w-4" />
                </button>
                <span className="px-4 py-2 text-temple-brown-deep font-medium">{quantity}</span>
                <button
                  onClick={incrementQuantity}
                  className="p-2 text-temple-brown-medium hover:bg-temple-gold-pale transition-colors duration-200"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
              {product.stock && (
                <span className="text-sm text-temple-brown-light">
                  {product.stock - quantity} left in stock
                </span>
              )}
            </div>

            {/* Blessings */}
            {product.blessings && product.blessings.length > 0 && (
              <div>
                <h3 className="font-medium text-temple-brown-deep mb-2">Add Sacred Blessings</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {product.blessings.map((blessing: any) => (
                    <label
                      key={blessing.id}
                      className={`flex items-center space-x-2 p-3 rounded-lg border ${
                        selectedBlessings.includes(blessing.id)
                          ? 'border-temple-gold shadow-inner bg-temple-gold-pale/30'
                          : 'border-temple-gold/30'
                      } hover:shadow-sm transition-shadow duration-200 cursor-pointer`}
                    >
                      <input
                        type="checkbox"
                        className="form-checkbox h-5 w-5 text-temple-saffron rounded focus:ring-temple-gold/50"
                        checked={selectedBlessings.includes(blessing.id)}
                        onChange={() => toggleBlessing(blessing.id)}
                      />
                      <span>{blessing.name} (+₹{blessing.price})</span>
                    </label>
                  ))}
                </div>
              </div>
            )}

            {/* Add to Cart Button */}
            <button
              onClick={handleAddToCart}
              className="w-full bg-gradient-to-r from-temple-saffron to-temple-gold hover:from-temple-gold hover:to-temple-saffron text-white py-4 px-6 rounded-xl font-medium text-lg transition-all duration-300 hover:shadow-gold-glow hover:scale-105"
            >
              Add to Cart with Blessings
            </button>

            {/* Additional Actions */}
            <div className="flex items-center justify-between">
              <button className="flex items-center space-x-2 text-temple-brown-deep hover:text-temple-saffron transition-colors duration-200">
                <Heart className="h-5 w-5" />
                <span>Add to Wishlist</span>
              </button>
              <button className="flex items-center space-x-2 text-temple-brown-deep hover:text-temple-saffron transition-colors duration-200">
                <Share2 className="h-5 w-5" />
                <span>Share</span>
              </button>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="mt-12">
          <div className="border-b border-temple-gold/20">
            <nav className="-mb-px flex space-x-8">
              <button
                className="whitespace-nowrap py-4 px-1 border-b-2 border-temple-saffron font-medium text-sm text-temple-brown-deep"
              >
                Details
              </button>
              <button
                className="whitespace-nowrap py-4 px-1 border-b-2 border-transparent font-medium text-sm text-temple-brown-light hover:text-temple-brown-deep hover:border-temple-gold/20"
              >
                Care Instructions
              </button>
              <button
                className="whitespace-nowrap py-4 px-1 border-b-2 border-transparent font-medium text-sm text-temple-brown-light hover:text-temple-brown-deep hover:border-temple-gold/20"
              >
                Shipping & Returns
              </button>
            </nav>
          </div>

          {/* Details Content */}
          <div className="py-6">
            <h3 className="font-medium text-temple-brown-deep mb-3">Product Details</h3>
            <ul className="space-y-2">
              {product.details && product.details.map((detail: any, index: number) => (
                <li key={index} className="flex justify-between text-temple-brown-medium">
                  <span>{detail.title}</span>
                  <span>{detail.value}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
