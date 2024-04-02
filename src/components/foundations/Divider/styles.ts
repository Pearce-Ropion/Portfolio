import { HTML } from 'components/foundations/Html';
import { styled } from 'stitches.config';

export const StyledDivider = styled(HTML.Span, {
  backgroundColor: '$neutral500',
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

    isSquared: {
      true: {
        borderRadius: 0,
      },
    },
  },
});
