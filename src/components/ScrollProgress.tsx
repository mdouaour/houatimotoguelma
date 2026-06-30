import React from 'react';
import { motion, useScroll } from 'motion/react';

export const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-brand via-brand/60 to-brand/20 origin-left z-[9999]"
      style={{ scaleX: scrollYProgress }}
    />
  );
};
