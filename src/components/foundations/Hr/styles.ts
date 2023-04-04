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
        marginX: 'auto',
      },
      vertical: {
        width: '1px',
        height: '100%',
        marginY: 'auto',
      },
    },
  },

  defaultVariants: {
    direction: 'horizontal',
  },
});
