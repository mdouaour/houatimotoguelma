import React from 'react';
import { motion } from 'motion/react';
import { Bike, Zap, ShoppingBag, Settings, Star, Package, ShieldCheck } from 'lucide-react';
import { CONFIG } from '../constants';


interface ServicesProps {
  t: any;
  isRtl: boolean;
}

export const Services = ({ t, isRtl }: ServicesProps) => {
  const products = [
    {
      title: "e-Trotinettes",
      desc: t.sections.specialistDesc,
      icon: <Zap size={28} />,
      img: CONFIG.images.escooter,
      size: "large",
      specialty: true
    },
    {
      title: t.sections.moto,
      desc: t.sections.motoRepair,
      icon: <Bike size={28} />,
      img: CONFIG.images.moto,
      size: "medium"
    },
    {
      title: t.sections.tricycle,
      desc: t.sections.tricycleRepair,
      icon: <Zap size={28} />,
      img: CONFIG.images.tricycle,
      size: "medium"
    },
    {
      title: t.sections.bicycle,
      desc: t.sections.bicycleRepair,
      icon: <Star size={28} />,
      img: CONFIG.images.bicycle,
      size: "small"
    },
    {
      title: t.sections.parts,
      desc: t.sections.partsDesc,
      icon: <Settings size={28} />,
      img: CONFIG.images.parts,
      size: "small"
    },
    {
      title: t.sections.articles,
      desc: t.sections.articlesDesc,
      icon: <Package size={28} />,
      img: CONFIG.images.accessories,
      size: "small"
    },
    {
      title: t.sections.repair,
      desc: t.sections.repairDesc,
      icon: <ShieldCheck size={28} />,
      img: CONFIG.images.atelier,
      size: "medium"
    }
  ];

  return (
    <section id="services" className="py-24 md:py-32 bg-surface">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 md:mb-20">
          <div className="space-y-4">
            <div className="flex items-center gap-3 text-brand">
              <Star size={12} fill="currentColor" />
              <span className="text-[10px] font-black uppercase tracking-[0.4em] font-display">Specialized_Solutions</span>
            </div>
            <h2 className="text-4xl md:text-7xl font-extrabold tracking-tight font-display uppercase italic text-ink leading-[0.9]">
              {t.sections.products}
            </h2>
          </div>
          <p className="text-ink-tertiary max-w-sm font-semibold leading-relaxed uppercase text-[10px] tracking-[0.2em]">
            Since 2018. Delivering premium equipment and professional technical support in Guelma.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ type: "spring", stiffness: 120, damping: 14 }}
          className="relative mb-16 md:mb-20 p-10 md:p-14 rounded-[2.5rem] md:rounded-[3.5rem] overflow-hidden bg-gradient-to-br from-brand/5 via-transparent to-brand/[0.02] border border-brand/10"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand/8 rounded-full blur-3xl" />
          <div className="relative z-10 flex flex-col md:flex-row md:items-center gap-6 md:gap-12">
            <div className="w-16 h-16 bg-brand rounded-2xl flex items-center justify-center text-white shrink-0">
              <Zap size={32} />
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl md:text-3xl font-extrabold font-display uppercase italic text-ink">
                {t.sections.specialty}
              </h3>
              <p className="text-ink-tertiary font-medium text-sm md:text-base leading-relaxed max-w-xl" dir={isRtl ? "rtl" : "ltr"}>
                {t.sections.specialistTitle} — {t.sections.specialistDesc}
              </p>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 md:gap-8">
          {products.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className={`group relative rounded-[2.5rem] md:rounded-[3.5rem] overflow-hidden bg-surface min-h-[350px] lg:min-h-0 shadow-soft border border-border-subtle
                ${item.size === 'large' ? 'lg:col-span-8 lg:row-span-2' : ''}
                ${item.size === 'medium' ? 'lg:col-span-4 lg:row-span-1' : ''}
                ${item.size === 'small' ? 'lg:col-span-4 lg:row-span-1' : ''}
                ${item.specialty ? 'ring-2 ring-brand/20' : ''}
              `}
              whileHover={{ y: -4, boxShadow: "0 8px 40px rgba(220,38,38,0.15)", transition: { type: "spring", stiffness: 300, damping: 20 } }}
            >
              <img 
                src={item.img} 
                className="absolute inset-0 w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:scale-105 group-hover:opacity-80 transition-all duration-1000" 
                alt={item.title} 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/60 to-transparent group-hover:from-surface/10 group-hover:via-transparent transition-all duration-700" />

              <div className="relative h-full p-10 md:p-14 flex flex-col justify-between z-10">
                <div className="flex items-start justify-between">
                  <div className="w-14 h-14 glass rounded-2xl flex items-center justify-center text-ink border border-border-subtle shadow-soft group-hover:bg-brand group-hover:text-white group-hover:border-brand/30 transition-all duration-500">
                    {item.icon}
                  </div>
                  {item.specialty && (
                    <span className="inline-flex items-center gap-1.5 bg-brand/10 text-brand text-[10px] font-black uppercase tracking-[0.2em] px-4 py-2 rounded-full border border-brand/20">
                      <Star size={10} fill="currentColor" />
                      {t.sections.specialty}
                    </span>
                  )}
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

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
