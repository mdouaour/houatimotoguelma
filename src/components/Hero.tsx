import React from 'react';
import { motion } from 'motion/react';
import { Star, MessageCircle, Phone, ArrowUpRight, Facebook, Instagram } from 'lucide-react';
import { CONFIG } from '../constants';
import type { Locale } from '../constants';
import { AnimatedCounter } from './AnimatedCounter';

interface HeroProps {
  t: any;
  lang: Locale;
}

export const Hero = ({ t, lang }: HeroProps) => {
  return (
    <header className="relative min-h-screen flex items-center pt-24 overflow-hidden bg-surface">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-mesh opacity-40" />
        <div className="absolute inset-0 bg-noise opacity-[0.02] dark:opacity-[0.04]" />
        <div className="absolute inset-0 bg-dots pointer-events-none" />
        <div className="absolute top-1/3 -left-48 w-[500px] h-[500px] bg-brand/8 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-16 lg:gap-24 items-center relative z-10 w-full py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-12 lg:space-y-16"
        >
          <div className="space-y-6 md:space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="inline-flex items-center gap-3 bg-brand/5 border border-brand/10 px-5 py-2 rounded-full"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-brand shadow-[0_0_8px_#DC2626]" />
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-brand/80 text-balance">{t.hero.tag}</span>
            </motion.div>

            <motion.h1
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.04 } },
              }}
              className="text-5xl md:text-7xl lg:text-[100px] font-extrabold leading-[0.9] tracking-tighter font-display uppercase"
            >
              {t.hero.title.split(' ').map((word, i) => (
                <motion.span
                  key={i}
                  variants={{
                    hidden: { y: 40, opacity: 0 },
                    visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 120, damping: 14 } },
                  }}
                  className={i === 1 ? 'text-brand block italic md:translate-x-4' : 'block text-ink'}
                >{word}</motion.span>
              ))}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 150, damping: 18, delay: 0.15 }}
              className="inline-flex items-center gap-2 text-brand text-sm md:text-base font-bold tracking-wide"
            >
              <span className="w-8 h-[2px] bg-brand" />
              {t.hero.specialist}
            </motion.p>

            <p className="text-lg md:text-xl text-ink-secondary max-w-lg leading-relaxed font-medium text-pretty">
              {t.hero.sub}
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 150, damping: 18, delay: 0.3 }}
            className="flex flex-wrap gap-4"
          >
            <motion.a
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              href={`https://wa.me/${CONFIG.whatsapp}`}
              className="flex items-center gap-4 bg-brand text-white px-10 py-5 rounded-2xl font-bold text-sm transition-all shadow-elegant hover:shadow-brand group"
            >
              <MessageCircle size={20} />
              <span className="uppercase tracking-widest">{t.hero.ctaWA}</span>
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              href={`tel:${CONFIG.phone}`}
              className="flex items-center gap-4 bg-zinc-100 text-ink px-10 py-5 rounded-2xl font-bold text-sm transition-all border border-transparent hover:border-zinc-200"
            >
              <Phone size={20} />
              <span className="uppercase tracking-widest">{t.hero.ctaCall}</span>
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 150, damping: 18, delay: 0.4 }}
            className="flex items-center gap-10 pt-4 border-t border-border-subtle"
          >
            <div className="space-y-1 text-center">
              <div className="flex items-center gap-2 justify-center">
                <Facebook size={16} className="text-[#1877F2]" />
                <AnimatedCounter value={CONFIG.stats.fbFollowers} className="text-3xl font-black text-ink italic font-display tabular-nums" />
              </div>
              <p className="text-[9px] font-bold text-ink-tertiary uppercase tracking-widest leading-none">Facebook</p>
            </div>
            <div className="w-px h-10 bg-zinc-100" />
            <div className="space-y-1 text-center">
              <div className="flex items-center gap-2 justify-center">
                <Instagram size={16} className="text-[#E4405F]" />
                <AnimatedCounter value={CONFIG.stats.igFollowers} className="text-3xl font-black text-ink italic font-display tabular-nums" />
              </div>
              <p className="text-[9px] font-bold text-ink-tertiary uppercase tracking-widest leading-none">Instagram</p>
            </div>
            <div className="w-px h-10 bg-zinc-100" />
            <div className="space-y-1 text-center">
              <AnimatedCounter value={CONFIG.stats.satisfied} className="text-3xl font-black text-ink italic font-display tabular-nums" />
              <p className="text-[9px] font-bold text-ink-tertiary uppercase tracking-widest leading-none">{t.hero.satisfied}</p>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, clipPath: "inset(0 0 0 100%)" }}
          animate={{ opacity: 1, clipPath: "inset(0 0 0 0)" }}
          transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative lg:block hidden"
        >
          <div className="absolute -inset-20 bg-brand/5 blur-[120px] rounded-full pointer-events-none" />

          <div className="relative z-10 glass p-5 rounded-[4rem] shadow-elegant overflow-hidden group">
            <div className="rounded-[3rem] overflow-hidden aspect-[4/5] relative">
              <img
                src={CONFIG.images.hero}
                alt="Spécialiste Trottinette Électrique Guelma"
                className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-105 img-frame"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent" />

              <div className="absolute top-10 left-10 flex flex-col gap-3">
                <div className="w-12 h-1 bg-brand" />
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white font-display mix-blend-difference opacity-50">HOUATI_QUALITY_CO</span>
              </div>

                <div className="absolute bottom-10 right-10 flex items-center justify-center w-20 h-20 glass rounded-full border border-border-subtle group-hover:bg-brand group-hover:text-white transition-all duration-500 cursor-pointer shadow-xl">
                <ArrowUpRight size={32} />
              </div>
            </div>
          </div>

          <div className="absolute -right-8 top-1/4 glass p-6 rounded-3xl shadow-elegant z-20 border-brand/10"
          >
            <div className="flex gap-1 text-brand mb-2">
              <Star size={12} fill="currentColor" />
              <Star size={12} fill="currentColor" />
              <Star size={12} fill="currentColor" />
              <Star size={12} fill="currentColor" />
              <Star size={12} fill="currentColor" />
            </div>
            <p className="text-[9px] font-black text-ink-tertiary uppercase tracking-widest leading-none">Reputation_Score</p>
            <p className="text-2xl font-black text-ink italic font-display uppercase tracking-tight tabular-nums">4.9/5.0</p>
          </div>
        </motion.div>
      </div>
    </header>
  );
};
