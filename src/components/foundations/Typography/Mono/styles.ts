import { styled } from 'stitches.config';
import { Typography } from 'components/foundations/Typography/Typography';

export const StyledMono = styled(Typography, {
  fontFamily: '$code',
  fontSize: '$medium',

  variants: {
    weight: {
      extraLight: {
        fontWeight: '$extraLight',
      },
      light: {
        fontWeight: '$light',
      },
      normal: {
        fontWeight: '$normal',
      },
      medium: {
        fontWeight: '$medium',
      },
      semiBold: {
        fontWeight: '$semiBold',
      },
      bold: {
        fontWeight: '$bold',
      },
      extraBold: {
        fontWeight: '$extraBold',
      },
      black: {
        fontWeight: '$black',
      },
    },
  },
});
