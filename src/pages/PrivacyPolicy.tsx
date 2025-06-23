import React from 'react';
import { Shield, Eye, Lock, Users } from 'lucide-react';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-temple-ivory pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <Shield className="h-16 w-16 text-temple-gold mx-auto mb-6" />
          <h1 className="font-serif text-4xl text-temple-brown-deep mb-4">Privacy Policy</h1>
          <p className="text-temple-brown-medium">
            Your privacy is sacred to us. Learn how we protect your personal information.
          </p>
          <div className="flex items-center justify-center space-x-2 mt-4">
            <div className="h-px bg-gradient-to-r from-transparent via-temple-gold to-transparent w-16"></div>
            <span className="text-temple-gold">🕉️</span>
            <div className="h-px bg-gradient-to-r from-transparent via-temple-gold to-transparent w-16"></div>
          </div>
        </div>

        {/* Content */}
        <div className="bg-white rounded-2xl shadow-temple p-8 border border-temple-gold/20">
          <div className="prose max-w-none">
            <p className="text-temple-brown-medium mb-6 text-sm">
              <strong>Last updated:</strong> December 2024
            </p>

            <section className="mb-8">
              <div className="flex items-center space-x-3 mb-4">
                <Eye className="h-6 w-6 text-temple-gold" />
                <h2 className="font-serif text-2xl text-temple-brown-deep">Information We Collect</h2>
              </div>
              <div className="space-y-4 text-temple-brown-medium">
                <p>
                  We collect information you provide directly to us, such as when you create an account, 
                  make a purchase, or contact us for support.
                </p>
                <h3 className="font-medium text-temple-brown-deep">Personal Information includes:</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Name, email address, and phone number</li>
                  <li>Shipping and billing addresses</li>
                  <li>Payment information (processed securely through our payment partners)</li>
                  <li>Order history and preferences</li>
                  <li>Communication preferences</li>
                </ul>
                
                <h3 className="font-medium text-temple-brown-deep mt-6">Automatically Collected Information:</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Device information and browser type</li>
                  <li>IP address and location data</li>
                  <li>Website usage patterns and analytics</li>
                  <li>Cookies and similar tracking technologies</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <div className="flex items-center space-x-3 mb-4">
                <Users className="h-6 w-6 text-temple-gold" />
                <h2 className="font-serif text-2xl text-temple-brown-deep">How We Use Your Information</h2>
              </div>
              <div className="space-y-4 text-temple-brown-medium">
                <p>We use the information we collect to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Process and fulfill your orders</li>
                  <li>Provide customer service and support</li>
                  <li>Send you order confirmations and shipping updates</li>
                  <li>Personalize your shopping experience</li>
                  <li>Improve our website and services</li>
                  <li>Send promotional emails (with your consent)</li>
                  <li>Prevent fraud and ensure security</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <div className="flex items-center space-x-3 mb-4">
                <Lock className="h-6 w-6 text-temple-gold" />
                <h2 className="font-serif text-2xl text-temple-brown-deep">Information Sharing</h2>
              </div>
              <div className="space-y-4 text-temple-brown-medium">
                <p>
                  We do not sell, trade, or rent your personal information to third parties. 
                  We may share your information only in the following circumstances:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Service Providers:</strong> With trusted partners who help us operate our business (payment processors, shipping companies, etc.)</li>
                  <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
                  <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
                  <li><strong>Consent:</strong> When you explicitly consent to sharing</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="font-serif text-2xl text-temple-brown-deep mb-4">Data Security</h2>
              <div className="space-y-4 text-temple-brown-medium">
                <p>
                  We implement appropriate technical and organizational measures to protect your personal information:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>SSL encryption for data transmission</li>
                  <li>Secure payment processing through certified providers</li>
                  <li>Regular security audits and updates</li>
                  <li>Limited access to personal information</li>
                  <li>Employee training on data protection</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="font-serif text-2xl text-temple-brown-deep mb-4">Your Rights</h2>
              <div className="space-y-4 text-temple-brown-medium">
                <p>You have the right to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Access your personal information</li>
                  <li>Correct inaccurate information</li>
                  <li>Delete your account and personal data</li>
                  <li>Opt-out of marketing communications</li>
                  <li>Data portability (receive your data in a structured format)</li>
                  <li>Object to processing of your personal information</li>
                </ul>
                <p className="mt-4">
                  To exercise these rights, please contact us at <strong>privacy@sadak.com</strong>
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="font-serif text-2xl text-temple-brown-deep mb-4">Cookies and Tracking</h2>
              <div className="space-y-4 text-temple-brown-medium">
                <p>
                  We use cookies and similar technologies to enhance your browsing experience:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Essential Cookies:</strong> Required for website functionality</li>
                  <li><strong>Analytics Cookies:</strong> Help us understand website usage</li>
                  <li><strong>Marketing Cookies:</strong> Used for personalized advertising</li>
                  <li><strong>Preference Cookies:</strong> Remember your settings and preferences</li>
                </ul>
                <p className="mt-4">
                  You can control cookies through your browser settings, but some features may not work properly if disabled.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="font-serif text-2xl text-temple-brown-deep mb-4">Children's Privacy</h2>
              <div className="space-y-4 text-temple-brown-medium">
                <p>
                  Our services are not intended for children under 13 years of age. We do not knowingly 
                  collect personal information from children under 13. If we become aware that we have 
                  collected such information, we will take steps to delete it promptly.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="font-serif text-2xl text-temple-brown-deep mb-4">International Transfers</h2>
              <div className="space-y-4 text-temple-brown-medium">
                <p>
                  Your information may be transferred to and processed in countries other than your own. 
                  We ensure appropriate safeguards are in place to protect your personal information 
                  in accordance with applicable data protection laws.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="font-serif text-2xl text-temple-brown-deep mb-4">Changes to This Policy</h2>
              <div className="space-y-4 text-temple-brown-medium">
                <p>
                  We may update this Privacy Policy from time to time. We will notify you of any 
                  material changes by posting the new policy on our website and updating the 
                  "Last updated" date. Your continued use of our services after such changes 
                  constitutes acceptance of the updated policy.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="font-serif text-2xl text-temple-brown-deep mb-4">Contact Us</h2>
              <div className="space-y-4 text-temple-brown-medium">
                <p>
                  If you have any questions about this Privacy Policy or our data practices, 
                  please contact us:
                </p>
                <div className="bg-temple-gold-pale/30 rounded-lg p-4">
                  <p><strong>Email:</strong> privacy@sadak.com</p>
                  <p><strong>Phone:</strong> +91 98765 43210</p>
                  <p><strong>Address:</strong> Near Ganga Ghat, Haridwar, Uttarakhand 249401, India</p>
                </div>
              </div>
            </section>

            {/* Sacred Quote */}
            <div className="text-center mt-12 p-6 bg-temple-gold-pale/20 rounded-xl border border-temple-gold/20">
              <blockquote className="font-serif text-xl text-temple-brown-deep italic mb-3">
                "गोपनीयता भी एक पवित्र विश्वास है।"
              </blockquote>
              <p className="text-sm text-temple-brown-light">
                Privacy is also a sacred trust
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
