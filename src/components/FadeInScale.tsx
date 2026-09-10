import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import * as React from 'react';

type FadeInScaleProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  index?: number;
  staggerDelay?: number;
};

export const FadeInScale: React.FC<FadeInScaleProps> = ({
  children,
  className = '',
  delay = 0,
  index = 0,
  staggerDelay = 0.1,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{
        duration: 0.6,
        delay: delay + index * staggerDelay,
        ease: 'easeOut',
      }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
};
