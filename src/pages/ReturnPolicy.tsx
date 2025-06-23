import { ArrowLeft, Package, Clock, CheckCircle, AlertCircle } from 'lucide-react';

const ReturnPolicy = () => {
  return (
    <div className="min-h-screen bg-temple-ivory pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back Button */}
        <button className="mb-8 flex items-center space-x-2 text-temple-brown-deep hover:text-temple-saffron transition-colors duration-200">
          <ArrowLeft className="h-5 w-5" />
          <span>Back to Store</span>
        </button>

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-serif text-4xl text-temple-brown-deep mb-4">Return & Refund Policy</h1>
          <p className="text-temple-brown-medium">Our commitment to your satisfaction.</p>
        </div>

        {/* Policy Details */}
        <div className="space-y-6">
          {/* Returns Eligibility */}
          <div className="bg-white rounded-2xl shadow-temple p-6">
            <div className="flex items-center space-x-4 mb-4">
              <Package className="h-8 w-8 text-temple-saffron" />
              <h2 className="font-medium text-xl text-temple-brown-deep">Returns Eligibility</h2>
            </div>
            <p className="text-temple-brown-medium">
              We accept returns within 7 days of delivery. To be eligible for a return, your item must be unused and in the same condition that you received it. It must also be in the original packaging.
            </p>
          </div>

          {/* Returns Process */}
          <div className="bg-white rounded-2xl shadow-temple p-6">
            <div className="flex items-center space-x-4 mb-4">
              <Clock className="h-8 w-8 text-temple-saffron" />
              <h2 className="font-medium text-xl text-temple-brown-deep">Returns Process</h2>
            </div>
            <ol className="list-decimal pl-5 space-y-2 text-temple-brown-medium">
              <li>Contact us at <a href="mailto:support@sacredjewels.com" className="text-temple-saffron hover:underline">support@sacredjewels.com</a> to initiate a return.</li>
              <li>Pack the item securely in its original packaging.</li>
              <li>Ship the item back to us at the address we provide.</li>
            </ol>
          </div>

          {/* Refunds */}
          <div className="bg-white rounded-2xl shadow-temple p-6">
            <div className="flex items-center space-x-4 mb-4">
              <CheckCircle className="h-8 w-8 text-temple-saffron" />
              <h2 className="font-medium text-xl text-temple-brown-deep">Refunds</h2>
            </div>
            <p className="text-temple-brown-medium">
              Once your return is received and inspected, we will send you an email to notify you that we have received your returned item. We will also notify you of the approval or rejection of your refund.
            </p>
            <p className="text-temple-brown-medium">
              If you are approved, then your refund will be processed, and a credit will automatically be applied to your credit card or original method of payment, within a certain amount of days.
            </p>
          </div>

          {/* Non-refundable items */}
          <div className="bg-white rounded-2xl shadow-temple p-6">
            <div className="flex items-center space-x-4 mb-4">
              <AlertCircle className="h-8 w-8 text-temple-saffron" />
              <h2 className="font-medium text-xl text-temple-brown-deep">Non-refundable items</h2>
            </div>
            <ul className="list-disc pl-5 space-y-2 text-temple-brown-medium">
              <li>Gift cards</li>
              <li>Downloadable software products</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReturnPolicy;
