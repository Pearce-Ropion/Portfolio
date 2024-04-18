import { Button } from 'react-aria-components';
import { styled } from 'stitches.config';
import { shouldForwardStitchesConfig } from 'utils/style/styled';

const withStyled = styled.withConfig(shouldForwardStitchesConfig('isDisabled'));
export const StyledAriaButton = withStyled(Button, {
  // Reset button styles
  outline: 'none',
  border: 'none',
});
