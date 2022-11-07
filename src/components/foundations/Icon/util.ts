import type { VariantProps } from '@stitches/react';

import { css } from 'stitches.config';

export const getIconStyle = css({
  variants: {
    padded: {
      left: {
        marginLeft: '$1',
      },
      right: {
        marginRight: '$1',
      },
      both: {
        marginLeft: '$1',
        marginRight: '$1',
      },
    },
  },
});

export type IconVariants_t = VariantProps<typeof getIconStyle>;
export type IconElement_t = SVGSVGElement;
