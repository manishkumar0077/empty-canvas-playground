
import { Link } from 'react-router-dom';
import { Shield, Lock, Eye, FileText } from 'lucide-react';

const PrivacyPolicy = () => {
  return (
    <div className="bg-temple-ivory min-h-screen pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-6">
            <div className="relative">
              <div className="w-16 h-16 bg-gradient-to-br from-temple-gold to-temple-saffron rounded-full flex items-center justify-center shadow-gold-glow">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-temple-kumkum rounded-full animate-diya-pulse"></div>
            </div>
          </div>
          <h1 className="font-serif text-4xl text-temple-brown-deep mb-4">Privacy Policy</h1>
          <p className="text-xl text-temple-brown-medium leading-relaxed max-w-2xl mx-auto">
            "गोपनीयता और विश्वास हमारे धर्म का आधार है"
          </p>
          <p className="text-temple-brown-light mt-2">
            Privacy and trust are the foundation of our dharma
          </p>
        </div>

        {/* Breadcrumb */}
        <div className="mb-8">
          <Link to="/" className="text-temple-brown-medium hover:text-temple-brown-deep">
            Home
          </Link>
          <span className="mx-2 text-temple-brown-medium">/</span>
          <span className="text-temple-brown-deep">Privacy Policy</span>
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
                <h2 className="text-2xl font-serif text-temple-brown-deep mb-4">Information We Collect</h2>
                <p className="text-temple-brown-medium leading-relaxed mb-4">
                  At Sadak, we collect information that helps us provide you with the best spiritual jewelry shopping experience while respecting your privacy as sacred.
                </p>
                <ul className="list-disc list-inside text-temple-brown-medium space-y-2">
                  <li>Personal identification information (Name, email address, phone number)</li>
                  <li>Shipping and billing addresses</li>
                  <li>Payment information (processed securely through our payment partners)</li>
                  <li>Order history and preferences</li>
                  <li>Website usage data and analytics</li>
                </ul>
              </div>
            </div>

            {/* Section 2 */}
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 bg-temple-gold-pale rounded-full flex items-center justify-center flex-shrink-0">
                <Lock className="h-5 w-5 text-temple-saffron" />
              </div>
              <div>
                <h2 className="text-2xl font-serif text-temple-brown-deep mb-4">How We Use Your Information</h2>
                <p className="text-temple-brown-medium leading-relaxed mb-4">
                  Your information is used solely to enhance your spiritual journey with us:
                </p>
                <ul className="list-disc list-inside text-temple-brown-medium space-y-2">
                  <li>Process and fulfill your orders</li>
                  <li>Communicate about your orders and account</li>
                  <li>Provide customer support</li>
                  <li>Send promotional offers (with your consent)</li>
                  <li>Improve our website and services</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </div>
            </div>

            {/* Section 3 */}
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 bg-temple-gold-pale rounded-full flex items-center justify-center flex-shrink-0">
                <Eye className="h-5 w-5 text-temple-saffron" />
              </div>
              <div>
                <h2 className="text-2xl font-serif text-temple-brown-deep mb-4">Information Sharing</h2>
                <p className="text-temple-brown-medium leading-relaxed mb-4">
                  We do not sell, trade, or rent your personal information to third parties. We may share your information only in these circumstances:
                </p>
                <ul className="list-disc list-inside text-temple-brown-medium space-y-2">
                  <li>With trusted service providers who help us operate our business</li>
                  <li>When required by law or legal process</li>
                  <li>To protect our rights, property, or safety</li>
                  <li>With your explicit consent</li>
                </ul>
              </div>
            </div>

            {/* Sacred Promise */}
            <div className="bg-gradient-to-r from-temple-sandalwood/20 to-temple-gold-light/20 rounded-2xl p-6 border border-temple-gold/20">
              <h3 className="text-xl font-serif text-temple-brown-deep mb-3">Our Sacred Promise</h3>
              <p className="text-temple-brown-medium leading-relaxed">
                "As we honor the divine in our jewelry, we honor the trust you place in us. Your privacy is as sacred as the spiritual energy in our products. We commit to protecting your information with the same devotion we put into crafting each piece."
              </p>
            </div>

            {/* Contact */}
            <div className="text-center">
              <h3 className="text-xl font-serif text-temple-brown-deep mb-4">Questions About Privacy?</h3>
              <p className="text-temple-brown-medium mb-4">
                If you have any questions about this Privacy Policy, please contact us.
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

export default PrivacyPolicy;
