import React, { useState, useEffect } from 'react';
import { I18N } from './constants';
import type { Locale } from './constants';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustBar } from './components/TrustBar';
import { Features } from './components/Features';
import { Services } from './components/Services';
import { Brands } from './components/Brands';
import { Gallery } from './components/Gallery';
import { Testimonials } from './components/Testimonials';
import { SocialMediaSection } from './components/SocialMediaSection';
import { MapSection } from './components/MapSection';
import { Footer } from './components/Footer';
import { StickyCTA } from './components/StickyCTA';
import { FullPageScooter } from './components/FullPageScooter';

export default function App() {
  const [lang, setLang] = useState<Locale>('ar');
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('houati-dark');
    if (saved === 'true') {
      setDark(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleDark = () => {
    setDark((prev) => {
      const next = !prev;
      localStorage.setItem('houati-dark', String(next));
      document.documentElement.classList.toggle('dark', next);
      return next;
    });
  };

  const t = I18N[lang];
  const isRtl = lang === 'ar';

  return (
    <div
      className="min-h-screen text-ink selection:bg-brand selection:text-white font-sans"
      dir={t.dir}
    >
      <Navbar
        t={t}
        lang={lang}
        setLang={setLang}
        isRtl={isRtl}
        dark={dark}
        toggleDark={toggleDark}
      />

      <FullPageScooter />

      <main>
        <Hero t={t} lang={lang} />
        <TrustBar t={t} />
        <Features t={t} />
        <Services t={t} isRtl={isRtl} />
        <Gallery t={t} lang={lang} />
        <Brands t={t} />
        <SocialMediaSection t={t} lang={lang} />
        <MapSection t={t} lang={lang} />
        <Testimonials t={t} lang={lang} />
      </main>

      <Footer t={t} lang={lang} />
      <StickyCTA />
    </div>
  );
}
