import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, Sparkles, ArrowRight, Package, Users, Award, Shield } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Homepage = () => {
  const { language } = useLanguage();
  const [featuredCategories] = useState([
    {
      name: 'Deity Collection',
      hindiName: 'देव संग्रह',
      imageUrl: 'https://source.unsplash.com/400x300/?deity',
      route: '/collections/deity',
    },
    {
      name: 'Rudraksha',
      hindiName: 'रुद्राक्ष',
      imageUrl: 'https://source.unsplash.com/400x300/?rudraksha',
      route: '/collections/rudraksha',
    },
    {
      name: 'Gemstones',
      hindiName: 'रत्न',
      imageUrl: 'https://source.unsplash.com/400x300/?gemstone',
      route: '/collections/gemstones',
    },
  ]);

  const [testimonials] = useState([
    {
      name: 'Priya Sharma',
      location: 'Mumbai',
      text: 'I absolutely love the Rudraksha mala I purchased. The quality is superb, and I feel a sense of peace whenever I wear it.',
      rating: 5,
    },
    {
      name: 'Rajesh Kumar',
      location: 'Delhi',
      text: 'The gemstone ring I bought has brought positive energy into my life. I highly recommend Sadak for authentic spiritual jewelry.',
      rating: 4,
    },
    {
      name: 'Anita Patel',
      location: 'Ahmedabad',
      text: 'The deity pendant is beautifully crafted and has become a cherished part of my daily wear. Thank you, Sadak!',
      rating: 5,
    },
  ]);

  return (
    <div className="bg-temple-ivory">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-temple-sandalwood/20 to-temple-gold-light/20">
        <div className="absolute inset-0 bg-mandala-bg opacity-20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Sparkles className="h-16 w-16 text-temple-gold mx-auto mb-6 animate-diya-pulse" />
          <h1 className="font-serif text-4xl md:text-6xl text-temple-brown-deep mb-6">
            {language === 'hi' ? 'पवित्र आभूषण' : 'Sacred Jewelry'}
            <br />
            <span className="text-temple-kumkum">
              {language === 'hi' ? 'आपकी आध्यात्मिक यात्रा के लिए' : 'For Your Spiritual Journey'}
            </span>
          </h1>
          <p className="text-xl text-temple-brown-deep/80 mb-8 max-w-3xl mx-auto leading-relaxed">
            {language === 'hi'
              ? 'प्राचीन ज्ञान और आधुनिक शिल्प कौशल से तैयार किए गए उत्तम आभूषणों की खोज करें। प्रत्येक रचना का उद्देश्य आपके आध्यात्मिक संबंध को बढ़ाना है।'
              : 'Discover exquisite jewelry crafted with ancient wisdom and modern craftsmanship. Each creation is designed to enhance your spiritual connection.'}
          </p>
          <Link
            to="/collections"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-temple-saffron to-temple-gold text-white px-8 py-4 rounded-full font-medium hover:shadow-gold-glow transition-all duration-300"
          >
            <span>{language === 'hi' ? 'संग्रह देखें' : 'Explore Collections'}</span>
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl text-temple-brown-deep mb-4">
              {language === 'hi' ? 'विशेष रुप से प्रदर्शित संग्रह' : 'Featured Collections'}
            </h2>
            <p className="text-lg text-temple-brown-medium">
              {language === 'hi' ? 'हमारे कुछ पसंदीदा संग्रह देखें' : 'Explore some of our favorite collections'}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredCategories.map((category, index) => (
              <Link
                key={index}
                to={category.route}
                className="relative rounded-2xl overflow-hidden shadow-temple hover:shadow-temple-lg transition-shadow duration-300"
              >
                <img src={category.imageUrl} alt={category.name} className="w-full h-64 object-cover" />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <h3 className="font-serif text-2xl text-white">{language === 'hi' ? category.hindiName : category.name}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-temple-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl text-temple-brown-deep mb-4">
              {language === 'hi' ? 'हमें क्यों चुनें' : 'Why Choose Us'}
            </h2>
            <p className="text-lg text-temple-brown-medium">
              {language === 'hi' ? 'पवित्र आभूषणों के लिए सदक ही क्यों?' : 'Why Sadak for your sacred jewelry?'}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Package className="h-12 w-12 text-temple-gold mx-auto mb-4" />
              <h3 className="font-medium text-temple-brown-deep mb-2">
                {language === 'hi' ? 'प्रामाणिक उत्पाद' : 'Authentic Products'}
              </h3>
              <p className="text-temple-brown-medium">
                {language === 'hi'
                  ? 'प्रत्येक वस्तु को वास्तविक सामग्री और पारंपरिक तकनीकों का उपयोग करके तैयार किया गया है।'
                  : 'Each item is crafted using genuine materials and traditional techniques.'}
              </p>
            </div>
            <div className="text-center">
              <Users className="h-12 w-12 text-temple-gold mx-auto mb-4" />
              <h3 className="font-medium text-temple-brown-deep mb-2">
                {language === 'hi' ? 'विशेषज्ञ समर्थन' : 'Expert Support'}
              </h3>
              <p className="text-temple-brown-medium">
                {language === 'hi'
                  ? 'हमारी टीम आपको सही आभूषण ढूंढने में मदद करने के लिए यहां है।'
                  : 'Our team is here to assist you in finding the perfect piece.'}
              </p>
            </div>
            <div className="text-center">
              <Award className="h-12 w-12 text-temple-gold mx-auto mb-4" />
              <h3 className="font-medium text-temple-brown-deep mb-2">
                {language === 'hi' ? 'पवित्र आशीर्वाद' : 'Sacred Blessings'}
              </h3>
              <p className="text-temple-brown-medium">
                {language === 'hi'
                  ? 'हमारे आभूषणों को प्रामाणिक वैदिक मंत्रों से आशीर्वाद दिया गया है।'
                  : 'Our jewelry is blessed with authentic Vedic mantras.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl text-temple-brown-deep mb-4">
              {language === 'hi' ? 'भक्त क्या कहते हैं' : 'What Our Devotees Say'}
            </h2>
            <p className="text-lg text-temple-brown-medium">
              {language === 'hi' ? 'हमारे ग्राहकों से सुनें' : 'Hear from our satisfied customers'}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-temple p-6 border border-temple-gold/20"
              >
                <div className="flex items-center space-x-2 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-temple-saffron fill-current" />
                  ))}
                </div>
                <p className="text-temple-brown-medium italic mb-4">"{testimonial.text}"</p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-temple-brown-deep">{testimonial.name}</p>
                    <p className="text-sm text-temple-brown-light">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-gradient-to-r from-temple-saffron to-temple-gold text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Shield className="h-16 w-16 text-white mx-auto mb-6 animate-pulse" />
          <h2 className="font-serif text-4xl lg:text-5xl mb-8">
            {language === 'hi' ? 'आज ही अपनी आध्यात्मिक यात्रा शुरू करें' : 'Start Your Spiritual Journey Today'}
          </h2>
          <p className="text-xl mb-8">
            {language === 'hi'
              ? 'हमारे पवित्र आभूषणों के संग्रह का अन्वेषण करें और अपने जीवन में शांति और सकारात्मकता लाएँ।'
              : 'Explore our collection of sacred jewelry and bring peace and positivity into your life.'}
          </p>
          <Link
            to="/collections"
            className="inline-flex items-center space-x-2 bg-white text-temple-brown-deep px-8 py-4 rounded-full font-medium hover:shadow-lg transition-all duration-300"
          >
            <span>{language === 'hi' ? 'संग्रह देखें' : 'Discover Now'}</span>
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Homepage;
