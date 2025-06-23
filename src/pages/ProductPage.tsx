
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Plus, Minus, ShoppingCart, Truck, Shield, RotateCcw, Award } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

interface Product {
  id: string;
  name: string;
  category: string;
  rating: number;
  reviews: number;
  description: string;
  price: number;
  image: string;
}

const ProductPage = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [product, setProduct] = useState<Product | null>(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const foundProduct = products.find((p) => p.id === id);
    if (foundProduct) {
      setProduct({
        id: foundProduct.id,
        name: foundProduct.name,
        category: foundProduct.category,
        rating: foundProduct.rating || 0,
        reviews: foundProduct.reviews || 0,
        description: foundProduct.description,
        price: foundProduct.price,
        image: foundProduct.image
      });
    }
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      title: product.name,
      price: product.price,
      image: product.image,
      category: product.category
    }, quantity);
  };

  return (
    <div className="bg-temple-ivory min-h-screen pt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Breadcrumb */}
        <div className="mb-6">
          <Link to="/" className="text-temple-brown-medium hover:text-temple-brown-deep">
            Home
          </Link>
          <span className="mx-2 text-temple-brown-medium">/</span>
          <Link to="/collections" className="text-temple-brown-medium hover:text-temple-brown-deep">
            Collections
          </Link>
          <span className="mx-2 text-temple-brown-medium">/</span>
          <span className="text-temple-brown-deep">{product.name}</span>
        </div>

        {/* Product Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Product Image */}
          <div>
            <img src={product.image} alt={product.name} className="w-full rounded-2xl shadow-temple" />
          </div>

          {/* Product Info */}
          <div>
            <h1 className="font-serif text-3xl text-temple-brown-deep mb-4">{product.name}</h1>
            <p className="text-temple-saffron font-medium mb-2">{product.category}</p>
            <div className="flex items-center mb-4">
              {[...Array(product.rating)].map((_, i) => (
                <Star key={i} className="h-5 w-5 text-temple-saffron fill-current" />
              ))}
              <span className="text-temple-brown-light ml-2">({product.reviews} reviews)</span>
            </div>
            <p className="text-temple-brown-medium leading-relaxed mb-6">{product.description}</p>

            {/* Price and Quantity */}
            <div className="flex items-center justify-between mb-6">
              <div>
                <span className="text-2xl font-bold text-temple-brown-deep">₹{product.price}</span>
              </div>
              <div className="flex items-center">
                <button
                  onClick={decrementQuantity}
                  className="bg-temple-gold-pale hover:bg-temple-gold text-temple-brown-deep hover:text-white rounded-full w-8 h-8 flex items-center justify-center transition-colors duration-200"
                >
                  <Minus className="h-5 w-5" />
                </button>
                <span className="mx-3 text-lg text-temple-brown-deep">{quantity}</span>
                <button
                  onClick={incrementQuantity}
                  className="bg-temple-gold-pale hover:bg-temple-gold text-temple-brown-deep hover:text-white rounded-full w-8 h-8 flex items-center justify-center transition-colors duration-200"
                >
                  <Plus className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Add to Cart Button */}
            <button
              onClick={handleAddToCart}
              className="w-full bg-gradient-to-r from-temple-saffron to-temple-gold text-white py-3 rounded-full font-medium hover:shadow-gold-glow transition-shadow duration-300"
            >
              Add to Cart
              <ShoppingCart className="inline-block ml-2 h-5 w-5" />
            </button>

            {/* Product Benefits */}
            <div className="mt-8 space-y-3">
              <div className="flex items-center text-temple-brown-medium">
                <Truck className="h-5 w-5 mr-2 text-temple-gold" />
                Free Shipping on orders above ₹500
              </div>
              <div className="flex items-center text-temple-brown-medium">
                <Shield className="h-5 w-5 mr-2 text-temple-gold" />
                Secure Payments
              </div>
              <div className="flex items-center text-temple-brown-medium">
                <RotateCcw className="h-5 w-5 mr-2 text-temple-gold" />
                30-Day Return Policy
              </div>
              <div className="flex items-center text-temple-brown-medium">
                <Award className="h-5 w-5 mr-2 text-temple-gold" />
                Authenticity Guaranteed
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
