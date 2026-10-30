import { Phone, UtensilsCrossed, MapPin } from 'lucide-react';
import { RESTAURANT_DETAILS } from '../types';

export default function EnquiryCTA() {
  return (
    <section className="relative py-16 sm:py-24 bg-[#14100D] border-b border-[#282119] overflow-hidden">
      {/* Decorative gradient accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#711F25]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#E9A23B]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#251D16] border border-[#3D2E21] text-[#E9A23B] text-xs font-semibold tracking-wider uppercase rounded-full">
          <UtensilsCrossed className="w-3.5 h-3.5" />
          <span>DIRECT PHONE ENQUIRIES & ORDERS</span>
        </div>

        <div className="space-y-4 max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-5xl font-bold font-serif text-[#FFF8ED] tracking-tight">
            Craving Authentic Biryani or Sizzling Tandoor?
          </h2>
          <p className="text-base sm:text-lg text-[#D1C3AF] font-light leading-relaxed">
            Call us directly to place your takeaway orders, enquire about daily handi preparations, or check our current offerings. We are ready to serve you!
          </p>
        </div>

        {/* Clear actionable call button */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <a
            href={`tel:${RESTAURANT_DETAILS.phone}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#E9A23B] hover:bg-[#d89330] text-[#171411] font-bold text-lg px-8 py-4 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-200 active:scale-95"
          >
            <Phone className="w-5 h-5 fill-[#171411]" />
            <span>Call to Order: {RESTAURANT_DETAILS.displayPhone}</span>
          </a>

          <a
            href={RESTAURANT_DETAILS.googleMapsDirectionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#201A14] hover:bg-[#2C231B] border border-[#3B2E21] text-[#FFF8ED] font-semibold text-base px-6 py-4 rounded-xl transition-colors"
          >
            <MapPin className="w-5 h-5 text-[#E9A23B]" />
            <span>Get Directions</span>
          </a>
        </div>

        {/* Reassurance text */}
        <p className="text-xs text-[#8A7969] font-light">
          No complicated app downloads required. One quick tap connects you straight to the restaurant counter.
        </p>

      </div>
    </section>
  );
}
