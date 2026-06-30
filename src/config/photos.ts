import { CONFIG } from '../constants';

export interface PhotoConfig {
  id: string;
  src: string;
  title: { fr: string; ar: string };
  category: { fr: string; ar: string };
  span: string;
  type?: 'image' | 'video';
}

export const PHOTOS: PhotoConfig[] = [
  {
    id: 'moto-performance',
    src: CONFIG.images.moto,
    title: { fr: 'Performance Engines', ar: 'محركات عالية الأداء' },
    category: { fr: 'Motorcycles', ar: 'دراجات نارية' },
    span: 'col-span-12 md:col-span-8 md:row-span-2',
  },
  {
    id: 'scooters-electriques',
    src: CONFIG.images.escooter,
    title: { fr: 'Smart Scooters', ar: 'سكوترات ذكية' },
    category: { fr: 'Electric', ar: 'كهربائي' },
    span: 'col-span-12 md:col-span-4',
  },
  {
    id: 'e-bikes',
    src: CONFIG.images.ebike,
    title: { fr: 'Eco Revolution', ar: 'ثورة صديقة للبيئة' },
    category: { fr: 'E-Bikes', ar: 'دراجات كهربائية' },
    span: 'col-span-12 md:col-span-4',
  },
  {
    id: 'trotinettes',
    src: CONFIG.images.trotinet,
    title: { fr: 'e-Trotinettes', ar: 'تروتينيت كهربائية' },
    category: { fr: 'KickScooter', ar: 'سكوتر واقف' },
    span: 'col-span-12 md:col-span-4',
  },
  {
    id: 'atelier',
    src: CONFIG.images.atelier,
    title: { fr: 'Master Workshop', ar: 'ورشة احترافية' },
    category: { fr: 'Expert Repair', ar: 'صيانة متخصصة' },
    span: 'col-span-12 md:col-span-8',
  },
  {
    id: 'pieces-originales',
    src: CONFIG.images.parts,
    title: { fr: 'Original Parts', ar: 'قطع أصلية' },
    category: { fr: 'Inventory', ar: 'مخزون' },
    span: 'col-span-12 md:col-span-4',
  },
  {
    id: 'accessoires',
    src: CONFIG.images.accessories,
    title: { fr: 'Accessories', ar: 'إكسسوارات' },
    category: { fr: 'Gear', ar: 'معدات' },
    span: 'col-span-12 md:col-span-4',
  },
  {
    id: 'tricycles',
    src: CONFIG.images.tricycle,
    title: { fr: 'Tricycles Électriques', ar: 'تروسيكل كهربائي' },
    category: { fr: 'Utility', ar: 'نفعي' },
    span: 'col-span-12 md:col-span-4',
  },
];
