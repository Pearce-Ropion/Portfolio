import { HTML } from 'components/Html';
import { styled } from 'stitches.config';

export const StyledDivider = styled(HTML.Span, {
  borderRadius: '$pill',

  variants: {
    direction: {
      horizontal: {
        marginX: 'auto',
        maxWidth: '100%',
        minHeight: 'var(--divider-thickness, 1px)',
        width: 'var(--divider-length, 100%)',
      },
      vertical: {
        height: 'var(--divider-length, 100%)',
        marginY: 'auto',
        maxHeight: '100%',
        minWidth: 'var(--divider-thickness, 1px)',
      },
    },

    isInverted: {
      true: {
        backgroundColor: '$neutral0',
      },
      false: {
        backgroundColor: '$neutral500',
      },
    },

    isSquared: {
      true: {
        borderRadius: 0,
      },
    },
  },

  defaultVariants: {
    isInverted: false,
  },
});
