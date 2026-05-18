/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Settings } from 'lucide-react';
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
import { AdminPanel } from './components/AdminPanel';
import { CustomSections } from './components/CustomSections';
import { createDefaultContent } from './content/defaultContent';
import { loadPublishedContent, publishContent, saveDraftContent } from './content/cms';
import { isSupabaseConfigured } from './lib/supabase';

export default function App() {
  const [lang, setLang] = useState<'ar' | 'fr'>('fr');
  const [content, setContent] = useState(createDefaultContent);
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [saveStatus, setSaveStatus] = useState('');

  useEffect(() => {
    let mounted = true;

    loadPublishedContent().then((nextContent) => {
      if (mounted) setContent(nextContent);
    });

    const normalizedPath = window.location.pathname.replace(/\/+$/, '') || '/';
    if (window.location.hash === '#admin' || normalizedPath === '/admin') {
      setIsAdminOpen(true);
    }

    return () => {
      mounted = false;
    };
  }, []);

  const openAdmin = () => {
    setIsAdminOpen(true);
    if (window.location.pathname !== '/admin') {
      window.history.replaceState({}, '', '/admin');
    }
  };

  const closeAdmin = () => {
    setIsAdminOpen(false);
    if (window.location.pathname === '/admin' || window.location.hash === '#admin') {
      window.history.replaceState({}, '', '/');
    }
  };

  const handleSaveDraft = async () => {
    setIsSaving(true);
    setSaveStatus('');

    try {
      const result = await saveDraftContent(content);
      setSaveStatus(result.local ? 'Draft saved locally.' : `Draft saved (v${result.version}).`);
    } catch (error) {
      setSaveStatus(error instanceof Error ? error.message : 'Draft save failed.');
    } finally {
      setIsSaving(false);
    }
  };

  const handlePublish = async () => {
    setIsSaving(true);
    setSaveStatus('');

    try {
      const result = await publishContent(content);
      setSaveStatus(result.local ? 'Published locally.' : `Published (v${result.version}).`);
    } catch (error) {
      setSaveStatus(error instanceof Error ? error.message : 'Publish failed.');
    } finally {
      setIsSaving(false);
    }
  };

  const t = I18N[lang];
  const isRtl = lang === 'ar';

  return (
    <div 
      className="min-h-screen bg-white text-zinc-900 selection:bg-brand selection:text-white font-sans" 
      dir={t.dir}
    >
      <Navbar
        t={t}
        lang={lang}
        setLang={setLang}
        isRtl={isRtl}
        phone={content.business.phone}
        businessName={content.business.name}
      />

      <main>
        <AnimatePresence mode="wait">
          <motion.div
            key={lang}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <Hero t={t} lang={lang} content={content} />
            {content.sectionVisibility.trustBar && <TrustBar t={t} />}
            {content.sectionVisibility.features && <Features t={t} />}
            {content.sectionVisibility.services && <Services t={t} isRtl={isRtl} />}
            {content.sectionVisibility.gallery && <Gallery t={t} lang={lang} content={content} />}
            {content.sectionVisibility.customSections && <CustomSections items={content.customSections} lang={lang} />}
            {content.sectionVisibility.brands && <Brands t={t} brands={content.brands} />}
            {content.sectionVisibility.testimonials && (
              <Testimonials t={t} lang={lang} items={content.testimonials} />
            )}
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer t={t} lang={lang} content={content} />
      <StickyCTA
        t={t}
        lang={lang}
        phone={content.business.phone}
        whatsapp={content.business.whatsapp}
        facebook={content.business.facebook}
      />

      <button
        type="button"
        onClick={openAdmin}
        className="fixed bottom-8 left-8 z-[101] bg-zinc-900 text-white px-4 py-3 rounded-2xl text-[10px] uppercase tracking-[0.25em] font-black inline-flex items-center gap-2 shadow-elegant"
      >
        <Settings size={14} />
        Admin
      </button>

      <AdminPanel
        isOpen={isAdminOpen}
        onClose={closeAdmin}
        content={content}
        onChange={setContent}
        onReset={() => setContent(createDefaultContent())}
        onSaveDraft={handleSaveDraft}
        onPublish={handlePublish}
        isSaving={isSaving}
        saveStatus={saveStatus}
        isSupabaseConfigured={isSupabaseConfigured}
      />
    </div>
  );
}
