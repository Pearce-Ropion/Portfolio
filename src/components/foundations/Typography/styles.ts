import { styled } from 'stitches.config';
import { HTML } from 'components/Html';
import { flexGrowPreset } from 'styles/css';

export const StyledTypography = styled(HTML.Div, {
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

    grow: {
      true: flexGrowPreset,
    },

    isInline: {
      true: {
        display: 'inline-block',
      },
    },

    isInverted: {
      true: {
        color: '$neutral0',
      },
    },

    isItalic: {
      true: {
        fontStyle: 'italic',
      },
    },

    wrap: {
      false: {
        whiteSpace: 'nowrap',
      },
    },

    isTruncated: {
      true: {
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
      },
    },
  },
});
