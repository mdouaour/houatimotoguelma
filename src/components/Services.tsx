import React from 'react';
import { Bike, Zap, ShoppingBag, Settings, Star, Package, ShieldCheck } from 'lucide-react';
import { CONFIG } from '../constants';
import { TiltCard } from './TiltCard';
import { ScrollReveal } from './ScrollReveal';

interface ServicesProps {
  t: any;
  isRtl: boolean;
}

export const Services = ({ t, isRtl }: ServicesProps) => {
  const products = [
    {
      title: t.sections.moto,
      desc: t.sections.motoRepair,
      icon: <Bike size={28} />,
      img: CONFIG.images.moto,
      size: "large",
      accent: "brand"
    },
    {
      title: t.sections.electric,
      desc: t.sections.electricRepair,
      icon: <Zap size={28} />,
      img: CONFIG.images.escooter,
      size: "medium",
      accent: "yellow-400"
    },
    {
      title: t.sections.tricycle,
      desc: t.sections.tricycleRepair,
      icon: <Zap size={28} />,
      img: CONFIG.images.tricycle,
      size: "medium",
      accent: "yellow-500"
    },
    {
      title: t.sections.bicycle,
      desc: t.sections.bicycleRepair,
      icon: <Star size={28} />,
      img: CONFIG.images.bicycle,
      size: "small",
      accent: "blue-500"
    },
    {
      title: "e-Trotinettes",
      desc: t.sections.bicycleRepair,
      icon: <Zap size={28} />,
      img: CONFIG.images.trotinet,
      size: "small",
      accent: "purple-500"
    },
    {
      title: t.sections.parts,
      desc: t.sections.partsDesc,
      icon: <Settings size={28} />,
      img: CONFIG.images.parts,
      size: "small",
      accent: "zinc-400"
    },
    {
      title: t.sections.articles,
      desc: t.sections.articlesDesc,
      icon: <Package size={28} />,
      img: CONFIG.images.accessories,
      size: "small",
      accent: "zinc-400"
    },
    {
      title: t.sections.repair,
      desc: t.sections.repairDesc,
      icon: <ShieldCheck size={28} />,
      img: CONFIG.images.atelier,
      size: "large",
      accent: "brand"
    }
  ];

  return (
    <section id="services" className="py-24 md:py-32 bg-surface relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand/50 to-transparent" />
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-brand/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-brand/5 rounded-full blur-3xl" />
      <div className="max-w-7xl mx-auto px-4">
        <ScrollReveal
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 md:mb-20"
        >
          <div className="space-y-4">
            <div className="flex items-center gap-3 text-brand">
              <Star size={12} fill="currentColor" />
              <span className="text-[10px] font-black uppercase tracking-[0.4em] font-display">Specialized_Solutions</span>
            </div>
            <h2 className="text-4xl md:text-7xl font-extrabold tracking-tight font-display uppercase italic text-ink leading-[0.9]">
              {t.sections.products}
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-brand to-brand/30 rounded-full" />
          </div>
          <p className="text-ink-tertiary max-w-sm font-semibold leading-relaxed uppercase text-[10px] tracking-[0.2em]">
            Since 2018. Delivering premium motorcycles and professional technical support in Guelma.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 md:gap-8">
          {products.map((item, i) => (
            <TiltCard
              key={i}
              tiltDegree={6}
              className={`group relative rounded-[2.5rem] md:rounded-[3.5rem] overflow-hidden bg-surface min-h-[350px] lg:min-h-0 shadow-soft hover:shadow-elegant border border-border-subtle transition-all duration-700
                ${item.size === 'large' ? 'lg:col-span-8 lg:row-span-2' : ''}
                ${item.size === 'medium' ? 'lg:col-span-4 lg:row-span-1' : ''}
                ${item.size === 'small' ? 'lg:col-span-4 lg:row-span-1' : ''}
              `}
            >
              <img 
                src={item.img} 
                className="absolute inset-0 w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:scale-105 group-hover:opacity-80 transition-all duration-1000" 
                alt={item.title} 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/60 to-transparent group-hover:from-surface/10 group-hover:via-transparent transition-all duration-700" />

              <div className="relative h-full p-10 md:p-14 flex flex-col justify-between z-10">
                <div className="w-14 h-14 glass rounded-2xl flex items-center justify-center text-ink border border-border-subtle group-hover:bg-brand group-hover:text-white transition-all duration-500 shadow-soft">
                  {item.icon}
                </div>
                
                <div className="space-y-4 mb-4">
                  <h3 className="text-2xl md:text-3xl font-extrabold font-display uppercase tracking-tight text-ink italic group-hover:text-brand transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-ink-tertiary font-medium text-xs md:text-sm leading-relaxed max-w-xs transition-colors">
                    {item.desc}
                  </p>
                </div>
              </div>

              <div className="absolute bottom-6 right-8 p-4 text-ink/5 font-display text-7xl md:text-8xl font-black pointer-events-none group-hover:text-brand/5 transition-colors">
                 {i+1}
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
};
