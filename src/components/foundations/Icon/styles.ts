import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { styled } from 'stitches.config';
import { PropertyValue_t } from 'types/stitches';

declare module 'react' {
  interface CSSProperties {
    '--fa-main-color'?: PropertyValue_t<'color'>;
    '--fa-main-opacity'?: PropertyValue_t<'opacity'>;
  }
}

export const StyledIcon = styled(FontAwesomeIcon, {
  color: 'var(--fa-main-color, currentColor)',
  opacity: 'var(--fa-main-opacity)',
});
