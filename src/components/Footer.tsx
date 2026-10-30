import { Phone, MapPin, Star, ExternalLink, Heart } from 'lucide-react';
import { RESTAURANT_DETAILS } from '../types';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#100D0B] border-t border-[#251E17] text-[#D4C7B5] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-[#251E17]">
          
          {/* Brand & Summary (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex flex-col items-start">
              <span className="text-2xl font-extrabold tracking-widest text-[#FFF8ED] font-serif">
                {RESTAURANT_DETAILS.name}
              </span>
              <span className="text-xs font-semibold tracking-[0.28em] text-[#E9A23B] -mt-1">
                {RESTAURANT_DETAILS.subtitle}
              </span>
            </div>

            <p className="text-sm text-[#A89886] font-light leading-relaxed max-w-sm">
              Discover authentic biryani and traditional clay-tandoor favourites crafted for food lovers in Talegaon Dabhade and surrounding regions.
            </p>

            {/* Quick rating chip */}
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#181310] border border-[#2D2319] rounded-md text-xs">
              <div className="flex text-[#E9A23B]">
                <Star className="w-3.5 h-3.5 fill-[#E9A23B]" />
              </div>
              <span className="font-semibold text-[#FFF8ED]">4.8 / 5 Rating</span>
              <span className="text-[#8A7969]">·</span>
              <span className="text-[#A89886]">19 Customer Reviews</span>
            </div>
          </div>

          {/* Quick Navigation Links (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-[#FFF8ED]">
              Navigation
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#hero" className="hover:text-[#E9A23B] transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#highlights" className="hover:text-[#E9A23B] transition-colors">
                  Highlights
                </a>
              </li>
              <li>
                <a href="#menu" className="hover:text-[#E9A23B] transition-colors">
                  Our Menu
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#E9A23B] transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#ratings" className="hover:text-[#E9A23B] transition-colors">
                  Customer Ratings
                </a>
              </li>
              <li>
                <a href="#location" className="hover:text-[#E9A23B] transition-colors">
                  Find Us & Map
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Address (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-[#FFF8ED]">
              Contact & Location
            </h3>
            
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#E9A23B] shrink-0 mt-1" />
                <span className="text-xs sm:text-sm text-[#A89886] font-light leading-relaxed">
                  {RESTAURANT_DETAILS.fullAddress}
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#E9A23B] shrink-0" />
                <a
                  href={`tel:${RESTAURANT_DETAILS.phone}`}
                  className="text-sm font-semibold text-[#FFF8ED] hover:text-[#E9A23B] transition-colors"
                >
                  {RESTAURANT_DETAILS.displayPhone}
                </a>
              </div>

              <div className="pt-1">
                <a
                  href={RESTAURANT_DETAILS.googleMapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-[#E9A23B] hover:text-[#FFF8ED] transition-colors"
                >
                  <span>Open Directions in Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar with Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#827263]">
          <p>
            © {currentYear} {RESTAURANT_DETAILS.name} {RESTAURANT_DETAILS.subtitle}. All rights reserved.
          </p>
          <div className="flex items-center gap-1 text-[#827263]">
            <span>Crafted with</span>
            <Heart className="w-3 h-3 text-[#E9A23B] fill-[#E9A23B]" />
            <span>for authentic Indian food lovers in Talegaon Dabhade</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
