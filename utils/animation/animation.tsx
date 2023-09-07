'use client';

import { AnimatePresence } from 'framer-motion'

export function Animation({children, mode, initial}) {
  return (
    <AnimatePresence mode={mode} initial={initial !== null ? initial : false}>
      {children}
    </AnimatePresence>
  );
}

export const animationList = {
  visible: { 
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
  hidden: { 
    opacity: 0,
    transition: {
      when: "afterChildren",
    },
  },
}

export const dropIn = {
  hidden: {
      opacity: 0,
      scale: 0,
      transition: {
        duration: 2,
        type: "spring",
        damping: 40,
        stiffness: 250,
      },
  },
  visible: {
      opacity: 1,
      scale: 1,
      transition: {
          duration: 1.5,
          type: "spring",
          damping: 40,
          stiffness: 250,
      }
  },
  exit: {
      opacity: 0,
      scale:0
  },
};

export const animationItem = {
visible: { 
  opacity: 1,
  scale: 1,
  y: 0,
  transition: {
    when: "beforeChildren",
  },
},
hidden: { 
  opacity: 0,
  scale: 0,
  y:-100,
  transition: {
    when: "afterChildren",
  },
},
exit: {
  opacity: 0,
},
}

export const swapList = {
  visible: { 
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
  hidden: { 
    transition: {
      when: "afterChildren",
    },
  },
}

export const swapDropIn = {
  hidden: {
    x: 1000,
      transition: {
        duration: 3,
        type: "spring",
        damping: 40,
      },
  },
  visible: {
    x: 0,
      transition: {
          duration: 3,
          type: "spring",
          damping: 40,
      }
  },
  exit: {
      opacity: 0,
      x: -1000,
  },
};

export const swapDropOut = {
  hidden: {
    x: -1000,
      transition: {
        duration: 3,
        type: "spring",
        damping: 40,
      },
  },
  visible: {
    x: 600,
      transition: {
          duration: 3,
          type: "spring",
          damping: 40,
      }
  },
  exit: {
      x: -1000,
  },
};

export const swapItem = {
  visible: { 
    transition: {
      when: "beforeChildren",
    },
  },
  hidden: { 
    transition: {
      when: "afterChildren",
    },
  },
  exit: {
    opacity: 0,
  },
  }