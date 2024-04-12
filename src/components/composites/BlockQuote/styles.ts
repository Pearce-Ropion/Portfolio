import { Box } from 'components/foundations';
import { styled } from 'stitches.config';

export const StyledBlockQuote = styled(Box, {
  paddingLeft: '$4',
  borderLeft: '6px solid $navy800',
  lineHeight: '$large',
  maxWidth: '450px',

  '@mobile': {
    maxWidth: '100%',
    borderLeft: 'none',
    paddingLeft: 0,
  },

  variants: {
    inverted: {
      true: {
        borderColor: '$orange900',
      },
    },
  },
});
