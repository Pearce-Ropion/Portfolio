import { styled } from 'stitches.config';
import { Box } from 'components/foundations/Box';

export const StyledTypography = styled(Box, {
  fontFamily: '$primary',
  fontWeight: '$regular',
  fontStyle: 'normal',
  fontVariantNumeric: 'tabular-nums',
  display: 'block',
  padding: 0,

  variants: {
    align: {
      left: {
        textAlign: 'left',
        marginLeft: 0,
        marginRight: 'auto',
      },
      center: {
        textAlign: 'center',
        marginX: 'auto',
      },
      right: {
        textAlign: 'right',
        marginLeft: 'auto',
        marginRight: 0,
      },
    },

    inline: {
      true: {
        display: 'inline-block',
      },
    },

    inverted: {
      true: {
        color: '$neutral0',
      },
    },

    italic: {
      true: {
        fontStyle: 'italic',
      },
    },

    truncate: {
      true: {
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
      },
    },

    noWrap: {
      true: {
        whiteSpace: 'nowrap',
      },
    },
  },
});
