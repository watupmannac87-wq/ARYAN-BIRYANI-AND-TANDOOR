export type MenuCategory = 'All' | 'Biryani' | 'Tandoor' | 'Starters' | 'Main Course' | 'Beverages';

export interface MenuItem {
  id: string;
  name: string;
  category: Exclude<MenuCategory, 'All'>;
  description: string;
  isVegetarian?: boolean;
  isSpicy?: boolean;
  isPopular?: boolean;
  priceNote: string; // e.g. "Sample · Ask for Price"
  image: string;
  fallbackImage: string;
}

export interface BusinessDetails {
  name: string;
  subtitle: string;
  category: string;
  address: string;
  fullAddress: string;
  phone: string;
  displayPhone: string;
  rating: number;
  reviewCount: number;
  googleMapsDirectionsUrl: string;
}

export const RESTAURANT_DETAILS: BusinessDetails = {
  name: "ARYAN",
  subtitle: "BIRYANI & TANDOOR",
  category: "Restaurant",
  address: "Talegaon Varale Road, Varale",
  fullAddress: "Talegaon Varale Road, Varale, Talegaon Dabhade, Maharashtra 410507, India",
  phone: "+919936001700",
  displayPhone: "+91 99360 01700",
  rating: 4.8,
  reviewCount: 19,
  googleMapsDirectionsUrl: "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent("Aryan Biryani and Tandoor, Talegaon Varale Road, Varale, Talegaon Dabhade, Maharashtra 410507, India")
};
