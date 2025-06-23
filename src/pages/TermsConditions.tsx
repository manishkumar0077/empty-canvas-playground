import React from 'react';
import { FileText, Scale, AlertCircle, CheckCircle } from 'lucide-react';

const TermsConditions = () => {
  return (
    <div className="min-h-screen bg-temple-ivory pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <Scale className="h-16 w-16 text-temple-gold mx-auto mb-6" />
          <h1 className="font-serif text-4xl text-temple-brown-deep mb-4">Terms & Conditions</h1>
          <p className="text-temple-brown-medium">
            Sacred agreements that govern our spiritual commerce relationship
          </p>
          <div className="flex items-center justify-center space-x-2 mt-4">
            <div className="h-px bg-gradient-to-r from-transparent via-temple-gold to-transparent w-16"></div>
            <span className="text-temple-gold">⚖️</span>
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
                <FileText className="h-6 w-6 text-temple-gold" />
                <h2 className="font-serif text-2xl text-temple-brown-deep">Acceptance of Terms</h2>
              </div>
              <div className="space-y-4 text-temple-brown-medium">
                <p>
                  By accessing and using Sadak's website and services, you accept and agree to be bound by 
                  these Terms and Conditions. If you do not agree to these terms, please do not use our services.
                </p>
                <p>
                  These terms constitute a legally binding agreement between you and Sadak. We reserve the 
                  right to modify these terms at any time, and such modifications will be effective immediately 
                  upon posting on our website.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="font-serif text-2xl text-temple-brown-deep mb-4">Our Sacred Promise</h2>
              <div className="space-y-4 text-temple-brown-medium">
                <p>
                  Sadak is committed to providing authentic, blessed jewelry that serves as spiritual tools 
                  for your divine journey. Every piece is:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Handcrafted with devotion and traditional techniques</li>
                  <li>Blessed through authentic Vedic rituals</li>
                  <li>Purified with sacred Ganga water</li>
                  <li>Energized with appropriate mantras</li>
                  <li>Packaged with love and spiritual intention</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="font-serif text-2xl text-temple-brown-deep mb-4">Product Information</h2>
              <div className="space-y-4 text-temple-brown-medium">
                <p>
                  We strive to provide accurate descriptions, images, and specifications for all products. However:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Natural stones may vary in color, pattern, and size</li>
                  <li>Handcrafted items may have slight variations</li>
                  <li>Colors may appear different on various devices</li>
                  <li>Spiritual effects may vary based on individual faith and practice</li>
                </ul>
                <p className="mt-4">
                  We reserve the right to correct any errors in product information, pricing, or availability.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="font-serif text-2xl text-temple-brown-deep mb-4">Ordering and Payment</h2>
              <div className="space-y-4 text-temple-brown-medium">
                <h3 className="font-medium text-temple-brown-deep">Order Process:</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>All orders are subject to acceptance and availability</li>
                  <li>We reserve the right to refuse or cancel any order</li>
                  <li>Order confirmation will be sent via email</li>
                  <li>Prices are in Indian Rupees (INR) and include applicable taxes</li>
                </ul>
                
                <h3 className="font-medium text-temple-brown-deep mt-6">Payment Terms:</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Payment is required at the time of order placement</li>
                  <li>We accept major credit cards, debit cards, UPI, and cash on delivery</li>
                  <li>All payments are processed securely through certified payment gateways</li>
                  <li>For cash on delivery, payment must be made in exact amount</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <div className="flex items-center space-x-3 mb-4">
                <AlertCircle className="h-6 w-6 text-temple-gold" />
                <h2 className="font-serif text-2xl text-temple-brown-deep">Shipping and Delivery</h2>
              </div>
              <div className="space-y-4 text-temple-brown-medium">
                <h3 className="font-medium text-temple-brown-deep">Shipping Policy:</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Free shipping on orders above ₹1999</li>
                  <li>Standard shipping charges apply for orders below ₹1999</li>
                  <li>Delivery time: 3-7 business days within India</li>
                  <li>International shipping available on request</li>
                </ul>
                
                <h3 className="font-medium text-temple-brown-deep mt-6">Delivery Terms:</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Delivery address cannot be changed after order confirmation</li>
                  <li>Someone must be available to receive the package</li>
                  <li>Risk of loss passes to you upon delivery</li>
                  <li>Delivery delays due to natural disasters or force majeure are not our responsibility</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="font-serif text-2xl text-temple-brown-deep mb-4">Returns and Exchanges</h2>
              <div className="space-y-4 text-temple-brown-medium">
                <p>
                  We want you to be completely satisfied with your sacred jewelry:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>7-day return policy from date of delivery</li>
                  <li>Items must be in original condition with tags attached</li>
                  <li>Blessed items cannot be returned unless defective</li>
                  <li>Custom or personalized items are not returnable</li>
                  <li>Return shipping costs are borne by the customer unless item is defective</li>
                </ul>
                <p className="mt-4">
                  To initiate a return, please contact our customer service team at returns@sadak.com
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="font-serif text-2xl text-temple-brown-deep mb-4">Spiritual Disclaimers</h2>
              <div className="space-y-4 text-temple-brown-medium">
                <div className="bg-temple-gold-pale/30 rounded-lg p-4 border border-temple-gold/20">
                  <p className="font-medium text-temple-brown-deep mb-2">Important Notice:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Our jewelry is intended for spiritual and decorative purposes</li>
                    <li>We make no medical or supernatural claims about our products</li>
                    <li>Spiritual benefits depend on individual faith and practice</li>
                    <li>Results may vary based on personal beliefs and devotion</li>
                    <li>Our products are not substitutes for medical treatment</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="font-serif text-2xl text-temple-brown-deep mb-4">Intellectual Property</h2>
              <div className="space-y-4 text-temple-brown-medium">
                <p>
                  All content on our website, including designs, images, text, and logos, is protected by 
                  intellectual property rights:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>You may not reproduce, distribute, or modify our content without permission</li>
                  <li>Product images and descriptions are for personal use only</li>
                  <li>Our brand name and logo are registered trademarks</li>
                  <li>Traditional designs are used with respect to cultural heritage</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="font-serif text-2xl text-temple-brown-deep mb-4">User Conduct</h2>
              <div className="space-y-4 text-temple-brown-medium">
                <p>When using our services, you agree to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Provide accurate and truthful information</li>
                  <li>Use our website for lawful purposes only</li>
                  <li>Respect the spiritual nature of our products</li>
                  <li>Not engage in fraudulent or harmful activities</li>
                  <li>Maintain the confidentiality of your account information</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="font-serif text-2xl text-temple-brown-deep mb-4">Limitation of Liability</h2>
              <div className="space-y-4 text-temple-brown-medium">
                <p>
                  To the maximum extent permitted by law, Sadak shall not be liable for:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Indirect, incidental, or consequential damages</li>
                  <li>Loss of profits, data, or business opportunities</li>
                  <li>Damages arising from spiritual or religious practices</li>
                  <li>Third-party actions or website interruptions</li>
                </ul>
                <p className="mt-4">
                  Our total liability shall not exceed the amount paid for the specific product or service.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="font-serif text-2xl text-temple-brown-deep mb-4">Governing Law</h2>
              <div className="space-y-4 text-temple-brown-medium">
                <p>
                  These terms are governed by the laws of India. Any disputes shall be resolved through:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>First, good faith negotiation</li>
                  <li>Then, mediation if necessary</li>
                  <li>Finally, arbitration in Haridwar, Uttarakhand</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <div className="flex items-center space-x-3 mb-4">
                <CheckCircle className="h-6 w-6 text-temple-gold" />
                <h2 className="font-serif text-2xl text-temple-brown-deep">Contact Information</h2>
              </div>
              <div className="space-y-4 text-temple-brown-medium">
                <p>
                  For questions about these terms or our services, please contact us:
                </p>
                <div className="bg-temple-gold-pale/30 rounded-lg p-4">
                  <p><strong>Email:</strong> legal@sadak.com</p>
                  <p><strong>Phone:</strong> +91 98765 43210</p>
                  <p><strong>Address:</strong> Near Ganga Ghat, Haridwar, Uttarakhand 249401, India</p>
                  <p><strong>Business Hours:</strong> 9 AM to 9 PM (IST), Daily</p>
                </div>
              </div>
            </section>

            {/* Sacred Quote */}
            <div className="text-center mt-12 p-6 bg-temple-gold-pale/20 rounded-xl border border-temple-gold/20">
              <blockquote className="font-serif text-xl text-temple-brown-deep italic mb-3">
                "सत्यमेव जयते - सत्य की ही विजय होती है।"
              </blockquote>
              <p className="text-sm text-temple-brown-light">
                Truth alone triumphs - Our commitment to honest business
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsConditions;