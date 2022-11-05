import type { ComponentProps, VariantProps } from '@stitches/react';

import { styled } from 'stitches.config';
import {
  Typography,
  TypographyVariants_t,
} from 'components/foundations/Typography/Typography';

export const Mono = styled(Typography, {
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

export type MonoProps_t = ComponentProps<typeof Mono>;
export type MonoVariants_t = VariantProps<typeof Mono> & TypographyVariants_t;
