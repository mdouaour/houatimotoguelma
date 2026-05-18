export type Locale = 'fr' | 'ar';

export interface LocalizedText {
  fr: string;
  ar: string;
}

export interface GalleryItem {
  id: string;
  type: 'image' | 'video';
  url: string;
  title: LocalizedText;
  category: LocalizedText;
  span: string;
  enabled: boolean;
}

export interface CustomSection {
  id: string;
  enabled: boolean;
  title: LocalizedText;
  description: LocalizedText;
  buttonLabel: LocalizedText;
  buttonUrl: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  text: LocalizedText;
  rating: 1 | 2 | 3 | 4 | 5;
  date: LocalizedText;
}

export interface LandingContent {
  business: {
    name: string;
    phone: string;
    whatsapp: string;
    facebook: string;
    googleMaps: string;
    location: string;
  };
  hero: {
    tag: LocalizedText;
    title: LocalizedText;
    sub: LocalizedText;
    primaryCtaLabel: LocalizedText;
    primaryCtaUrl: string;
    secondaryCtaLabel: LocalizedText;
    secondaryCtaUrl: string;
    image: string;
  };
  sectionVisibility: {
    trustBar: boolean;
    features: boolean;
    services: boolean;
    gallery: boolean;
    brands: boolean;
    testimonials: boolean;
    customSections: boolean;
  };
  gallery: {
    title: LocalizedText;
    subtitle: LocalizedText;
    items: GalleryItem[];
  };
  customSections: CustomSection[];
  brands: string[];
  testimonials: TestimonialItem[];
}
