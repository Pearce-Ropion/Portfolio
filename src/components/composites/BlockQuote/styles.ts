import { Box } from 'components/foundations';
import { styled } from 'stitches.config';
import { border } from 'utils/style/format';

export const StyledBlockQuote = styled(Box, {
  paddingLeft: '$4',
  borderLeft: border(6, '$navy800'),
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
