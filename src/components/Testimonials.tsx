import React from 'react';
import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';
import { TestimonialItem, Locale } from '../types/content';

interface TestimonialsProps {
  t: any;
  lang: Locale;
  items: TestimonialItem[];
}

export const Testimonials = ({ t, lang, items }: TestimonialsProps) => {
  return (
    <section className="py-24 md:py-32 bg-zinc-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center text-center space-y-6 mb-16 md:mb-24"
        >
          <div className="flex items-center gap-3 text-brand">
             <Star size={12} fill="currentColor" />
             <span className="text-[10px] font-black uppercase tracking-[0.4em] font-display">Customer_Voices</span>
          </div>
          <h2 className="text-4xl md:text-7xl font-extrabold tracking-tight font-display uppercase italic text-zinc-900 leading-none">
            {t.sections.testimonials}
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {items.map((review, i) => (
            <motion.div 
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-8 md:p-12 rounded-[2.5rem] md:rounded-[3.5rem] border border-black/5 flex flex-col justify-between hover:shadow-elegant transition-all duration-700 group relative"
            >
              <div className="space-y-6">
                <div className="flex text-brand gap-1">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} size={14} fill="currentColor" />
                  ))}
                </div>
                <p className="text-lg md:text-xl text-zinc-600 font-medium leading-relaxed italic">
                  "{review.text[lang]}"
                </p>
              </div>
              
              <div className="mt-12 flex items-center justify-between border-t border-zinc-100 pt-8">
                <div>
                  <p className="font-extrabold text-base text-zinc-900 font-display uppercase italic tracking-tight">{review.name}</p>
                  <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest mt-1">{review.date[lang]}</p>
                </div>
                <div className="w-10 h-10 bg-zinc-50 rounded-xl flex items-center justify-center text-brand/20 group-hover:text-brand transition-colors">
                  <Quote size={18} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
