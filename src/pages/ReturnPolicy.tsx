import React from 'react';
import { RotateCcw, Package, Clock, CheckCircle, AlertCircle, Mail } from 'lucide-react';

const ReturnPolicy = () => {
  return (
    <div className="min-h-screen bg-temple-ivory pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <RotateCcw className="h-16 w-16 text-temple-gold mx-auto mb-6" />
          <h1 className="font-serif text-4xl text-temple-brown-deep mb-4">Return & Exchange Policy</h1>
          <p className="text-temple-brown-medium">
            Our sacred commitment to your satisfaction and spiritual journey
          </p>
          <div className="flex items-center justify-center space-x-2 mt-4">
            <div className="h-px bg-gradient-to-r from-transparent via-temple-gold to-transparent w-16"></div>
            <span className="text-temple-gold">🔄</span>
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
              <h2 className="font-serif text-2xl text-temple-brown-deep mb-4">Our Sacred Promise</h2>
              <div className="space-y-4 text-temple-brown-medium">
                <p>
                  At Sadak, we want you to be completely satisfied with your sacred jewelry. If, for any reason, 
                  you are not happy with your purchase, we offer a hassle-free return and exchange policy.
                </p>
                <p>
                  We believe in the power of our blessed items and stand behind their quality and spiritual significance.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <div className="flex items-center space-x-3 mb-4">
                <Package className="h-6 w-6 text-temple-gold" />
                <h2 className="font-serif text-2xl text-temple-brown-deep">7-Day Return Policy</h2>
              </div>
              <div className="space-y-4 text-temple-brown-medium">
                <p>
                  You have 7 days from the date of delivery to return your item(s) for a full refund or exchange.
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Items must be in original condition with all tags attached</li>
                  <li>Items must be unworn, unused, and unaltered</li>
                  <li>Original packaging and certificates must be included</li>
                  <li>Return shipping costs are borne by the customer</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="font-serif text-2xl text-temple-brown-deep mb-4">Easy Return Process</h2>
              <div className="space-y-4 text-temple-brown-medium">
                <p>
                  Returning your sacred jewelry is simple and straightforward:
                </p>
                <ol className="list-decimal pl-6 space-y-2">
                  <li>Contact our customer service team at returns@sadak.com to initiate the return</li>
                  <li>Pack the item securely in its original packaging</li>
                  <li>Ship the item to the address provided by our team</li>
                  <li>Once we receive the item, we will process your refund or exchange</li>
                </ol>
              </div>
            </section>

            <section className="mb-8">
              <div className="flex items-center space-x-3 mb-4">
                <Clock className="h-6 w-6 text-temple-gold" />
                <h2 className="font-serif text-2xl text-temple-brown-deep">Exclusions</h2>
              </div>
              <div className="space-y-4 text-temple-brown-medium">
                <p>
                  Certain items are not eligible for return or exchange:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Custom or personalized items</li>
                  <li>Items that have been altered or damaged by the customer</li>
                  <li>Items without original tags and packaging</li>
                  <li>Items purchased during final sale or clearance events</li>
                  <li>Blessed items where the seal is broken</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="font-serif text-2xl text-temple-brown-deep mb-4">Refund Options</h2>
              <div className="space-y-4 text-temple-brown-medium">
                <p>
                  You can choose from the following refund options:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Full refund to your original payment method</li>
                  <li>Exchange for another item of equal value</li>
                  <li>Store credit for future purchases</li>
                </ul>
                <p className="mt-4">
                  Refunds are processed within 7-10 business days after we receive the returned item.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <div className="flex items-center space-x-3 mb-4">
                <CheckCircle className="h-6 w-6 text-temple-gold" />
                <h2 className="font-serif text-2xl text-temple-brown-deep">Damaged or Defective Items</h2>
              </div>
              <div className="space-y-4 text-temple-brown-medium">
                <p>
                  If you receive a damaged or defective item, please contact us immediately at returns@sadak.com.
                </p>
                <p>
                  We will arrange for a free return and provide a full refund or exchange, as per your preference.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="font-serif text-2xl text-temple-brown-deep mb-4">Exchange Policy</h2>
              <div className="space-y-4 text-temple-brown-medium">
                <p>
                  If you wish to exchange an item for a different size, color, or design, please follow these steps:
                </p>
                <ol className="list-decimal pl-6 space-y-2">
                  <li>Contact our customer service team at returns@sadak.com to check availability</li>
                  <li>Return the original item following our return process</li>
                  <li>Once we receive the returned item, we will ship the new item to you</li>
                </ol>
                <p className="mt-4">
                  Additional shipping charges may apply for exchanges.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="font-serif text-2xl text-temple-brown-deep mb-4">Spiritual Considerations</h2>
              <div className="space-y-4 text-temple-brown-medium">
                <div className="bg-temple-gold-pale/30 rounded-lg p-4 border border-temple-gold/20">
                  <p className="font-medium text-temple-brown-deep mb-2">Important Note:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>We handle all returns with utmost respect for the sacred nature of our jewelry</li>
                    <li>Returned items are purified before being offered again</li>
                    <li>We encourage you to reflect on your spiritual journey before initiating a return</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <div className="flex items-center space-x-3 mb-4">
                <AlertCircle className="h-6 w-6 text-temple-gold" />
                <h2 className="font-serif text-2xl text-temple-brown-deep">Final Sale Items</h2>
              </div>
              <div className="space-y-4 text-temple-brown-medium">
                <p>
                  Items marked as "Final Sale" are not eligible for return or exchange. Please review your order carefully 
                  before completing your purchase.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="font-serif text-2xl text-temple-brown-deep mb-4">Contact Our Returns Team</h2>
              <div className="space-y-4 text-temple-brown-medium">
                <p>
                  Our dedicated returns team is here to assist you with any questions or concerns:
                </p>
                <div className="bg-temple-gold-pale/30 rounded-lg p-4">
                  <p><strong>Email:</strong> returns@sadak.com</p>
                  <p><strong>Phone:</strong> +91 98765 43210</p>
                  <p><strong>Address:</strong> Near Ganga Ghat, Haridwar, Uttarakhand 249401, India</p>
                  <p><strong>Business Hours:</strong> 9 AM to 9 PM (IST), Daily</p>
                </div>
              </div>
            </section>

            {/* Sacred Quote */}
            <div className="text-center mt-12 p-6 bg-temple-gold-pale/20 rounded-xl border border-temple-gold/20">
              <blockquote className="font-serif text-xl text-temple-brown-deep italic mb-3">
                "पवित्रता और संतुष्टि - हमारी वापसी नीति का सार।"
              </blockquote>
              <p className="text-sm text-temple-brown-light">
                Purity and satisfaction - The essence of our return policy
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReturnPolicy;
