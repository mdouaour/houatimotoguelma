export const CONFIG = {
  name: "Houati Moto Guelma",
  phone: "+213550158258",
  whatsapp: "213550158258",
  facebook: "https://www.facebook.com/houatimoto",
  instagram: "https://www.instagram.com/houatimoto/",
  tiktok: "https://www.tiktok.com/@houatimoto",
  established: "2018",
  location: "Rue Larbi Ben Mehidi, Guelma, Algérie",
  googleMaps: "https://maps.google.com/?q=Houati+Moto+Guelma",
  stats: {
    fbFollowers: "1.5K",
    igFollowers: "1.4K",
    tiktokFollowers: "1.2K",
    experience: "8+",
    satisfied: "1200+"
  },
  hours: {
    weekdays: "Samedi–Jeudi 09h–21h",
    friday: "Vendredi 15h–21h",
    weekdays_ar: "السبت–الخميس 09h–21h",
    friday_ar: "الجمعة 15h–21h"
  },
  images: {
    hero: "https://images.unsplash.com/photo-1622185135505-2d795003994a?auto=format&fit=crop&q=80&w=2000",
    moto: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&q=80&w=1000",
    escooter: "https://images.unsplash.com/photo-1605152276897-4f618f831968?auto=format&fit=crop&q=80&w=1000",
    ebike: "https://images.unsplash.com/photo-1593766788306-28561086694e?auto=format&fit=crop&q=80&w=1000",
    tricycle: "https://images.unsplash.com/photo-1610632380989-680fe40816c6?auto=format&fit=crop&q=80&w=1000",
    bicycle: "https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&q=80&w=1000",
    trotinet: "https://images.unsplash.com/photo-1597063415112-f04ad800293a?auto=format&fit=crop&q=80&w=1000",
    parts: "https://images.unsplash.com/photo-1612030225145-12cf3094892c?auto=format&fit=crop&q=80&w=1000",
    accessories: "https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&q=80&w=1000",
    atelier: "https://images.unsplash.com/photo-1599819811279-d5ad9cccf838?auto=format&fit=crop&q=80&w=1000",
  },
  brands: ["SYM", "VMS", "Yamaha", "Bicyclettes", "E-Bikes", "Accessories"]
};

export type Locale = 'fr' | 'ar';

