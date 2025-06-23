
import { useState } from 'react';
import { Star, Heart, Shield } from 'lucide-react';

interface Blessing {
  id: string;
  name: string;
  price: number;
  description: string;
  duration: string;
  benefits: string[];
}

interface Package {
  id: string;
  name: string;
  price: number;
  originalPrice: number;
  description: string;
  items: string[];
  popular: boolean;
}

const SacredBlessings = () => {
  const [blessings] = useState<Blessing[]>([
    {
      id: '1',
      name: 'Ganesha Blessing',
      price: 500,
      description: 'Remove obstacles and bring good fortune',
      duration: 'Lifetime',
      benefits: ['Obstacle removal', 'Good fortune', 'Success in endeavors']
    }
  ]);

  const [packages] = useState<Package[]>([
    {
      id: '1',
      name: 'Complete Sacred Package',
      price: 2000,
      originalPrice: 2500,
      description: 'All blessings combined for maximum benefit',
      items: ['Ganesha Blessing', 'Lakshmi Blessing', 'Saraswati Blessing'],
      popular: true
    }
  ]);

  return (
    <div className="bg-temple-ivory min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="font-serif text-4xl text-temple-brown-deep mb-4">Sacred Blessings</h1>
          <p className="text-lg text-temple-brown-medium max-w-3xl mx-auto">
            Enhance your spiritual jewelry with authentic Vedic blessings performed by experienced priests
          </p>
        </div>

        {/* Individual Blessings */}
        <div className="mb-16">
          <h2 className="font-serif text-3xl text-temple-brown-deep mb-8 text-center">Individual Blessings</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blessings.map((blessing: Blessing, index: number) => (
              <div key={blessing.id} className="bg-white rounded-2xl shadow-temple p-6 border border-temple-gold/20">
                <div className="flex items-center justify-between mb-4">
                  <Shield className="h-8 w-8 text-temple-gold" />
                  <span className="text-temple-saffron font-medium">{blessing.duration}</span>
                </div>
                <h3 className="font-serif text-xl text-temple-brown-deep mb-2">{blessing.name}</h3>
                <p className="text-temple-brown-medium mb-4">{blessing.description}</p>
                <div className="mb-4">
                  <h4 className="font-medium text-temple-brown-deep mb-2">Benefits:</h4>
                  <ul className="space-y-1">
                    {blessing.benefits.map((benefit: string, idx: number) => (
                      <li key={idx} className="text-sm text-temple-brown-light flex items-center">
                        <Star className="h-3 w-3 text-temple-saffron mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-temple-brown-deep">₹{blessing.price}</span>
                  <button className="bg-temple-gold hover:bg-temple-saffron text-white px-4 py-2 rounded-md transition-colors duration-200">
                    Add Blessing
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Blessing Packages */}
        <div className="mb-16">
          <h2 className="font-serif text-3xl text-temple-brown-deep mb-8 text-center">Blessing Packages</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {packages.map((pkg: Package, index: number) => (
              <div key={pkg.id} className={`bg-white rounded-2xl shadow-temple p-6 border-2 ${pkg.popular ? 'border-temple-gold' : 'border-temple-gold/20'} relative`}>
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-temple-gold text-white px-4 py-1 rounded-full text-sm font-medium">Most Popular</span>
                  </div>
                )}
                <div className="flex items-center justify-between mb-4">
                  <Heart className="h-8 w-8 text-temple-kumkum" />
                  <div className="text-right">
                    <span className="text-sm text-temple-brown-light line-through">₹{pkg.originalPrice}</span>
                    <span className="text-2xl font-bold text-temple-brown-deep ml-2">₹{pkg.price}</span>
                  </div>
                </div>
                <h3 className="font-serif text-xl text-temple-brown-deep mb-2">{pkg.name}</h3>
                <p className="text-temple-brown-medium mb-4">{pkg.description}</p>
                <div className="mb-4">
                  <h4 className="font-medium text-temple-brown-deep mb-2">Includes:</h4>
                  <ul className="space-y-1">
                    {pkg.items.map((item: string, idx: number) => (
                      <li key={idx} className="text-sm text-temple-brown-light flex items-center">
                        <Star className="h-3 w-3 text-temple-saffron mr-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <button className="w-full bg-gradient-to-r from-temple-saffron to-temple-gold text-white py-3 rounded-full font-medium hover:shadow-gold-glow transition-shadow duration-300">
                  Choose Package
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* How It Works */}
        <div className="bg-white rounded-2xl shadow-temple p-8 border border-temple-gold/20">
          <h2 className="font-serif text-3xl text-temple-brown-deep mb-8 text-center">How Sacred Blessings Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-temple-gold-pale rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-temple-brown-deep">1</span>
              </div>
              <h3 className="font-medium text-temple-brown-deep mb-2">Choose Your Blessing</h3>
              <p className="text-temple-brown-medium">Select from our collection of authentic Vedic blessings</p>
            </div>
            <div className="text-center">
              <div className="bg-temple-gold-pale rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-temple-brown-deep">2</span>
              </div>
              <h3 className="font-medium text-temple-brown-deep mb-2">Sacred Ritual</h3>
              <p className="text-temple-brown-medium">Our experienced priests perform the blessing ritual</p>
            </div>
            <div className="text-center">
              <div className="bg-temple-gold-pale rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-temple-brown-deep">3</span>
              </div>
              <h3 className="font-medium text-temple-brown-deep mb-2">Blessed Jewelry</h3>
              <p className="text-temple-brown-medium">Receive your spiritually charged jewelry</p>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="mt-16">
          <h2 className="font-serif text-3xl text-temple-brown-deep mb-8 text-center">Blessed Experiences</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl shadow-temple p-6 border border-temple-gold/20">
              <div className="flex items-center space-x-2 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-temple-saffron fill-current" />
                ))}
              </div>
              <p className="text-temple-brown-medium italic mb-4">
                "The Ganesha blessing on my pendant has brought incredible positive changes to my life. Highly recommended!"
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-temple-brown-deep">Priya Sharma</p>
                  <p className="text-sm text-temple-brown-light">Mumbai</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-temple p-6 border border-temple-gold/20">
              <div className="flex items-center space-x-2 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-temple-saffron fill-current" />
                ))}
              </div>
              <p className="text-temple-brown-medium italic mb-4">
                "The complete blessing package has enhanced my spiritual practice beyond expectations."
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-temple-brown-deep">Raj Kumar</p>
                  <p className="text-sm text-temple-brown-light">Delhi</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SacredBlessings;
