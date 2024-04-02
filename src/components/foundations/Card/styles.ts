import { Box } from 'components/foundations/Box';
import { styled } from 'stitches.config';
import { border } from 'utils/style/format';

export const StyledCard = styled(Box, {
  borderRadius: '$large',

  backgroundColor: '$neutral0',
  boxShadow: '$level2',
  minWidth: '280px',
  maxWidth: '400px',

  variants: {
    isBordered: {
      true: {
        border: border(1, '$navy500'),
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
        border: border(1, 'transparent'),
      },
    },
  ],

  defaultVariants: {
    isPadded: true,
  },
});
