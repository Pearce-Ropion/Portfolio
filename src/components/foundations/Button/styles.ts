import { HTML } from 'components/foundations/Html';
import { styled } from 'stitches.config';

export const StyledButton = styled(HTML.Button, {
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
    isCompact: {
      true: {
        minWidth: 'unset',
      },
    },

    isDisabled: {
      true: {
        opacity: 0.4,
        cursor: 'default',

        '$:hover, &:focus': {
          boxShadow: 'none',
          transform: 'none',
        },
      },
    },

    isFullWidth: {
      true: {
        width: '100%',
      },
    },

    isInverted: {
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
      isInverted: true,
      variant: 'primary',
      css: {
        backgroundColor: '$orange800',
      },
    },
    {
      isInverted: true,
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
