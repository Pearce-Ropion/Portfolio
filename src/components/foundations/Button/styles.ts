import { Aria } from 'components/aria';
import { styled } from 'stitches.config';
import { shouldForwardStitchesConfig } from 'utils/style/styled';

const withStyled = styled.withConfig(shouldForwardStitchesConfig('isDisabled'));
export const StyledButton = withStyled(Aria.Button, {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexShrink: 0,

  borderRadius: '$large',
  whiteSpace: 'nowrap',
  minWidth: '88px',

  // Fixes an odd tap effect on some mobile devices
  WebkitTapHighlightColor: 'transparent',

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
      },
      false: {
        cursor: 'pointer',
        transition: '$standard',

        '&:hover, &:focus': {
          boxShadow: '$level2',
          transform: 'translateY(-1px)',

          '&:active': {
            transform: 'translateY(0)',
          },
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
    isDisabled: false,
    variant: 'primary',
  },
});
