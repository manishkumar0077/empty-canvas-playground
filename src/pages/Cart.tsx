
import { Link } from 'react-router-dom';
import { Minus, Plus, Trash2, ShoppingBag, Gift, Sparkles } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useLanguage } from '../context/LanguageContext';

const Cart = () => {
  const { items, addToCart, removeFromCart, clearCart, getItemCount, getTotal } = useCart();
  const { language } = useLanguage();

  const handleIncreaseQuantity = (productId: string) => {
    const item = items.find(i => i.id === productId);
    if (item) {
      addToCart(item, 1);
    }
  };

  const handleDecreaseQuantity = (productId: string) => {
    removeFromCart(productId);
  };

  const handleRemoveItem = (productId: string) => {
    removeFromCart(productId, true);
  };

  const handleClearCart = () => {
    clearCart();
  };

  const renderCartItems = () => {
    if (items.length === 0) {
      return (
        <div className="text-center py-8">
          <ShoppingBag className="mx-auto h-12 w-12 text-temple-brown-light mb-4" />
          <p className="text-xl text-temple-brown-medium">
            {language === 'hi' ? 'आपका कार्ट खाली है' : 'Your cart is empty'}
          </p>
          <Link to="/collections" className="text-temple-saffron hover:underline">
            {language === 'hi' ? 'खरीदारी जारी रखें' : 'Continue shopping'}
          </Link>
        </div>
      );
    }

    return items.map((item) => (
      <div key={item.id} className="flex items-center justify-between py-4 border-b border-temple-gold-pale">
        <div className="flex items-center">
          <Link to={`/product/${item.id}`}>
            <img src={item.image} alt={item.title} className="h-20 w-20 object-cover rounded-md mr-4" />
          </Link>
          <div>
            <Link to={`/product/${item.id}`} className="text-lg font-medium text-temple-brown-deep hover:text-temple-saffron">
              {item.title}
            </Link>
            <p className="text-temple-brown-medium text-sm">{item.category}</p>
            <p className="text-temple-brown-medium text-sm">₹{item.price}</p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <button
            onClick={() => handleDecreaseQuantity(item.id)}
            className="p-2 rounded-full hover:bg-temple-gold-pale"
            aria-label="Decrease quantity"
          >
            <Minus className="h-5 w-5 text-temple-brown-deep" />
          </button>
          <span className="text-temple-brown-deep text-lg">{getItemCount(item.id)}</span>
          <button
            onClick={() => handleIncreaseQuantity(item.id)}
            className="p-2 rounded-full hover:bg-temple-gold-pale"
            aria-label="Increase quantity"
          >
            <Plus className="h-5 w-5 text-temple-brown-deep" />
          </button>
          <button
            onClick={() => handleRemoveItem(item.id)}
            className="p-2 rounded-full hover:bg-temple-gold-pale"
            aria-label="Remove item"
          >
            <Trash2 className="h-5 w-5 text-temple-kumkum" />
          </button>
        </div>
      </div>
    ));
  };

  return (
    <div className="min-h-screen bg-temple-ivory pt-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="font-serif text-3xl text-temple-brown-deep mb-8">
          {language === 'hi' ? 'आपका कार्ट' : 'Your Cart'}
        </h1>

        {renderCartItems()}

        {items.length > 0 && (
          <div className="mt-8">
            <div className="flex justify-between items-center mb-4">
              <span className="text-lg font-medium text-temple-brown-deep">
                {language === 'hi' ? 'कुल' : 'Total'}
              </span>
              <span className="text-2xl font-bold text-temple-brown-deep">₹{getTotal()}</span>
            </div>

            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center">
                <input type="checkbox" id="giftWrap" className="mr-2" />
                <label htmlFor="giftWrap" className="text-temple-brown-medium">
                  <Gift className="inline-block h-5 w-5 mr-1" />
                  {language === 'hi' ? 'गिफ्ट रैप' : 'Gift wrap'}
                </label>
              </div>
              <span className="text-sm text-temple-brown-light">+ ₹50</span>
            </div>

            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center">
                <input type="checkbox" id="addBlessing" className="mr-2" />
                <label htmlFor="addBlessing" className="text-temple-brown-medium">
                  <Sparkles className="inline-block h-5 w-5 mr-1" />
                  {language === 'hi' ? 'पवित्र आशीर्वाद जोड़ें' : 'Add Sacred Blessing'}
                </label>
              </div>
              <span className="text-sm text-temple-brown-light">+ ₹500</span>
            </div>

            <div className="flex justify-between">
              <button
                onClick={handleClearCart}
                className="bg-temple-gold-pale hover:bg-temple-gold text-temple-brown-deep hover:text-white px-4 py-2 rounded-full transition-colors duration-200"
              >
                {language === 'hi' ? 'कार्ट साफ़ करें' : 'Clear Cart'}
              </button>
              <Link
                to="/checkout"
                className="bg-gradient-to-r from-temple-saffron to-temple-gold text-white px-6 py-3 rounded-full font-medium hover:shadow-gold-glow transition-shadow duration-300"
              >
                {language === 'hi' ? 'चेकआउट' : 'Proceed to Checkout'}
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
