import { styled } from 'stitches.config';
import { HTML } from 'components/Html';
import { flexGrowPreset } from 'styles/css';

export const StyledBox = styled(HTML.Div, {
  boxSizing: 'border-box',

  variants: {
    grow: {
      true: flexGrowPreset,
    },
  },
});
