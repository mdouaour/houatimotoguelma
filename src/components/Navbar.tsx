import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Facebook, Phone, Globe, Bike } from 'lucide-react';
import { CONFIG } from '../constants';

interface NavbarProps {
  t: any;
  lang: 'fr' | 'ar';
  setLang: (lang: 'fr' | 'ar') => void;
  isRtl: boolean;
}

export const Navbar = ({ t, lang, setLang, isRtl }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t.nav.services, href: "#services" },
    { name: t.nav.products, href: "#services" },
    { name: t.nav.about, href: "#showroom" }, // Using "About/Showroom" for gallery
    { name: t.nav.contact, href: "#footer" }
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'py-2 md:py-3' : 'py-5 md:py-6'}`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className={`glass rounded-2xl md:rounded-[2rem] px-5 md:px-7 py-2.5 flex items-center justify-between transition-all duration-500 ${scrolled ? 'shadow-soft border-black/5' : 'border-transparent'}`}>
          
          {/* Logo */}
          <a href="#" className="flex items-center gap-4 group">
            <div className="w-12 h-12 bg-zinc-900 rounded-2xl flex items-center justify-center text-white shadow-soft group-hover:bg-brand transition-all duration-500">
              <Bike size={24} />
            </div>
            <div className="flex flex-col">
              <span className="font-black text-zinc-900 italic text-xl uppercase tracking-tighter leading-none">HOUATI MOTO</span>
              <span className="text-[9px] font-bold text-zinc-400 tracking-[0.4em] uppercase leading-none mt-1">Guelma Performance</span>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-10">
            <div className="flex items-center gap-8">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500 hover:text-brand transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
            
            <div className="h-6 w-px bg-black/5" />
            
            <div className="flex items-center gap-6">
              <button 
                onClick={() => setLang(lang === 'fr' ? 'ar' : 'fr')}
                className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-zinc-500 hover:text-zinc-900 transition-colors"
              >
                <Globe size={14} className="text-brand" />
                {lang === 'fr' ? 'العربية' : 'Français'}
              </button>

              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={`tel:${CONFIG.phone}`}
                className="bg-brand text-white px-5 py-2.5 rounded-xl font-black text-[10px] uppercase tracking-widest shadow-soft hover:shadow-brand/20 transition-all"
              >
                {t.nav.contact}
              </motion.a>
            </div>
          </div>

          {/* Mobile Toggle */}
          <button className="lg:hidden text-zinc-900 p-2" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="lg:hidden fixed inset-x-0 top-24 mx-4 z-40 p-10 glass rounded-[2.5rem] shadow-elegant text-center space-y-8"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsOpen(false)}
                className="block text-2xl font-black uppercase tracking-tighter text-zinc-900 italic"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-8 border-t border-black/5 space-y-6">
              <button 
                onClick={() => { setLang(lang === 'fr' ? 'ar' : 'fr'); setIsOpen(false); }}
                className="flex items-center justify-center gap-3 text-sm font-black uppercase tracking-widest text-brand mx-auto"
              >
                <Globe size={18} /> {lang === 'fr' ? 'العربية' : 'Français'}
              </button>
              <a 
                href={`tel:${CONFIG.phone}`}
                className="block w-full bg-brand text-white py-5 rounded-2xl font-black text-xl uppercase tracking-tighter shadow-xl"
              >
                {CONFIG.phone}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
