/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { Phone, ArrowUp } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Highlights from './components/Highlights';
import MenuSection from './components/MenuSection';
import AboutSection from './components/AboutSection';
import RatingSection from './components/RatingSection';
import LocationSection from './components/LocationSection';
import EnquiryCTA from './components/EnquiryCTA';
import Footer from './components/Footer';
import { RESTAURANT_DETAILS } from './types';

export default function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#171411] text-[#FFF8ED] flex flex-col selection:bg-[#E9A23B] selection:text-[#171411]">
      {/* Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero */}
        <Hero />

        {/* 2. Restaurant Highlights */}
        <Highlights />

        {/* 3. Menu Showcase */}
        <MenuSection />

        {/* 4. About the Restaurant */}
        <AboutSection />

        {/* 5. Customer Rating Showcase */}
        <RatingSection />

        {/* 6. Location and Contact */}
        <LocationSection />

        {/* 7. Order & Enquiry Experience CTA */}
        <EnquiryCTA />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Mobile Quick Action Bar (visible on mobile only) */}
      <div className="sm:hidden fixed bottom-4 left-4 right-4 z-40">
        <a
          href={`tel:${RESTAURANT_DETAILS.phone}`}
          className="w-full flex items-center justify-center gap-2.5 bg-[#E9A23B] hover:bg-[#d89330] text-[#171411] font-bold text-sm py-3.5 px-4 rounded-xl shadow-2xl transition-transform active:scale-95"
        >
          <Phone className="w-4 h-4 fill-[#171411]" />
          <span>Call to Order ({RESTAURANT_DETAILS.displayPhone})</span>
        </a>
      </div>

      {/* Scroll to Top Button for desktop */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          aria-label="Scroll back to top"
          className="hidden sm:flex fixed bottom-6 right-6 z-40 p-3 rounded-xl bg-[#221D17] hover:bg-[#2F271F] border border-[#3E3226] text-[#E9A23B] shadow-xl hover:shadow-2xl transition-all duration-200 hover:-translate-y-0.5 focus:outline-none"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </div>
  );
}
