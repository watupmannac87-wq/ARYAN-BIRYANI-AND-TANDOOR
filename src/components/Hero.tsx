import { useState } from 'react';
import { Phone, Utensils, Star, MapPin, ChevronDown } from 'lucide-react';
import { RESTAURANT_DETAILS } from '../types';

export default function Hero() {
  const [imgSrc, setImgSrc] = useState('/src/assets/images/hero-biryani.jpg');

  return (
    <section id="hero" className="relative min-h-[90vh] lg:min-h-screen flex items-center justify-center overflow-hidden bg-[#171411]">
      {/* Background Image Container with Multiple Cinematic Gradient Overlays */}
      <div className="absolute inset-0 z-0">
        <img
          src={imgSrc}
          onError={() => setImgSrc('https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=1920&q=85')}
          alt="Steaming Indian Dum Biryani served in a traditional brass handi with sizzling tandoori skewers"
          className="w-full h-full object-cover object-center scale-105 transition-transform duration-1000 ease-out"
        />
        {/* Layered dark gradients for maximum editorial contrast and legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#171411] via-[#171411]/75 to-[#171411]/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#171411]/90 via-[#171411]/60 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(23,20,17,0.7)_100%)]" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 flex flex-col justify-center items-start">
        <div className="max-w-3xl space-y-6">
          
          {/* Rating & Authenticity Badges */}
          <div className="inline-flex flex-wrap items-center gap-2 sm:gap-3">
            <span className="inline-flex items-center gap-2 px-3 py-1 bg-[#251F19]/90 border border-[#3E3326] text-[#E9A23B] text-xs font-semibold tracking-wider uppercase rounded-md shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#E9A23B] animate-pulse" />
              THE TASTE OF AUTHENTIC INDIA
            </span>

            {/* Tasteful rating badge: “★ 4.8/5 | 19 Reviews” */}
            <a
              href="#ratings"
              className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#2A1E14]/90 border border-[#4D3624] text-[#FFF8ED] text-xs font-medium rounded-md hover:border-[#E9A23B]/60 transition-colors"
            >
              <div className="flex text-[#E9A23B]">
                <Star className="w-3.5 h-3.5 fill-[#E9A23B]" />
              </div>
              <span className="font-bold text-[#FFF8ED]">★ 4.8/5</span>
              <span className="text-[#A89886]">|</span>
              <span className="text-[#D6C7B2]">19 Reviews</span>
            </a>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold font-serif text-[#FFF8ED] tracking-tight leading-[1.12]">
            Every Grain <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E9A23B] via-[#F4BA63] to-[#E9A23B]">
              Tells a Story.
            </span>
          </h1>

          {/* Supporting Text */}
          <p className="text-lg sm:text-xl text-[#E2D7C5] max-w-2xl font-light leading-relaxed">
            Discover the irresistible flavours of aromatic biryani and traditional tandoor favourites at Aryan Biryani and Tandoor.
          </p>

          {/* Location & Quick Info Line */}
          <div className="flex items-center gap-2 text-xs sm:text-sm text-[#BDB09E] pt-1">
            <MapPin className="w-4 h-4 text-[#E9A23B] shrink-0" />
            <span>Talegaon Varale Road, Varale, Talegaon Dabhade</span>
          </div>

          {/* Call to Actions */}
          <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            {/* Primary CTA: Explore Our Menu */}
            <a
              href="#menu"
              className="inline-flex items-center justify-center gap-2.5 bg-[#E9A23B] hover:bg-[#d89330] text-[#171411] font-bold text-base px-8 py-4 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-200 active:scale-95 group"
            >
              <Utensils className="w-5 h-5 text-[#171411] group-hover:rotate-12 transition-transform" />
              <span>Explore Our Menu</span>
            </a>

            {/* Secondary CTA: Call to Order */}
            <a
              href={`tel:${RESTAURANT_DETAILS.phone}`}
              className="inline-flex items-center justify-center gap-2.5 bg-[#251F19]/90 hover:bg-[#342C23] border border-[#483B2C] text-[#FFF8ED] font-semibold text-base px-8 py-4 rounded-lg shadow-lg hover:border-[#E9A23B] transition-all duration-200 active:scale-95"
            >
              <Phone className="w-5 h-5 text-[#E9A23B]" />
              <span>Call to Order ({RESTAURANT_DETAILS.displayPhone})</span>
            </a>
          </div>

          {/* Tasteful reassurance notice */}
          <div className="pt-2 flex items-center gap-2 text-xs text-[#9E8F7E]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E9A23B]" />
            <span>Freshly prepared handis & hot tandoor specialities for dine-in & takeaway</span>
          </div>
        </div>
      </div>

      {/* Down Scroll Indicator */}
      <a
        href="#highlights"
        aria-label="Scroll down to highlights"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 text-[#E2D7C5]/60 hover:text-[#E9A23B] transition-colors animate-bounce p-2"
      >
        <ChevronDown className="w-6 h-6" />
      </a>
    </section>
  );
}
