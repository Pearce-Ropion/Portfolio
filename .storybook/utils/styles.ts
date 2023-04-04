import { globalCss } from 'stitches.config';

export const globalStyles = globalCss({
  html: {
    height: '100vh',
  },

  body: {
    padding: '0 !important',
    margin: '0 !important',

    '#root': {
      padding: '0 !important',
      margin: '0 !important',
    },
  },
});
