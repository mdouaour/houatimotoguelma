import React from 'react';
import { motion } from 'motion/react';
import { Clock, ShieldCheck, Wrench } from 'lucide-react';

interface TrustBarProps {
  t: any;
}

export const TrustBar = ({ t }: TrustBarProps) => {
  return (
    <section className="py-12 bg-white border-y border-zinc-100 relative z-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
          <TrustItem icon={<Clock />} text={t.trust.exp} label="Precision_Time" delay={0.1} />
          <TrustItem icon={<ShieldCheck />} text={t.trust.parts} label="Genuine_Guaranteed" delay={0.2} />
          <TrustItem icon={<Wrench />} text={t.trust.service} label="Technical_Excellence" delay={0.3} />
        </div>
      </div>
    </section>
  );
};

function TrustItem({ icon, text, label, delay }: { icon: React.ReactNode, text: string, label: string, delay: number }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className="flex items-center gap-6 justify-center md:justify-start group cursor-default"
    >
      <div className="w-14 h-14 bg-zinc-50 rounded-2xl flex items-center justify-center text-zinc-400 group-hover:bg-brand group-hover:text-white transition-all duration-500 shadow-soft">
        {React.cloneElement(icon as React.ReactElement, { size: 24 })}
      </div>
      <div className="space-y-0.5">
        <p className="text-[9px] font-black text-brand uppercase tracking-[0.2em] font-display">{label}</p>
        <span className="font-bold text-lg text-zinc-900 font-display uppercase tracking-tight group-hover:text-brand transition-colors">{text}</span>
      </div>
    </motion.div>
  );
}
