import { Variants } from 'framer-motion';

export const navVariant: Variants = {
   open: {
      height: '260px',
      marginBottom: '20px',
      padding: '10px',
      scale: 1,
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
         type: 'spring',
         bounce: 0,
         duration: 0.5,
         delayChildren: 0.1,
         staggerChildren: 0.03,
      },
   },
   closed: {
      height: 0,
      marginBottom: '0',
      padding: '0',
      scale: 0,
      y: -40,
      x: 170,
      opacity: 0.5,
      transition: {
         type: 'spring',
         bounce: 0,
         duration: 0.5,
      },
   },
};

export const linkVariant: Variants = {
   open: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 300, damping: 24 },
   },
   closed: { opacity: 0, y: 90, transition: { duration: 0.1 } },
};
