/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { I18N } from './constants';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustBar } from './components/TrustBar';
import { Features } from './components/Features';
import { Services } from './components/Services';
import { Brands } from './components/Brands';
import { Gallery } from './components/Gallery';
import { Testimonials } from './components/Testimonials';
import { Footer } from './components/Footer';
import { StickyCTA } from './components/StickyCTA';

export default function App() {
  const [lang, setLang] = useState<'ar' | 'fr'>('fr');
  const t = I18N[lang];
  const isRtl = lang === 'ar';

  return (
    <div 
      className="min-h-screen bg-white text-zinc-900 selection:bg-brand selection:text-white font-sans" 
      dir={t.dir}
    >
      <Navbar t={t} lang={lang} setLang={setLang} isRtl={isRtl} />

      <main>
        <AnimatePresence mode="wait">
          <motion.div
            key={lang}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <Hero t={t} />
            <TrustBar t={t} />
            <Features t={t} />
            <Services t={t} isRtl={isRtl} />
            <Gallery t={t} />
            <Brands t={t} />
            <Testimonials t={t} />
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer t={t} />
      <StickyCTA t={t} lang={lang} />
    </div>
  );
}
