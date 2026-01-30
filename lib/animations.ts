export const easings = {
  smooth: 'power2.out',
  bounce: 'back.out(1.7)',
  elastic: 'elastic.out(1, 0.5)',
  sharp: 'power4.out',
  inOut: 'power2.inOut',
};

export const durations = {
  fast: 0.3,
  normal: 0.6,
  slow: 1,
  xslow: 1.5,
};

export const staggerPresets = {
  fast: 0.05,
  normal: 0.1,
  slow: 0.15,
};

export const fadeUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  duration: 0.8,
  ease: 'power3.out',
};

export const scaleIn = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  duration: 0.6,
  ease: 'back.out(1.7)',
};

export const slideInLeft = {
  initial: { opacity: 0, x: -100 },
  animate: { opacity: 1, x: 0 },
  duration: 0.8,
  ease: 'power3.out',
};
