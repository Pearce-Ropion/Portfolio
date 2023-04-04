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
    bordered: {
      true: {
        border: border(1, '$navy500'),
      },
    },

    inverted: {
      true: {
        boxShadow: 'none',
        backgroundColor: '$navy200',
      },
    },

    padded: {
      true: {
        padding: '$7',
      },
    },
  },

  compoundVariants: [
    {
      bordered: true,
      inverted: true,
      css: {
        border: border(1, 'transparent'),
      },
    },
  ],

  defaultVariants: {
    padded: true,
  },
});
