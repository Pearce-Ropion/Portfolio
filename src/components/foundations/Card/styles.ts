import { Box } from 'components/foundations/Box';
import { styled } from 'stitches.config';

export const StyledCard = styled(Box, {
  borderRadius: '$large',

  backgroundColor: '$neutral0',
  boxShadow: '$level2',
  minWidth: '280px',
  maxWidth: '400px',

  variants: {
    isBordered: {
      true: {
        border: '1px solid $navy500',
      },
    },

    isInverted: {
      true: {
        boxShadow: 'none',
        backgroundColor: '$navy200',
      },
    },

    isPadded: {
      true: {
        padding: '$7',
      },
    },
  },

  compoundVariants: [
    {
      isBordered: true,
      isInverted: true,
      css: {
        border: '1px solid transparent',
      },
    },
  ],

  defaultVariants: {
    isPadded: true,
  },
});
