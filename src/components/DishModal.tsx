import { useState } from 'react';
import { X, Phone, Check, Share2, Info } from 'lucide-react';
import { MenuItem, RESTAURANT_DETAILS } from '../types';

interface DishModalProps {
  dish: MenuItem | null;
  onClose: () => void;
}

export default function DishModal({ dish, onClose }: DishModalProps) {
  const [copied, setCopied] = useState(false);
  const [imgError, setImgError] = useState(false);

  if (!dish) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(`Aryan Biryani & Tandoor Dish: ${dish.name} (${dish.category}) - Enquire at ${RESTAURANT_DETAILS.displayPhone}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-xl bg-[#1E1915] border border-[#3E3226] rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-20 p-2 rounded-full bg-[#171411]/80 text-[#FFF8ED] hover:text-[#E9A23B] transition-colors hover:bg-[#171411]"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Image */}
        <div className="relative h-64 sm:h-72 w-full bg-[#120F0D] shrink-0">
          <img
            src={imgError ? dish.fallbackImage : dish.image}
            onError={() => setImgError(true)}
            alt={dish.name}
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1E1915] via-transparent to-black/30" />
          
          <div className="absolute top-4 left-4 flex items-center gap-2">
            <span className="px-2.5 py-1 text-xs font-semibold uppercase bg-[#171411]/90 border border-[#3E3226] text-[#E9A23B] rounded">
              {dish.category}
            </span>
            <span className={`px-2 py-0.5 text-xs font-medium rounded border ${
              dish.isVegetarian 
                ? 'bg-emerald-950/80 border-emerald-700/60 text-emerald-300' 
                : 'bg-red-950/80 border-red-700/60 text-red-300'
            }`}>
              {dish.isVegetarian ? '● Pure Veg' : '▲ Non-Veg'}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-5">
          <div>
            <h3 className="text-2xl font-bold font-serif text-[#FFF8ED]">
              {dish.name}
            </h3>
            <p className="text-sm text-[#E9A23B] font-medium pt-1">
              {dish.priceNote}
            </p>
          </div>

          <p className="text-sm sm:text-base text-[#D4C7B5] leading-relaxed font-light">
            {dish.description}
          </p>

          {/* Sample Item Notice */}
          <div className="p-3.5 bg-[#251F19] border border-[#3E3226] rounded-lg flex items-start gap-3 text-xs text-[#BFAFA0]">
            <Info className="w-4 h-4 text-[#E9A23B] shrink-0 mt-0.5" />
            <p>
              <strong className="text-[#FFF8ED] font-semibold">Demo Placeholder Notice:</strong> This dish is displayed as a sample demonstration item. The restaurant owner will confirm exact ingredients, availability, and prices. Please call directly to verify today’s menu.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="pt-2 flex flex-col sm:flex-row gap-3">
            <a
              href={`tel:${RESTAURANT_DETAILS.phone}`}
              className="flex-1 flex items-center justify-center gap-2 bg-[#E9A23B] hover:bg-[#d89330] text-[#171411] font-bold text-sm py-3 px-4 rounded-lg shadow transition-all active:scale-95"
            >
              <Phone className="w-4 h-4" />
              <span>Call to Inquire ({RESTAURANT_DETAILS.displayPhone})</span>
            </a>

            <button
              onClick={handleCopy}
              className="flex items-center justify-center gap-2 bg-[#28211A] hover:bg-[#342B22] border border-[#3D3125] text-[#FFF8ED] font-medium text-sm py-3 px-4 rounded-lg transition-colors"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span className="text-emerald-400">Copied!</span>
                </>
              ) : (
                <>
                  <Share2 className="w-4 h-4 text-[#E9A23B]" />
                  <span>Share Dish</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
