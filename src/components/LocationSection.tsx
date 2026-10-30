import { useState } from 'react';
import { MapPin, Phone, ExternalLink, Copy, Check, Clock, Navigation } from 'lucide-react';
import { RESTAURANT_DETAILS } from '../types';

export default function LocationSection() {
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(RESTAURANT_DETAILS.fullAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="location" className="py-20 sm:py-28 bg-[#171411] border-b border-[#282119]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-semibold tracking-widest uppercase text-[#E9A23B]">
            VISIT & CONNECT
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif text-[#FFF8ED] tracking-tight">
            Find Aryan Biryani and Tandoor
          </h2>
          <p className="text-base sm:text-lg text-[#D1C3AF] font-light leading-relaxed">
            Conveniently situated along Talegaon Varale Road in Varale, Talegaon Dabhade. We look forward to welcoming you!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Contact Details Card (5 cols) */}
          <div className="lg:col-span-5 bg-[#1E1915] border border-[#3E3226] rounded-2xl p-6 sm:p-8 flex flex-col justify-between space-y-8 shadow-xl">
            <div className="space-y-6">
              
              {/* Address Block */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-[#E9A23B]">
                  <MapPin className="w-5 h-5 shrink-0" />
                  <span className="text-xs font-bold uppercase tracking-wider">Restaurant Address</span>
                </div>
                <div>
                  <p className="text-lg font-bold font-serif text-[#FFF8ED]">
                    {RESTAURANT_DETAILS.address}
                  </p>
                  <p className="text-sm text-[#D1C3AF] font-light mt-1 leading-relaxed">
                    {RESTAURANT_DETAILS.fullAddress}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={handleCopyAddress}
                  className="inline-flex items-center gap-1.5 text-xs text-[#E9A23B] hover:text-[#FFF8ED] transition-colors py-1 cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400 font-medium">Full address copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Address</span>
                    </>
                  )}
                </button>
              </div>

              {/* Phone Block */}
              <div className="space-y-2 pt-4 border-t border-[#31271D]">
                <div className="flex items-center gap-2 text-[#E9A23B]">
                  <Phone className="w-5 h-5 shrink-0" />
                  <span className="text-xs font-bold uppercase tracking-wider">Direct Phone Order & Enquiry</span>
                </div>
                <div>
                  <a
                    href={`tel:${RESTAURANT_DETAILS.phone}`}
                    className="text-2xl font-bold font-serif text-[#FFF8ED] hover:text-[#E9A23B] transition-colors block"
                  >
                    {RESTAURANT_DETAILS.displayPhone}
                  </a>
                  <p className="text-xs text-[#A89886] font-light mt-0.5">
                    Tap to open your phone dialler instantly.
                  </p>
                </div>
              </div>

              {/* Verified Hours Guidance */}
              <div className="p-4 bg-[#171411] border border-[#2F241A] rounded-xl flex items-start gap-3 text-xs text-[#BFAFA0]">
                <Clock className="w-4 h-4 text-[#E9A23B] shrink-0 mt-0.5" />
                <p>
                  <strong className="text-[#FFF8ED] font-semibold">Hours Verification:</strong> Operational hours vary by day and kitchen schedule. Please call <a href={`tel:${RESTAURANT_DETAILS.phone}`} className="text-[#E9A23B] underline font-medium">{RESTAURANT_DETAILS.displayPhone}</a> to confirm today’s dine-in seating and takeaway availability.
                </p>
              </div>
            </div>

            {/* Two Prominent Action Buttons */}
            <div className="space-y-3 pt-4 border-t border-[#31271D]">
              {/* Action 1: Call Restaurant */}
              <a
                href={`tel:${RESTAURANT_DETAILS.phone}`}
                className="w-full flex items-center justify-center gap-2.5 bg-[#E9A23B] hover:bg-[#d89330] text-[#171411] font-bold text-base py-3.5 px-6 rounded-xl shadow-lg transition-all active:scale-95"
              >
                <Phone className="w-5 h-5 fill-[#171411]" />
                <span>Call Restaurant ({RESTAURANT_DETAILS.displayPhone})</span>
              </a>

              {/* Action 2: Get Directions */}
              <a
                href={RESTAURANT_DETAILS.googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2.5 bg-[#251F19] hover:bg-[#312921] border border-[#483B2C] text-[#FFF8ED] font-semibold text-base py-3.5 px-6 rounded-xl transition-all active:scale-95 group"
              >
                <Navigation className="w-5 h-5 text-[#E9A23B] group-hover:rotate-45 transition-transform" />
                <span>Get Directions on Google Maps</span>
                <ExternalLink className="w-4 h-4 text-[#8A7969] ml-1" />
              </a>
            </div>

          </div>

          {/* Interactive Map Embed (7 cols) */}
          <div className="lg:col-span-7 rounded-2xl overflow-hidden border border-[#3E3226] shadow-xl relative min-h-[380px] sm:min-h-[460px] bg-[#1B1612] flex flex-col">
            <iframe
              title="Aryan Biryani and Tandoor Location Map"
              src="https://maps.google.com/maps?q=Talegaon+Varale+Road,+Varale,+Talegaon+Dabhade,+Maharashtra+410507&t=&z=14&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full flex-1 border-0 min-h-[340px]"
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            
            {/* Map footer strip */}
            <div className="p-3 bg-[#1B1612] border-t border-[#2F241A] flex items-center justify-between text-xs text-[#A89886] px-4">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#E9A23B]" />
                <span>Varale, Talegaon Dabhade (PIN: 410507)</span>
              </span>
              <a
                href={RESTAURANT_DETAILS.googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#E9A23B] hover:text-[#FFF8ED] font-medium inline-flex items-center gap-1"
              >
                <span>Open in Maps App</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
