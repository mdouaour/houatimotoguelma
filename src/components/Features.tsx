import React from 'react';
import { motion } from 'motion/react';
import { Shield, Zap, Wrench, ChevronRight, BatteryCharging } from 'lucide-react';

interface FeaturesProps {
  t: any;
}

export const Features = ({ t }: FeaturesProps) => {
  const items = [
    {
      title: t.sections.specialistTitle,
      desc: t.sections.specialistDesc,
      icon: <BatteryCharging className="text-brand" />,
      color: "bg-brand/10",
      accent: true
    },
    {
      title: t.sections.expertTitle,
      desc: t.sections.expertDesc,
      icon: <Wrench className="text-brand" />,
      color: "bg-brand/5"
    },
    {
      title: t.sections.originalTitle,
      desc: t.sections.originalDesc,
      icon: <Shield className="text-brand" />,
      color: "bg-brand/5"
    },
    {
      title: t.sections.ecoTitle,
      desc: t.sections.ecoDesc,
      icon: <Zap className="text-brand" />,
      color: "bg-brand/5"
    }
  ];

  return (
    <section className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-16 md:mb-20 space-y-4">
          <div className="flex items-center gap-3 text-brand">
            <Shield size={12} />
            <span className="text-[10px] font-black uppercase tracking-[0.4em] font-display">Why_Us</span>
          </div>
          <h2 className="text-4xl md:text-7xl font-extrabold tracking-tight font-display uppercase italic text-ink leading-[0.9]">
            {t.sections.features}
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className={`group space-y-6 p-8 rounded-3xl border transition-all duration-500
                    ${item.accent
                      ? 'border-brand/20 bg-brand/[0.04] hover:bg-brand/[0.08]'
                      : 'border-transparent hover:border-brand/10 hover:bg-brand-subtle'
                    }`}
                >
                  <div className={`w-16 h-16 ${item.color} rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 ring-1 ${item.accent ? 'ring-brand/30' : 'ring-brand/10'} group-hover:ring-brand/30`}>
                    {React.cloneElement(item.icon as React.ReactElement, { size: 32 })}
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-xl font-bold text-ink uppercase tracking-tight italic">{item.title}</h3>
                    <p className="text-ink-tertiary text-sm leading-relaxed max-w-xs">{item.desc}</p>
                  </div>
                  <div className="pt-2">
                     <button className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-brand opacity-0 group-hover:opacity-100 transition-all">
                       Learn More <ChevronRight size={12} />
                     </button>
                  </div>
                </motion.div>
            ))}
          </div>
      </div>
    </section>
  );
};
