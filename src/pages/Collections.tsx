import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Filter, Star } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useLanguage } from '../context/LanguageContext';

const Collections = () => {
  const { category } = useParams<{ category?: string }>();
  const [products, setProducts] = useState([
    {
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
    },
    {
      id: '2',
      name: 'Goddess Lakshmi Earrings',
      hindiName: 'देवी लक्ष्मी झुमके',
      description: 'Gold-plated earrings inspired by Goddess Lakshmi, the deity of wealth and prosperity.',
      price: 1499,
      original_price: 1999,
      image: 'https://images.unsplash.com/photo-1612827376447-9a96503b38bc?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      rating: 4.8,
      reviews: 185,
      stock: 30,
      category: 'Earrings',
    },
    {
      id: '3',
      name: 'Hanuman Gada Pendant',
      hindiName: 'हनुमान गदा लॉकेट',
      description: 'Silver pendant of Hanuman\'s Gada, symbolizing strength, devotion, and protection.',
      price: 799,
      original_price: 999,
      image: 'https://a.1stdibscdn.com/archivesE/upload/9427/42_15/hanuman_gada_pendant/9427_1438964898_1.jpg',
      rating: 4.2,
      reviews: 90,
      stock: 75,
      category: 'Pendant',
    },
  ]);
  const { language } = useLanguage();

  return (
    <div className="min-h-screen bg-temple-ivory pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="font-serif text-4xl text-temple-brown-deep mb-4">
            {language === 'hi' ? 'पवित्र संग्रह' : 'Sacred Collections'}
          </h1>
          <p className="text-temple-brown-medium">
            {language === 'hi' ? 'हमारे पवित्र आभूषणों का अन्वेषण करें' : 'Explore our curated selection of sacred jewelry'}
          </p>
        </div>

        {/* Filters and Sorting */}
        <div className="md:flex items-center justify-between mb-6">
          <div className="flex items-center space-x-4">
            <button className="flex items-center space-x-2 text-temple-brown-deep hover:text-temple-saffron transition-colors duration-200">
              <Filter className="h-5 w-5" />
              <span>{language === 'hi' ? 'फिल्टर' : 'Filter'}</span>
            </button>
            <span className="text-temple-brown-light">
              {language === 'hi' ? 'श्रेणी:' : 'Category:'} {category || 'All'}
            </span>
          </div>
          <div className="mt-2 md:mt-0">
            <select className="px-4 py-2 border border-temple-gold/30 rounded-xl text-temple-brown-medium focus:outline-none focus:border-temple-gold">
              <option>{language === 'hi' ? 'नवीनतम' : 'Newest'}</option>
              <option>{language === 'hi' ? 'सबसे कम कीमत' : 'Price: Low to High'}</option>
              <option>{language === 'hi' ? 'उच्चतम कीमत' : 'Price: High to Low'}</option>
              <option>{language === 'hi' ? 'औसत रेटिंग' : 'Avg. Rating'}</option>
            </select>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-2xl shadow-temple hover:shadow-temple-lg transition-shadow duration-300">
              <a href={`/product/${product.id}`}>
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover rounded-t-2xl"
                />
              </a>
              <div className="p-4">
                <a href={`/product/${product.id}`}>
                  <h3 className="font-serif text-xl text-temple-brown-deep mb-2">{product.name}</h3>
                </a>
                <p className="text-temple-saffron font-medium">{product.hindiName}</p>
                <div className="flex items-center space-x-2 mt-2">
                  <span className="text-xl font-bold text-temple-brown-deep">₹{product.price.toLocaleString()}</span>
                  {product.original_price && (
                    <span className="text-lg text-temple-brown-light line-through">₹{product.original_price.toLocaleString()}</span>
                  )}
                </div>
                <div className="flex items-center space-x-2 mt-2">
                  {[...Array(Math.floor(product.rating))].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-temple-saffron fill-current" />
                  ))}
                  <span className="text-temple-brown-medium">({product.reviews})</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-12">
          <button className="px-4 py-2 mx-2 border border-temple-gold/30 rounded-xl text-temple-brown-medium hover:bg-temple-gold-pale transition-colors duration-200">
            {language === 'hi' ? 'पिछला' : 'Previous'}
          </button>
          <button className="px-4 py-2 mx-2 border border-temple-gold/30 rounded-xl text-temple-brown-medium hover:bg-temple-gold-pale transition-colors duration-200">
            {language === 'hi' ? 'अगला' : 'Next'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Collections;
