import { useState } from 'react';
import { MapPin, Phone, Star, Sparkles } from 'lucide-react';
import { RESTAURANT_DETAILS } from '../types';

export default function AboutSection() {
  const [imgError, setImgError] = useState(false);

  return (
    <section id="about" className="py-20 sm:py-28 bg-[#171411] border-b border-[#282119]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Refined Editorial Story */}
          <div className="space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-semibold tracking-widest uppercase text-[#E9A23B] flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5" />
                WELCOME TO ARYAN BIRYANI AND TANDOOR
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif text-[#FFF8ED] tracking-tight leading-tight">
                A Place for Great Indian Flavours
              </h2>
            </div>

            <div className="space-y-4 text-base sm:text-lg text-[#D6C8B5] font-light leading-relaxed">
              <p>
                Located along <strong className="text-[#FFF8ED] font-medium">Talegaon Varale Road in Varale, Talegaon Dabhade</strong>, Aryan Biryani and Tandoor is dedicated to bringing people together over the rich, comforting aromas of authentic Indian cuisine.
              </p>
              <p>
                Whether you crave the nuanced spices of slow-simmered dum biryani or the mouth-watering char of freshly roasted tandoori specialities, our kitchen focuses on preparing satisfying, flavourful meals for food lovers across Talegaon and surrounding neighbourhoods.
              </p>
              <p>
                From casual family meals and friendly gatherings to quick takeaway orders, we look forward to serving you genuine Indian hospitality and hearty flavours every single day.
              </p>
            </div>

            {/* Verified Quick Highlights */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-[#31271D]">
              <div className="p-4 bg-[#1E1915] border border-[#342A20] rounded-lg space-y-1">
                <div className="flex items-center gap-1.5 text-[#E9A23B]">
                  <Star className="w-4 h-4 fill-[#E9A23B]" />
                  <span className="text-sm font-bold text-[#FFF8ED]">4.8 / 5 Rating</span>
                </div>
                <p className="text-xs text-[#A89886]">
                  High customer appreciation across 19 verified reviews.
                </p>
              </div>

              <div className="p-4 bg-[#1E1915] border border-[#342A20] rounded-lg space-y-1">
                <div className="flex items-center gap-1.5 text-[#E9A23B]">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm font-bold text-[#FFF8ED]">Convenient Location</span>
                </div>
                <p className="text-xs text-[#A89886]">
                  Easy access on Talegaon Varale Road, Varale.
                </p>
              </div>
            </div>

            {/* Quick Action */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href={`tel:${RESTAURANT_DETAILS.phone}`}
                className="inline-flex items-center gap-2 bg-[#E9A23B] hover:bg-[#d89330] text-[#171411] font-bold text-sm px-6 py-3 rounded-lg shadow-md transition-all active:scale-95"
              >
                <Phone className="w-4 h-4" />
                <span>Call Us: {RESTAURANT_DETAILS.displayPhone}</span>
              </a>

              <a
                href={RESTAURANT_DETAILS.googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#221D17] hover:bg-[#2F271F] border border-[#3A3025] text-[#FFF8ED] font-medium text-sm px-6 py-3 rounded-lg transition-colors"
              >
                <MapPin className="w-4 h-4 text-[#E9A23B]" />
                <span>Get Directions</span>
              </a>
            </div>

          </div>

          {/* Right Column: Visual Ambience & Culinary Heritage */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden border border-[#382D22] shadow-2xl bg-[#120F0D]">
              <img
                src={imgError ? 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80' : '/src/assets/images/restaurant-ambience.jpg'}
                onError={() => setImgError(true)}
                alt="Aryan Biryani and Tandoor welcoming restaurant ambience"
                className="w-full h-[400px] sm:h-[480px] object-cover object-center"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#171411] via-transparent to-black/20" />
              
              {/* Bottom Card Overlay */}
              <div className="absolute bottom-6 left-6 right-6 p-4 sm:p-5 bg-[#171411]/90 backdrop-blur-md rounded-xl border border-[#3E3226]">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-serif font-bold text-lg text-[#FFF8ED]">
                      Aryan Biryani & Tandoor
                    </h3>
                    <p className="text-xs text-[#BFAFA0] font-light">
                      Talegaon Varale Road, Varale, Talegaon Dabhade
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-semibold text-[#E9A23B] block">
                      Authentic Indian
                    </span>
                    <span className="text-[11px] text-[#A89886]">
                      Biryani · Tandoor · Curries
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Subtle decorative warm accent blur in background */}
            <div className="absolute -top-6 -right-6 w-48 h-48 bg-[#E9A23B]/10 rounded-full blur-3xl pointer-events-none -z-10" />
            <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-[#711F25]/20 rounded-full blur-3xl pointer-events-none -z-10" />
          </div>

        </div>

      </div>
    </section>
  );
}
