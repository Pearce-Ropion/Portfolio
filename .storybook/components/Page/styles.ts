import { Box } from 'components/foundations';
import { styled } from 'stitches.config';

export const StyledPage = styled(Box, {
  margin: 0,
  transition: 'background-color 0.3s',

  variants: {
    layout: {
      fullscreen: {
        padding: 0,
      },
      padded: {
        padding: '1rem',
      },
      centered: {
        display: 'flex',
        align: 'center',
        justify: 'center',
      },
    },

    mode: {
      story: {
        height: '100vh',
        width: '100vw',
      },
      docs: {
        padding: '2rem',
      },
    },
  },
});
