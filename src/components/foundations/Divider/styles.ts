import { HTML } from 'components/foundations/Html';
import { styled } from 'stitches.config';
import { mkThemeVar } from 'utils/styles/mkThemeVar';

export const StyledDivider = styled(HTML.Span, {
  backgroundColor: mkThemeVar('divider-background', '$borderComponentStatic'),
  borderRadius: '$pill',

  variants: {
    direction: {
      horizontal: {
        marginX: 'auto',
        maxWidth: '100%',
        minHeight: 'var(--phi-divider-thickness, 1px)',
        width: 'var(--phi-divider-length, 100%)',
      },
      vertical: {
        height: 'var(--phi-divider-length, 100%)',
        marginY: 'auto',
        maxHeight: '100%',
        minWidth: 'var(--phi-divider-thickness, 1px)',
      },
    },

    squared: {
      true: {
        borderRadius: 0,
      },
    },
  },
});
