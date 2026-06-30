import React from 'react';
import { Star, Quote } from 'lucide-react';
import type { Locale } from '../constants';


interface TestimonialsProps {
  t: any;
  lang: Locale;
}

const REVIEWS = [
  {
    name: 'Yassine B.',
    text: { fr: "Une équipe incroyable. Ma moto a été réparée en un temps record avec des pièces d'origine.", ar: 'فريق رائع. تم إصلاح دراجتي بسرعة وبقطع أصلية.' },
    rating: 5 as const,
    date: { fr: 'Mars 2024', ar: 'مارس 2024' },
  },
  {
    name: 'Mohamed R.',
    text: { fr: "J'ai acheté un scooter SYM chez eux. Très bon prix et accueil chaleureux.", ar: 'اشتريت سكوتر SYM منهم. سعر ممتاز واستقبال رائع.' },
    rating: 5 as const,
    date: { fr: 'Avril 2024', ar: 'أبريل 2024' },
  },
  {
    name: 'Riadh K.',
    text: { fr: 'Leur sélection de vélos électriques est superbe. Je suis ravi de mon achat.', ar: 'تشكيلتهم من الدراجات الكهربائية ممتازة. أنا سعيد جدًا بالشراء.' },
    rating: 5 as const,
    date: { fr: 'Février 2024', ar: 'فبراير 2024' },
  },
];

export const Testimonials = ({ t, lang }: TestimonialsProps) => {
  return (
    <section className="py-24 md:py-32 bg-surface-secondary">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col items-center text-center space-y-6 mb-16 md:mb-24">
          <div className="flex items-center gap-3 text-brand">
            <Star size={12} fill="currentColor" />
            <span className="text-[10px] font-black uppercase tracking-[0.4em] font-display">Customer_Voices</span>
          </div>
          <h2 className="text-4xl md:text-7xl font-extrabold tracking-tight font-display uppercase italic text-ink leading-none text-balance">
            {t.sections.testimonials}
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {REVIEWS.map((review) => (
            <div className="bg-surface p-8 md:p-12 rounded-[2.5rem] md:rounded-[3.5rem] border border-border-subtle hover:border-brand/30 flex flex-col justify-between hover:shadow-[0_0_50px_-20px_rgba(220,38,38,0.4)] transition-all duration-700 group relative overflow-hidden">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-brand/50 to-brand/0 scale-y-0 group-hover:scale-y-100 transition-transform duration-700 origin-top" />
              <div className="space-y-6">
                <div className="flex text-brand gap-1">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} size={14} fill="currentColor" />
                  ))}
                </div>
                <p className="text-lg md:text-xl text-ink-secondary font-medium leading-relaxed italic text-pretty">
                  &ldquo;{review.text[lang]}&rdquo;
                </p>
              </div>

              <div className="mt-12 flex items-center justify-between border-t border-border-subtle pt-8">
                <div>
                  <p className="font-extrabold text-base text-ink font-display uppercase italic tracking-tight">{review.name}</p>
                  <p className="text-[10px] font-bold text-ink-tertiary uppercase tracking-widest mt-1">{review.date[lang]}</p>
                </div>
                <div className="w-10 h-10 bg-surface-secondary rounded-xl flex items-center justify-center text-brand/20 group-hover:text-brand transition-colors">
                  <Quote size={18} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
