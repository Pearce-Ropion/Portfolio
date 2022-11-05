import type { ComponentProps, VariantProps } from '@stitches/react';

import { styled } from 'stitches.config';
import {
  Typography,
  TypographyVariants_t,
} from 'components/foundations/Typography/Typography';
import { getDefaultVariants } from 'utils/variants';

export const Header = styled(Typography, {
  fontFamily: '$header',
  fontWeight: '$bold',
  fontSize: '$xLarge',
  lineHeight: '$xLarge',
  letterSpacing: '$long',

  variants: {
    subheader: {
      true: {
        fontFamily: '$primary',
        fontWeight: '$semibold',
        letterSpacing: '$medium',
      },
    },
  },
});

Header.defaultProps = getDefaultVariants<typeof Header>(Header);

export type HeaderProps_t = ComponentProps<typeof Header>;
export type HeaderVariants_t = VariantProps<typeof Header> &
  TypographyVariants_t;
