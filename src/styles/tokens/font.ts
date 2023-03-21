export const FontFamily = {
  primary: '"Roboto", sans-serif',
  header: '"Raleway", sans-serif',
  serif: '"Merriweather", Helvetica, serif',
  code: '"Inconsolata", monospace',
} as const;

export const FontSize = {
  small: '16px',
  medium: '18px',
  large: '24px',
  xLarge: '32px',
} as const;

export const LineHeight = {
  small: '24px',
  medium: '27px',
  large: '36px',
  xLarge: '48px',
} as const;

export const FontWeight = {
  thin: 100,
  extraLight: 200,
  light: 300,
  normal: 400,
  medium: 500,
  semiBold: 600,
  bold: 700,
  extraBold: 800,
  black: 900,
} as const;

export const LetterSpacing = {
  short: '0.03em',
  medium: '0.05em',
  long: '0.1em',
} as const;
