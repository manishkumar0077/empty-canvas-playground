import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Search, Filter, Star, Heart } from 'lucide-react';
import { products } from '../data/products';
import { useLanguage } from '../context/LanguageContext';

const Collections = () => {
  const { category } = useParams();
  const { language } = useLanguage();
  
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('name');
  const [priceRange, setPriceRange] = useState([0, 100000]);
  const [products] = useState([]);

  const filteredProducts = products.filter(product => {
    const searchTermLower = searchTerm.toLowerCase();
    const matchesSearch = product.title.toLowerCase().includes(searchTermLower) ||
                           product.description.toLowerCase().includes(searchTermLower) ||
                           product.tags.some(tag => tag.toLowerCase().includes(searchTermLower));

    const matchesCategory = !category || product.category === category;
    const matchesPriceRange = product.original_price >= priceRange[0] && product.original_price <= priceRange[1];

    return matchesSearch && matchesCategory && matchesPriceRange;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === 'name') {
      return a.title.localeCompare(b.title);
    } else if (sortBy === 'price') {
      return a.original_price - b.original_price;
    } else if (sortBy === 'rating') {
      return b.rating - a.rating;
    }
    return 0;
  });

  return (
    <div className="min-h-screen bg-temple-ivory pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="mb-8 flex items-center justify-between">
          <h1 className="font-serif text-3xl text-temple-brown-deep">
            {category ? `${category}` : 'All Products'}
          </h1>
          <div className="flex items-center space-x-4">
            {/* Search Bar */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-temple-brown-light" aria-hidden="true" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-2 border border-temple-gold/30 rounded-md leading-5 bg-white text-temple-brown-deep placeholder-temple-brown-light focus:outline-none focus:ring-2 focus:ring-temple-gold sm:text-sm"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            {/* Filter Button */}
            <button className="bg-temple-gold-pale hover:bg-temple-gold text-temple-brown-deep hover:text-white px-4 py-2 rounded-md transition-colors duration-200">
              <div className="flex items-center">
                <Filter className="h-5 w-5 mr-2" />
                <span>Filter</span>
              </div>
            </button>
          </div>
        </div>

        {/* Sorting Section */}
        <div className="mb-8">
          <label htmlFor="sort" className="block text-sm font-medium text-temple-brown-deep mr-4">
            Sort by:
          </label>
          <select
            id="sort"
            className="mt-1 block pl-3 pr-10 py-2 text-base border-temple-gold/30 focus:outline-none focus:ring-temple-gold focus:border-temple-gold sm:text-sm rounded-md"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="name">Name</option>
            <option value="price">Price</option>
            <option value="rating">Rating</option>
          </select>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {sortedProducts.map((product) => (
            <Link to={`/product/${product.id}`} key={product.id} className="bg-white rounded-2xl shadow-temple hover:shadow-temple-lg transition-shadow duration-300 overflow-hidden">
              <img src={product.image_url} alt={product.title} className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="font-serif text-xl text-temple-brown-deep mb-2">{product.title}</h3>
                <div className="flex items-center mb-3">
                  {[...Array(product.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-temple-saffron fill-current" />
                  ))}
                </div>
                <p className="text-temple-brown-medium mb-4">{product.description.substring(0, 75)}...</p>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-xl font-bold text-temple-brown-deep">₹{product.original_price}</span>
                  </div>
                  <button className="bg-temple-gold hover:bg-temple-saffron text-white px-4 py-2 rounded-md transition-colors duration-200">
                    View
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collections;