export const I18N = {
  ar: {
    dir: "rtl",
    nav: {
      services: "خدماتنا",
      products: "منتجاتنا",
      about: "من نحن",
      contact: "اتصل بنا"
    },
    hero: {
      tag: "الرقم 1 في قالمة • منذ 2018",
      title: "متخصصون في عالم الدراجات",
      sub: "بيع وتصليح الدراجات النارية، السكوتر الكهربائي، الدراجات الهوائية، التروتنيت الكهربائي، وجميع قطع الغيار والأكسسوارات.",
      ctaWA: "اطلب الآن عبر واتساب",
      ctaCall: "خدمة العملاء",
      satisfied: "عملاء راضون"
    },
    trust: {
      exp: "6 سنوات من الخبرة",
      parts: "قطع غيار وإكسسوارات",
      service: "تصليح جميع الدراجات"
    },
    sections: {
      products: "معروضاتنا الفاخرة",
      whyUs: "لماذا تختار هواتي موتو؟",
      expertTitle: "خبراء فنيون",
      expertDesc: "فريق ميكانيكي متخصص بخبرة سنوات في صيانة جميع أنواع الدراجات والمحركات.",
      originalTitle: "قطع أصلية",
      originalDesc: "نحن نضمن لك الحصول على قطع غيار أصلية 100% من الوكلاء المعتمدين.",
      ecoTitle: "تنقل ذكي",
      ecoDesc: "ريادة في مجال الدراجات والسكوتر الكهربائي الصديق للبيئة في قالمة.",
      moto: "دراجات نارية وسكوتر",
      motoRepair: "بيع وتصليح أرقى أنواع الدراجات النارية والسكوتر.",
      electric: "سكوتر ودراجات كهربائية",
      electricRepair: "متخصصون في بيع وصيانة الدراجات والسكوتر الكهربائي.",
      tricycle: "تروسيكل كهربائي",
      tricycleRepair: "بيع وصيانة التروسيكل الكهربائي للأغراض التجارية والشخصية.",
      bicycle: "دراجات هوائية وتروتنيت",
      bicycleRepair: "بيع الدراجات الهوائية والتروتنيت الكهربائي الحديث مع خدمة الصيانة.",
      parts: "قطع الغيار الأصلية",
      partsDesc: "مجموعة ضخمة من قطع الغيار الأصلية والزيوت عالية الجودة.",
      articles: "إكسسوارات ومقالات متنوعة",
      articlesDesc: "خوذ، ملابس واقية، وحقائب. كل ما يحتاجه سائق الدراجة.",
      repair: "مركز الصيانة المتخصص",
      repairDesc: "صيانة احترافية وشاملة للدراجات النارية، الكهربائية، الهوائية، والسكوتر.",
      brands: "شركاؤنا",
      testimonials: "قالوا عنا",
      social: "تابعنا على",
      gallery: "تميّز بصري",
      galleryDesc: "استكشاف أدق تفاصيل الميكانيك",
      galleryEmpty: "لا توجد صور لهذا القسم",
      galleryCTA: "تابعنا على",
      galleryActivity: "النشاطات"
    },
    map: {
      tag: "موقعنا",
      title: "زورونا",
      sub: "في قلب مدينة قالمة",
      address: "العنوان",
      hours: "ساعات العمل",
      phone: "هاتف",
      directions: "اتجاهات"
    },
    footer: {
      follow: "تابعنا على فيسبوك",
      visit: "موقعنا في قالمة",
      rights: "جميع الحقوق محفوظة © 2026 هواتي موتو قالمة"
    }
  },
  fr: {
    dir: "ltr",
    nav: {
      services: "Services",
      products: "Catalogue",
      about: "À Propos",
      contact: "Contact"
    },
    hero: {
      tag: "N°1 À GUELMA • DEPUIS 2018",
      title: "VOTRE EXPERT EN DEUX ROUES",
      sub: "Vente et réparation de motos, scooters électriques, bicyclettes, trottinettes électriques, pièces de rechange et articles divers.",
      ctaWA: "Commander via WhatsApp",
      ctaCall: "Appeler le Service",
      satisfied: "Clients Satisfaits"
    },
    trust: {
      exp: "6 Ans d'Expertise",
      parts: "Pièces & Accessoires",
      service: "Réparation Expert"
    },
    sections: {
      products: "Showroom Premium",
      whyUs: "Pourquoi nous choisir ?",
      expertTitle: "Expertise Technique",
      expertDesc: "Une équipe certifiée pour l'entretien complet de vos motos et vélos.",
      originalTitle: "100% Original",
      originalDesc: "Garantie de pièces d'origine certifiées pour votre sécurité.",
      ecoTitle: "Éco-Mobilité",
      ecoDesc: "Pionnier du scooter et du vélo électrique à Guelma.",
      moto: "Motos & Scooters",
      motoRepair: "Vente et réparation de motos et scooters toutes marques.",
      electric: "Scooters & E-Bikes",
      electricRepair: "Vente et entretien spécialisé de mobilité électrique.",
      tricycle: "Tricycles Électriques",
      tricycleRepair: "Vente et maintenance de tricycles électriques robustes.",
      bicycle: "Vélos & Trotinettes",
      bicycleRepair: "Large gamme de bicyclettes et trottinettes électriques modernes.",
      parts: "Pièces de Rechange",
      partsDesc: "Stock complet de pièces originales et consommables de qualité.",
      articles: "Articles & Accessoires",
      articlesDesc: "Casques, gants, vêtements et accessoires de protection.",
      repair: "Atelier Multi-Service",
      repairDesc: "Réparation experte pour motos, vélos électriques, scooters et bicyclettes.",
      brands: "Nos Marques",
      testimonials: "Avis Clients",
      social: "Suivez-nous",
      gallery: "Visual Excellence",
      galleryDesc: "Exploring the fine details of mechanics",
      galleryEmpty: "Aucune photo pour cette catégorie",
      galleryCTA: "Check_Activity",
      galleryActivity: "Facebook Page"
    },
    map: {
      tag: "Find_Us",
      title: "Visitez-nous",
      sub: "Au cœur de Guelma",
      address: "Adresse",
      hours: "Horaires",
      phone: "Téléphone",
      directions: "Itinéraire"
    },
    footer: {
      follow: "Suivez-nous sur Facebook",
      visit: "Showroom à Guelma",
      rights: "Tous droits réservés © 2026 Houati Moto Guelma"
    }
  }
} as const;
