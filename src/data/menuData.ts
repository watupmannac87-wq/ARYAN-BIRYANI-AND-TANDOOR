import { MenuItem } from '../types';

export const SAMPLE_MENU_ITEMS: MenuItem[] = [
  // --- BIRYANI ---
  {
    id: 'biryani-1',
    name: 'Special Chicken Dum Biryani (Sample)',
    category: 'Biryani',
    description: 'Aromatic long-grain basmati rice slow-cooked on dum with tender marinated chicken pieces, whole spices, saffron, and fried golden onions.',
    isVegetarian: false,
    isPopular: true,
    priceNote: 'Sample Item · Ask for Price',
    image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80',
    fallbackImage: '/src/assets/images/hero-biryani.jpg'
  },
  {
    id: 'biryani-2',
    name: 'Royal Mutton Dum Biryani (Sample)',
    category: 'Biryani',
    description: 'Traditional slow-cooked mutton biryani layered with saffron rice, caramelized onions, and royal spices, sealed in a handi.',
    isVegetarian: false,
    isPopular: true,
    priceNote: 'Sample Item · Ask for Price',
    image: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=800&q=80',
    fallbackImage: '/src/assets/images/hero-biryani.jpg'
  },
  {
    id: 'biryani-3',
    name: 'Shahi Paneer Tikka Biryani (Sample)',
    category: 'Biryani',
    description: 'Charcoal-grilled spiced paneer cubes layered with fragrant saffron basmati rice, mint leaves, and mild aromatic spices.',
    isVegetarian: true,
    priceNote: 'Sample Item · Ask for Price',
    image: 'https://images.unsplash.com/photo-1642821373181-696a54913e93?auto=format&fit=crop&w=800&q=80',
    fallbackImage: '/src/assets/images/hero-biryani.jpg'
  },
  {
    id: 'biryani-4',
    name: 'Veg Dum Biryani Handi (Sample)',
    category: 'Biryani',
    description: 'Garden fresh seasonal vegetables, paneer, and aromatic basmati rice infused with cardamom, cloves, and kewra water.',
    isVegetarian: true,
    priceNote: 'Sample Item · Ask for Price',
    image: 'https://images.unsplash.com/photo-1633945274405-b6c8069047b0?auto=format&fit=crop&w=800&q=80',
    fallbackImage: '/src/assets/images/hero-biryani.jpg'
  },
  {
    id: 'biryani-5',
    name: 'Egg Dum Biryani (Sample)',
    category: 'Biryani',
    description: 'Golden shallow-fried boiled eggs paired with flavourful basmati rice cooked in fragrant biryani spices and mint.',
    isVegetarian: false,
    priceNote: 'Sample Item · Ask for Price',
    image: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=800&q=80',
    fallbackImage: '/src/assets/images/hero-biryani.jpg'
  },

  // --- TANDOOR ---
  {
    id: 'tandoor-1',
    name: 'Tandoori Chicken Full / Half (Sample)',
    category: 'Tandoor',
    description: 'Tender chicken marinated in hung curd, Kashmiri red chilli, and roasted spices, roasted to smoky perfection in a clay tandoor.',
    isVegetarian: false,
    isPopular: true,
    priceNote: 'Sample Item · Ask for Price',
    image: '/src/assets/images/tandoor-platter.jpg',
    fallbackImage: 'https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'tandoor-2',
    name: 'Murgh Malai Tikka (Sample)',
    category: 'Tandoor',
    description: 'Boneless chicken chunks marinated in fresh cream, mild spices, cardamom, and grilled until succulent with char-kissed edges.',
    isVegetarian: false,
    priceNote: 'Sample Item · Ask for Price',
    image: 'https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80',
    fallbackImage: '/src/assets/images/tandoor-platter.jpg'
  },
  {
    id: 'tandoor-3',
    name: 'Tandoori Paneer Tikka (Sample)',
    category: 'Tandoor',
    description: 'Cubes of fresh paneer, bell peppers, and onions skewered and roasted with ajwain spiced yogurt marinade.',
    isVegetarian: true,
    isPopular: true,
    priceNote: 'Sample Item · Ask for Price',
    image: 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=800&q=80',
    fallbackImage: '/src/assets/images/tandoor-platter.jpg'
  },
  {
    id: 'tandoor-4',
    name: 'Butter Garlic Naan & Tandoori Roti (Sample)',
    category: 'Tandoor',
    description: 'Fresh leavened flatbread slapped onto traditional clay tandoor walls, brushed with rich butter and minced garlic.',
    isVegetarian: true,
    priceNote: 'Sample Item · Ask for Price',
    image: '/src/assets/images/curry-naan.jpg',
    fallbackImage: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'tandoor-5',
    name: 'Chicken Seekh Kebab (Sample)',
    category: 'Tandoor',
    description: 'Finely minced seasoned chicken blended with aromatic herbs and grilled over red-hot charcoal skewers.',
    isVegetarian: false,
    priceNote: 'Sample Item · Ask for Price',
    image: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=800&q=80',
    fallbackImage: '/src/assets/images/tandoor-platter.jpg'
  },

  // --- STARTERS ---
  {
    id: 'starter-1',
    name: 'Chicken Crispy / Chilli (Sample)',
    category: 'Starters',
    description: 'Crispy fried chicken tossed with capsicum, spring onions, green chillies, and savory dark sauces.',
    isVegetarian: false,
    isPopular: true,
    priceNote: 'Sample Item · Ask for Price',
    image: 'https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=800&q=80',
    fallbackImage: '/src/assets/images/tandoor-platter.jpg'
  },
  {
    id: 'starter-2',
    name: 'Chicken 65 (Sample)',
    category: 'Starters',
    description: 'Spicy, deep-fried chicken bites tempered with curry leaves, crushed garlic, and fiery red chillies.',
    isVegetarian: false,
    isSpicy: true,
    priceNote: 'Sample Item · Ask for Price',
    image: 'https://images.unsplash.com/photo-1610057099431-d73a1c9d2f2f?auto=format&fit=crop&w=800&q=80',
    fallbackImage: '/src/assets/images/tandoor-platter.jpg'
  },
  {
    id: 'starter-3',
    name: 'Paneer 65 & Crispy Corn (Sample)',
    category: 'Starters',
    description: 'Crisp paneer cubes and crunchy golden corn tossed with curry leaves, green chillies, and South-Indian spices.',
    isVegetarian: true,
    priceNote: 'Sample Item · Ask for Price',
    image: 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=800&q=80',
    fallbackImage: '/src/assets/images/tandoor-platter.jpg'
  },

  // --- MAIN COURSE ---
  {
    id: 'main-1',
    name: 'Butter Chicken Masala (Sample)',
    category: 'Main Course',
    description: 'Tender tandoor-roasted chicken simmered in a velvety tomato, cashew nut, and butter gravy flavoured with dried fenugreek.',
    isVegetarian: false,
    isPopular: true,
    priceNote: 'Sample Item · Ask for Price',
    image: '/src/assets/images/curry-naan.jpg',
    fallbackImage: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'main-2',
    name: 'Chicken Kolhapuri / Handi (Sample)',
    category: 'Main Course',
    description: 'Authentic bold Maharashtrian style chicken curry cooked with roasted coconut, sesame, and signature spicy masala.',
    isVegetarian: false,
    isSpicy: true,
    priceNote: 'Sample Item · Ask for Price',
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80',
    fallbackImage: '/src/assets/images/curry-naan.jpg'
  },
  {
    id: 'main-3',
    name: 'Paneer Butter Masala (Sample)',
    category: 'Main Course',
    description: 'Cottage cheese cubes bathed in a rich, creamy tomato and butter gravy with mild spices.',
    isVegetarian: true,
    priceNote: 'Sample Item · Ask for Price',
    image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=800&q=80',
    fallbackImage: '/src/assets/images/curry-naan.jpg'
  },
  {
    id: 'main-4',
    name: 'Dal Tadka Desi Ghee (Sample)',
    category: 'Main Course',
    description: 'Yellow lentils slow-simmered and tempered with hot desi ghee, cumin seeds, garlic, and fresh green chillies.',
    isVegetarian: true,
    priceNote: 'Sample Item · Ask for Price',
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80',
    fallbackImage: '/src/assets/images/curry-naan.jpg'
  },

  // --- BEVERAGES ---
  {
    id: 'bev-1',
    name: 'Masala Chaas / Spiced Buttermilk (Sample)',
    category: 'Beverages',
    description: 'Chilled traditional yogurt beverage churned with roasted cumin, rock salt, ginger, and fresh coriander. Perfect accompaniment for biryani.',
    isVegetarian: true,
    priceNote: 'Sample Item · Ask for Price',
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80',
    fallbackImage: '/src/assets/images/restaurant-ambience.jpg'
  },
  {
    id: 'bev-2',
    name: 'Sweet & Mango Lassi (Sample)',
    category: 'Beverages',
    description: 'Thick, creamy chilled Punjabi lassi served in traditional style with a hint of cardamom and pistachios.',
    isVegetarian: true,
    priceNote: 'Sample Item · Ask for Price',
    image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80',
    fallbackImage: '/src/assets/images/restaurant-ambience.jpg'
  },
  {
    id: 'bev-3',
    name: 'Soft Drinks & Chilled Mineral Water (Sample)',
    category: 'Beverages',
    description: 'Refreshing carbonated beverages and purified bottled water served chilled.',
    isVegetarian: true,
    priceNote: 'Sample Item · Ask for Price',
    image: 'https://images.unsplash.com/photo-1527661591475-527312dd65f5?auto=format&fit=crop&w=800&q=80',
    fallbackImage: '/src/assets/images/restaurant-ambience.jpg'
  }
];
