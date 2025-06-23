import { Heart, Users, Shield, Sparkles } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Heart,
      title: 'प्रेम से निर्मित',
      description: 'हर आभूषण प्रेम और श्रद्धा के साथ हस्तनिर्मित है'
    },
    {
      icon: Shield,
      title: 'पवित्रता की गारंटी',
      description: 'हम कभी भी कोई अपवित्र वस्तु नहीं बेचते'
    },
    {
      icon: Sparkles,
      title: 'आध्यात्मिक ऊर्जा',
      description: 'हर टुकड़ा वैदिक मंत्रों से ऊर्जावान'
    },
    {
      icon: Users,
      title: 'समुदाय सेवा',
      description: 'स्थानीय कारीगरों का समर्थन और सशक्तिकरण'
    }
  ];

  const stats = [
    { number: '50,000+', label: 'संतुष्ट भक्त' },
    { number: '500+', label: 'अनूठे डिज़ाइन' },
    { number: '15+', label: 'राज्यों में सेवा' },
    { number: '99%', label: 'ग्राहक संतुष्टि' }
  ];

  return (
    <div className="min-h-screen bg-temple-ivory">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-temple-sandalwood/20 to-temple-gold-light/20 bg-temple-pattern">
        <div className="absolute inset-0 bg-mandala-subtle opacity-20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in-up">
            <Sparkles className="h-16 w-16 text-temple-gold mx-auto mb-6 animate-float" />
            <h1 className="font-serif text-4xl md:text-6xl text-temple-brown-deep mb-6">
              सिर्फ आभूषण नहीं।
              <br />
              <span className="text-temple-kumkum">जीवित प्रार्थना।</span>
            </h1>
            <p className="text-xl text-temple-brown-deep/80 mb-8 max-w-3xl mx-auto leading-relaxed">
              हम धातु और मंत्र को मिलाकर ऐसे आभूषण बनाते हैं जो न केवल आपकी सुंदरता बढ़ाते हैं, 
              बल्कि आपकी आध्यात्मिक यात्रा का भी साथ देते हैं।
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl text-temple-brown-deep mb-6">
                हमारी यात्रा
              </h2>
              <div className="space-y-6 text-temple-brown-deep/80 leading-relaxed">
                <p>
                  सड़क की शुरुआत हरिद्वार की पवित्र भूमि से हुई, जहाँ गंगा माता अपनी कृपा बरसाती हैं। 
                  हमारे संस्थापक, एक आध्यात्मिक खोजी और पारंपरिक शिल्पकार, ने महसूस किया कि 
                  आजकल के आभूषणों में वह आध्यात्मिक शक्ति नहीं है जो हमारे पूर्वजों के पास थी।
                </p>
                <p>
                  तब से हमने अपना मिशन बनाया - ऐसे आभूषण बनाना जो सिर्फ सुंदर नहीं बल्कि शक्तिशाली भी हों। 
                  हर टुकड़ा हमारे कुशल कारीगरों द्वारा प्रेम से बनाया जाता है और फिर पवित्र अनुष्ठानों से गुजरता है।
                </p>
                <p>
                  आज, हज़ारों भक्त हमारे आभूषणों को पहनकर अपने जीवन में सकारात्मक बदलाव महसूस कर रहे हैं। 
                  यही हमारी सफलता की सच्ची पहचान है।
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3714743/pexels-photo-3714743.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="हमारी कार्यशाला"
                className="rounded-xl shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-temple-brown-deep/20 to-transparent rounded-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-temple-gold-light/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl text-temple-brown-deep mb-4">
              हमारे मूल्य
            </h2>
            <p className="text-temple-brown-deep/70 max-w-2xl mx-auto">
              ये सिद्धांत हमारे हर काम में दिखाई देते हैं
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-temple-gold/20 text-center group hover:shadow-lg transition-shadow duration-300">
                <div className="bg-temple-gold-light/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-temple-gold-light/50 transition-colors duration-300">
                  <value.icon className="h-8 w-8 text-temple-gold" />
                </div>
                <h3 className="font-medium text-temple-brown-deep mb-3 text-lg">{value.title}</h3>
                <p className="text-temple-brown-deep/70 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 bg-temple-brown-deep text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl mb-4">
              हमारी उपलब्धियां
            </h2>
            <p className="text-temple-ivory/70 max-w-2xl mx-auto">
              आंकड़े हमारी प्रतिबद्धता की कहानी कहते हैं
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-temple-gold mb-2">
                  {stat.number}
                </div>
                <div className="text-temple-ivory/80 text-sm md:text-base">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl text-temple-brown-deep mb-4">
              हमारी पवित्र प्रक्रिया
            </h2>
            <p className="text-temple-brown-deep/70 max-w-2xl mx-auto">
              हर आभूषण के पीछे एक पवित्र यात्रा है
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: '1',
                title: 'शिल्प और डिज़ाइन',
                description: 'कुशल कारीगरों द्वारा पारंपरिक तकनीकों से निर्माण',
                icon: '🎨'
              },
              {
                step: '2',
                title: 'पवित्रीकरण अनुष्ठान',
                description: 'गंगाजल, वैदिक मंत्र और पूर्णिमा की शक्ति से ऊर्जावान',
                icon: '🔱'
              },
              {
                step: '3',
                title: 'आशीर्वाद के साथ प्रेषण',
                description: 'प्रेम और प्रार्थना के साथ आपके घर तक पहुंचाना',
                icon: '📦'
              }
            ].map((process, index) => (
              <div key={index} className="relative">
                <div className="bg-temple-gold-light/20 rounded-xl p-8 text-center h-full">
                  <div className="text-4xl mb-4">{process.icon}</div>
                  <div className="bg-temple-gold text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mx-auto mb-4">
                    {process.step}
                  </div>
                  <h3 className="font-medium text-temple-brown-deep mb-3 text-lg">{process.title}</h3>
                  <p className="text-temple-brown-deep/70 text-sm leading-relaxed">{process.description}</p>
                </div>
                {index < 2 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <div className="w-8 h-0.5 bg-temple-gold"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Message */}
      <section className="py-16 bg-gradient-to-br from-temple-sandalwood/20 to-temple-gold-light/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl text-temple-brown-deep mb-6">
              क्यों सड़क?
            </h2>
            <div className="space-y-4 text-lg text-temple-brown-deep/80 leading-relaxed mb-8">
              <p>
                सड़क का अर्थ है - पथ। हर आभूषण आपको अंतर्मुखी करने का पथ है।
              </p>
              <p>
                हम सिर्फ आभूषण नहीं बेचते, हम आपकी आध्यात्मिक यात्रा के साथी बनते हैं।
              </p>
            </div>
            <blockquote className="font-serif text-2xl md:text-3xl text-temple-kumkum italic mb-8">
              "आपका आभूषण आपकी अंतरात्मा की रोशनी को दर्शाए।"
            </blockquote>
            <div className="flex items-center justify-center space-x-2 text-temple-gold">
              <span className="text-2xl">🕉️</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
