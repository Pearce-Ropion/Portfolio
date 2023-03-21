import { styled } from 'stitches.config';
import { Typography } from 'components/foundations/Typography/Typography';

export const StyledHeader = styled(Typography, {
  fontFamily: '$header',
  fontWeight: '$bold',
  fontSize: '$xLarge',
  lineHeight: '$xLarge',
  letterSpacing: '$long',

  variants: {
    subheader: {
      true: {
        fontFamily: '$primary',
        fontWeight: '$semiBold',
        letterSpacing: '$medium',
      },
    },
  },
});
