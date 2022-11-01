import { globalCss } from 'stitches.config';

export const fonts = [
  // Raleway
  '@fontsource/raleway/100.css',
  '@fontsource/raleway/100-italic.css',
  '@fontsource/raleway/200.css',
  '@fontsource/raleway/200-italic.css',
  '@fontsource/raleway/300.css',
  '@fontsource/raleway/300-italic.css',
  '@fontsource/raleway/400.css',
  '@fontsource/raleway/400-italic.css',
  '@fontsource/raleway/500.css',
  '@fontsource/raleway/500-italic.css',
  '@fontsource/raleway/600.css',
  '@fontsource/raleway/600-italic.css',
  '@fontsource/raleway/700.css',
  '@fontsource/raleway/700-italic.css',
  '@fontsource/raleway/800.css',
  '@fontsource/raleway/800-italic.css',
  '@fontsource/raleway/900.css',
  '@fontsource/raleway/900-italic.css',
  // Roboto
  '@fontsource/roboto/100.css',
  '@fontsource/roboto/100-italic.css',
  '@fontsource/roboto/300.css',
  '@fontsource/roboto/300-italic.css',
  '@fontsource/roboto/400.css',
  '@fontsource/roboto/400-italic.css',
  '@fontsource/roboto/500.css',
  '@fontsource/roboto/500-italic.css',
  '@fontsource/roboto/700.css',
  '@fontsource/roboto/700-italic.css',
  '@fontsource/roboto/900.css',
  '@fontsource/roboto/900-italic.css',
  // Merriweather
  '@fontsource/merriweather/300.css',
  '@fontsource/merriweather/300-italic.css',
  '@fontsource/merriweather/400.css',
  '@fontsource/merriweather/400-italic.css',
  '@fontsource/merriweather/700.css',
  '@fontsource/merriweather/700-italic.css',
  '@fontsource/merriweather/900.css',
  '@fontsource/merriweather/900-italic.css',
  // Inconsolata
  '@fontsource/inconsolata/200.css',
  '@fontsource/inconsolata/300.css',
  '@fontsource/inconsolata/400.css',
  '@fontsource/inconsolata/500.css',
  '@fontsource/inconsolata/600.css',
  '@fontsource/inconsolata/700.css',
  '@fontsource/inconsolata/800.css',
  '@fontsource/inconsolata/900.css',
];

export const globalStyles = globalCss({
  '@import': ['normalize.css/normalize.css', ...fonts],

  html: {
    boxSizing: 'border-box',
  },

  '*': {
    '&': {
      boxSizing: 'border-box',
    },
    '&::before': {
      boxSizing: 'border-box',
    },
    '&::after': {
      boxSizing: 'border-box',
    },
  },

  body: {
    fontFamily: '$primary',
    margin: 0,
    textRendering: 'optimizeLegibility',
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'greyscale',
  },

  '[tabindex="-1"]': {
    outline: 0,
  },
});
