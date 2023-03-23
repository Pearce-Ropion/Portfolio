import { HTMLButton } from 'components/foundations/Html';
import { styled } from 'stitches.config';
import { StyledConfig_t } from 'types/stitches';

const styledIconButtonConfig: StyledConfig_t = {
  shouldForwardStitchesProp: prop => prop === 'disabled',
};

export const StyledIconButton = styled.withConfig(styledIconButtonConfig)(
  HTMLButton,
  {
    borderRadius: '$circle',
    backgroundColor: '$navy800',
    border: 'none',
    outline: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    size: '$10',
    transition: '$standard',
    cursor: 'pointer',

    '&:not(:disabled)': {
      '&:hover, &:focus': {
        boxShadow: '$level2',
        transform: 'translateY(-1px)',

        '&:active': {
          transform: 'translateY(0px)',
        },
      },
    },

    variants: {
      disabled: {
        true: {
          cursor: 'default',
          opacity: 0.4,
        },
      },

      inverted: {
        true: {
          backgroundColor: '$orange900',
        },
      },
    },
  },
);
