import React, { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';

const FloatingChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 bg-temple-kumkum hover:bg-temple-kumkum/90 text-white rounded-full p-4 shadow-lg animate-diya-glow transition-all duration-300 z-50"
      >
        {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-80 bg-white rounded-lg shadow-2xl border border-temple-gold/20 z-50">
          {/* Header */}
          <div className="bg-temple-gold text-white p-4 rounded-t-lg">
            <h3 className="font-medium">Ask Our Sacred Guide</h3>
            <p className="text-xs opacity-90 mt-1">For spiritual guidance & product help</p>
          </div>

          {/* Chat Content */}
          <div className="p-4 h-64 overflow-y-auto">
            <div className="mb-4">
              <div className="bg-temple-ivory p-3 rounded-lg text-sm">
                <p className="text-temple-brown-deep">
                  Namaste! How can we help you today? Are you looking for jewelry for a specific deity or occasion?
                </p>
              </div>
            </div>
          </div>

          {/* Input */}
          <div className="p-4 border-t border-temple-gold/20">
            <div className="flex space-x-2">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 border border-temple-sandalwood rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-temple-gold"
              />
              <button className="bg-temple-kumkum text-white p-2 rounded-lg hover:bg-temple-kumkum/90 transition-colors">
                <Send className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FloatingChat;