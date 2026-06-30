import React from 'react';
import { Clock, ShieldCheck, Wrench } from 'lucide-react';
import { ScrollReveal, StaggerReveal, RevealItem } from './ScrollReveal';

interface TrustBarProps {
  t: any;
}

export const TrustBar = ({ t }: TrustBarProps) => {
  return (
    <section className="py-12 bg-surface border-y border-border-subtle relative z-20 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--brand)_0%,_transparent_70%)] opacity-[0.03]" />
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <StaggerReveal className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12" staggerDelay={0.1} variant="wheel">
          <RevealItem variant="wheel"><TrustItem icon={<Clock />} text={t.trust.exp} label="Precision_Time" /></RevealItem>
          <RevealItem variant="wheel"><TrustItem icon={<ShieldCheck />} text={t.trust.parts} label="Genuine_Guaranteed" /></RevealItem>
          <RevealItem variant="wheel"><TrustItem icon={<Wrench />} text={t.trust.service} label="Technical_Excellence" /></RevealItem>
        </StaggerReveal>
      </div>
    </section>
  );
};

function TrustItem({ icon, text, label }: { icon: React.ReactNode, text: string, label: string }) {
  return (
    <div className="flex items-center gap-6 justify-center md:justify-start group cursor-default">
      <div className="w-14 h-14 bg-surface-secondary rounded-2xl flex items-center justify-center text-ink-tertiary group-hover:bg-brand group-hover:text-white transition-all duration-500 shadow-soft">
        {React.cloneElement(icon as React.ReactElement, { size: 24 })}
      </div>
      <div className="space-y-0.5">
        <p className="text-[9px] font-black text-brand uppercase tracking-[0.2em] font-display">{label}</p>
        <span className="font-bold text-lg text-ink font-display uppercase tracking-tight group-hover:text-brand transition-colors">{text}</span>
      </div>
    </div>
  );
}
