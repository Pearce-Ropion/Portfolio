import { ComponentProps, VariantProps } from '@stitches/react';
import { styled } from 'stitches.config';
import { toPercent, toPx } from 'utils/style/units';
import { Hr as Primitive } from 'components/foundations/Html';
import { getDefaultVariants } from 'utils/variants';

export const Hr = styled(Primitive, {
  backgroundColor: '$neutral300',
  border: 'none',

  variants: {
    inverted: {
      true: {
        backgroundColor: '$neutral700',
      },
    },

    direction: {
      horizontal: {
        width: toPercent(100),
        height: toPx(1),
        margin: '0 auto',
      },
      vertical: {
        width: toPx(1),
        height: toPercent(100),
        margin: 'auto 0',
      },
    },
  },

  defaultVariants: {
    direction: 'horizontal',
  },
});

Hr.defaultProps = getDefaultVariants<typeof Hr>(Hr);

export type HrProps_t = ComponentProps<typeof Hr>;
export type HrVariants_t = VariantProps<typeof Hr>;
