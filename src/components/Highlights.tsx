import { useState } from 'react';
import { Flame, Sparkles, Soup, ArrowRight } from 'lucide-react';

export default function Highlights() {
  const [imgErrors, setImgErrors] = useState<Record<string, boolean>>({});

  const highlights = [
    {
      id: 'biryani',
      title: 'Biryani & Rice Specialities',
      subtitle: 'Fragrant Dum Traditions',
      description: 'Long-grain basmati rice layered with aromatic spices, fresh mint, caramelized onions, and choice cuts slow-steamed to perfection in traditional handis.',
      icon: Flame,
      image: '/src/assets/images/hero-biryani.jpg',
      fallback: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80',
      tag: 'Customer Favourite',
      anchor: '#menu'
    },
    {
      id: 'tandoor',
      title: 'Tandoor Favourites',
      subtitle: 'Charcoal Roasted Goodness',
      description: 'Succulent chicken tikka, rich paneer cubes, and fresh handcrafted tandoori breads roasted over glowing clay ovens for signature smoky aroma and crisp edges.',
      icon: Sparkles,
      image: '/src/assets/images/tandoor-platter.jpg',
      fallback: 'https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80',
      tag: 'Fresh From The Clay Oven',
      anchor: '#menu'
    },
    {
      id: 'flavours',
      title: 'Delicious Indian Flavours',
      subtitle: 'Rich Gravies & Starters',
      description: 'A comforting variety of North Indian and Maharashtrian gravies, savoury starters, and golden naans crafted to satisfy true food lovers in Talegaon.',
      icon: Soup,
      image: '/src/assets/images/curry-naan.jpg',
      fallback: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=800&q=80',
      tag: 'Traditional Recipes',
      anchor: '#menu'
    }
  ];

  return (
    <section id="highlights" className="py-20 sm:py-28 bg-[#171411] border-b border-[#282119]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-semibold tracking-widest uppercase text-[#E9A23B]">
            WHAT WE ARE KNOWN FOR
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif text-[#FFF8ED] tracking-tight">
            Our Culinary Highlights
          </h2>
          <p className="text-base sm:text-lg text-[#D1C3AF] font-light leading-relaxed">
            Every dish at Aryan Biryani and Tandoor is prepared with careful attention to flavour, aroma, and authentic Indian hospitality.
          </p>
        </div>

        {/* 3 Column Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {highlights.map((item) => {
            const Icon = item.icon;
            const currentImg = imgErrors[item.id] ? item.fallback : item.image;

            return (
              <div
                key={item.id}
                className="group flex flex-col bg-[#1E1915] rounded-xl border border-[#342A20] overflow-hidden hover:border-[#E9A23B]/60 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
              >
                {/* Visual Image container */}
                <div className="relative h-64 overflow-hidden bg-[#120F0D]">
                  <img
                    src={currentImg}
                    onError={() => setImgErrors(prev => ({ ...prev, [item.id]: true }))}
                    alt={item.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1E1915] via-transparent to-black/20" />
                  
                  {/* Category subtle pill-free text label */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-[#171411]/85 backdrop-blur-sm border border-[#3E3226] text-xs font-medium text-[#E9A23B] rounded">
                      {item.tag}
                    </span>
                  </div>

                  {/* Icon badge */}
                  <div className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-[#E9A23B] flex items-center justify-center text-[#171411] shadow-lg">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <span className="text-xs font-semibold tracking-wider text-[#A89886] uppercase">
                      {item.subtitle}
                    </span>
                    <h3 className="text-2xl font-bold font-serif text-[#FFF8ED] group-hover:text-[#E9A23B] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm text-[#CDC1AF] leading-relaxed pt-1 font-light">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-2">
                    <a
                      href={item.anchor}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-[#E9A23B] hover:text-[#FFF8ED] transition-colors"
                    >
                      <span>Explore this category</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
