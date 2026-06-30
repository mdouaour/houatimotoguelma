import React from 'react';
import { motion } from 'motion/react';
import { CONFIG } from '../constants';
import { ScrollReveal } from './ScrollReveal';

interface BrandsProps {
  t: any;
}

export const Brands = ({ t }: BrandsProps) => {
  const items = CONFIG.brands.length ? CONFIG.brands : ['SYM'];

  return (
    <ScrollReveal className="py-20 bg-surface overflow-hidden border-y border-border-subtle">
      <div className="max-w-7xl mx-auto px-4 mb-4 flex items-center gap-6">
        <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-ink-tertiary font-display flex-shrink-0">{t.sections.brands}</h2>
        <div className="h-px w-full bg-zinc-200" />
      </div>

      <div className="relative flex">
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white dark:from-[#0A0A0B] to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white dark:from-[#0A0A0B] to-transparent z-10" />

        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="flex whitespace-nowrap gap-24 md:gap-40 py-8 items-center"
        >
          {[...items, ...items].map((brand, i) => (
            <span key={i} className="text-4xl md:text-6xl font-extrabold text-zinc-100 dark:text-white/5 uppercase tracking-tighter hover:text-brand transition-all duration-700 cursor-default select-none font-display italic">
              {brand}
            </span>
          ))}
        </motion.div>
      </div>
    </ScrollReveal>
  );
};
