
import { Link } from 'react-router-dom';
import { FileText, Scale, Shield, Heart } from 'lucide-react';

const TermsConditions = () => {
  return (
    <div className="bg-temple-ivory min-h-screen pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-6">
            <div className="relative">
              <div className="w-16 h-16 bg-gradient-to-br from-temple-gold to-temple-saffron rounded-full flex items-center justify-center shadow-gold-glow">
                <Scale className="h-8 w-8 text-white" />
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-temple-kumkum rounded-full animate-diya-pulse"></div>
            </div>
          </div>
          <h1 className="font-serif text-4xl text-temple-brown-deep mb-4">Terms & Conditions</h1>
          <p className="text-xl text-temple-brown-medium leading-relaxed max-w-2xl mx-auto">
            "धर्म और न्याय के साथ व्यापार करना ही हमारा लक्ष्य है"
          </p>
          <p className="text-temple-brown-light mt-2">
            Conducting business with dharma and justice is our goal
          </p>
        </div>

        {/* Breadcrumb */}
        <div className="mb-8">
          <Link to="/" className="text-temple-brown-medium hover:text-temple-brown-deep">
            Home
          </Link>
          <span className="mx-2 text-temple-brown-medium">/</span>
          <span className="text-temple-brown-deep">Terms & Conditions</span>
        </div>

        {/* Content */}
        <div className="bg-white/80 backdrop-blur-md rounded-3xl shadow-temple-lg p-8 border border-temple-gold/20">
          <div className="space-y-8">
            {/* Section 1 */}
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 bg-temple-gold-pale rounded-full flex items-center justify-center flex-shrink-0">
                <FileText className="h-5 w-5 text-temple-saffron" />
              </div>
              <div>
                <h2 className="text-2xl font-serif text-temple-brown-deep mb-4">Acceptance of Terms</h2>
                <p className="text-temple-brown-medium leading-relaxed">
                  By accessing and using Sadak's website and services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                </p>
              </div>
            </div>

            {/* Section 2 */}
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 bg-temple-gold-pale rounded-full flex items-center justify-center flex-shrink-0">
                <Shield className="h-5 w-5 text-temple-saffron" />
              </div>
              <div>
                <h2 className="text-2xl font-serif text-temple-brown-deep mb-4">Product Information</h2>
                <p className="text-temple-brown-medium leading-relaxed mb-4">
                  All spiritual jewelry and products on our website are:
                </p>
                <ul className="list-disc list-inside text-temple-brown-medium space-y-2">
                  <li>Authentic and blessed with proper mantras</li>
                  <li>Made with genuine materials as described</li>
                  <li>Energized by qualified spiritual practitioners</li>
                  <li>Accompanied by authenticity certificates where applicable</li>
                  <li>Subject to natural variations in spiritual items</li>
                </ul>
              </div>
            </div>

            {/* Section 3 */}
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 bg-temple-gold-pale rounded-full flex items-center justify-center flex-shrink-0">
                <Heart className="h-5 w-5 text-temple-saffron" />
              </div>
              <div>
                <h2 className="text-2xl font-serif text-temple-brown-deep mb-4">Spiritual Responsibility</h2>
                <p className="text-temple-brown-medium leading-relaxed mb-4">
                  While our products are blessed and energized, we remind customers that:
                </p>
                <ul className="list-disc list-inside text-temple-brown-medium space-y-2">
                  <li>Spiritual results depend on individual faith and practice</li>
                  <li>Products are tools to aid spiritual practice, not guarantees</li>
                  <li>Regular prayer and meditation enhance benefits</li>
                  <li>Respect and care for spiritual items is essential</li>
                </ul>
              </div>
            </div>

            {/* Sacred Commitment */}
            <div className="bg-gradient-to-r from-temple-sandalwood/20 to-temple-gold-light/20 rounded-2xl p-6 border border-temple-gold/20">
              <h3 className="text-xl font-serif text-temple-brown-deep mb-3">Our Sacred Commitment</h3>
              <p className="text-temple-brown-medium leading-relaxed">
                "We commit to conducting our business with the highest standards of dharma. Every transaction is a sacred exchange, and we honor the trust you place in us with transparency, authenticity, and devotion to your spiritual journey."
              </p>
            </div>

            {/* Contact */}
            <div className="text-center">
              <h3 className="text-xl font-serif text-temple-brown-deep mb-4">Questions About Terms?</h3>
              <p className="text-temple-brown-medium mb-4">
                If you have any questions about these Terms & Conditions, please contact us.
              </p>
              <Link 
                to="/contact" 
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-temple-saffron to-temple-gold text-white px-6 py-3 rounded-full font-medium hover:shadow-gold-glow transition-all duration-300"
              >
                <span>Contact Us</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsConditions;
