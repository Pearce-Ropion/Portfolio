import { styled } from 'stitches.config';
import { HTMLButton } from 'components/foundations/Html';
import { StyledConfig_t } from 'types/stitches';

const styledButtonConfig: StyledConfig_t = {
  shouldForwardStitchesProp: prop => prop === 'disabled',
};

export const StyledButton = styled.withConfig(styledButtonConfig)(HTMLButton, {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  flexShrink: 0,
  borderRadius: '$large',
  cursor: 'pointer',
  border: 'none',
  outline: 'none',
  transition: '$standard',
  userSelect: 'none',
  whiteSpace: 'nowrap',
  minWidth: '88px',

  // Fixes an odd tap effect on some mobile devices
  WebkitTapHighlightColor: 'transparent',

  '&:hover, &:focus': {
    boxShadow: '$level2',
    transform: 'translateY(-1px)',

    '&:active': {
      transform: 'translateY(0)',
    },
  },

  variants: {
    compact: {
      true: {
        minWidth: 'unset',
      },
    },

    disabled: {
      true: {
        opacity: 0.4,
        cursor: 'default',

        '$:hover, &:focus': {
          boxShadow: 'none',
          transform: 'none',
        },
      },
    },

    fullWidth: {
      true: {
        width: '100%',
      },
    },

    inverted: {
      true: {},
    },

    variant: {
      primary: {
        backgroundColor: '$navy900',
        color: '$neutral0',
        paddingY: '$3',
        paddingX: '$6',
        fontWeight: '$semiBold',
      },
      secondary: {
        backgroundColor: 'transparent',
        border: '3px solid $navy900',
        color: '$navy900',
        paddingY: 'calc($3 - 3px)',
        paddingX: 'calc($6 - 3px)',
      },
    },
  },

  compoundVariants: [
    {
      inverted: true,
      variant: 'primary',
      css: {
        backgroundColor: '$orange800',
      },
    },
    {
      inverted: true,
      variant: 'secondary',
      css: {
        color: '$neutral900',
        borderColor: '$yellow900',
      },
    },
  ],

  defaultVariants: {
    variant: 'primary',
  },
});
