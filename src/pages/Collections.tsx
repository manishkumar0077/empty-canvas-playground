import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Filter, Grid, List, Star, Sparkles, ShoppingBag } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { products, getProductsByDeity, getNewArrivals } from '../data/products';

const Collections = () => {
  const { category } = useParams();
  const { language } = useLanguage();
  const [viewMode, setViewMode] = useState('grid');
  const [showFilters, setShowFilters] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState({
    deity: [] as string[],
    stone: [] as string[],
    category: [] as string[],
    priceRange: '',
    inStock: false
  });

  // Get products based on category
  let displayProducts = products;
  if (category === 'new') {
    displayProducts = getNewArrivals();
  } else if (category && category !== 'all') {
    displayProducts = getProductsByDeity(category);
  }

  // Apply filters
  const filteredProducts = displayProducts.filter(product => {
    if (selectedFilters.deity.length > 0 && !selectedFilters.deity.includes(product.deity)) {
      return false;
    }
    if (selectedFilters.stone.length > 0 && !selectedFilters.stone.includes(product.stone)) {
      return false;
    }
    if (selectedFilters.category.length > 0 && !selectedFilters.category.includes(product.category)) {
      return false;
    }
    if (selectedFilters.inStock && !product.inStock) {
      return false;
    }
    if (selectedFilters.priceRange) {
      const [min, max] = selectedFilters.priceRange.split('-').map(Number);
      if (max && (product.price < min || product.price > max)) {
        return false;
      }
      if (!max && product.price < min) {
        return false;
      }
    }
    return true;
  });

  const filters = {
    deity: [...new Set(products.map(p => p.deity))],
    stone: [...new Set(products.map(p => p.stone))],
    category: [...new Set(products.map(p => p.category))],
    priceRange: ['0-1000', '1000-2000', '2000-3000', '3000-5000', '5000+']
  };

  const handleFilterChange = (filterType: string, value: string) => {
    setSelectedFilters(prev => {
      if (filterType === 'priceRange' || filterType === 'inStock') {
        return { ...prev, [filterType]: value };
      } else {
        const currentValues = prev[filterType as keyof typeof prev] as string[];
        const newValues = currentValues.includes(value)
          ? currentValues.filter(v => v !== value)
          : [...currentValues, value];
        return { ...prev, [filterType]: newValues };
      }
    });
  };

  const getPageTitle = () => {
    if (category === 'new') {
      return language === 'hi' ? 'नए आगमन' : 'New Arrivals';
    } else if (category && category !== 'all') {
      return `${category.charAt(0).toUpperCase() + category.slice(1)} Collection`;
    }
    return language === 'hi' ? 'पवित्र संग्रह' : 'Sacred Collections';
  };

  return (
    <div className="min-h-screen bg-temple-ivory">
      {/* Header */}
      <div className="bg-white border-b border-temple-gold/20 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-serif text-3xl md:text-4xl text-temple-brown-deep mb-2">
            {getPageTitle()}
          </h1>
          <p className="text-temple-brown-deep/70">
            {language === 'hi' 
              ? 'आध्यात्मिक आभूषण जो आपकी अंतरात्मा से जुड़ते हैं'
              : 'Spiritual jewelry that connects with your inner soul'
            }
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <div className={`lg:w-1/4 ${showFilters ? 'block' : 'hidden lg:block'}`}>
            <div className="bg-white rounded-lg shadow-sm border border-temple-gold/20 p-6">
              <h3 className="font-medium text-temple-brown-deep mb-4 flex items-center">
                <Filter className="h-5 w-5 mr-2" />
                {language === 'hi' ? 'फिल्टर' : 'Filters'}
              </h3>
              
              {/* Deity Filter */}
              <div className="mb-6">
                <h4 className="font-medium text-temple-brown-deep mb-3">
                  {language === 'hi' ? 'देवी-देवता' : 'Deity'}
                </h4>
                <div className="space-y-2">
                  {filters.deity.map((deity, index) => (
                    <label key={index} className="flex items-center text-sm">
                      <input
                        type="checkbox"
                        checked={selectedFilters.deity.includes(deity)}
                        onChange={() => handleFilterChange('deity', deity)}
                        className="rounded border-temple-gold/40 text-temple-kumkum focus:ring-temple-gold/30 mr-2"
                      />
                      <span className="text-temple-brown-deep/80">{deity}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Stone Filter */}
              <div className="mb-6">
                <h4 className="font-medium text-temple-brown-deep mb-3">
                  {language === 'hi' ? 'रत्न/पत्थर' : 'Stone/Gem'}
                </h4>
                <div className="space-y-2">
                  {filters.stone.map((stone, index) => (
                    <label key={index} className="flex items-center text-sm">
                      <input
                        type="checkbox"
                        checked={selectedFilters.stone.includes(stone)}
                        onChange={() => handleFilterChange('stone', stone)}
                        className="rounded border-temple-gold/40 text-temple-kumkum focus:ring-temple-gold/30 mr-2"
                      />
                      <span className="text-temple-brown-deep/80">{stone}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Category Filter */}
              <div className="mb-6">
                <h4 className="font-medium text-temple-brown-deep mb-3">
                  {language === 'hi' ? 'श्रेणी' : 'Category'}
                </h4>
                <div className="space-y-2">
                  {filters.category.map((cat, index) => (
                    <label key={index} className="flex items-center text-sm">
                      <input
                        type="checkbox"
                        checked={selectedFilters.category.includes(cat)}
                        onChange={() => handleFilterChange('category', cat)}
                        className="rounded border-temple-gold/40 text-temple-kumkum focus:ring-temple-gold/30 mr-2"
                      />
                      <span className="text-temple-brown-deep/80">{cat}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Filter */}
              <div className="mb-6">
                <h4 className="font-medium text-temple-brown-deep mb-3">
                  {language === 'hi' ? 'मूल्य' : 'Price Range'}
                </h4>
                <div className="space-y-2">
                  {filters.priceRange.map((range, index) => (
                    <label key={index} className="flex items-center text-sm">
                      <input
                        type="radio"
                        name="priceRange"
                        checked={selectedFilters.priceRange === range}
                        onChange={() => handleFilterChange('priceRange', range)}
                        className="text-temple-kumkum focus:ring-temple-gold/30 mr-2"
                      />
                      <span className="text-temple-brown-deep/80">
                        ₹{range.replace('-', ' - ₹').replace('+', '+')}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Stock Filter */}
              <div className="mb-6">
                <label className="flex items-center text-sm">
                  <input
                    type="checkbox"
                    checked={selectedFilters.inStock}
                    onChange={(e) => handleFilterChange('inStock', e.target.checked.toString())}
                    className="rounded border-temple-gold/40 text-temple-kumkum focus:ring-temple-gold/30 mr-2"
                  />
                  <span className="text-temple-brown-deep/80">
                    {language === 'hi' ? 'केवल स्टॉक में' : 'In Stock Only'}
                  </span>
                </label>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:w-3/4">
            {/* Toolbar */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className="lg:hidden flex items-center space-x-2 bg-white border border-temple-gold/20 px-4 py-2 rounded-lg"
                >
                  <Filter className="h-4 w-4" />
                  <span>{language === 'hi' ? 'फिल्टर' : 'Filters'}</span>
                </button>
                <p className="text-temple-brown-deep/70">
                  {filteredProducts.length} {language === 'hi' ? 'उत्पाद मिले' : 'products found'}
                </p>
              </div>
              
              <div className="flex items-center space-x-4">
                <select className="border border-temple-gold/20 rounded-lg px-3 py-2 text-sm bg-white">
                  <option>{language === 'hi' ? 'नवीनतम' : 'Latest'}</option>
                  <option>{language === 'hi' ? 'कम कीमत' : 'Price: Low to High'}</option>
                  <option>{language === 'hi' ? 'अधिक कीमत' : 'Price: High to Low'}</option>
                  <option>{language === 'hi' ? 'लोकप्रिय' : 'Most Popular'}</option>
                </select>
                
                <div className="flex border border-temple-gold/20 rounded-lg">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 ${viewMode === 'grid' ? 'bg-temple-gold text-white' : 'text-temple-brown-deep'}`}
                  >
                    <Grid className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 ${viewMode === 'list' ? 'bg-temple-gold text-white' : 'text-temple-brown-deep'}`}
                  >
                    <List className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Products Grid */}
            <div className={`grid gap-6 ${
              viewMode === 'grid' 
                ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
                : 'grid-cols-1'
            }`}>
              {filteredProducts.map((product) => (
                <Link
                  key={product.id}
                  to={`/product/${product.id}`}
                  className={`group bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-temple-gold/10 hover:border-temple-gold/30 ${
                    viewMode === 'list' ? 'flex' : ''
                  }`}
                >
                  <div className={`overflow-hidden relative ${
                    viewMode === 'list' ? 'w-48 h-48' : 'aspect-square'
                  }`}>
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 bg-temple-kumkum text-white px-2 py-1 rounded text-xs">
                      {product.blessing}
                    </div>
                    {product.isNew && (
                      <div className="absolute top-4 right-4 bg-temple-saffron text-white px-2 py-1 rounded text-xs">
                        {language === 'hi' ? 'नया' : 'New'}
                      </div>
                    )}
                    {!product.inStock && (
                      <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                        <span className="text-white font-medium">
                          {language === 'hi' ? 'स्टॉक में नहीं' : 'Out of Stock'}
                        </span>
                      </div>
                    )}
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Sparkles className="h-4 w-4 text-temple-gold" />
                    </div>
                  </div>
                  
                  <div className={`p-6 ${viewMode === 'list' ? 'flex-1' : ''}`}>
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-medium text-temple-brown-deep text-lg group-hover:text-temple-kumkum transition-colors">
                        {product.name}
                      </h3>
                    </div>
                    
                    <div className="flex items-center space-x-2 mb-3">
                      <div className="flex items-center space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${
                              i < Math.floor(product.rating)
                                ? 'text-temple-saffron fill-current'
                                : 'text-temple-sandalwood'
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-temple-brown-deep/70">({product.rating})</span>
                    </div>
                    
                    <div className="flex items-center space-x-2 mb-3">
                      <span className="text-xl font-semibold text-temple-brown-deep">₹{product.price.toLocaleString()}</span>
                      <span className="text-sm text-temple-brown-deep/50 line-through">₹{product.originalPrice.toLocaleString()}</span>
                      <span className="bg-temple-saffron text-white px-2 py-1 rounded text-xs">
                        {Math.round((1 - product.price / product.originalPrice) * 100)}% OFF
                      </span>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 text-xs mb-4">
                      <span className="bg-temple-gold-light text-temple-brown-deep px-2 py-1 rounded">
                        {product.deity}
                      </span>
                      <span className="bg-temple-sandalwood text-temple-brown-deep px-2 py-1 rounded">
                        {product.stone}
                      </span>
                    </div>

                    {viewMode === 'list' && (
                      <div className="flex items-center justify-between">
                        <p className="text-sm text-temple-brown-medium line-clamp-2">
                          {product.description}
                        </p>
                        <button className="ml-4 bg-temple-saffron text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-temple-saffron/90 transition-colors">
                          <ShoppingBag className="h-4 w-4" />
                          <span>{language === 'hi' ? 'देखें' : 'View'}</span>
                        </button>
                      </div>
                    )}
                  </div>
                </Link>
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-16">
                <Sparkles className="h-16 w-16 text-temple-gold mx-auto mb-4 opacity-50" />
                <h3 className="text-xl font-medium text-temple-brown-deep mb-2">
                  {language === 'hi' ? 'कोई उत्पाद नहीं मिला' : 'No products found'}
                </h3>
                <p className="text-temple-brown-medium">
                  {language === 'hi' 
                    ? 'कृपया अपने फिल्टर बदलें या बाद में फिर कोशिश करें'
                    : 'Please adjust your filters or try again later'
                  }
                </p>
              </div>
            )}

            {/* Pagination */}
            {filteredProducts.length > 0 && (
              <div className="flex justify-center mt-12">
                <div className="flex items-center space-x-2">
                  <button className="px-4 py-2 border border-temple-gold/20 rounded-lg text-temple-brown-deep hover:bg-temple-gold hover:text-white transition-colors">
                    {language === 'hi' ? 'पिछला' : 'Previous'}
                  </button>
                  <button className="px-4 py-2 bg-temple-gold text-white rounded-lg">1</button>
                  <button className="px-4 py-2 border border-temple-gold/20 rounded-lg text-temple-brown-deep hover:bg-temple-gold hover:text-white transition-colors">
                    2
                  </button>
                  <button className="px-4 py-2 border border-temple-gold/20 rounded-lg text-temple-brown-deep hover:bg-temple-gold hover:text-white transition-colors">
                    3
                  </button>
                  <button className="px-4 py-2 border border-temple-gold/20 rounded-lg text-temple-brown-deep hover:bg-temple-gold hover:text-white transition-colors">
                    {language === 'hi' ? 'अगला' : 'Next'}
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collections;