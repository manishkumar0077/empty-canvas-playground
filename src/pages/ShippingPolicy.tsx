
import { Truck, Package, Clock, MapPin, Shield, Star } from 'lucide-react';

const ShippingPolicy = () => {
  return (
    <div className="min-h-screen bg-temple-ivory pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <Truck className="h-16 w-16 text-temple-gold mx-auto mb-6" />
          <h1 className="font-serif text-4xl text-temple-brown-deep mb-4">Shipping Policy</h1>
          <p className="text-temple-brown-medium">
            Sacred delivery of your blessed jewelry with love and care
          </p>
          <div className="flex items-center justify-center space-x-2 mt-4">
            <div className="h-px bg-gradient-to-r from-transparent via-temple-gold to-transparent w-16"></div>
            <span className="text-temple-gold">📦</span>
            <div className="h-px bg-gradient-to-r from-transparent via-temple-gold to-transparent w-16"></div>
          </div>
        </div>

        {/* Content */}
        <div className="bg-white rounded-2xl shadow-temple p-8 border border-temple-gold/20">
          <div className="prose max-w-none">
            <section className="mb-8">
              <div className="flex items-center space-x-3 mb-4">
                <Package className="h-6 w-6 text-temple-gold" />
                <h2 className="font-serif text-2xl text-temple-brown-deep">Shipping Overview</h2>
              </div>
              <div className="space-y-4 text-temple-brown-medium">
                <p>
                  At Sadak, we understand that your sacred jewelry is more than just an accessory - 
                  it's a spiritual companion. That's why we take extra care in packaging and shipping 
                  your blessed items with the reverence they deserve.
                </p>
                <div className="bg-temple-gold-pale/30 rounded-lg p-4 border border-temple-gold/20">
                  <p className="font-medium text-temple-brown-deep mb-2">Our Sacred Promise:</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Every item is blessed before shipping</li>
                    <li>Eco-friendly packaging with sacred symbols</li>
                    <li>Careful handling to preserve spiritual energy</li>
                    <li>Tracking provided for peace of mind</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <div className="flex items-center space-x-3 mb-4">
                <MapPin className="h-6 w-6 text-temple-gold" />
                <h2 className="font-serif text-2xl text-temple-brown-deep">Shipping Zones</h2>
              </div>
              <div className="space-y-6 text-temple-brown-medium">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-temple-gold-pale/20 rounded-lg p-4">
                    <h3 className="font-medium text-temple-brown-deep mb-3 flex items-center">
                      <span className="mr-2">🇮🇳</span> Domestic Shipping (India)
                    </h3>
                    <ul className="space-y-2 text-sm">
                      <li><strong>Coverage:</strong> All states and union territories</li>
                      <li><strong>Delivery Time:</strong> 3-7 business days</li>
                      <li><strong>Free Shipping:</strong> Orders above ₹1999</li>
                      <li><strong>Standard Shipping:</strong> ₹149 for orders below ₹1999</li>
                    </ul>
                  </div>
                  
                  <div className="bg-temple-gold-pale/20 rounded-lg p-4">
                    <h3 className="font-medium text-temple-brown-deep mb-3 flex items-center">
                      <span className="mr-2">🌍</span> International Shipping
                    </h3>
                    <ul className="space-y-2 text-sm">
                      <li><strong>Coverage:</strong> Selected countries</li>
                      <li><strong>Delivery Time:</strong> 7-21 business days</li>
                      <li><strong>Shipping Cost:</strong> Calculated at checkout</li>
                      <li><strong>Customs:</strong> Customer responsibility</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <div className="flex items-center space-x-3 mb-4">
                <Clock className="h-6 w-6 text-temple-gold" />
                <h2 className="font-serif text-2xl text-temple-brown-deep">Processing Time</h2>
              </div>
              <div className="space-y-4 text-temple-brown-medium">
                <p>
                  Our sacred process ensures your jewelry is properly blessed before shipping:
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-temple-gold-pale/20 rounded-lg">
                    <div className="text-2xl mb-2">🎨</div>
                    <h4 className="font-medium text-temple-brown-deep mb-2">Crafting</h4>
                    <p className="text-sm">1-2 days for handcrafted items</p>
                  </div>
                  
                  <div className="text-center p-4 bg-temple-gold-pale/20 rounded-lg">
                    <div className="text-2xl mb-2">🕉️</div>
                    <h4 className="font-medium text-temple-brown-deep mb-2">Blessing</h4>
                    <p className="text-sm">1 day for sacred rituals</p>
                  </div>
                  
                  <div className="text-center p-4 bg-temple-gold-pale/20 rounded-lg">
                    <div className="text-2xl mb-2">📦</div>
                    <h4 className="font-medium text-temple-brown-deep mb-2">Packaging</h4>
                    <p className="text-sm">Same day with love</p>
                  </div>
                </div>
                
                <div className="bg-temple-sandalwood/20 rounded-lg p-4">
                  <h4 className="font-medium text-temple-brown-deep mb-2">Special Processing Times:</h4>
                  <ul className="list-disc pl-6 space-y-1 text-sm">
                    <li><strong>Ready-to-ship items:</strong> 1-2 business days</li>
                    <li><strong>Custom blessing requests:</strong> 2-3 business days</li>
                    <li><strong>Personalized items:</strong> 3-5 business days</li>
                    <li><strong>Festival seasons:</strong> Additional 1-2 days</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <div className="flex items-center space-x-3 mb-4">
                <Shield className="h-6 w-6 text-temple-gold" />
                <h2 className="font-serif text-2xl text-temple-brown-deep">Sacred Packaging</h2>
              </div>
              <div className="space-y-4 text-temple-brown-medium">
                <p>
                  Your jewelry arrives in packaging that honors its sacred nature:
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-temple-brown-deep mb-3">Standard Packaging Includes:</h4>
                    <ul className="list-disc pl-6 space-y-2 text-sm">
                      <li>Eco-friendly kraft boxes with sacred symbols</li>
                      <li>Soft cotton padding for protection</li>
                      <li>Kumkum packet for your personal blessing</li>
                      <li>Care instructions card</li>
                      <li>Certificate of authenticity</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-temple-brown-deep mb-3">Premium Gift Packaging:</h4>
                    <ul className="list-disc pl-6 space-y-2 text-sm">
                      <li>Handcrafted wooden box with Sanskrit verses</li>
                      <li>Silk-lined interior with golden accents</li>
                      <li>Sacred red thread (kalava) included</li>
                      <li>Personalized blessing card</li>
                      <li>Premium gift wrapping available</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="font-serif text-2xl text-temple-brown-deep mb-4">Shipping Partners</h2>
              <div className="space-y-4 text-temple-brown-medium">
                <p>
                  We work with trusted logistics partners who understand the importance of careful handling:
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="text-center p-4 border border-temple-gold/20 rounded-lg">
                    <h4 className="font-medium text-temple-brown-deep mb-2">Express Delivery</h4>
                    <p className="text-sm">FedEx, DHL for urgent orders</p>
                    <p className="text-xs text-temple-brown-light mt-1">1-3 business days</p>
                  </div>
                  
                  <div className="text-center p-4 border border-temple-gold/20 rounded-lg">
                    <h4 className="font-medium text-temple-brown-deep mb-2">Standard Delivery</h4>
                    <p className="text-sm">Blue Dart, DTDC for regular orders</p>
                    <p className="text-xs text-temple-brown-light mt-1">3-7 business days</p>
                  </div>
                  
                  <div className="text-center p-4 border border-temple-gold/20 rounded-lg">
                    <h4 className="font-medium text-temple-brown-deep mb-2">Economy Delivery</h4>
                    <p className="text-sm">India Post for remote areas</p>
                    <p className="text-xs text-temple-brown-light mt-1">5-10 business days</p>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="font-serif text-2xl text-temple-brown-deep mb-4">Tracking Your Order</h2>
              <div className="space-y-4 text-temple-brown-medium">
                <p>
                  Stay connected with your sacred journey from our workshop to your doorstep:
                </p>
                
                <div className="bg-temple-gold-pale/30 rounded-lg p-4">
                  <h4 className="font-medium text-temple-brown-deep mb-3">Order Updates:</h4>
                  <ul className="list-disc pl-6 space-y-2 text-sm">
                    <li><strong>Order Confirmed:</strong> Immediate email confirmation</li>
                    <li><strong>Blessing in Progress:</strong> Notification when rituals begin</li>
                    <li><strong>Shipped:</strong> Tracking number and carrier details</li>
                    <li><strong>Out for Delivery:</strong> Same-day delivery notification</li>
                    <li><strong>Delivered:</strong> Confirmation with delivery photo</li>
                  </ul>
                </div>
                
                <p className="text-sm">
                  You can track your order anytime by visiting our tracking page or clicking the link in your shipping email.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="font-serif text-2xl text-temple-brown-deep mb-4">Special Delivery Instructions</h2>
              <div className="space-y-4 text-temple-brown-medium">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-temple-brown-deep mb-3">Delivery Requirements:</h4>
                    <ul className="list-disc pl-6 space-y-2 text-sm">
                      <li>Someone must be available to receive the package</li>
                      <li>Valid ID required for high-value items</li>
                      <li>Signature confirmation for orders above ₹5000</li>
                      <li>Safe delivery to authorized person only</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-temple-brown-deep mb-3">Delivery Challenges:</h4>
                    <ul className="list-disc pl-6 space-y-2 text-sm">
                      <li>Remote areas may require additional time</li>
                      <li>Festival seasons may cause delays</li>
                      <li>Weather conditions may affect delivery</li>
                      <li>Incorrect address will cause return to sender</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <div className="flex items-center space-x-3 mb-4">
                <Star className="h-6 w-6 text-temple-gold" />
                <h2 className="font-serif text-2xl text-temple-brown-deep">International Shipping</h2>
              </div>
              <div className="space-y-4 text-temple-brown-medium">
                <p>
                  We're honored to share our sacred jewelry with devotees worldwide:
                </p>
                
                <div className="bg-temple-gold-pale/30 rounded-lg p-4">
                  <h4 className="font-medium text-temple-brown-deep mb-3">Available Countries:</h4>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm">
                    <div>• USA</div>
                    <div>• Canada</div>
                    <div>• UK</div>
                    <div>• Australia</div>
                    <div>• Germany</div>
                    <div>• France</div>
                    <div>• Singapore</div>
                    <div>• UAE</div>
                  </div>
                  <p className="text-xs mt-3 text-temple-brown-light">
                    Don't see your country? Contact us for special arrangements.
                  </p>
                </div>
                
                <div className="space-y-3">
                  <h4 className="font-medium text-temple-brown-deep">Important Notes:</h4>
                  <ul className="list-disc pl-6 space-y-2 text-sm">
                    <li>Customs duties and taxes are customer's responsibility</li>
                    <li>Delivery times may vary based on customs clearance</li>
                    <li>Some countries may restrict certain materials</li>
                    <li>Insurance is recommended for high-value shipments</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="font-serif text-2xl text-temple-brown-deep mb-4">Contact Our Shipping Team</h2>
              <div className="space-y-4 text-temple-brown-medium">
                <p>
                  Our dedicated shipping team is here to help with any questions:
                </p>
                <div className="bg-temple-gold-pale/30 rounded-lg p-4">
                  <p><strong>Email:</strong> shipping@sadak.com</p>
                  <p><strong>Phone:</strong> +91 98765 43210</p>
                  <p><strong>WhatsApp:</strong> +91 98765 43210</p>
                  <p><strong>Hours:</strong> 9 AM to 9 PM (IST), Daily</p>
                </div>
              </div>
            </section>

            {/* Sacred Quote */}
            <div className="text-center mt-12 p-6 bg-temple-gold-pale/20 rounded-xl border border-temple-gold/20">
              <blockquote className="font-serif text-xl text-temple-brown-deep italic mb-3">
                "यात्रा ही गंतव्य है - आपका आशीर्वाद प्रेम से आता है।"
              </blockquote>
              <p className="text-sm text-temple-brown-light">
                The journey is the destination - Your blessings come with love
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShippingPolicy;
