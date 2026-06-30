import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Camera, Facebook, ArrowUpRight } from 'lucide-react';
import { CONFIG } from '../constants';
import type { Locale } from '../constants';
import { PHOTOS, GALLERY_CATEGORIES } from '../config/photos';
import { ScrollReveal } from './ScrollReveal';

interface GalleryProps {
  t: any;
  lang: Locale;
}

export const Gallery = ({ t, lang }: GalleryProps) => {
  const [activeCategory, setActiveCategory] = useState('all');

  const filtered = activeCategory === 'all'
    ? PHOTOS
    : PHOTOS.filter((p) => p.categoryKey === activeCategory);

  return (
    <section id="showroom" className="py-24 md:py-32 bg-surface overflow-hidden relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand/50 to-transparent" />
      <div className="max-w-[1600px] mx-auto px-4">
        <ScrollReveal className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-16 gap-8">
          <div className="space-y-6">
            <div className="flex items-center gap-3 text-brand">
              <Camera size={14} />
              <span className="text-[10px] font-black uppercase tracking-[0.4em] font-display">Showroom_Live</span>
            </div>
            <h2 className="text-4xl md:text-8xl font-black tracking-tighter font-display uppercase italic text-ink leading-[0.8] text-balance">
              {lang === 'fr' ? 'Visual Excellence' : 'تميّز بصري'}
            </h2>
            <p className="text-ink-tertiary text-[10px] font-bold uppercase tracking-[0.3em] ml-2">
              {lang === 'fr' ? 'Exploring the fine details of mechanics' : 'استكشاف أدق تفاصيل الميكانيك'}
            </p>
          </div>

          <motion.a
            whileHover={{ scale: 1.05 }}
            href={CONFIG.facebook}
            target="_blank"
            rel="noreferrer"
            className="group flex items-center gap-6 bg-ink text-white px-10 py-6 rounded-[2rem] font-bold text-sm shadow-elegant border border-white/5"
          >
            <Facebook size={24} className="text-[#1877F2]" />
            <div className="text-left">
              <p className="text-[10px] opacity-50 uppercase tracking-widest leading-none mb-1">Check_Activity</p>
              <span className="uppercase tracking-widest text-lg font-display">Facebook Page</span>
            </div>
            <ArrowUpRight size={20} className="opacity-30 group-hover:opacity-100 transition-opacity ml-4" />
          </motion.a>
        </ScrollReveal>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-3 mb-12 md:mb-16" dir="ltr">
          {GALLERY_CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.key;
            return (
              <motion.button
                key={cat.key}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => setActiveCategory(cat.key)}
                className={`px-8 py-4 rounded-2xl text-[10px] font-black uppercase tracking-[0.25em] transition-all duration-300 ${
                  isActive
                    ? 'bg-brand text-white shadow-brand'
                    : 'bg-surface-secondary text-ink-tertiary hover:bg-zinc-100 dark:hover:bg-zinc-800 border border-border-subtle'
                }`}
              >
                {cat.label[lang]}
              </motion.button>
            );
          })}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-12 gap-4 md:gap-8 auto-rows-[300px] md:auto-rows-[400px]">
          <AnimatePresence mode="popLayout">
            {filtered.map((item, i) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.95 }}
                transition={{ delay: i * 0.05, duration: 0.5, ease: 'easeOut' }}
                className={`relative rounded-[2.5rem] md:rounded-[4rem] overflow-hidden group cursor-pointer ${item.span} border border-border-subtle shadow-soft`}
              >
                {item.type === 'video' ? (
                  <video
                    src={item.src}
                    className="w-full h-full object-cover grayscale opacity-70 transition-all duration-1000 group-hover:scale-105 group-hover:grayscale-0 group-hover:opacity-100"
                    autoPlay
                    muted
                    loop
                    playsInline
                  />
                ) : (
                  <img
                    src={item.src}
                    alt={item.title[lang]}
                    className="w-full h-full object-cover grayscale opacity-70 transition-all duration-1000 group-hover:scale-105 group-hover:grayscale-0 group-hover:opacity-100"
                  />
                )}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-10 translate-y-10 group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-[10px] font-black text-brand uppercase tracking-[0.4em] mb-3">
                    {GALLERY_CATEGORIES.find((c) => c.key === item.categoryKey)?.label[lang] || item.categoryKey}
                  </p>
                  <h3 className="text-2xl md:text-4xl font-extrabold text-white uppercase italic tracking-tighter leading-none text-balance">
                    {item.title[lang]}
                  </h3>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Empty state */}
        {filtered.length === 0 && (
          <div className="col-span-full text-center py-32">
            <p className="text-ink-tertiary text-sm font-medium">{lang === 'fr' ? 'Aucune photo pour cette catégorie' : 'لا توجد صور لهذا القسم'}</p>
          </div>
        )}
      </div>
    </section>
  );
};
