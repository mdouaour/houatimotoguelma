import React from 'react';
import { motion } from 'motion/react';
import { Users, ArrowUpRight } from 'lucide-react';
import { CONFIG } from '../constants';
import type { Locale } from '../constants';
import { ScrollReveal, StaggerReveal, RevealItem } from './ScrollReveal';

interface SocialMediaSectionProps {
  t: any;
  lang: Locale;
}

function FacebookIcon({ size }: { size: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="#1877F2" stroke="none">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
    </svg>
  );
}

function InstagramIcon({ size }: { size: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="url(#igGradientSocial)" stroke="none">
      <defs>
        <linearGradient id="igGradientSocial" x1="0" y1="0" x2="24" y2="24">
          <stop offset="0%" stopColor="#F58529"/>
          <stop offset="50%" stopColor="#DD2A7B"/>
          <stop offset="100%" stopColor="#8134AF"/>
        </linearGradient>
      </defs>
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
    </svg>
  );
}

function TikTokIcon({ size }: { size: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor" stroke="none">
      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
    </svg>
  );
}

const platforms = [
  {
    name: 'Facebook',
    handle: '@houatimoto',
    url: CONFIG.facebook,
    followers: CONFIG.stats.fbFollowers,
    color: '#1877F2',
    bgClass: 'bg-[#1877F2]/5',
    borderClass: 'border-[#1877F2]/10',
    hoverClass: 'group-hover:bg-[#1877F2]',
    icon: <FacebookIcon size={32} />,
    description: { fr: 'Suivez notre actualité', ar: 'تابع أخبارنا' },
  },
  {
    name: 'Instagram',
    handle: '@houatimoto',
    url: CONFIG.instagram,
    followers: CONFIG.stats.igFollowers,
    color: '#E4405F',
    bgClass: 'bg-gradient-to-br from-[#F58529]/5 via-[#DD2A7B]/5 to-[#8134AF]/5',
    borderClass: 'border-[#DD2A7B]/10',
    hoverClass: 'group-hover:from-[#F58529] group-hover:via-[#DD2A7B] group-hover:to-[#8134AF]',
    icon: <InstagramIcon size={32} />,
    description: { fr: 'Photos & vidéos', ar: 'صور وفيديوهات' },
  },
  {
    name: 'TikTok',
    handle: '@houatimoto',
    url: CONFIG.tiktok,
    followers: CONFIG.stats.tiktokFollowers,
    color: '#000000',
    bgClass: 'bg-zinc-900/5',
    borderClass: 'border-zinc-900/10',
    hoverClass: 'group-hover:bg-zinc-900',
    icon: <TikTokIcon size={32} />,
    description: { fr: 'Vidéos courtes', ar: 'فيديوهات قصيرة' },
  },
];

export const SocialMediaSection = ({ t, lang }: SocialMediaSectionProps) => {
  return (
    <section className="py-24 md:py-32 bg-surface relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand/50 to-transparent" />
      <div className="max-w-7xl mx-auto px-4">
        <ScrollReveal className="text-center mb-20 space-y-6">
          <div className="flex items-center justify-center gap-3 text-brand">
            <Users size={14} />
            <span className="text-[10px] font-black uppercase tracking-[0.4em] font-display">{lang === 'fr' ? 'Social_Media' : 'التواصل الاجتماعي'}</span>
          </div>
            <h2 className="text-4xl md:text-7xl font-extrabold tracking-tight font-display uppercase italic text-ink leading-[0.9]">
            {lang === 'fr' ? 'Rejoignez-nous' : 'انضم إلينا'}
          </h2>
          <p className="text-ink-tertiary text-[10px] font-bold uppercase tracking-[0.3em]">
            {lang === 'fr' ? 'Suivez-nous sur les réseaux sociaux' : 'تابعنا على مواقع التواصل الاجتماعي'}
          </p>
        </ScrollReveal>

        <StaggerReveal className="grid md:grid-cols-3 gap-8">
          {platforms.map((platform, i) => (
            <RevealItem key={platform.name}>
            <motion.a
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              href={platform.url}
              target="_blank"
              rel="noreferrer"
              className={`group relative ${platform.bgClass} ${platform.borderClass} border rounded-[2.5rem] p-10 md:p-12 flex flex-col items-center text-center transition-all duration-500 hover:shadow-elegant`}
            >
              <div className={`w-20 h-20 rounded-2xl flex items-center justify-center bg-surface shadow-soft border border-border-subtle group-hover:border-transparent ${platform.hoverClass} transition-all duration-500 group-hover:shadow-xl mb-8`}
                style={{ color: platform.color }}
              >
                <div className="group-hover:brightness-0 group-hover:invert transition-all duration-500">
                  {platform.icon}
                </div>
              </div>

              <div className="space-y-4 mb-8">
                  <h3 className="text-3xl font-black text-ink font-display uppercase italic tracking-tight">
                  {platform.name}
                </h3>
                  <p className="text-sm font-bold text-ink-tertiary uppercase tracking-wider">
                  {platform.handle}
                </p>
                <p className="text-ink-muted text-sm font-medium">
                  {platform.description[lang]}
                </p>
              </div>

              <div className="flex items-center gap-6 mt-auto">
                <div className="text-center">
                  <span className="text-4xl font-black text-ink italic font-display">{platform.followers}</span>
                    <p className="text-[9px] font-bold text-ink-tertiary uppercase tracking-widest leading-none mt-1">
                    {lang === 'fr' ? 'Abonnés' : 'متابع'}
                  </p>
                </div>
              </div>

              <div className="w-full mt-8 pt-6 border-t border-border-subtle flex items-center justify-between group/btn">
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-ink-tertiary group-hover:text-brand transition-colors">
                  {lang === 'fr' ? 'Visiter' : 'زيارة'}
                </span>
                <ArrowUpRight size={16} className="text-ink-muted group-hover:text-brand transition-all group-hover:-translate-y-1 group-hover:translate-x-1 duration-300" />
              </div>
            </motion.a>
            </RevealItem>
          ))}
        </StaggerReveal>
      </div>
    </section>
  );
};
