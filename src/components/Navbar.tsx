import { useState, useEffect } from 'react';
import { Phone, MapPin, Menu, X, Star } from 'lucide-react';
import { RESTAURANT_DETAILS } from '../types';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Our Menu', href: '#menu' },
    { name: 'About Us', href: '#about' },
    { name: 'Ratings', href: '#ratings' },
    { name: 'Find Us', href: '#location' },
  ];

  return (
    <>
      {/* Top verified bar */}
      <div className="bg-[#120F0D] border-b border-[#2A231C] text-xs text-[#E2D7C5] py-2 px-4 transition-all">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-[#E9A23B]">
              <MapPin className="w-3.5 h-3.5" />
              <span className="text-[#E2D7C5] font-light">Varale, Talegaon Dabhade, Maharashtra</span>
            </span>
            <span className="hidden sm:inline-block text-[#3A3127]">|</span>
            <span className="hidden sm:flex items-center gap-1 text-[#E9A23B]">
              <Star className="w-3.5 h-3.5 fill-[#E9A23B]" />
              <span className="text-[#FFF8ED] font-medium">4.8 / 5</span>
              <span className="text-[#A89886] font-light">(19 Customer Reviews)</span>
            </span>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={`tel:${RESTAURANT_DETAILS.phone}`}
              className="text-[#E9A23B] hover:text-[#FFF8ED] transition-colors flex items-center gap-1.5 font-medium tracking-wide"
            >
              <Phone className="w-3 h-3" />
              <span>Call: {RESTAURANT_DETAILS.displayPhone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main sticky navigation */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#171411]/95 backdrop-blur-md shadow-2xl border-b border-[#2D241C]'
            : 'bg-[#171411]/80 backdrop-blur-sm border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Custom Brand Logo */}
            <a href="#hero" className="group flex flex-col items-start focus:outline-none">
              <span className="text-2xl sm:text-3xl font-extrabold tracking-widest text-[#FFF8ED] font-serif group-hover:text-[#E9A23B] transition-colors">
                ARYAN
              </span>
              <span className="text-[10px] sm:text-xs font-semibold tracking-[0.28em] text-[#E9A23B] -mt-1 group-hover:text-[#FFF8ED] transition-colors">
                BIRYANI & TANDOOR
              </span>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium text-[#FFF8ED]/85 hover:text-[#E9A23B] transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#E9A23B] hover:after:w-full after:transition-all"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden sm:flex items-center gap-3">
              <a
                href={`tel:${RESTAURANT_DETAILS.phone}`}
                className="inline-flex items-center gap-2 bg-[#E9A23B] hover:bg-[#d4902f] text-[#171411] font-semibold text-sm px-5 py-2.5 rounded-lg shadow-md hover:shadow-lg transition-all active:scale-95"
              >
                <Phone className="w-4 h-4 fill-[#171411]" />
                <span>Call to Order</span>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex md:hidden items-center gap-2">
              <a
                href={`tel:${RESTAURANT_DETAILS.phone}`}
                aria-label="Call restaurant"
                className="p-2.5 bg-[#E9A23B] text-[#171411] rounded-lg active:scale-95 transition-transform"
              >
                <Phone className="w-4 h-4" />
              </a>

              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2.5 rounded-lg text-[#FFF8ED] hover:text-[#E9A23B] hover:bg-[#25201A] transition-colors focus:outline-none"
                aria-label="Toggle navigation menu"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-[#171411] border-b border-[#2D241C] px-4 pt-3 pb-6 space-y-3 animate-in fade-in slide-in-from-top-4 duration-200">
            <div className="flex flex-col space-y-2 border-b border-[#2A231C] pb-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-3 py-2 text-base font-medium text-[#FFF8ED] hover:bg-[#221D17] hover:text-[#E9A23B] rounded-md transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="pt-2 space-y-2.5">
              <a
                href={`tel:${RESTAURANT_DETAILS.phone}`}
                className="w-full flex items-center justify-center gap-2 bg-[#E9A23B] hover:bg-[#d4902f] text-[#171411] font-semibold text-sm px-4 py-3 rounded-lg shadow-md transition-all active:scale-95"
              >
                <Phone className="w-4 h-4 fill-[#171411]" />
                <span>Call to Order ({RESTAURANT_DETAILS.displayPhone})</span>
              </a>

              <a
                href={RESTAURANT_DETAILS.googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-[#221D17] border border-[#3A3026] hover:bg-[#2B241D] text-[#FFF8ED] font-medium text-sm px-4 py-2.5 rounded-lg transition-all"
              >
                <MapPin className="w-4 h-4 text-[#E9A23B]" />
                <span>Get Directions on Google Maps</span>
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
