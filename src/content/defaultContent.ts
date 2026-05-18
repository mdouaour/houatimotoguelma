import { CONFIG, I18N } from '../constants';
import { LandingContent } from '../types/content';

export const STORAGE_KEY = 'houati:landing-content:v1';

const randomId = () => Math.random().toString(36).slice(2, 10);

export function createDefaultContent(): LandingContent {
  return {
    business: {
      name: CONFIG.name,
      phone: CONFIG.phone,
      whatsapp: CONFIG.whatsapp,
      facebook: CONFIG.facebook,
      googleMaps: CONFIG.googleMaps,
      location: CONFIG.location,
    },
    hero: {
      tag: {
        fr: I18N.fr.hero.tag,
        ar: I18N.ar.hero.tag,
      },
      title: {
        fr: I18N.fr.hero.title,
        ar: I18N.ar.hero.title,
      },
      sub: {
        fr: I18N.fr.hero.sub,
        ar: I18N.ar.hero.sub,
      },
      primaryCtaLabel: {
        fr: I18N.fr.hero.ctaWA,
        ar: I18N.ar.hero.ctaWA,
      },
      primaryCtaUrl: `https://wa.me/${CONFIG.whatsapp}`,
      secondaryCtaLabel: {
        fr: I18N.fr.hero.ctaCall,
        ar: I18N.ar.hero.ctaCall,
      },
      secondaryCtaUrl: `tel:${CONFIG.phone}`,
      image: CONFIG.images.hero,
    },
    sectionVisibility: {
      trustBar: true,
      features: true,
      services: true,
      gallery: true,
      brands: true,
      testimonials: true,
      customSections: true,
    },
    gallery: {
      title: {
        fr: 'Visual Excellence',
        ar: 'تميّز بصري',
      },
      subtitle: {
        fr: 'Exploring the fine details of mechanics',
        ar: 'استكشاف أدق تفاصيل الميكانيك',
      },
      items: [
        {
          id: randomId(),
          type: 'image',
          url: CONFIG.images.moto,
          title: { fr: 'Performance Engines', ar: 'محركات عالية الأداء' },
          category: { fr: 'Motorcycles', ar: 'دراجات نارية' },
          span: 'col-span-12 md:col-span-8 md:row-span-2',
          enabled: true,
        },
        {
          id: randomId(),
          type: 'image',
          url: CONFIG.images.escooter,
          title: { fr: 'Smart Scooters', ar: 'سكوترات ذكية' },
          category: { fr: 'Electric', ar: 'كهربائي' },
          span: 'col-span-6 md:col-span-4 md:row-span-1',
          enabled: true,
        },
        {
          id: randomId(),
          type: 'image',
          url: CONFIG.images.ebike,
          title: { fr: 'Eco Revolution', ar: 'ثورة صديقة للبيئة' },
          category: { fr: 'E-Bikes', ar: 'دراجات كهربائية' },
          span: 'col-span-6 md:col-span-4 md:row-span-1',
          enabled: true,
        },
        {
          id: randomId(),
          type: 'image',
          url: CONFIG.images.trotinet,
          title: { fr: 'e-Trotinettes', ar: 'تروتينيت كهربائية' },
          category: { fr: 'KickScooter', ar: 'سكوتر واقف' },
          span: 'col-span-6 md:col-span-4 md:row-span-1',
          enabled: true,
        },
        {
          id: randomId(),
          type: 'image',
          url: CONFIG.images.atelier,
          title: { fr: 'Master Workshop', ar: 'ورشة احترافية' },
          category: { fr: 'Expert Repair', ar: 'صيانة متخصصة' },
          span: 'col-span-12 md:col-span-8 md:row-span-1',
          enabled: true,
        },
      ],
    },
    customSections: [
      {
        id: randomId(),
        enabled: true,
        title: { fr: 'Need something specific?', ar: 'هل تحتاج شيئًا محددًا؟' },
        description: {
          fr: 'Add your own fully custom section from admin with text and buttons.',
          ar: 'أضف قسمًا مخصصًا بالكامل من لوحة التحكم مع نصوص وأزرار.',
        },
        buttonLabel: { fr: 'Contact us', ar: 'اتصل بنا' },
        buttonUrl: `tel:${CONFIG.phone}`,
      },
    ],
    brands: [...CONFIG.brands],
    testimonials: [
      {
        id: randomId(),
        name: 'Yassine B.',
        text: {
          fr: "Une équipe incroyable. Ma moto a été réparée en un temps record avec des pièces d'origine.",
          ar: 'فريق رائع. تم إصلاح دراجتي بسرعة وبقطع أصلية.',
        },
        rating: 5,
        date: { fr: 'Mars 2024', ar: 'مارس 2024' },
      },
      {
        id: randomId(),
        name: 'Mohamed R.',
        text: {
          fr: "J'ai acheté un scooter SYM chez eux. Très bon prix et accueil chaleureux.",
          ar: 'اشتريت سكوتر SYM منهم. سعر ممتاز واستقبال رائع.',
        },
        rating: 5,
        date: { fr: 'Avril 2024', ar: 'أبريل 2024' },
      },
      {
        id: randomId(),
        name: 'Riadh K.',
        text: {
          fr: 'Leur sélection de vélos électriques est superbe. Je suis ravi de mon achat.',
          ar: 'تشكيلتهم من الدراجات الكهربائية ممتازة. أنا سعيد جدًا بالشراء.',
        },
        rating: 5,
        date: { fr: 'Février 2024', ar: 'فبراير 2024' },
      },
    ],
  };
}
