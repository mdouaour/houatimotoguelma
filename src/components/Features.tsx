import React from 'react';
import { motion } from 'motion/react';
import { Shield, Zap, Wrench, ChevronRight } from 'lucide-react';

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
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group space-y-6"
            >
              <div className={`w-16 h-16 ${item.color} rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110`}>
                {React.cloneElement(item.icon as React.ReactElement, { size: 32 })}
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-bold text-zinc-900 uppercase tracking-tight italic">{item.title}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed max-w-xs">{item.desc}</p>
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
