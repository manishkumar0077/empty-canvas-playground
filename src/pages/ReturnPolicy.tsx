import React from 'react';
import { RotateCcw, Shield, Clock, CheckCircle, AlertTriangle, Heart } from 'lucide-react';

const ReturnPolicy = () => {
  return (
    <div className="min-h-screen bg-temple-ivory pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <RotateCcw className="h-16 w-16 text-temple-gold mx-auto mb-6" />
          <h1 className="font-serif text-4xl text-temple-brown-deep mb-4">Return Policy</h1>
          <p className="text-temple-brown-medium">
            Your satisfaction is our sacred commitment. Easy returns with understanding.
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
            <section className="mb-8">
              <div className="flex items-center space-x-3 mb-4">
                <Heart className="h-6 w-6 text-temple-gold" />
                <h2 className="font-serif text-2xl text-temple-brown-deep">Our Return Philosophy</h2>
              </div>
              <div className="space-y-4 text-temple-brown-medium">
                <p>
                  At Sadak, we believe that sacred jewelry should resonate with your soul. If for any reason 
                  your purchase doesn't bring you the joy and spiritual connection you expected, we're here 
                  to make it right with compassion and understanding.
                </p>
                <div className="bg-temple-gold-pale/30 rounded-lg p-4 border border-temple-gold/20">
                  <blockquote className="font-serif text-lg text-temple-brown-deep italic text-center">
                    "आत्मा की शांति ही हमारा लक्ष्य है।"
                  </blockquote>
                  <p className="text-center text-sm text-temple-brown-light mt-2">
                    Peace of soul is our goal
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <div className="flex items-center space-x-3 mb-4">
                <Clock className="h-6 w-6 text-temple-gold" />
                <h2 className="font-serif text-2xl text-temple-brown-deep">Return Timeframe</h2>
              </div>
              <div className="space-y-4 text-temple-brown-medium">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-temple-gold-pale/20 rounded-lg p-4">
                    <h3 className="font-medium text-temple-brown-deep mb-3 flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                      Standard Returns
                    </h3>
                    <ul className="space-y-2 text-sm">
                      <li><strong>Timeframe:</strong> 7 days from delivery</li>
                      <li><strong>Condition:</strong> Unworn, original packaging</li>
                      <li><strong>Refund:</strong> Full refund to original payment method</li>
                      <li><strong>Processing:</strong> 3-5 business days after receipt</li>
                    </ul>
                  </div>
                  
                  <div className="bg-temple-gold-pale/20 rounded-lg p-4">
                    <h3 className="font-medium text-temple-brown-deep mb-3 flex items-center">
                      <AlertTriangle className="h-5 w-5 text-temple-saffron mr-2" />
                      Extended Returns
                    </h3>
                    <ul className="space-y-2 text-sm">
                      <li><strong>Festival Purchases:</strong> 15 days return window</li>
                      <li><strong>Gift Items:</strong> 30 days with gift receipt</li>
                      <li><strong>Defective Items:</strong> 90 days warranty coverage</li>
                      <li><strong>Custom Orders:</strong> Case-by-case evaluation</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="font-serif text-2xl text-temple-brown-deep mb-4">What Can Be Returned</h2>
              <div className="space-y-4 text-temple-brown-medium">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-medium text-temple-brown-deep mb-3 text-green-600">✓ Returnable Items</h3>
                    <ul className="list-disc pl-6 space-y-2 text-sm">
                      <li>Unworn jewelry in original condition</li>
                      <li>Items with all original tags and packaging</li>
                      <li>Standard catalog items</li>
                      <li>Defective or damaged products</li>
                      <li>Wrong items shipped by mistake</li>
                      <li>Items significantly different from description</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="font-medium text-temple-brown-deep mb-3 text-red-600">✗ Non-Returnable Items</h3>
                    <ul className="list-disc pl-6 space-y-2 text-sm">
                      <li>Personalized or custom-made jewelry</li>
                      <li>Items worn or showing signs of use</li>
                      <li>Blessed items (unless defective)</li>
                      <li>Pierced earrings (hygiene reasons)</li>
                      <li>Items without original packaging</li>
                      <li>Sale items marked "Final Sale"</li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-temple-sandalwood/20 rounded-lg p-4 mt-6">
                  <h4 className="font-medium text-temple-brown-deep mb-2">Special Note on Blessed Items:</h4>
                  <p className="text-sm">
                    Items that have undergone our sacred blessing rituals carry spiritual energy and cannot 
                    be returned unless they are defective. We believe once blessed, the jewelry has begun 
                    its spiritual journey with you. However, if you're not satisfied, please contact us 
                    to discuss alternative solutions.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="font-serif text-2xl text-temple-brown-deep mb-4">How to Return</h2>
              <div className="space-y-6 text-temple-brown-medium">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="text-center p-4 bg-temple-gold-pale/20 rounded-lg">
                    <div className="text-2xl mb-2">📞</div>
                    <h4 className="font-medium text-temple-brown-deep mb-2">Step 1: Contact</h4>
                    <p className="text-sm">Call or email our support team</p>
                  </div>
                  
                  <div className="text-center p-4 bg-temple-gold-pale/20 rounded-lg">
                    <div className="text-2xl mb-2">📋</div>
                    <h4 className="font-medium text-temple-brown-deep mb-2">Step 2: Approval</h4>
                    <p className="text-sm">Receive return authorization</p>
                  </div>
                  
                  <div className="text-center p-4 bg-temple-gold-pale/20 rounded-lg">
                    <div className="text-2xl mb-2">📦</div>
                    <h4 className="font-medium text-temple-brown-deep mb-2">Step 3: Package</h4>
                    <p className="text-sm">Pack item securely with form</p>
                  </div>
                  
                  <div className="text-center p-4 bg-temple-gold-pale/20 rounded-lg">
                    <div className="text-2xl mb-2">🚚</div>
                    <h4 className="font-medium text-temple-brown-deep mb-2">Step 4: Ship</h4>
                    <p className="text-sm">Send using provided label</p>
                  </div>
                </div>
                
                <div className="bg-temple-gold-pale/30 rounded-lg p-4">
                  <h4 className="font-medium text-temple-brown-deep mb-3">Required Information for Return:</h4>
                  <ul className="list-disc pl-6 space-y-1 text-sm">
                    <li>Order number and purchase date</li>
                    <li>Item name and SKU</li>
                    <li>Reason for return</li>
                    <li>Preferred resolution (refund/exchange)</li>
                    <li>Photos if item is defective</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <div className="flex items-center space-x-3 mb-4">
                <Shield className="h-6 w-6 text-temple-gold" />
                <h2 className="font-serif text-2xl text-temple-brown-deep">Refund Process</h2>
              </div>
              <div className="space-y-4 text-temple-brown-medium">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-temple-gold-pale/20 rounded-lg p-4">
                    <h4 className="font-medium text-temple-brown-deep mb-2">Inspection</h4>
                    <p className="text-sm">Items are carefully inspected upon receipt to ensure they meet return conditions.</p>
                  </div>
                  
                  <div className="bg-temple-gold-pale/20 rounded-lg p-4">
                    <h4 className="font-medium text-temple-brown-deep mb-2">Processing</h4>
                    <p className="text-sm">Approved returns are processed within 3-5 business days of receipt.</p>
                  </div>
                  
                  <div className="bg-temple-gold-pale/20 rounded-lg p-4">
                    <h4 className="font-medium text-temple-brown-deep mb-2">Refund</h4>
                    <p className="text-sm">Refunds are issued to the original payment method within 5-10 business days.</p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <h4 className="font-medium text-temple-brown-deep">Refund Methods:</h4>
                  <ul className="list-disc pl-6 space-y-2 text-sm">
                    <li><strong>Credit/Debit Cards:</strong> 5-10 business days</li>
                    <li><strong>UPI/Digital Wallets:</strong> 3-5 business days</li>
                    <li><strong>Cash on Delivery:</strong> Bank transfer within 7 days</li>
                    <li><strong>Store Credit:</strong> Immediate (if requested)</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="font-serif text-2xl text-temple-brown-deep mb-4">Exchange Policy</h2>
              <div className="space-y-4 text-temple-brown-medium">
                <p>
                  We offer exchanges for size adjustments and style preferences:
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-temple-brown-deep mb-3">Size Exchanges:</h4>
                    <ul className="list-disc pl-6 space-y-2 text-sm">
                      <li>Free size adjustments for rings and bracelets</li>
                      <li>Professional resizing by our craftsmen</li>
                      <li>Turnaround time: 3-5 business days</li>
                      <li>One free resize per item</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-temple-brown-deep mb-3">Style Exchanges:</h4>
                    <ul className="list-disc pl-6 space-y-2 text-sm">
                      <li>Exchange for different style of equal value</li>
                      <li>Pay difference for higher-value items</li>
                      <li>Receive credit for lower-value exchanges</li>
                      <li>Same return conditions apply</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="font-serif text-2xl text-temple-brown-deep mb-4">Defective Items & Warranty</h2>
              <div className="space-y-4 text-temple-brown-medium">
                <p>
                  We stand behind the quality of our sacred jewelry:
                </p>
                
                <div className="bg-temple-gold-pale/30 rounded-lg p-4">
                  <h4 className="font-medium text-temple-brown-deep mb-3">Warranty Coverage:</h4>
                  <ul className="list-disc pl-6 space-y-2 text-sm">
                    <li><strong>Manufacturing Defects:</strong> 90 days full coverage</li>
                    <li><strong>Stone Setting Issues:</strong> 60 days repair/replace</li>
                    <li><strong>Plating/Finish Problems:</strong> 30 days coverage</li>
                    <li><strong>Chain/Clasp Defects:</strong> 90 days replacement</li>
                  </ul>
                </div>
                
                <div className="space-y-3">
                  <h4 className="font-medium text-temple-brown-deep">Not Covered by Warranty:</h4>
                  <ul className="list-disc pl-6 space-y-2 text-sm">
                    <li>Normal wear and tear</li>
                    <li>Damage from misuse or accidents</li>
                    <li>Exposure to chemicals or extreme conditions</li>
                    <li>Modifications by third parties</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="font-serif text-2xl text-temple-brown-deep mb-4">Return Shipping</h2>
              <div className="space-y-4 text-temple-brown-medium">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-temple-brown-deep mb-3">Free Return Shipping:</h4>
                    <ul className="list-disc pl-6 space-y-2 text-sm">
                      <li>Defective or wrong items</li>
                      <li>Our shipping error</li>
                      <li>Quality issues</li>
                      <li>Orders above ₹5000</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-temple-brown-deep mb-3">Customer Pays Shipping:</h4>
                    <ul className="list-disc pl-6 space-y-2 text-sm">
                      <li>Change of mind returns</li>
                      <li>Size/style exchanges</li>
                      <li>Orders below ₹5000</li>
                      <li>International returns</li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-temple-sandalwood/20 rounded-lg p-4">
                  <h4 className="font-medium text-temple-brown-deep mb-2">Important Shipping Notes:</h4>
                  <ul className="list-disc pl-6 space-y-1 text-sm">
                    <li>Use original packaging when possible</li>
                    <li>Include all accessories and documentation</li>
                    <li>Get tracking and insurance for valuable items</li>
                    <li>We're not responsible for items lost in return shipping</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="font-serif text-2xl text-temple-brown-deep mb-4">Special Circumstances</h2>
              <div className="space-y-4 text-temple-brown-medium">
                <div className="space-y-4">
                  <div className="bg-temple-gold-pale/20 rounded-lg p-4">
                    <h4 className="font-medium text-temple-brown-deep mb-2">Gift Returns:</h4>
                    <p className="text-sm">
                      Gift recipients can return items with gift receipt for store credit or exchange. 
                      Original purchaser will be notified of the return for refund processing.
                    </p>
                  </div>
                  
                  <div className="bg-temple-gold-pale/20 rounded-lg p-4">
                    <h4 className="font-medium text-temple-brown-deep mb-2">International Returns:</h4>
                    <p className="text-sm">
                      International customers must contact us before returning items. Return shipping 
                      costs and customs duties are customer's responsibility.
                    </p>
                  </div>
                  
                  <div className="bg-temple-gold-pale/20 rounded-lg p-4">
                    <h4 className="font-medium text-temple-brown-deep mb-2">Bulk/Wholesale Returns:</h4>
                    <p className="text-sm">
                      Special return terms apply for bulk orders. Please refer to your wholesale 
                      agreement or contact our business team for details.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="font-serif text-2xl text-temple-brown-deep mb-4">Contact Our Returns Team</h2>
              <div className="space-y-4 text-temple-brown-medium">
                <p>
                  Our compassionate returns team is here to help make the process smooth:
                </p>
                <div className="bg-temple-gold-pale/30 rounded-lg p-4">
                  <p><strong>Email:</strong> returns@sadak.com</p>
                  <p><strong>Phone:</strong> +91 98765 43210</p>
                  <p><strong>WhatsApp:</strong> +91 98765 43210</p>
                  <p><strong>Hours:</strong> 9 AM to 9 PM (IST), Daily</p>
                  <p><strong>Return Address:</strong> Will be provided with return authorization</p>
                </div>
              </div>
            </section>

            {/* Sacred Quote */}
            <div className="text-center mt-12 p-6 bg-temple-gold-pale/20 rounded-xl border border-temple-gold/20">
              <blockquote className="font-serif text-xl text-temple-brown-deep italic mb-3">
                "संतुष्टि ही सच्ची संपत्ति है।"
              </blockquote>
              <p className="text-sm text-temple-brown-light">
                Satisfaction is the true wealth - Your happiness is our success
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReturnPolicy;