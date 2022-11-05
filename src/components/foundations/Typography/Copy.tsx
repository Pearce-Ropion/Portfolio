import type { ComponentProps, VariantProps } from '@stitches/react';

import { styled } from 'stitches.config';
import {
  Typography,
  TypographyVariants_t,
} from 'components/foundations/Typography/Typography';
import { getDefaultVariants } from 'utils/variants';

export const Copy = styled(Typography, {
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
      light: {
        fontWeight: '$light',
      },
      normal: {
        fontWeight: '$normal',
      },
      medium: {
        fontWeight: '$medium',
      },
      semibold: {
        fontWeight: '$semibold',
      },
      bold: {
        fontWeight: '$bold',
      },
    },
  },

  defaultVariants: {
    size: 'medium',
    weight: 'normal',
  },
});

Copy.defaultProps = getDefaultVariants<typeof Copy>(Copy);

export type CopyProps_t = ComponentProps<typeof Copy>;
export type CopyVariants_t = VariantProps<typeof Copy> & TypographyVariants_t;
