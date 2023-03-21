import { styled } from 'stitches.config';
import { Typography } from 'components/foundations/Typography/Typography';

export const StyledCopy = styled(Typography, {
  fontFamily: '$primary',
  fontWeight: '$normal',

  variants: {
    size: {
      small: {
        fontSize: '$small',
        lineHeight: '$small',
      },
      medium: {
        fontSize: '$medium',
        lineHeight: '$medium',
      },
      large: {
        fontSize: '$large',
        lineHeight: '$large',
      },
    },

    weight: {
      thin: {
        fontWeight: '$thin',
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
      bold: {
        fontWeight: '$bold',
      },
      black: {
        fontWeight: '$black',
      },
    },
  },

  defaultVariants: {
    size: 'medium',
    weight: 'normal',
  },
});
