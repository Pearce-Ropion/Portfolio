import { Aria } from 'components/aria';
import { styled } from 'stitches.config';
import { shouldForwardStitchesConfig } from 'utils/style/styled';

const withStyled = styled.withConfig(shouldForwardStitchesConfig('isDisabled'));
export const StyledIconButton = withStyled(Aria.Button, {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  size: '$10',
  borderRadius: '$circle',
  backgroundColor: '$navy800',

  // Fixes an odd tap effect on some mobile devices
  WebkitTapHighlightColor: 'transparent',

  variants: {
    isDisabled: {
      true: {
        cursor: 'default',
        opacity: 0.4,
      },
      false: {
        cursor: 'pointer',
        transition: '$standard',

        '&:hover, &:focus': {
          boxShadow: '$level2',
          transform: 'translateY(-1px)',

          '&:active': {
            transform: 'translateY(0px)',
          },
        },
      },
    },

    isInverted: {
      true: {
        backgroundColor: '$orange900',
      },
    },
  },

  defaultVariants: {
    isDisabled: false,
  },
});
