export interface Product {
  id: number;
  name: string;
  hindiName: string;
  price: number;
  originalPrice: number;
  image: string;
  images: string[];
  blessing: string;
  rating: number;
  reviews: number;
  deity: string;
  stone: string;
  category: string;
  inStock: boolean;
  isNew: boolean;
  description: string;
  hindiDescription: string;
  specifications: {
    metal: string;
    stone: string;
    size: string;
    weight: string;
    chain?: string;
  };
  blessings: Array<{
    id: string;
    name: string;
    hindiName: string;
    price: number;
    description: string;
    hindiDescription: string;
  }>;
}

export const products: Product[] = [
  // Lakshmi Collection
  {
    id: 1,
    name: 'Lakshmi Citrine Pendant',
    hindiName: 'लक्ष्मी सिट्रिन लटकन',
    price: 1999,
    originalPrice: 2499,
    image: 'https://images.pexels.com/photos/5378700/pexels-photo-5378700.jpeg?auto=compress&cs=tinysrgb&w=500',
    images: [
      'https://images.pexels.com/photos/5378700/pexels-photo-5378700.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/1191531/pexels-photo-1191531.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/8112458/pexels-photo-8112458.jpeg?auto=compress&cs=tinysrgb&w=600',
    ],
    blessing: 'Ganga Jal Blessed',
    rating: 4.8,
    reviews: 124,
    deity: 'Lakshmi',
    stone: 'Citrine',
    category: 'Pendant',
    inStock: true,
    isNew: true,
    description: 'This premium citrine pendant is blessed with Goddess Lakshmi\'s grace. Purified on Friday under the waxing moon, it\'s specially crafted to attract wealth and prosperity.',
    hindiDescription: 'यह प्रीमियम सिट्रिन लटकन देवी लक्ष्मी की कृपा से आशीर्वादित है। शुक्रवार को बढ़ते चांद के नीचे पवित्र किया गया, यह धन और समृद्धि आकर्षित करने के लिए विशेष रूप से तैयार किया गया है।',
    specifications: {
      metal: 'Silver (92.5%)',
      stone: 'Natural Citrine',
      size: '2.5cm x 1.8cm',
      weight: '15g',
      chain: 'Silver Chain (18 inch)'
    },
    blessings: [
      { 
        id: 'ganga', 
        name: 'Ganga Jal Purification', 
        hindiName: 'गंगाजल पवित्रीकरण',
        price: 99, 
        description: 'Purified with sacred Ganga water',
        hindiDescription: 'पवित्र गंगाजल से शुद्धीकरण'
      },
      { 
        id: 'mantra', 
        name: 'Vedic Mantra Chanting', 
        hindiName: 'वैदिक मंत्र जप',
        price: 199, 
        description: 'Energized with Lakshmi mantras',
        hindiDescription: 'लक्ष्मी मंत्रों से ऊर्जावान'
      },
      { 
        id: 'kumkum', 
        name: 'Kumkum Wrapping', 
        hindiName: 'कुमकुम लपेटन',
        price: 49, 
        description: 'Wrapped with sacred kumkum',
        hindiDescription: 'पवित्र कुमकुम से लपेटा गया'
      },
      { 
        id: 'giftbox', 
        name: 'Premium Gift Box', 
        hindiName: 'प्रीमियम उपहार बॉक्स',
        price: 149, 
        description: 'Special box with Sanskrit verses',
        hindiDescription: 'संस्कृत श्लोकों के साथ विशेष बॉक्स'
      }
    ]
  },
  {
    id: 2,
    name: 'Lakshmi Pearl Necklace',
    hindiName: 'लक्ष्मी मोती हार',
    price: 3299,
    originalPrice: 3999,
    image: 'https://images.pexels.com/photos/6045104/pexels-photo-6045104.jpeg?auto=compress&cs=tinysrgb&w=500',
    images: [
      'https://images.pexels.com/photos/6045104/pexels-photo-6045104.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/5378700/pexels-photo-5378700.jpeg?auto=compress&cs=tinysrgb&w=600',
    ],
    blessing: 'Full Moon Charged',
    rating: 4.9,
    reviews: 89,
    deity: 'Lakshmi',
    stone: 'Pearl',
    category: 'Necklace',
    inStock: true,
    isNew: false,
    description: 'Elegant pearl necklace blessed for abundance and prosperity. Each pearl is carefully selected and energized.',
    hindiDescription: 'समृद्धि और धन के लिए आशीर्वादित सुंदर मोती हार। प्रत्येक मोती को सावधानीपूर्वक चुना और ऊर्जावान किया गया है।',
    specifications: {
      metal: 'Gold Plated Silver',
      stone: 'Cultured Pearls',
      size: '16 inch length',
      weight: '45g'
    },
    blessings: [
      { 
        id: 'ganga', 
        name: 'Ganga Jal Purification', 
        hindiName: 'गंगाजल पवित्रीकरण',
        price: 99, 
        description: 'Purified with sacred Ganga water',
        hindiDescription: 'पवित्र गंगाजल से शुद्धीकरण'
      },
      { 
        id: 'mantra', 
        name: 'Vedic Mantra Chanting', 
        hindiName: 'वैदिक मंत्र जप',
        price: 199, 
        description: 'Energized with Lakshmi mantras',
        hindiDescription: 'लक्ष्मी मंत्रों से ऊर्जावान'
      },
      { 
        id: 'kumkum', 
        name: 'Kumkum Wrapping', 
        hindiName: 'कुमकुम लपेटन',
        price: 49, 
        description: 'Wrapped with sacred kumkum',
        hindiDescription: 'पवित्र कुमकुम से लपेटा गया'
      },
      { 
        id: 'giftbox', 
        name: 'Premium Gift Box', 
        hindiName: 'प्रीमियम उपहार बॉक्स',
        price: 149, 
        description: 'Special box with Sanskrit verses',
        hindiDescription: 'संस्कृत श्लोकों के साथ विशेष बॉक्स'
      }
    ]
  },
  {
    id: 3,
    name: 'Lakshmi Gold Earrings',
    hindiName: 'लक्ष्मी स्वर्ण कर्णफूल',
    price: 2799,
    originalPrice: 3299,
    image: 'https://images.pexels.com/photos/1191531/pexels-photo-1191531.jpeg?auto=compress&cs=tinysrgb&w=500',
    images: [
      'https://images.pexels.com/photos/1191531/pexels-photo-1191531.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/5378700/pexels-photo-5378700.jpeg?auto=compress&cs=tinysrgb&w=600',
    ],
    blessing: 'Diwali Blessed',
    rating: 4.7,
    reviews: 156,
    deity: 'Lakshmi',
    stone: 'Gold',
    category: 'Earrings',
    inStock: true,
    isNew: true,
    description: 'Traditional gold earrings blessed during Diwali for maximum prosperity energy.',
    hindiDescription: 'दिवाली के दौरान अधिकतम समृद्धि ऊर्जा के लिए आशीर्वादित पारंपरिक स्वर्ण कर्णफूल।',
    specifications: {
      metal: '22K Gold Plated',
      stone: 'Gold',
      size: '3cm length',
      weight: '12g'
    },
    blessings: [
      { 
        id: 'ganga', 
        name: 'Ganga Jal Purification', 
        hindiName: 'गंगाजल पवित्रीकरण',
        price: 99, 
        description: 'Purified with sacred Ganga water',
        hindiDescription: 'पवित्र गंगाजल से शुद्धीकरण'
      },
      { 
        id: 'mantra', 
        name: 'Vedic Mantra Chanting', 
        hindiName: 'वैदिक मंत्र जप',
        price: 199, 
        description: 'Energized with Lakshmi mantras',
        hindiDescription: 'लक्ष्मी मंत्रों से ऊर्जावान'
      },
      { 
        id: 'kumkum', 
        name: 'Kumkum Wrapping', 
        hindiName: 'कुमकुम लपेटन',
        price: 49, 
        description: 'Wrapped with sacred kumkum',
        hindiDescription: 'पवित्र कुमकुम से लपेटा गया'
      },
      { 
        id: 'giftbox', 
        name: 'Premium Gift Box', 
        hindiName: 'प्रीमियम उपहार बॉक्स',
        price: 149, 
        description: 'Special box with Sanskrit verses',
        hindiDescription: 'संस्कृत श्लोकों के साथ विशेष बॉक्स'
      }
    ]
  },

  // Shiva Collection
  {
    id: 4,
    name: 'Shiva Rudraksha Mala',
    hindiName: 'शिव रुद्राक्ष माला',
    price: 2799,
    originalPrice: 3199,
    image: 'https://images.pexels.com/photos/8112458/pexels-photo-8112458.jpeg?auto=compress&cs=tinysrgb&w=500',
    images: [
      'https://images.pexels.com/photos/8112458/pexels-photo-8112458.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/8471811/pexels-photo-8471811.jpeg?auto=compress&cs=tinysrgb&w=600',
    ],
    blessing: 'Vedic Chant Energized',
    rating: 4.9,
    reviews: 89,
    deity: 'Shiva',
    stone: 'Rudraksha',
    category: 'Mala',
    inStock: true,
    isNew: false,
    description: 'Authentic 5-mukhi Rudraksha mala blessed with Shiva mantras for peace and meditation.',
    hindiDescription: 'शांति और ध्यान के लिए शिव मंत्रों से आशीर्वादित प्रामाणिक 5-मुखी रुद्राक्ष माला।',
    specifications: {
      metal: 'Silver Thread',
      stone: '5-Mukhi Rudraksha',
      size: '108 beads',
      weight: '35g'
    },
    blessings: [
      { 
        id: 'ganga', 
        name: 'Ganga Jal Purification', 
        hindiName: 'गंगाजल पवित्रीकरण',
        price: 99, 
        description: 'Purified with sacred Ganga water',
        hindiDescription: 'पवित्र गंगाजल से शुद्धीकरण'
      },
      { 
        id: 'mantra', 
        name: 'Vedic Mantra Chanting', 
        hindiName: 'वैदिक मंत्र जप',
        price: 199, 
        description: 'Energized with Shiva mantras',
        hindiDescription: 'शिव मंत्रों से ऊर्जावान'
      },
      { 
        id: 'kumkum', 
        name: 'Kumkum Wrapping', 
        hindiName: 'कुमकुम लपेटन',
        price: 49, 
        description: 'Wrapped with sacred kumkum',
        hindiDescription: 'पवित्र कुमकुम से लपेटा गया'
      },
      { 
        id: 'giftbox', 
        name: 'Premium Gift Box', 
        hindiName: 'प्रीमियम उपहार बॉक्स',
        price: 149, 
        description: 'Special box with Sanskrit verses',
        hindiDescription: 'संस्कृत श्लोकों के साथ विशेष बॉक्स'
      }
    ]
  },
  {
    id: 5,
    name: 'Shiva Trishul Pendant',
    hindiName: 'शिव त्रिशूल लटकन',
    price: 1899,
    originalPrice: 2299,
    image: 'https://images.pexels.com/photos/8471811/pexels-photo-8471811.jpeg?auto=compress&cs=tinysrgb&w=500',
    images: [
      'https://images.pexels.com/photos/8471811/pexels-photo-8471811.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/8112458/pexels-photo-8112458.jpeg?auto=compress&cs=tinysrgb&w=600',
    ],
    blessing: 'Mahashivratri Blessed',
    rating: 4.8,
    reviews: 134,
    deity: 'Shiva',
    stone: 'Silver',
    category: 'Pendant',
    inStock: true,
    isNew: true,
    description: 'Sacred Trishul pendant blessed on Mahashivratri for protection and spiritual power.',
    hindiDescription: 'सुरक्षा और आध्यात्मिक शक्ति के लिए महाशिवरात्रि पर आशीर्वादित पवित्र त्रिशूल लटकन।',
    specifications: {
      metal: 'Pure Silver (92.5%)',
      stone: 'Silver',
      size: '4cm x 2cm',
      weight: '18g',
      chain: 'Silver Chain (20 inch)'
    },
    blessings: [
      { 
        id: 'ganga', 
        name: 'Ganga Jal Purification', 
        hindiName: 'गंगाजल पवित्रीकरण',
        price: 99, 
        description: 'Purified with sacred Ganga water',
        hindiDescription: 'पवित्र गंगाजल से शुद्धीकरण'
      },
      { 
        id: 'mantra', 
        name: 'Vedic Mantra Chanting', 
        hindiName: 'वैदिक मंत्र जप',
        price: 199, 
        description: 'Energized with Shiva mantras',
        hindiDescription: 'शिव मंत्रों से ऊर्जावान'
      },
      { 
        id: 'kumkum', 
        name: 'Kumkum Wrapping', 
        hindiName: 'कुमकुम लपेटन',
        price: 49, 
        description: 'Wrapped with sacred kumkum',
        hindiDescription: 'पवित्र कुमकुम से लपेटा गया'
      },
      { 
        id: 'giftbox', 
        name: 'Premium Gift Box', 
        hindiName: 'प्रीमियम उपहार बॉक्स',
        price: 149, 
        description: 'Special box with Sanskrit verses',
        hindiDescription: 'संस्कृत श्लोकों के साथ विशेष बॉक्स'
      }
    ]
  },
  {
    id: 6,
    name: 'Shiva Damaru Ring',
    hindiName: 'शिव डमरू अंगूठी',
    price: 1599,
    originalPrice: 1999,
    image: 'https://images.pexels.com/photos/1191531/pexels-photo-1191531.jpeg?auto=compress&cs=tinysrgb&w=500',
    images: [
      'https://images.pexels.com/photos/1191531/pexels-photo-1191531.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/8112458/pexels-photo-8112458.jpeg?auto=compress&cs=tinysrgb&w=600',
    ],
    blessing: 'Monday Blessed',
    rating: 4.6,
    reviews: 78,
    deity: 'Shiva',
    stone: 'Silver',
    category: 'Ring',
    inStock: true,
    isNew: false,
    description: 'Sacred Damaru ring representing the cosmic sound of creation, blessed on Monday.',
    hindiDescription: 'सृष्टि की ब्रह्मांडीय ध्वनि का प्रतिनिधित्व करने वाली पवित्र डमरू अंगूठी, सोमवार को आशीर्वादित।',
    specifications: {
      metal: 'Silver (92.5%)',
      stone: 'Silver',
      size: 'Adjustable',
      weight: '10g'
    },
    blessings: [
      { 
        id: 'ganga', 
        name: 'Ganga Jal Purification', 
        hindiName: 'गंगाजल पवित्रीकरण',
        price: 99, 
        description: 'Purified with sacred Ganga water',
        hindiDescription: 'पवित्र गंगाजल से शुद्धीकरण'
      },
      { 
        id: 'mantra', 
        name: 'Vedic Mantra Chanting', 
        hindiName: 'वैदिक मंत्र जप',
        price: 199, 
        description: 'Energized with Shiva mantras',
        hindiDescription: 'शिव मंत्रों से ऊर्जावान'
      },
      { 
        id: 'kumkum', 
        name: 'Kumkum Wrapping', 
        hindiName: 'कुमकुम लपेटन',
        price: 49, 
        description: 'Wrapped with sacred kumkum',
        hindiDescription: 'पवित्र कुमकुम से लपेटा गया'
      },
      { 
        id: 'giftbox', 
        name: 'Premium Gift Box', 
        hindiName: 'प्रीमियम उपहार बॉक्स',
        price: 149, 
        description: 'Special box with Sanskrit verses',
        hindiDescription: 'संस्कृत श्लोकों के साथ विशेष बॉक्स'
      }
    ]
  },

  // Durga Collection
  {
    id: 7,
    name: 'Durga Garnet Ring',
    hindiName: 'दुर्गा गार्नेट अंगूठी',
    price: 3299,
    originalPrice: 3799,
    image: 'https://images.pexels.com/photos/1191531/pexels-photo-1191531.jpeg?auto=compress&cs=tinysrgb&w=500',
    images: [
      'https://images.pexels.com/photos/1191531/pexels-photo-1191531.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/5378700/pexels-photo-5378700.jpeg?auto=compress&cs=tinysrgb&w=600',
    ],
    blessing: 'Navratri Blessed',
    rating: 4.7,
    reviews: 156,
    deity: 'Durga',
    stone: 'Garnet',
    category: 'Ring',
    inStock: true,
    isNew: false,
    description: 'Powerful garnet ring blessed during Navratri for strength and protection.',
    hindiDescription: 'शक्ति और सुरक्षा के लिए नवरात्रि के दौरान आशीर्वादित शक्तिशाली गार्नेट अंगूठी।',
    specifications: {
      metal: 'Silver (92.5%)',
      stone: 'Natural Garnet',
      size: 'Adjustable',
      weight: '8g'
    },
    blessings: [
      { 
        id: 'ganga', 
        name: 'Ganga Jal Purification', 
        hindiName: 'गंगाजल पवित्रीकरण',
        price: 99, 
        description: 'Purified with sacred Ganga water',
        hindiDescription: 'पवित्र गंगाजल से शुद्धीकरण'
      },
      { 
        id: 'mantra', 
        name: 'Vedic Mantra Chanting', 
        hindiName: 'वैदिक मंत्र जप',
        price: 199, 
        description: 'Energized with Durga mantras',
        hindiDescription: 'दुर्गा मंत्रों से ऊर्जावान'
      },
      { 
        id: 'kumkum', 
        name: 'Kumkum Wrapping', 
        hindiName: 'कुमकुम लपेटन',
        price: 49, 
        description: 'Wrapped with sacred kumkum',
        hindiDescription: 'पवित्र कुमकुम से लपेटा गया'
      },
      { 
        id: 'giftbox', 
        name: 'Premium Gift Box', 
        hindiName: 'प्रीमियम उपहार बॉक्स',
        price: 149, 
        description: 'Special box with Sanskrit verses',
        hindiDescription: 'संस्कृत श्लोकों के साथ विशेष बॉक्स'
      }
    ]
  },
  {
    id: 8,
    name: 'Durga Shakti Bracelet',
    hindiName: 'दुर्गा शक्ति कंगन',
    price: 2499,
    originalPrice: 2999,
    image: 'https://images.pexels.com/photos/12896892/pexels-photo-12896892.jpeg?auto=compress&cs=tinysrgb&w=500',
    images: [
      'https://images.pexels.com/photos/12896892/pexels-photo-12896892.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/6045104/pexels-photo-6045104.jpeg?auto=compress&cs=tinysrgb&w=600',
    ],
    blessing: 'Devi Blessing',
    rating: 4.8,
    reviews: 92,
    deity: 'Durga',
    stone: 'Red Coral',
    category: 'Bracelet',
    inStock: true,
    isNew: true,
    description: 'Empowering bracelet with red coral stones, blessed for courage and divine feminine energy.',
    hindiDescription: 'साहस और दिव्य स्त्री ऊर्जा के लिए आशीर्वादित लाल मूंगा पत्थरों के साथ सशक्त कंगन।',
    specifications: {
      metal: 'Silver (92.5%)',
      stone: 'Red Coral',
      size: 'Adjustable',
      weight: '20g'
    },
    blessings: [
      { 
        id: 'ganga', 
        name: 'Ganga Jal Purification', 
        hindiName: 'गंगाजल पवित्रीकरण',
        price: 99, 
        description: 'Purified with sacred Ganga water',
        hindiDescription: 'पवित्र गंगाजल से शुद्धीकरण'
      },
      { 
        id: 'mantra', 
        name: 'Vedic Mantra Chanting', 
        hindiName: 'वैदिक मंत्र जप',
        price: 199, 
        description: 'Energized with Durga mantras',
        hindiDescription: 'दुर्गा मंत्रों से ऊर्जावान'
      },
      { 
        id: 'kumkum', 
        name: 'Kumkum Wrapping', 
        hindiName: 'कुमकुम लपेटन',
        price: 49, 
        description: 'Wrapped with sacred kumkum',
        hindiDescription: 'पवित्र कुमकुम से लपेटा गया'
      },
      { 
        id: 'giftbox', 
        name: 'Premium Gift Box', 
        hindiName: 'प्रीमियम उपहार बॉक्स',
        price: 149, 
        description: 'Special box with Sanskrit verses',
        hindiDescription: 'संस्कृत श्लोकों के साथ विशेष बॉक्स'
      }
    ]
  },

  // Ganesha Collection
  {
    id: 9,
    name: 'Ganesha Ivory Pendant',
    hindiName: 'गणेश हाथीदांत लटकन',
    price: 1499,
    originalPrice: 1899,
    image: 'https://images.pexels.com/photos/12896892/pexels-photo-12896892.jpeg?auto=compress&cs=tinysrgb&w=500',
    images: [
      'https://images.pexels.com/photos/12896892/pexels-photo-12896892.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/6045104/pexels-photo-6045104.jpeg?auto=compress&cs=tinysrgb&w=600',
    ],
    blessing: 'Kumkum Wrapped',
    rating: 4.6,
    reviews: 201,
    deity: 'Ganesha',
    stone: 'Ivory',
    category: 'Pendant',
    inStock: true,
    isNew: true,
    description: 'Auspicious Ganesha pendant for removing obstacles and bringing new beginnings.',
    hindiDescription: 'बाधाओं को दूर करने और नई शुरुआत लाने के लिए शुभ गणेश लटकन।',
    specifications: {
      metal: 'Gold Plated',
      stone: 'Synthetic Ivory',
      size: '2cm x 2cm',
      weight: '10g',
      chain: 'Gold Plated Chain (16 inch)'
    },
    blessings: [
      { 
        id: 'ganga', 
        name: 'Ganga Jal Purification', 
        hindiName: 'गंगाजल पवित्रीकरण',
        price: 99, 
        description: 'Purified with sacred Ganga water',
        hindiDescription: 'पवित्र गंगाजल से शुद्धीकरण'
      },
      { 
        id: 'mantra', 
        name: 'Vedic Mantra Chanting', 
        hindiName: 'वैदिक मंत्र जप',
        price: 199, 
        description: 'Energized with Ganesha mantras',
        hindiDescription: 'गणेश मंत्रों से ऊर्जावान'
      },
      { 
        id: 'kumkum', 
        name: 'Kumkum Wrapping', 
        hindiName: 'कुमकुम लपेटन',
        price: 49, 
        description: 'Wrapped with sacred kumkum',
        hindiDescription: 'पवित्र कुमकुम से लपेटा गया'
      },
      { 
        id: 'giftbox', 
        name: 'Premium Gift Box', 
        hindiName: 'प्रीमियम उपहार बॉक्स',
        price: 149, 
        description: 'Special box with Sanskrit verses',
        hindiDescription: 'संस्कृत श्लोकों के साथ विशेष बॉक्स'
      }
    ]
  },
  {
    id: 10,
    name: 'Ganesha Emerald Ring',
    hindiName: 'गणेश पन्ना अंगूठी',
    price: 4299,
    originalPrice: 4999,
    image: 'https://images.pexels.com/photos/1191531/pexels-photo-1191531.jpeg?auto=compress&cs=tinysrgb&w=500',
    images: [
      'https://images.pexels.com/photos/1191531/pexels-photo-1191531.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/5378700/pexels-photo-5378700.jpeg?auto=compress&cs=tinysrgb&w=600',
    ],
    blessing: 'Ganesh Chaturthi Blessed',
    rating: 4.9,
    reviews: 67,
    deity: 'Ganesha',
    stone: 'Emerald',
    category: 'Ring',
    inStock: true,
    isNew: false,
    description: 'Premium emerald ring blessed on Ganesh Chaturthi for wisdom and prosperity.',
    hindiDescription: 'बुद्धि और समृद्धि के लिए गणेश चतुर्थी पर आशीर्वादित प्रीमियम पन्ना अंगूठी।',
    specifications: {
      metal: 'Gold Plated Silver',
      stone: 'Natural Emerald',
      size: 'Adjustable',
      weight: '12g'
    },
    blessings: [
      { 
        id: 'ganga', 
        name: 'Ganga Jal Purification', 
        hindiName: 'गंगाजल पवित्रीकरण',
        price: 99, 
        description: 'Purified with sacred Ganga water',
        hindiDescription: 'पवित्र गंगाजल से शुद्धीकरण'
      },
      { 
        id: 'mantra', 
        name: 'Vedic Mantra Chanting', 
        hindiName: 'वैदिक मंत्र जप',
        price: 199, 
        description: 'Energized with Ganesha mantras',
        hindiDescription: 'गणेश मंत्रों से ऊर्जावान'
      },
      { 
        id: 'kumkum', 
        name: 'Kumkum Wrapping', 
        hindiName: 'कुमकुम लपेटन',
        price: 49, 
        description: 'Wrapped with sacred kumkum',
        hindiDescription: 'पवित्र कुमकुम से लपेटा गया'
      },
      { 
        id: 'giftbox', 
        name: 'Premium Gift Box', 
        hindiName: 'प्रीमियम उपहार बॉक्स',
        price: 149, 
        description: 'Special box with Sanskrit verses',
        hindiDescription: 'संस्कृत श्लोकों के साथ विशेष बॉक्स'
      }
    ]
  },

  // Saraswati Collection
  {
    id: 11,
    name: 'Saraswati Pearl Mala',
    hindiName: 'सरस्वती मोती माला',
    price: 2199,
    originalPrice: 2599,
    image: 'https://images.pexels.com/photos/6045104/pexels-photo-6045104.jpeg?auto=compress&cs=tinysrgb&w=500',
    images: [
      'https://images.pexels.com/photos/6045104/pexels-photo-6045104.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/5378700/pexels-photo-5378700.jpeg?auto=compress&cs=tinysrgb&w=600',
    ],
    blessing: 'Basant Panchami Blessed',
    rating: 4.8,
    reviews: 98,
    deity: 'Saraswati',
    stone: 'Pearl',
    category: 'Mala',
    inStock: true,
    isNew: false,
    description: 'Pure pearl mala blessed on Basant Panchami for wisdom and knowledge.',
    hindiDescription: 'ज्ञान और विद्या के लिए बसंत पंचमी पर आशीर्वादित शुद्ध मोती माला।',
    specifications: {
      metal: 'Silver Thread',
      stone: 'Cultured Pearls',
      size: '108 beads',
      weight: '40g'
    },
    blessings: [
      { 
        id: 'ganga', 
        name: 'Ganga Jal Purification', 
        hindiName: 'गंगाजल पवित्रीकरण',
        price: 99, 
        description: 'Purified with sacred Ganga water',
        hindiDescription: 'पवित्र गंगाजल से शुद्धीकरण'
      },
      { 
        id: 'mantra', 
        name: 'Vedic Mantra Chanting', 
        hindiName: 'वैदिक मंत्र जप',
        price: 199, 
        description: 'Energized with Saraswati mantras',
        hindiDescription: 'सरस्वती मंत्रों से ऊर्जावान'
      },
      { 
        id: 'kumkum', 
        name: 'Kumkum Wrapping', 
        hindiName: 'कुमकुम लपेटन',
        price: 49, 
        description: 'Wrapped with sacred kumkum',
        hindiDescription: 'पवित्र कुमकुम से लपेटा गया'
      },
      { 
        id: 'giftbox', 
        name: 'Premium Gift Box', 
        hindiName: 'प्रीमियम उपहार बॉक्स',
        price: 149, 
        description: 'Special box with Sanskrit verses',
        hindiDescription: 'संस्कृत श्लोकों के साथ विशेष बॉक्स'
      }
    ]
  },
  {
    id: 12,
    name: 'Saraswati Moonstone Pendant',
    hindiName: 'सरस्वती चंद्रकांत लटकन',
    price: 1799,
    originalPrice: 2199,
    image: 'https://images.pexels.com/photos/5378700/pexels-photo-5378700.jpeg?auto=compress&cs=tinysrgb&w=500',
    images: [
      'https://images.pexels.com/photos/5378700/pexels-photo-5378700.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/6045104/pexels-photo-6045104.jpeg?auto=compress&cs=tinysrgb&w=600',
    ],
    blessing: 'Vidya Blessing',
    rating: 4.7,
    reviews: 85,
    deity: 'Saraswati',
    stone: 'Moonstone',
    category: 'Pendant',
    inStock: true,
    isNew: true,
    description: 'Elegant moonstone pendant blessed for enhancing creativity and learning abilities.',
    hindiDescription: 'रचनात्मकता और सीखने की क्षमता बढ़ाने के लिए आशीर्वादित सुंदर चंद्रकांत लटकन।',
    specifications: {
      metal: 'Silver (92.5%)',
      stone: 'Natural Moonstone',
      size: '2.5cm x 2cm',
      weight: '14g',
      chain: 'Silver Chain (18 inch)'
    },
    blessings: [
      { 
        id: 'ganga', 
        name: 'Ganga Jal Purification', 
        hindiName: 'गंगाजल पवित्रीकरण',
        price: 99, 
        description: 'Purified with sacred Ganga water',
        hindiDescription: 'पवित्र गंगाजल से शुद्धीकरण'
      },
      { 
        id: 'mantra', 
        name: 'Vedic Mantra Chanting', 
        hindiName: 'वैदिक मंत्र जप',
        price: 199, 
        description: 'Energized with Saraswati mantras',
        hindiDescription: 'सरस्वती मंत्रों से ऊर्जावान'
      },
      { 
        id: 'kumkum', 
        name: 'Kumkum Wrapping', 
        hindiName: 'कुमकुम लपेटन',
        price: 49, 
        description: 'Wrapped with sacred kumkum',
        hindiDescription: 'पवित्र कुमकुम से लपेटा गया'
      },
      { 
        id: 'giftbox', 
        name: 'Premium Gift Box', 
        hindiName: 'प्रीमियम उपहार बॉक्स',
        price: 149, 
        description: 'Special box with Sanskrit verses',
        hindiDescription: 'संस्कृत श्लोकों के साथ विशेष बॉक्स'
      }
    ]
  },

  // Hanuman Collection
  {
    id: 13,
    name: 'Hanuman Sinduri Locket',
    hindiName: 'हनुमान सिंदूरी लॉकेट',
    price: 899,
    originalPrice: 1199,
    image: 'https://images.pexels.com/photos/8471811/pexels-photo-8471811.jpeg?auto=compress&cs=tinysrgb&w=500',
    images: [
      'https://images.pexels.com/photos/8471811/pexels-photo-8471811.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/8112458/pexels-photo-8112458.jpeg?auto=compress&cs=tinysrgb&w=600',
    ],
    blessing: 'Tuesday Blessed',
    rating: 4.9,
    reviews: 267,
    deity: 'Hanuman',
    stone: 'Sinduri',
    category: 'Locket',
    inStock: true,
    isNew: true,
    description: 'Powerful Hanuman locket blessed on Tuesday for strength and courage.',
    hindiDescription: 'शक्ति और साहस के लिए मंगलवार को आशीर्वादित शक्तिशाली हनुमान लॉकेट।',
    specifications: {
      metal: 'Copper',
      stone: 'Sinduri Stone',
      size: '2.5cm diameter',
      weight: '12g',
      chain: 'Copper Chain (18 inch)'
    },
    blessings: [
      { 
        id: 'ganga', 
        name: 'Ganga Jal Purification', 
        hindiName: 'गंगाजल पवित्रीकरण',
        price: 99, 
        description: 'Purified with sacred Ganga water',
        hindiDescription: 'पवित्र गंगाजल से शुद्धीकरण'
      },
      { 
        id: 'mantra', 
        name: 'Vedic Mantra Chanting', 
        hindiName: 'वैदिक मंत्र जप',
        price: 199, 
        description: 'Energized with Hanuman mantras',
        hindiDescription: 'हनुमान मंत्रों से ऊर्जावान'
      },
      { 
        id: 'kumkum', 
        name: 'Kumkum Wrapping', 
        hindiName: 'कुमकुम लपेटन',
        price: 49, 
        description: 'Wrapped with sacred kumkum',
        hindiDescription: 'पवित्र कुमकुम से लपेटा गया'
      },
      { 
        id: 'giftbox', 
        name: 'Premium Gift Box', 
        hindiName: 'प्रीमियम उपहार बॉक्स',
        price: 149, 
        description: 'Special box with Sanskrit verses',
        hindiDescription: 'संस्कृत श्लोकों के साथ विशेष बॉक्स'
      }
    ]
  },
  {
    id: 14,
    name: 'Hanuman Bajrang Bali Ring',
    hindiName: 'हनुमान बजरंग बली अंगूठी',
    price: 1299,
    originalPrice: 1599,
    image: 'https://images.pexels.com/photos/1191531/pexels-photo-1191531.jpeg?auto=compress&cs=tinysrgb&w=500',
    images: [
      'https://images.pexels.com/photos/1191531/pexels-photo-1191531.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/8471811/pexels-photo-8471811.jpeg?auto=compress&cs=tinysrgb&w=600',
    ],
    blessing: 'Hanuman Jayanti Blessed',
    rating: 4.8,
    reviews: 143,
    deity: 'Hanuman',
    stone: 'Copper',
    category: 'Ring',
    inStock: true,
    isNew: false,
    description: 'Sacred ring blessed on Hanuman Jayanti for protection from negative energies.',
    hindiDescription: 'नकारात्मक ऊर्जाओं से सुरक्षा के लिए हनुमान जयंती पर आशीर्वादित पवित्र अंगूठी।',
    specifications: {
      metal: 'Copper',
      stone: 'Copper',
      size: 'Adjustable',
      weight: '8g'
    },
    blessings: [
      { 
        id: 'ganga', 
        name: 'Ganga Jal Purification', 
        hindiName: 'गंगाजल पवित्रीकरण',
        price: 99, 
        description: 'Purified with sacred Ganga water',
        hindiDescription: 'पवित्र गंगाजल से शुद्धीकरण'
      },
      { 
        id: 'mantra', 
        name: 'Vedic Mantra Chanting', 
        hindiName: 'वैदिक मंत्र जप',
        price: 199, 
        description: 'Energized with Hanuman mantras',
        hindiDescription: 'हनुमान मंत्रों से ऊर्जावान'
      },
      { 
        id: 'kumkum', 
        name: 'Kumkum Wrapping', 
        hindiName: 'कुमकुम लपेटन',
        price: 49, 
        description: 'Wrapped with sacred kumkum',
        hindiDescription: 'पवित्र कुमकुम से लपेटा गया'
      },
      { 
        id: 'giftbox', 
        name: 'Premium Gift Box', 
        hindiName: 'प्रीमियम उपहार बॉक्स',
        price: 149, 
        description: 'Special box with Sanskrit verses',
        hindiDescription: 'संस्कृत श्लोकों के साथ विशेष बॉक्स'
      }
    ]
  },

  // Krishna Collection
  {
    id: 15,
    name: 'Krishna Sapphire Bracelet',
    hindiName: 'कृष्ण नीलम कंगन',
    price: 3299,
    originalPrice: 3799,
    image: 'https://images.pexels.com/photos/12896892/pexels-photo-12896892.jpeg?auto=compress&cs=tinysrgb&w=500',
    images: [
      'https://images.pexels.com/photos/12896892/pexels-photo-12896892.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/6045104/pexels-photo-6045104.jpeg?auto=compress&cs=tinysrgb&w=600',
    ],
    blessing: 'Janmashtami Blessed',
    rating: 4.8,
    reviews: 145,
    deity: 'Krishna',
    stone: 'Sapphire',
    category: 'Bracelet',
    inStock: false,
    isNew: false,
    description: 'Divine sapphire bracelet blessed on Janmashtami for love and devotion.',
    hindiDescription: 'प्रेम और भक्ति के लिए जन्माष्टमी पर आशीर्वादित दिव्य नीलम कंगन।',
    specifications: {
      metal: 'Silver (92.5%)',
      stone: 'Blue Sapphire',
      size: 'Adjustable',
      weight: '25g'
    },
    blessings: [
      { 
        id: 'ganga', 
        name: 'Ganga Jal Purification', 
        hindiName: 'गंगाजल पवित्रीकरण',
        price: 99, 
        description: 'Purified with sacred Ganga water',
        hindiDescription: 'पवित्र गंगाजल से शुद्धीकरण'
      },
      { 
        id: 'mantra', 
        name: 'Vedic Mantra Chanting', 
        hindiName: 'वैदिक मंत्र जप',
        price: 199, 
        description: 'Energized with Krishna mantras',
        hindiDescription: 'कृष्ण मंत्रों से ऊर्जावान'
      },
      { 
        id: 'kumkum', 
        name: 'Kumkum Wrapping', 
        hindiName: 'कुमकुम लपेटन',
        price: 49, 
        description: 'Wrapped with sacred kumkum',
        hindiDescription: 'पवित्र कुमकुम से लपेटा गया'
      },
      { 
        id: 'giftbox', 
        name: 'Premium Gift Box', 
        hindiName: 'प्रीमियम उपहार बॉक्स',
        price: 149, 
        description: 'Special box with Sanskrit verses',
        hindiDescription: 'संस्कृत श्लोकों के साथ विशेष बॉक्स'
      }
    ]
  },
  {
    id: 16,
    name: 'Krishna Flute Pendant',
    hindiName: 'कृष्ण बांसुरी लटकन',
    price: 1899,
    originalPrice: 2299,
    image: 'https://images.pexels.com/photos/5378700/pexels-photo-5378700.jpeg?auto=compress&cs=tinysrgb&w=500',
    images: [
      'https://images.pexels.com/photos/5378700/pexels-photo-5378700.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/12896892/pexels-photo-12896892.jpeg?auto=compress&cs=tinysrgb&w=600',
    ],
    blessing: 'Govardhan Puja Blessed',
    rating: 4.7,
    reviews: 112,
    deity: 'Krishna',
    stone: 'Gold',
    category: 'Pendant',
    inStock: true,
    isNew: true,
    description: 'Beautiful flute pendant representing Krishna\'s divine music, blessed for harmony and peace.',
    hindiDescription: 'सामंजस्य और शांति के लिए आशीर्वादित कृष्ण की दिव्य संगीत का प्रतिनिधित्व करने वाला सुंदर बांसुरी लटकन।',
    specifications: {
      metal: 'Gold Plated Silver',
      stone: 'Gold',
      size: '3cm x 1cm',
      weight: '12g',
      chain: 'Gold Plated Chain (18 inch)'
    },
    blessings: [
      { 
        id: 'ganga', 
        name: 'Ganga Jal Purification', 
        hindiName: 'गंगाजल पवित्रीकरण',
        price: 99, 
        description: 'Purified with sacred Ganga water',
        hindiDescription: 'पवित्र गंगाजल से शुद्धीकरण'
      },
      { 
        id: 'mantra', 
        name: 'Vedic Mantra Chanting', 
        hindiName: 'वैदिक मंत्र जप',
        price: 199, 
        description: 'Energized with Krishna mantras',
        hindiDescription: 'कृष्ण मंत्रों से ऊर्जावान'
      },
      { 
        id: 'kumkum', 
        name: 'Kumkum Wrapping', 
        hindiName: 'कुमकुम लपेटन',
        price: 49, 
        description: 'Wrapped with sacred kumkum',
        hindiDescription: 'पवित्र कुमकुम से लपेटा गया'
      },
      { 
        id: 'giftbox', 
        name: 'Premium Gift Box', 
        hindiName: 'प्रीमियम उपहार बॉक्स',
        price: 149, 
        description: 'Special box with Sanskrit verses',
        hindiDescription: 'संस्कृत श्लोकों के साथ विशेष बॉक्स'
      }
    ]
  }
];

export const getProductsByDeity = (deity: string) => {
  return products.filter(product => product.deity.toLowerCase() === deity.toLowerCase());
};

export const getProductsByCategory = (category: string) => {
  return products.filter(product => product.category.toLowerCase() === category.toLowerCase());
};

export const getNewArrivals = () => {
  return products.filter(product => product.isNew);
};

export const getFeaturedProducts = () => {
  return products.slice(0, 8);
};