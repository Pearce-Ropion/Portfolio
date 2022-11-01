import type { ComponentProps, VariantProps } from '@stitches/react';

import { styled } from 'stitches.config';
import { Div } from 'components/foundations/Html';

export const Typography = styled(Div, {
  fontFamily: '$primary',
  fontWeight: '$regular',
  fontStyle: 'normal',
  fontVariantNumeric: 'tabular-nums',
  display: 'block',
  margin: 0,
  padding: 0,

  variants: {
    inline: {
      true: {
        display: 'inline-block',
      },
    },

    align: {
      left: {
        textAlign: 'left',
      },
      center: {
        textAlign: 'center',
      },
      right: {
        textAlign: 'right',
      },
    },

    inverted: {
      true: {
        color: '$neutral0',
      },
    },

    bold: {
      true: {
        fontWeight: '$semibold',
      },
    },

    italic: {
      true: {
        fontStyle: 'italic',
      },
    },
  },

  defaultVariants: {
    align: 'left',
  },
});

export type TypographyVariants_t = VariantProps<typeof Typography>;
export type TypographyProps_t = ComponentProps<typeof Typography>;
