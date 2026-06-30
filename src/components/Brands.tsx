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
    <ScrollReveal className="py-20 bg-surface overflow-hidden border-y border-border-subtle relative">
      <div className="max-w-7xl mx-auto px-4 mb-4 flex items-center gap-6 relative z-10">
        <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-ink-tertiary font-display flex-shrink-0">{t.sections.brands}</h2>
        <div className="h-px w-full bg-border-medium" />
      </div>

      
      <div className="relative flex">
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-surface to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-surface to-transparent z-10" />

        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="flex whitespace-nowrap gap-24 md:gap-40 py-8 items-center"
        >
          {[...items, ...items].map((brand, i) => (
            <motion.span
              key={i}
              className="text-4xl md:text-6xl font-extrabold text-zinc-200 dark:text-white/[0.04] uppercase tracking-tighter hover:text-brand transition-all duration-700 cursor-default select-none font-display italic relative"
              whileHover={{ scale: 1.1, color: "#0088FF" }}
            >
              {brand}
              {/* Electric spark under brand name on hover */}
              <motion.div
                className="absolute -bottom-2 left-0 right-0 h-0.5 bg-brand/60 rounded-full"
                initial={{ scaleX: 0, opacity: 0 }}
                whileHover={{ scaleX: 1, opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.span>
          ))}
        </motion.div>
      </div>
    </ScrollReveal>
  );
};
