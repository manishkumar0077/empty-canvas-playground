
import { Shield, Star } from 'lucide-react';

interface Blessing {
  id: string;
  name: string;
  description: string;
  price: number;
  benefits: string[];
  duration: string;
}

interface Package {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice: number;
  includes: string[];
  rating: number;
  reviews: number;
}

const SacredBlessings = () => {
  const blessings: Blessing[] = [
    {
      id: '1',
      name: 'Ganesh Blessing',
      description: 'Remove obstacles and invite prosperity',
      price: 500,
      benefits: ['Obstacle removal', 'Success in new ventures', 'Wisdom and knowledge'],
      duration: '30 days'
    },
    {
      id: '2',
      name: 'Lakshmi Blessing',
      description: 'Attract wealth and abundance',
      price: 750,
      benefits: ['Financial prosperity', 'Material abundance', 'Good fortune'],
      duration: '45 days'
    }
  ];

  const packages: Package[] = [
    {
      id: '1',
      name: 'Complete Protection Package',
      description: 'Comprehensive spiritual protection',
      price: 1999,
      originalPrice: 2999,
      includes: ['Ganesh Blessing', 'Durga Protection', 'Evil Eye Protection'],
      rating: 5,
      reviews: 156
    },
    {
      id: '2',
      name: 'Prosperity Bundle',
      description: 'Attract wealth and success',
      price: 2499,
      originalPrice: 3499,
      includes: ['Lakshmi Blessing', 'Kubera Blessing', 'Success Mantra'],
      rating: 5,
      reviews: 203
    }
  ];

  return (
    <div className="min-h-screen bg-temple-ivory pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-serif text-4xl text-temple-brown-deep mb-4">
            Sacred Blessings & Spiritual Services
          </h1>
          <p className="text-xl text-temple-brown-medium max-w-3xl mx-auto">
            Receive personalized blessings and spiritual guidance from experienced practitioners
          </p>
        </div>

        {/* Individual Blessings */}
        <div className="mb-16">
          <h2 className="font-serif text-3xl text-temple-brown-deep mb-8 text-center">
            Individual Blessings
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blessings.map((blessing) => (
              <div key={blessing.id} className="bg-white rounded-2xl shadow-temple p-6 hover:shadow-temple-lg transition-shadow">
                <div className="flex items-center justify-between mb-4">
                  <Shield className="h-8 w-8 text-temple-gold" />
                  <span className="text-sm text-temple-brown-light">{blessing.duration}</span>
                </div>
                <h3 className="font-serif text-xl text-temple-brown-deep mb-3">{blessing.name}</h3>
                <p className="text-temple-brown-medium mb-4">{blessing.description}</p>
                
                <div className="mb-4">
                  <h4 className="font-medium text-temple-brown-deep mb-2">Benefits:</h4>
                  <ul className="space-y-1">
                    {blessing.benefits.map((benefit) => (
                      <li key={benefit} className="text-sm text-temple-brown-medium flex items-center">
                        <span className="w-2 h-2 bg-temple-gold rounded-full mr-2"></span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-temple-brown-deep">₹{blessing.price}</span>
                  <button className="bg-gradient-to-r from-temple-saffron to-temple-gold text-white px-6 py-2 rounded-full hover:shadow-gold-glow transition-shadow">
                    Select
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Blessing Packages */}
        <div className="mb-16">
          <h2 className="font-serif text-3xl text-temple-brown-deep mb-8 text-center">
            Blessing Packages
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {packages.map((pkg) => (
              <div key={pkg.id} className="bg-white rounded-2xl shadow-temple p-8 hover:shadow-temple-lg transition-shadow relative overflow-hidden">
                <div className="absolute top-4 right-4 bg-temple-kumkum text-white px-3 py-1 rounded-full text-sm font-medium">
                  Save ₹{pkg.originalPrice - pkg.price}
                </div>
                
                <h3 className="font-serif text-2xl text-temple-brown-deep mb-3">{pkg.name}</h3>
                <p className="text-temple-brown-medium mb-4">{pkg.description}</p>
                
                <div className="flex items-center mb-4">
                  {[...Array(pkg.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-temple-saffron fill-current" />
                  ))}
                  <span className="text-temple-brown-light ml-2">({pkg.reviews} reviews)</span>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-medium text-temple-brown-deep mb-3">Package Includes:</h4>
                  <ul className="space-y-2">
                    {pkg.includes.map((item) => (
                      <li key={item} className="text-temple-brown-medium flex items-center">
                        <span className="w-2 h-2 bg-temple-gold rounded-full mr-3"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <span className="text-3xl font-bold text-temple-brown-deep">₹{pkg.price}</span>
                    <span className="text-lg text-temple-brown-light line-through ml-2">₹{pkg.originalPrice}</span>
                  </div>
                </div>
                
                <button className="w-full bg-gradient-to-r from-temple-saffron to-temple-gold text-white py-3 rounded-full font-medium hover:shadow-gold-glow transition-shadow">
                  Choose Package
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* How It Works */}
        <div className="bg-white rounded-3xl shadow-temple p-8 mb-16">
          <h2 className="font-serif text-3xl text-temple-brown-deep mb-8 text-center">
            How Sacred Blessings Work
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-temple-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="font-medium text-temple-brown-deep mb-2">Select Your Blessing</h3>
              <p className="text-temple-brown-medium">Choose from our range of personalized blessings</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-temple-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="font-medium text-temple-brown-deep mb-2">Personalization</h3>
              <p className="text-temple-brown-medium">Share your intentions and specific needs</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-temple-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="font-medium text-temple-brown-deep mb-2">Receive Blessings</h3>
              <p className="text-temple-brown-medium">Our practitioners perform the ritual and send you updates</p>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="text-center">
          <h2 className="font-serif text-3xl text-temple-brown-deep mb-8">
            What Our Devotees Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white rounded-2xl shadow-temple p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="h-4 w-4 text-temple-saffron fill-current" />
                  ))}
                </div>
                <p className="text-temple-brown-medium mb-4 italic">
                  "The blessings brought peace and positive changes to my life. Highly recommended!"
                </p>
                <div className="text-sm text-temple-brown-deep font-medium">
                  - Devotee {i}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SacredBlessings;
