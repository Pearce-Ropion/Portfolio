import { Box } from 'components/foundations';
import { styled } from 'stitches.config';
import { StyledConfig_t } from 'types/stitches';
import { border } from 'utils/style/format';

const styledBlockQuoteConfig: StyledConfig_t = {
  shouldForwardStitchesProp: prop => prop === 'inverted',
};

export const StyledBlockQuote = styled.withConfig(styledBlockQuoteConfig)(Box, {
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
