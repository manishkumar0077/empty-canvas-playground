import React from 'react';
import { Sparkles, Heart, Shield, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const SacredBlessings = () => {
  return (
    <div className="min-h-screen bg-temple-ivory pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-temple-sandalwood/20 to-temple-gold-light/20">
          <div className="absolute inset-0 bg-mandala-bg opacity-20"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Sparkles className="h-16 w-16 text-temple-gold mx-auto mb-6 animate-diya-pulse" />
            <h1 className="font-serif text-4xl md:text-6xl text-temple-brown-deep mb-6">
              Sacred Blessings
              <br />
              <span className="text-temple-kumkum">for Your Soul</span>
            </h1>
            <p className="text-xl text-temple-brown-deep/80 mb-8 max-w-3xl mx-auto leading-relaxed">
              Transform your jewelry into powerful spiritual tools with our ancient blessing rituals. 
              Each blessing is performed with devotion and sacred intention.
            </p>
            <blockquote className="font-serif text-2xl text-temple-saffron italic">
              "आशीर्वाद से आभूषण बनता है दिव्य शक्ति का स्रोत।"
            </blockquote>
          </div>
        </section>

        {/* Individual Blessings */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-serif text-4xl text-temple-brown-deep mb-6">
                Choose Your Sacred Blessings
              </h2>
              <p className="text-lg text-temple-brown-medium max-w-2xl mx-auto">
                Each blessing adds unique spiritual energy to your jewelry
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blessings.map((blessing, index) => {
                const Icon = blessing.icon;
                return (
                  <div
                    key={blessing.id}
                    className="bg-white rounded-2xl shadow-temple hover:shadow-temple-lg transition-all duration-300 overflow-hidden border border-temple-gold/20 group hover:-translate-y-2"
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                  >
                    <div className={`h-2 bg-gradient-to-r ${blessing.color}`}></div>
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className={`p-3 rounded-full bg-gradient-to-r ${blessing.color} text-white`}>
                          <Icon className="h-6 w-6" />
                        </div>
                        <div className="text-right">
                          <span className="text-2xl font-bold text-temple-brown-deep">₹{blessing.price}</span>
                        </div>
                      </div>
                      
                      <h3 className="font-serif text-xl text-temple-brown-deep mb-2">{blessing.name}</h3>
                      <p className="text-temple-saffron font-medium mb-4">{blessing.hindiName}</p>
                      <p className="text-temple-brown-medium mb-6 leading-relaxed">{blessing.description}</p>
                      
                      <div className="space-y-2 mb-6">
                        <h4 className="font-medium text-temple-brown-deep">Benefits:</h4>
                        <ul className="space-y-1">
                          {blessing.benefits.map((benefit, idx) => (
                            <li key={idx} className="flex items-center text-sm text-temple-brown-medium">
                              <div className="w-1.5 h-1.5 bg-temple-saffron rounded-full mr-2"></div>
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <button className={`w-full bg-gradient-to-r ${blessing.color} text-white py-3 px-4 rounded-xl font-medium transition-all duration-300 hover:shadow-lg hover:scale-105`}>
                        Add Blessing
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Blessing Packages */}
        <section className="py-20 bg-temple-cream">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-serif text-4xl text-temple-brown-deep mb-6">
                Sacred Blessing Packages
              </h2>
              <p className="text-lg text-temple-brown-medium max-w-2xl mx-auto">
                Save more with our curated blessing combinations
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {packages.map((pkg, index) => (
                <div
                  key={index}
                  className={`relative bg-white rounded-2xl shadow-temple hover:shadow-temple-lg transition-all duration-300 overflow-hidden border-2 ${
                    pkg.popular ? 'border-temple-gold' : 'border-temple-gold/20'
                  } group hover:-translate-y-2`}
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  {pkg.popular && (
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <span className="bg-temple-kumkum text-white px-4 py-1 rounded-full text-sm font-medium">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="p-8">
                    <div className="text-center mb-6">
                      <h3 className="font-serif text-2xl text-temple-brown-deep mb-2">{pkg.name}</h3>
                      <p className="text-temple-saffron font-medium mb-4">{pkg.hindiName}</p>
                      <div className="flex items-baseline justify-center space-x-2">
                        <span className="text-4xl font-bold text-temple-brown-deep">₹{pkg.price}</span>
                        <span className="text-lg text-temple-brown-light line-through">₹{pkg.originalPrice}</span>
                      </div>
                      <p className="text-sm text-temple-saffron font-medium mt-2">
                        Save ₹{pkg.originalPrice - pkg.price}
                      </p>
                    </div>
                    
                    <div className="space-y-3 mb-8">
                      <h4 className="font-medium text-temple-brown-deep">Includes:</h4>
                      {pkg.includes.map((item, idx) => (
                        <div key={idx} className="flex items-center text-temple-brown-medium">
                          <Star className="h-4 w-4 text-temple-gold mr-2" />
                          <span className="text-sm">{item}</span>
                        </div>
                      ))}
                    </div>
                    
                    <button className={`w-full py-4 px-6 rounded-xl font-medium transition-all duration-300 ${
                      pkg.popular
                        ? 'bg-gradient-to-r from-temple-saffron to-temple-gold text-white hover:shadow-gold-glow'
                        : 'border-2 border-temple-gold text-temple-brown-deep hover:bg-temple-gold hover:text-white'
                    }`}>
                      Choose Package
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-serif text-4xl text-temple-brown-deep mb-6">
                How Sacred Blessings Work
              </h2>
              <p className="text-lg text-temple-brown-medium max-w-2xl mx-auto">
                Our ancient blessing process transforms ordinary jewelry into sacred talismans
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[{
                step: '1',
                title: 'Selection',
                description: 'Choose your desired blessings based on your spiritual needs',
                icon: '🎯'
              },
              {
                step: '2',
                title: 'Preparation',
                description: 'Your jewelry is cleansed and prepared for the blessing ritual',
                icon: '🧘‍♀️'
              },
              {
                step: '3',
                title: 'Blessing Ritual',
                description: 'Sacred ceremonies are performed by experienced spiritual practitioners',
                icon: '🕉️'
              },
              {
                step: '4',
                title: 'Energized Delivery',
                description: 'Your blessed jewelry is carefully packaged and delivered with love',
                icon: '📦'
              }].map((process, index) => (
                <div key={index} className="text-center" data-aos="fade-up" data-aos-delay={index * 100}>
                  <div className="relative mb-6">
                    <div className="w-20 h-20 bg-temple-gold-light/30 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-3xl">{process.icon}</span>
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-temple-gold text-white rounded-full flex items-center justify-center text-sm font-bold">
                      {process.step}
                    </div>
                  </div>
                  <h3 className="font-medium text-temple-brown-deep mb-3 text-lg">{process.title}</h3>
                  <p className="text-temple-brown-medium text-sm leading-relaxed">{process.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-gradient-to-br from-temple-sandalwood/20 to-temple-gold-light/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-serif text-4xl text-temple-brown-deep mb-6">
                Sacred Experiences
              </h2>
              <p className="text-lg text-temple-brown-medium max-w-2xl mx-auto">
                Hear from devotees who have experienced the power of blessed jewelry
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[{
                name: 'Priya Sharma',
                location: 'Mumbai',
                text: 'The Ganga Jal blessing transformed my pendant completely. I can feel the positive energy every day.',
                rating: 5
              },
              {
                name: 'Rajesh Kumar',
                location: 'Delhi',
                text: 'After the Vedic mantra chanting, my business started flourishing. Truly divine blessings!',
                rating: 5
              },
              {
                name: 'Anita Patel',
                location: 'Ahmedabad',
                text: 'The temple blessing package brought peace and harmony to my family. Highly recommended!',
                rating: 5
              }].map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-temple border border-temple-gold/20"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-temple-saffron fill-current" />
                    ))}
                  </div>
                  <p className="text-temple-brown-medium italic mb-4 leading-relaxed">
                    "{testimonial.text}"
                  </p>
                  <div>
                    <p className="font-medium text-temple-brown-deep">{testimonial.name}</p>
                    <p className="text-sm text-temple-brown-light">{testimonial.location}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-temple-brown-deep text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Sparkles className="h-16 w-16 text-temple-gold mx-auto mb-8 animate-diya-pulse" />
            <h2 className="font-serif text-4xl mb-6">
              Ready to Bless Your Jewelry?
            </h2>
            <p className="text-xl text-temple-ivory/80 mb-8 leading-relaxed">
              Transform your jewelry into a source of divine energy and spiritual protection
            </p>
            <blockquote className="font-serif text-2xl text-temple-gold italic mb-8">
              "धातु + मंत्र + आशीर्वाद = दिव्य शक्ति"
            </blockquote>
            <button className="bg-gradient-to-r from-temple-saffron to-temple-gold hover:from-temple-gold hover:to-temple-saffron text-white py-4 px-8 rounded-full font-medium text-lg transition-all duration-300 hover:shadow-gold-glow hover:scale-105">
              Start Your Blessing Journey
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default SacredBlessings;
