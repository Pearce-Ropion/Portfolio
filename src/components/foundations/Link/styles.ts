import { Link as GatsbyLink } from 'gatsby';

import { styled } from 'stitches.config';
import { HTMLAnchor } from 'components/foundations/Html';
import { StyledConfig_t } from 'types/stitches';

const styledLinkConfig: StyledConfig_t = {
  shouldForwardStitchesProp: prop => prop === 'disabled',
};

export const StyledLink = styled.withConfig(styledLinkConfig)(HTMLAnchor, {
  $$border: '0.125em',

  color: '$navy500',
  textDecoration: 'none',
  cursor: 'pointer',
  transition: 'background-size $standard',
  paddingBottom: '0.125em',
  backgroundImage:
    'linear-gradient(transparent calc(100% - $$border), $navy500 $$border)',
  backgroundSize: '0% 100%',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'bottom right',

  '&:not(:disabled)': {
    '&:hover': {
      backgroundSize: '100% 100%',
      backgroundPosition: 'bottom left',
    },
  },

  variants: {
    disabled: {
      true: {
        color: 'currentColor',
      },
    },

    inverted: {
      true: {
        // color: '$orange500',
      },
    },
  },
});

export const StyledGatsbyLink = styled(GatsbyLink, StyledLink);
