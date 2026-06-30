import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
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
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % REVIEWS.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [paused]);

  const next = () => setCurrent((prev) => (prev + 1) % REVIEWS.length);
  const prev = () => setCurrent((prev) => (prev - 1 + REVIEWS.length) % REVIEWS.length);

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

        <div
          className="max-w-2xl mx-auto relative"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="bg-surface p-10 md:p-14 rounded-[2.5rem] md:rounded-[3.5rem] border border-border-subtle"
            >
              <div className="space-y-8">
                <div className="flex text-brand gap-1">
                  {[...Array(REVIEWS[current].rating)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>
                <p className="text-xl md:text-2xl text-ink-secondary font-medium leading-relaxed italic text-pretty">
                  &ldquo;{REVIEWS[current].text[lang]}&rdquo;
                </p>
                <div className="flex items-center justify-between border-t border-border-subtle pt-8">
                  <div>
                    <p className="font-extrabold text-lg text-ink font-display uppercase italic tracking-tight">{REVIEWS[current].name}</p>
                    <p className="text-[10px] font-bold text-ink-tertiary uppercase tracking-widest mt-1">{REVIEWS[current].date[lang]}</p>
                  </div>
                  <div className="w-10 h-10 bg-surface-secondary rounded-xl flex items-center justify-center text-brand/40">
                    <Quote size={18} />
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex items-center justify-center gap-4 mt-10">
            <button onClick={prev} className="w-12 h-12 rounded-2xl bg-surface border border-border-subtle flex items-center justify-center text-ink-tertiary hover:text-brand hover:border-brand/30 transition-all">
              <ChevronLeft size={18} />
            </button>
            <div className="flex gap-2">
              {REVIEWS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2 h-2 rounded-full transition-all duration-500 ${i === current ? 'w-8 bg-brand' : 'bg-zinc-300 dark:bg-zinc-600'}`}
                />
              ))}
            </div>
            <button onClick={next} className="w-12 h-12 rounded-2xl bg-surface border border-border-subtle flex items-center justify-center text-ink-tertiary hover:text-brand hover:border-brand/30 transition-all">
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
