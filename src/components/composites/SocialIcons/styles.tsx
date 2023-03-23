import { Box } from 'components/foundations';
import { styled } from 'stitches.config';

export const StyledSocialIcon = styled(Box, {
  variants: {
    direction: {
      horizontal: {
        '&:not(:last-child)': {
          paddingRight: '$7',
        },
      },

      vertical: {
        '&:not(:last-child)': {
          paddingBottom: '$7',
        },
      },
    },
  },
});
