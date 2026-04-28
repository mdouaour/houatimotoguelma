import React from 'react';
import { Facebook, MapPin, Phone, Instagram, Youtube, ArrowUpRight } from 'lucide-react';
import { CONFIG } from '../constants';

interface FooterProps {
  t: any;
}

export const Footer = ({ t }: FooterProps) => {
  return (
    <footer className="bg-zinc-900 text-zinc-400 py-24 relative overflow-hidden" id="footer">
      <div className="absolute inset-0 bg-mesh opacity-5 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-4 gap-16 md:gap-24">
          <div className="md:col-span-2 space-y-12">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-brand rounded-lg flex items-center justify-center text-white font-black italic shadow-lg shadow-brand/20">H</div>
                <h3 className="text-2xl font-black text-white font-display uppercase tracking-[-0.05em] italic">
                  HOUATI <span className="text-brand">MOTO</span>
                </h3>
              </div>
              <p className="text-sm md:text-base max-w-sm font-medium leading-relaxed uppercase tracking-tighter text-zinc-500">
                {t.hero.sub}
              </p>
            </div>
            
            <div className="flex gap-3">
              <SocialIcon icon={<Facebook size={18} />} href={CONFIG.facebook} />
              <SocialIcon icon={<Instagram size={18} />} href="#" />
              <SocialIcon icon={<Youtube size={18} />} href="#" />
            </div>
          </div>
          
          <div className="space-y-8">
            <h4 className="text-zinc-600 font-extrabold uppercase tracking-[0.3em] text-[10px] font-display">{t.footer.visit}</h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-4 group">
                <div className="w-10 h-10 glass-dark rounded-xl flex items-center justify-center text-zinc-500 flex-shrink-0 group-hover:bg-brand group-hover:text-white transition-all border border-white/5">
                  <MapPin size={18} />
                </div>
                <div>
                   <a href={CONFIG.googleMaps} target="_blank" rel="noreferrer" className="text-zinc-300 font-bold hover:text-brand transition-colors flex items-center gap-2 text-xs uppercase tracking-widest leading-none">
                     Guelma, Algérie <ArrowUpRight size={12} />
                   </a>
                   <p className="text-[10px] mt-2 font-semibold uppercase tracking-widest text-zinc-600">Centre ville</p>
                </div>
              </li>
              <li className="flex items-start gap-4 group">
                <div className="w-10 h-10 glass-dark rounded-xl flex items-center justify-center text-zinc-500 flex-shrink-0 group-hover:bg-brand group-hover:text-white transition-all border border-white/5">
                  <Phone size={18} />
                </div>
                <div>
                   <a href={`tel:${CONFIG.phone}`} className="text-zinc-300 font-bold hover:text-brand transition-colors text-xs uppercase tracking-widest leading-none">
                     {CONFIG.phone}
                   </a>
                   <p className="text-[10px] mt-2 font-semibold uppercase tracking-widest text-zinc-600">Available 08:00 - 18:00</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="space-y-8">
            <h4 className="text-zinc-600 font-extrabold uppercase tracking-[0.3em] text-[10px] font-display">Navigation</h4>
            <ul className="space-y-3">
              {['Services', 'Products', 'Showroom', 'Contact'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-zinc-500 hover:text-brand transition-all flex items-center gap-2 group italic">
                    <div className="w-1 h-1 bg-brand rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="mt-24 md:mt-32 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-700">{t.footer.rights}</p>
          <div className="flex gap-8 text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-700">
            <a href="#" className="hover:text-brand transition-colors">Privacy</a>
            <span className="opacity-10">/</span>
            <a href="#" className="hover:text-brand transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

function SocialIcon({ icon, href }: { icon: React.ReactNode, href: string }) {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noreferrer" 
      className="w-12 h-12 glass-dark rounded-2xl flex items-center justify-center text-zinc-500 hover:text-white hover:border-brand/40 transition-all border border-white/5"
    >
      {icon}
    </a>
  );
}

