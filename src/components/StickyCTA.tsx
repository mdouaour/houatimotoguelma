import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, Phone, Facebook } from 'lucide-react';
import { CONFIG } from '../constants';

export const StickyCTA = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const lang = 'fr';

  return (
    <div className={`fixed bottom-8 right-8 z-[100] flex flex-col items-end gap-3`}>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="flex flex-col gap-3 mb-2"
          >
            <motion.a 
              whileHover={{ scale: 1.05, x: -4 }}
              href={CONFIG.facebook}
              target="_blank"
              rel="noreferrer"
              className="w-12 h-12 bg-surface rounded-2xl flex items-center justify-center text-[#1877F2] border border-border-subtle shadow-elegant"
            >
              <Facebook size={20} />
            </motion.a>

            <motion.a 
              whileHover={{ scale: 1.05, x: -4 }}
              href={`tel:${CONFIG.phone}`} 
              className="w-12 h-12 bg-surface rounded-2xl flex items-center justify-center text-ink border border-border-subtle shadow-elegant"
            >
              <Phone size={20} />
            </motion.a>

            <motion.a 
              whileHover={{ scale: 1.05, x: -4 }}
              href={`https://wa.me/${CONFIG.whatsapp}`} 
              className="w-12 h-12 bg-[#25D366] text-white rounded-2xl flex items-center justify-center shadow-elegant"
            >
              <MessageCircle size={24} />
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-brand text-white rounded-[2rem] flex items-center justify-center shadow-elegant relative overflow-hidden group"
      >
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ type: "spring", damping: 10 }}
        >
          {isOpen ? (
            <div className="text-3xl font-light leading-none">×</div>
          ) : (
            <MessageCircle size={24} />
          )}
        </motion.div>
      </motion.button>
    </div>
  );
};
