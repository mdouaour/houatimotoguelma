import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { CustomSection, Locale } from '../types/content';

interface CustomSectionsProps {
  items: CustomSection[];
  lang: Locale;
}

export const CustomSections = ({ items, lang }: CustomSectionsProps) => {
  const enabledItems = items.filter((item) => item.enabled);

  if (!enabledItems.length) return null;

  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {enabledItems.map((item) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-[2rem] border border-black/5 bg-zinc-50 p-10 md:p-12 shadow-soft"
            >
              <h3 className="text-2xl md:text-4xl font-display font-black italic tracking-tight text-zinc-900">
                {item.title[lang]}
              </h3>
              <p className="mt-4 text-zinc-600 leading-relaxed font-medium">
                {item.description[lang]}
              </p>
              {item.buttonLabel[lang] && (
                <a
                  href={item.buttonUrl || '#'}
                  className="inline-flex items-center gap-2 mt-8 bg-brand text-white px-6 py-3 rounded-xl text-xs uppercase tracking-widest font-black"
                >
                  {item.buttonLabel[lang]} <ArrowUpRight size={14} />
                </a>
              )}
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};
