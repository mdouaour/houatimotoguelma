import React from 'react';
import { Shield, Zap, Wrench, ChevronRight } from 'lucide-react';
import { StaggerReveal, RevealItem } from './ScrollReveal';

interface FeaturesProps {
  t: any;
}

export const Features = ({ t }: FeaturesProps) => {
  const items = [
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
        <StaggerReveal>
          <div className="grid md:grid-cols-3 gap-12">
            {items.map((item, i) => (
              <RevealItem key={i}>
                <div className="group space-y-6">
                  <div className={`w-16 h-16 ${item.color} rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110 group-hover:rotate-3`}>
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
                </div>
              </RevealItem>
            ))}
          </div>
        </StaggerReveal>
      </div>
    </section>
  );
};
