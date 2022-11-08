import { globalCss } from 'stitches.config';

import 'normalize.css/normalize.css';

import '@fontsource/raleway/100.css';
import '@fontsource/raleway/100-italic.css';
import '@fontsource/raleway/200.css';
import '@fontsource/raleway/200-italic.css';
import '@fontsource/raleway/300.css';
import '@fontsource/raleway/300-italic.css';
import '@fontsource/raleway/400.css';
import '@fontsource/raleway/400-italic.css';
import '@fontsource/raleway/500.css';
import '@fontsource/raleway/500-italic.css';
import '@fontsource/raleway/600.css';
import '@fontsource/raleway/600-italic.css';
import '@fontsource/raleway/700.css';
import '@fontsource/raleway/700-italic.css';
import '@fontsource/raleway/800.css';
import '@fontsource/raleway/800-italic.css';
import '@fontsource/raleway/900.css';
import '@fontsource/raleway/900-italic.css';
// Roboto
import '@fontsource/roboto/100.css';
import '@fontsource/roboto/100-italic.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/300-italic.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/400-italic.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/500-italic.css';
import '@fontsource/roboto/700.css';
import '@fontsource/roboto/700-italic.css';
import '@fontsource/roboto/900.css';
import '@fontsource/roboto/900-italic.css';
// Merriweather
import '@fontsource/merriweather/300.css';
import '@fontsource/merriweather/300-italic.css';
import '@fontsource/merriweather/400.css';
import '@fontsource/merriweather/400-italic.css';
import '@fontsource/merriweather/700.css';
import '@fontsource/merriweather/700-italic.css';
import '@fontsource/merriweather/900.css';
import '@fontsource/merriweather/900-italic.css';
// Inconsolata
import '@fontsource/inconsolata/200.css';
import '@fontsource/inconsolata/300.css';
import '@fontsource/inconsolata/400.css';
import '@fontsource/inconsolata/500.css';
import '@fontsource/inconsolata/600.css';
import '@fontsource/inconsolata/700.css';
import '@fontsource/inconsolata/800.css';
import '@fontsource/inconsolata/900.css';

import 'components/foundations/Icon/library';

export const globalStyles = globalCss({
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
    color: '$neutral900',
    margin: 0,
    textRendering: 'optimizeLegibility',
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'greyscale',
  },

  '[tabindex="-1"]': {
    outline: 0,
  },
});
