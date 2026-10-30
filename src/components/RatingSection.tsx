import { Star, MessageSquare, ThumbsUp, HeartHandshake, ExternalLink } from 'lucide-react';
import { RESTAURANT_DETAILS } from '../types';

export default function RatingSection() {
  const ratingAttributes = [
    {
      title: 'Aromatic Biryani & Spices',
      description: 'Guests appreciate the rich aroma, fluffy basmati grains, and well-balanced spices in the biryani handis.',
      icon: ThumbsUp,
    },
    {
      title: 'Fresh Tandoori Specialities',
      description: 'Charcoal-grilled chicken and paneer tikkas cooked fresh upon order with smoky tandoor flavour.',
      icon: MessageSquare,
    },
    {
      title: 'Warm & Welcoming Service',
      description: 'Friendly hospitality for diners and responsive telephone enquiry assistance for takeaways.',
      icon: HeartHandshake,
    },
  ];

  return (
    <section id="ratings" className="py-20 sm:py-28 bg-[#15110E] border-b border-[#282119]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Rating Card Header & Showcase */}
        <div className="bg-gradient-to-br from-[#1E1915] to-[#171411] border border-[#3E3226] rounded-2xl p-8 sm:p-12 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Score Presentation (5 Cols) */}
            <div className="lg:col-span-5 text-center lg:text-left space-y-4 border-b lg:border-b-0 lg:border-r border-[#34291F] pb-8 lg:pb-0 lg:pr-10">
              <span className="text-xs font-semibold tracking-widest uppercase text-[#E9A23B]">
                VERIFIED CUSTOMER RATING
              </span>
              
              <div className="flex items-baseline justify-center lg:justify-start gap-2">
                <span className="text-6xl sm:text-7xl font-extrabold font-serif text-[#FFF8ED]">
                  4.8
                </span>
                <span className="text-2xl text-[#8E7E6E] font-serif font-light">
                  / 5
                </span>
              </div>

              {/* 5 Stars */}
              <div className="flex items-center justify-center lg:justify-start gap-1 text-[#E9A23B]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-[#E9A23B]" />
                ))}
              </div>

              <p className="text-base font-medium text-[#FFF8ED]">
                Based on 19 reviews
              </p>

              <p className="text-xs text-[#A89886] font-light leading-relaxed">
                Reflecting genuine customer feedback from local patrons who have enjoyed meals at Aryan Biryani and Tandoor.
              </p>

              <div className="pt-2">
                <a
                  href={RESTAURANT_DETAILS.googleMapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-semibold text-[#E9A23B] hover:text-[#FFF8ED] transition-colors underline underline-offset-4"
                >
                  <span>Search on Google Maps & Read Patron Feedback</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Right Pillars (7 Cols) */}
            <div className="lg:col-span-7 space-y-5">
              <h3 className="text-xl sm:text-2xl font-bold font-serif text-[#FFF8ED]">
                What Diners Love Most
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {ratingAttributes.map((attr, idx) => {
                  const Icon = attr.icon;
                  return (
                    <div
                      key={idx}
                      className="p-4 bg-[#181310] border border-[#2F241A] rounded-xl space-y-2 hover:border-[#E9A23B]/40 transition-colors"
                    >
                      <div className="w-8 h-8 rounded-lg bg-[#271E16] flex items-center justify-center text-[#E9A23B]">
                        <Icon className="w-4 h-4" />
                      </div>
                      <h4 className="text-sm font-bold text-[#FFF8ED]">
                        {attr.title}
                      </h4>
                      <p className="text-xs text-[#BFAFA0] font-light leading-relaxed">
                        {attr.description}
                      </p>
                    </div>
                  );
                })}
              </div>

              <div className="pt-2 text-xs text-[#8A7969] italic">
                * Note: Individual review excerpts and customer testimonials will be displayed with permission once verified with the business owner.
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
