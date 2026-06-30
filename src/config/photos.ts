import { CONFIG } from '../constants';

export interface PhotoConfig {
  id: string;
  src: string;
  title: { fr: string; ar: string };
  categoryKey: string;
  span: string;
  type?: 'image' | 'video';
}

export interface GalleryCategory {
  key: string;
  label: { fr: string; ar: string };
  icon?: string;
}

export const GALLERY_CATEGORIES: GalleryCategory[] = [
  { key: 'all', label: { fr: 'Tout', ar: 'الكل' } },
  { key: 'motos', label: { fr: 'Motos', ar: 'دراجات نارية' } },
  { key: 'reparation', label: { fr: 'Réparation', ar: 'صيانة' } },
  { key: 'velos', label: { fr: 'Vélos', ar: 'دراجات' } },
  { key: 'trottinettes', label: { fr: 'Trottinettes', ar: 'سكوترات' } },
  { key: 'accessoires', label: { fr: 'Accessoires', ar: 'إكسسوارات' } },
];

export const PHOTOS: PhotoConfig[] = [
  // ── Motos ──
  {
    id: 'moto-1',
    src: 'https://images.unsplash.com/photo-1558981359-219d6364c9c8?w=800&q=80',
    title: { fr: 'Sport Performance', ar: 'أداء رياضي' },
    categoryKey: 'motos',
    span: 'col-span-12 md:col-span-8 md:row-span-2',
  },
  {
    id: 'moto-2',
    src: 'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=800&q=80',
    title: { fr: 'Custom Cruiser', ar: 'دراجة مخصصة' },
    categoryKey: 'motos',
    span: 'col-span-12 md:col-span-4',
  },
  {
    id: 'moto-3',
    src: 'https://images.unsplash.com/photo-1609630875174-b7b119e63b5d?w=800&q=80',
    title: { fr: 'Street Legacy', ar: 'إرث الشارع' },
    categoryKey: 'motos',
    span: 'col-span-12 md:col-span-4',
  },
  {
    id: 'moto-4',
    src: 'https://images.unsplash.com/photo-1591637333184-19aa84b3e01f?w=800&q=80',
    title: { fr: 'Adventure Ready', ar: 'مغامرة جاهزة' },
    categoryKey: 'motos',
    span: 'col-span-12 md:col-span-4',
  },

  // ── Réparation ──
  {
    id: 'atelier-1',
    src: CONFIG.images.atelier,
    title: { fr: 'Master Workshop', ar: 'ورشة احترافية' },
    categoryKey: 'reparation',
    span: 'col-span-12 md:col-span-8 md:row-span-2',
  },
  {
    id: 'atelier-2',
    src: 'https://images.unsplash.com/photo-1632823474686-d130dc0d8eae?w=800&q=80',
    title: { fr: 'Diagnostic Précis', ar: 'تشخيص دقيق' },
    categoryKey: 'reparation',
    span: 'col-span-12 md:col-span-4',
  },
  {
    id: 'atelier-3',
    src: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=800&q=80',
    title: { fr: 'Mécanique Générale', ar: 'ميكانيك عام' },
    categoryKey: 'reparation',
    span: 'col-span-12 md:col-span-4',
  },
  {
    id: 'atelier-4',
    src: 'https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=800&q=80',
    title: { fr: 'Moteur & Transmission', ar: 'محرك وناقل حركة' },
    categoryKey: 'reparation',
    span: 'col-span-12 md:col-span-4',
  },

  // ── Vélos ──
  {
    id: 'velo-1',
    src: 'https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=800&q=80',
    title: { fr: 'VTT Tout-Terrain', ar: 'دراجة جبلية' },
    categoryKey: 'velos',
    span: 'col-span-12 md:col-span-4',
  },
  {
    id: 'velo-2',
    src: CONFIG.images.ebike,
    title: { fr: 'E-Bike Urbain', ar: 'دراجة كهربائية حضرية' },
    categoryKey: 'velos',
    span: 'col-span-12 md:col-span-4',
  },
  {
    id: 'velo-3',
    src: 'https://images.unsplash.com/photo-1576435728678-68d0fbf94ac4?w=800&q=80',
    title: { fr: 'Vélo de Route', ar: 'دراجة سباق' },
    categoryKey: 'velos',
    span: 'col-span-12 md:col-span-4',
  },

  // ── Trottinettes ──
  {
    id: 'trot-1',
    src: CONFIG.images.trotinet,
    title: { fr: 'e-Trottinette', ar: 'سكوتر كهربائي' },
    categoryKey: 'trottinettes',
    span: 'col-span-12 md:col-span-4',
  },
  {
    id: 'trot-2',
    src: CONFIG.images.tricycle,
    title: { fr: 'Tricycle Électrique', ar: 'تروسيكل كهربائي' },
    categoryKey: 'trottinettes',
    span: 'col-span-12 md:col-span-4',
  },
  {
    id: 'trot-3',
    src: 'https://images.unsplash.com/photo-1623856016909-e3616c389bfb?w=800&q=80',
    title: { fr: 'Scooter Urbain', ar: 'سكوتر حضري' },
    categoryKey: 'trottinettes',
    span: 'col-span-12 md:col-span-4',
  },
  {
    id: 'trot-4',
    src: CONFIG.images.escooter,
    title: { fr: 'Scooter Électrique', ar: 'سكوتر كهربائي' },
    categoryKey: 'trottinettes',
    span: 'col-span-12 md:col-span-4',
  },

  // ── Accessoires ──
  {
    id: 'acc-1',
    src: CONFIG.images.parts,
    title: { fr: 'Pièces Détachées', ar: 'قطع غيار' },
    categoryKey: 'accessoires',
    span: 'col-span-12 md:col-span-4',
  },
  {
    id: 'acc-2',
    src: CONFIG.images.accessories,
    title: { fr: 'Équipement Pilote', ar: 'معدات راكب' },
    categoryKey: 'accessoires',
    span: 'col-span-12 md:col-span-4',
  },
  {
    id: 'acc-3',
    src: 'https://images.unsplash.com/photo-1558980664-3a031cf67ea8?w=800&q=80',
    title: { fr: 'Casques & Protection', ar: 'خوذات واقية' },
    categoryKey: 'accessoires',
    span: 'col-span-12 md:col-span-4',
  },
  {
    id: 'acc-4',
    src: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800&q=80',
    title: { fr: 'Pièces Moto Sport', ar: 'قطع دراجات رياضية' },
    categoryKey: 'accessoires',
    span: 'col-span-12 md:col-span-4',
  },
];
