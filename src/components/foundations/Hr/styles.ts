import { styled } from 'stitches.config';
import { HTMLHorizontalRule } from 'components/foundations/Html';

export const StyledHr = styled(HTMLHorizontalRule, {
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
        width: '100%',
        height: '1px',
        margin: '0 auto',
      },
      vertical: {
        width: '1px',
        height: '100%',
        margin: 'auto 0',
      },
    },
  },

  defaultVariants: {
    direction: 'horizontal',
  },
});
