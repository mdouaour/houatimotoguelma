import React from 'react';
import { motion } from 'motion/react';
import { ScrollReveal } from './ScrollReveal';
import { MapPin, Clock, Phone, ArrowUpRight, Navigation } from 'lucide-react';

interface MapSectionProps {
  lang: 'fr' | 'ar';
}

const MAP_EMBED = 'https://maps.google.com/maps?q=36.4659316,7.4361022&z=15&output=embed';

export const MapSection = ({ lang }: MapSectionProps) => {
  const isRtl = lang === 'ar';

  return (
    <section className="py-24 md:py-32 bg-surface-secondary relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand/50 to-transparent" />
      <div className="max-w-7xl mx-auto px-4">
        <ScrollReveal variant="tilt" className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8 mb-16">
          <div className="space-y-4">
            <div className="flex items-center gap-3 text-brand">
              <MapPin size={14} />
              <span className="text-[10px] font-black uppercase tracking-[0.4em] font-display">
                {isRtl ? 'موقعنا' : 'Find_Us'}
              </span>
            </div>
            <h2 className="text-4xl md:text-7xl font-extrabold tracking-tight font-display uppercase italic text-ink leading-[0.9]">
              {isRtl ? 'زورونا' : 'Visitez-nous'}
            </h2>
            <p className="text-ink-tertiary text-[10px] font-bold uppercase tracking-[0.3em]">
              {isRtl ? 'في قلب مدينة قالمة' : 'Au cœur de Guelma'}
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-5 gap-8 items-stretch">
          <motion.div
            initial={{ opacity: 0, x: isRtl ? 40 : -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:col-span-3 rounded-[2.5rem] overflow-hidden border border-border-subtle shadow-elegant h-[400px] md:h-[500px]"
          >
            <iframe
              src={MAP_EMBED}
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'grayscale(0.2)' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={isRtl ? 'موقع هواتي موتو قالمة' : 'Houati Moto Guelma - Localisation'}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: isRtl ? -40 : 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="md:col-span-2 bg-surface rounded-[2.5rem] p-10 md:p-12 border border-border-subtle shadow-soft flex flex-col justify-between gap-8"
          >
            <div className="space-y-10">
              <InfoRow
                icon={<MapPin size={20} />}
                label={isRtl ? 'العنوان' : 'Adresse'}
                value={isRtl ? 'Rue Larbi Ben Mehidi، قالمة' : 'Rue Larbi Ben Mehidi, Guelma'}
                isRtl={isRtl}
              />

              <InfoRow
                icon={<Clock size={20} />}
                label={isRtl ? 'ساعات العمل' : 'Horaires'}
                value={isRtl
                  ? 'السبت–الخميس 09h–21h / الجمعة 15h–21h'
                  : 'Samedi–Jeudi 09h–21h / Vendredi 15h–21h'}
                isRtl={isRtl}
              />

              <InfoRow
                icon={<Phone size={20} />}
                label={isRtl ? 'هاتف' : 'Téléphone'}
                value="+213 550 158 258"
                href="tel:+213550158258"
                isRtl={isRtl}
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-border-subtle">
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="https://maps.google.com/?q=36.4659316,7.4361022"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-3 bg-brand text-white px-8 py-4 rounded-2xl font-black text-[10px] uppercase tracking-widest shadow-soft hover:shadow-brand transition-all flex-1"
              >
                <Navigation size={16} />
                {isRtl ? 'اتجاهات' : 'Itinéraire'}
                <ArrowUpRight size={14} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href={`https://wa.me/213550158258`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-3 bg-zinc-100 text-ink px-8 py-4 rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-zinc-200 transition-all flex-1"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="#25D366" stroke="none"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                WhatsApp
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

function InfoRow({
  icon, label, value, href, isRtl,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
  isRtl: boolean;
}) {
  const content = (
    <div className={`flex gap-5 ${isRtl ? 'flex-row-reverse text-right' : ''}`}>
      <div className="w-12 h-12 bg-brand/5 rounded-xl flex items-center justify-center text-brand flex-shrink-0">
        {icon}
      </div>
      <div className="space-y-1">
        <p className="text-[9px] font-black uppercase tracking-[0.3em] text-ink-tertiary">{label}</p>
        <p className={`font-bold text-ink font-display uppercase tracking-tight ${href ? 'hover:text-brand transition-colors' : ''}`}>
          {value}
        </p>
      </div>
    </div>
  );

  if (href) {
    return <a href={href} className="block group">{content}</a>;
  }
  return <div className="group">{content}</div>;
}
