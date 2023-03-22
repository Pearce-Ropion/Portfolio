import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { styled } from 'stitches.config';

export const StyledIcon = styled(FontAwesomeIcon, {
  color: 'var(--fa-main-color, currentColor)',
  opacity: 'var(--fa-main-opacity)',

  variants: {
    padded: {
      left: {
        marginLeft: '$1',
      },
      right: {
        marginRight: '$1',
      },
      both: {
        marginX: '$1',
      },
    },
  },
});
