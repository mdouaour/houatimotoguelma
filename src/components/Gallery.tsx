import React from 'react';
import { motion } from 'motion/react';
import { Camera, Facebook, ArrowUpRight } from 'lucide-react';
import { CONFIG } from '../constants';
import type { Locale } from '../constants';
import { PHOTOS } from '../config/photos';

interface GalleryProps {
  t: any;
  lang: Locale;
}

export const Gallery = ({ t, lang }: GalleryProps) => {
  return (
    <section id="showroom" className="py-24 md:py-32 bg-white overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8">
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
        </div>

        <div className="grid grid-cols-12 gap-4 md:gap-8 auto-rows-[300px] md:auto-rows-[400px]">
          {PHOTOS.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
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
                <p className="text-[10px] font-black text-brand uppercase tracking-[0.4em] mb-3">{item.category[lang]}</p>
                <h3 className="text-2xl md:text-4xl font-extrabold text-white uppercase italic tracking-tighter leading-none text-balance">{item.title[lang]}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
