import { create } from 'zustand';
import { IndustryId, DesignStyleId } from '../types';

export type MarketplaceTheme = 'cosmic' | 'cyber' | 'gold' | 'emerald' | 'frost';

interface MarketplaceStore {
  // Persistence
  favorites: string[];
  recentlyViewed: string[];
  activeTheme: MarketplaceTheme;

  // Filters & Search
  searchQuery: string;
  selectedIndustry: IndustryId | 'all';
  selectedCategory: string | 'all';
  selectedDesignStyle: DesignStyleId | 'all';
  selectedSort: 'featured' | 'recent' | 'alphabetical';

  // Actions
  toggleFavorite: (templateId: string) => void;
  isFavorite: (templateId: string) => boolean;
  addRecentlyViewed: (templateId: string) => void;
  setActiveTheme: (theme: MarketplaceTheme) => void;
  setSearchQuery: (query: string) => void;
  setSelectedIndustry: (industry: IndustryId | 'all') => void;
  setSelectedCategory: (category: string | 'all') => void;
  setSelectedDesignStyle: (style: DesignStyleId | 'all') => void;
  setSelectedSort: (sort: 'featured' | 'recent' | 'alphabetical') => void;
  resetFilters: () => void;
}

const FAVORITES_KEY = 'uiforge_favorites_v1';
const RECENTS_KEY = 'uiforge_recent_templates_v1';
const THEME_KEY = 'uiforge_theme_v1';

function applyThemeToDocument(theme: MarketplaceTheme): void {
  if (typeof document !== 'undefined') {
    document.documentElement.setAttribute('data-theme', theme);
  }
}

function loadFromStorage<T>(key: string, defaultValue: T): T {
  try {
    const val = localStorage.getItem(key);
    return val ? JSON.parse(val) : defaultValue;
  } catch {
    return defaultValue;
  }
}

function saveToStorage<T>(key: string, value: T): void {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {
    // Ignore quota issues
  }
}

const initialTheme = loadFromStorage<MarketplaceTheme>(THEME_KEY, 'cosmic');
applyThemeToDocument(initialTheme);

export const useMarketplaceStore = create<MarketplaceStore>((set, get) => ({
  favorites: loadFromStorage<string[]>(FAVORITES_KEY, ['dermatology-luxury-01', 'restaurant-aura-01']),
  recentlyViewed: loadFromStorage<string[]>(RECENTS_KEY, []),
  activeTheme: initialTheme,

  searchQuery: '',
  selectedIndustry: 'all',
  selectedCategory: 'all',
  selectedDesignStyle: 'all',
  selectedSort: 'featured',

  setActiveTheme: (theme: MarketplaceTheme) => {
    saveToStorage(THEME_KEY, theme);
    applyThemeToDocument(theme);
    set({ activeTheme: theme });
  },

  toggleFavorite: (templateId: string) => {
    const { favorites } = get();
    const exists = favorites.includes(templateId);
    const updated = exists
      ? favorites.filter((id) => id !== templateId)
      : [...favorites, templateId];

    saveToStorage(FAVORITES_KEY, updated);
    set({ favorites: updated });
  },

  isFavorite: (templateId: string) => {
    return get().favorites.includes(templateId);
  },

  addRecentlyViewed: (templateId: string) => {
    const { recentlyViewed } = get();
    const filtered = recentlyViewed.filter((id) => id !== templateId);
    const updated = [templateId, ...filtered].slice(0, 10);

    saveToStorage(RECENTS_KEY, updated);
    set({ recentlyViewed: updated });
  },

  setSearchQuery: (query) => set({ searchQuery: query }),
  setSelectedIndustry: (industry) => set({ selectedIndustry: industry, selectedCategory: 'all' }),
  setSelectedCategory: (category) => set({ selectedCategory: category }),
  setSelectedDesignStyle: (style) => set({ selectedDesignStyle: style }),
  setSelectedSort: (sort) => set({ selectedSort: sort }),

  resetFilters: () =>
    set({
      searchQuery: '',
      selectedIndustry: 'all',
      selectedCategory: 'all',
      selectedDesignStyle: 'all',
      selectedSort: 'featured',
    }),
}));
