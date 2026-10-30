import { useState, useMemo } from 'react';
import { Search, Phone, Info, Eye, AlertCircle } from 'lucide-react';
import { MenuCategory, MenuItem, RESTAURANT_DETAILS } from '../types';
import { SAMPLE_MENU_ITEMS } from '../data/menuData';
import DishModal from './DishModal';

const CATEGORIES: MenuCategory[] = ['All', 'Biryani', 'Tandoor', 'Starters', 'Main Course', 'Beverages'];

export default function MenuSection() {
  const [activeCategory, setActiveCategory] = useState<MenuCategory>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [dietaryFilter, setDietaryFilter] = useState<'all' | 'veg' | 'non-veg'>('all');
  const [selectedDish, setSelectedDish] = useState<MenuItem | null>(null);
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});

  const filteredItems = useMemo(() => {
    return SAMPLE_MENU_ITEMS.filter((item) => {
      // Category match
      const matchesCategory = activeCategory === 'All' || item.category === activeCategory;

      // Search match
      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !query ||
        item.name.toLowerCase().includes(query) ||
        item.description.toLowerCase().includes(query);

      // Dietary match
      const matchesDietary =
        dietaryFilter === 'all' ||
        (dietaryFilter === 'veg' && item.isVegetarian) ||
        (dietaryFilter === 'non-veg' && !item.isVegetarian);

      return matchesCategory && matchesSearch && matchesDietary;
    });
  }, [activeCategory, searchQuery, dietaryFilter]);

  return (
    <section id="menu" className="py-20 sm:py-28 bg-[#14110E] border-b border-[#282119]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <span className="text-xs font-semibold tracking-widest uppercase text-[#E9A23B]">
            AUTHENTIC FLAVOURS & AROMAS
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif text-[#FFF8ED] tracking-tight">
            Our Menu Showcase
          </h2>
          <p className="text-base sm:text-lg text-[#CDC1AF] font-light leading-relaxed">
            Explore our traditional Dum Biryanis, sizzling Tandoor creations, rich Indian curries, and refreshing accompaniments.
          </p>
        </div>

        {/* Prominent Demo Menu Disclaimer Banner */}
        <div className="max-w-4xl mx-auto mb-10 p-4 sm:p-5 bg-[#201913] border border-[#443526] rounded-xl flex items-start gap-3.5 shadow-sm">
          <AlertCircle className="w-5 h-5 text-[#E9A23B] shrink-0 mt-0.5" />
          <div className="space-y-1 text-xs sm:text-sm text-[#CDC1AF]">
            <p className="font-semibold text-[#FFF8ED]">
              Notice for Guests & Restaurant Management:
            </p>
            <p className="font-light leading-relaxed">
              The dishes and prices presented below are <span className="text-[#E9A23B] font-medium">illustrative sample offerings</span> for website demonstration. The restaurant's official menu card and daily specials can be confirmed directly by telephone. Please call{' '}
              <a href={`tel:${RESTAURANT_DETAILS.phone}`} className="text-[#E9A23B] underline hover:text-[#FFF8ED] font-medium">
                {RESTAURANT_DETAILS.displayPhone}
              </a>{' '}
              for current availability, custom spice levels, and order enquiries.
            </p>
          </div>
        </div>

        {/* Filter & Search Bar Controls */}
        <div className="space-y-6 mb-12">
          
          {/* Category Tabs */}
          <div className="flex items-center justify-start sm:justify-center overflow-x-auto no-scrollbar py-2 gap-2">
            {CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-lg text-xs sm:text-sm font-semibold transition-all shrink-0 cursor-pointer ${
                  activeCategory === category
                    ? 'bg-[#E9A23B] text-[#171411] shadow-lg shadow-[#E9A23B]/10 scale-100'
                    : 'bg-[#1E1914] text-[#CDC1AF] hover:text-[#FFF8ED] hover:bg-[#28211B] border border-[#34291F]'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Search & Dietary Controls */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 max-w-4xl mx-auto">
            {/* Search Input */}
            <div className="relative w-full sm:w-80">
              <Search className="w-4 h-4 text-[#8A7969] absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search biryani, tandoori, tikka..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[#1B1612] border border-[#34291F] text-sm text-[#FFF8ED] placeholder-[#8A7969] rounded-lg pl-10 pr-4 py-2.5 focus:outline-none focus:border-[#E9A23B] transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#8A7969] hover:text-[#FFF8ED]"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Veg / Non-Veg Toggle Filter */}
            <div className="flex items-center gap-1.5 p-1 bg-[#1B1612] border border-[#34291F] rounded-lg">
              <button
                onClick={() => setDietaryFilter('all')}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                  dietaryFilter === 'all'
                    ? 'bg-[#2E241B] text-[#FFF8ED]'
                    : 'text-[#A08E7C] hover:text-[#FFF8ED]'
                }`}
              >
                All
              </button>
              <button
                onClick={() => setDietaryFilter('veg')}
                className={`px-3 py-1.5 text-xs font-medium rounded-md flex items-center gap-1.5 transition-colors ${
                  dietaryFilter === 'veg'
                    ? 'bg-emerald-950/80 text-emerald-300 border border-emerald-800/60'
                    : 'text-[#A08E7C] hover:text-emerald-300'
                }`}
              >
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                Pure Veg
              </button>
              <button
                onClick={() => setDietaryFilter('non-veg')}
                className={`px-3 py-1.5 text-xs font-medium rounded-md flex items-center gap-1.5 transition-colors ${
                  dietaryFilter === 'non-veg'
                    ? 'bg-red-950/80 text-red-300 border border-red-800/60'
                    : 'text-[#A08E7C] hover:text-red-300'
                }`}
              >
                <span className="w-2 h-2 rounded-full bg-red-500" />
                Non-Veg
              </button>
            </div>
          </div>
        </div>

        {/* Dish Grid */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-16 px-4 bg-[#1B1612] rounded-xl border border-[#32271D] max-w-xl mx-auto space-y-4">
            <Info className="w-8 h-8 text-[#E9A23B] mx-auto" />
            <h3 className="text-lg font-bold font-serif text-[#FFF8ED]">No matching dishes found</h3>
            <p className="text-sm text-[#A08E7C]">
              Try searching for another dish or reset your dietary and category filters.
            </p>
            <button
              onClick={() => {
                setActiveCategory('All');
                setSearchQuery('');
                setDietaryFilter('all');
              }}
              className="px-4 py-2 bg-[#E9A23B] text-[#171411] text-xs font-bold rounded-lg hover:bg-[#d89330]"
            >
              Reset All Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredItems.map((item) => {
              const currentImg = failedImages[item.id] ? item.fallbackImage : item.image;

              return (
                <div
                  key={item.id}
                  onClick={() => setSelectedDish(item)}
                  className="group flex flex-col bg-[#1D1814] rounded-xl border border-[#34291F] overflow-hidden hover:border-[#E9A23B]/50 transition-all duration-300 hover:shadow-xl cursor-pointer hover:-translate-y-1"
                >
                  {/* Dish Image */}
                  <div className="relative h-52 sm:h-56 bg-[#120F0D] overflow-hidden">
                    <img
                      src={currentImg}
                      onError={() => setFailedImages((prev) => ({ ...prev, [item.id]: true }))}
                      alt={item.name}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1D1814] via-transparent to-black/20" />

                    {/* Category & Veg/Non-Veg badges */}
                    <div className="absolute top-3 left-3 flex items-center gap-1.5">
                      <span className="px-2 py-0.5 text-[11px] font-semibold uppercase bg-[#171411]/90 backdrop-blur-sm border border-[#3E3226] text-[#E9A23B] rounded">
                        {item.category}
                      </span>
                      <span
                        className={`px-2 py-0.5 text-[11px] font-semibold rounded border ${
                          item.isVegetarian
                            ? 'bg-emerald-950/85 border-emerald-700/60 text-emerald-300'
                            : 'bg-red-950/85 border-red-700/60 text-red-300'
                        }`}
                      >
                        {item.isVegetarian ? '● Veg' : '▲ Non-Veg'}
                      </span>
                    </div>

                    {/* Quick view icon */}
                    <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity bg-[#171411]/90 p-2 rounded-lg text-[#E9A23B] border border-[#443526]">
                      <Eye className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Dish Details */}
                  <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                    <div className="space-y-1.5">
                      <div className="flex items-start justify-between gap-2">
                        <h3 className="text-lg font-bold font-serif text-[#FFF8ED] group-hover:text-[#E9A23B] transition-colors leading-snug">
                          {item.name}
                        </h3>
                      </div>
                      <p className="text-xs sm:text-sm text-[#BBAFA0] font-light leading-relaxed line-clamp-2">
                        {item.description}
                      </p>
                    </div>

                    {/* Price Placeholder & Action Line */}
                    <div className="pt-3 border-t border-[#2C2219] flex items-center justify-between">
                      <span className="text-xs font-semibold text-[#E9A23B] tracking-wide">
                        {item.priceNote}
                      </span>

                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedDish(item);
                        }}
                        className="text-xs font-medium text-[#CDC1AF] hover:text-[#FFF8ED] flex items-center gap-1"
                      >
                        <span>Details</span>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Bottom Call to Action for Custom Orders */}
        <div className="mt-14 text-center">
          <p className="text-sm text-[#A89886] mb-4">
            Looking for family packs, party orders, or specific dish customizations?
          </p>
          <a
            href={`tel:${RESTAURANT_DETAILS.phone}`}
            className="inline-flex items-center gap-2 bg-[#E9A23B] hover:bg-[#d89330] text-[#171411] font-bold text-sm px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-all active:scale-95"
          >
            <Phone className="w-4 h-4" />
            <span>Call Restaurant to Enquire: {RESTAURANT_DETAILS.displayPhone}</span>
          </a>
        </div>

      </div>

      {/* Dish Modal */}
      <DishModal dish={selectedDish} onClose={() => setSelectedDish(null)} />
    </section>
  );
}
