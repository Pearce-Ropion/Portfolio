export const Transition = {
  standard: '0.15s ease-in-out',
} as const;

export const TransitionEasing = {
  easeInOut: 'ease-in-out',
  easeOut: 'ease-out',
  easeIn: 'ease-in',
  ease: 'ease',
  sharp: 'cubic-bezier(0.4, 0, 0.6, 1)',
  linear: 'linear',
} as const;

export const TransitionDuration = {
  shortest: 150,
  shorter: 200,
  short: 250,
  standard: 300,
  enteringScreen: 225,
  leavingScreen: 195,
} as const;
