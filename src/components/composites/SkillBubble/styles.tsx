import { Copy, Flex } from 'components/foundations';
import { styled } from 'stitches.config';

export const StyledSkillBubble = styled(Flex, {
  backgroundColor: '$orange200',
  borderRadius: '$circle',
  position: 'relative',
  opacity: 0.75,

  '&::before': {
    backgroundColor: '$orange500',
    position: 'absolute',
    size: 'calc(100% - 32px)',
    borderRadius: '$circle',
  },

  variants: {
    duotone: {
      true: {
        '&::before': {
          content: '""',
        },
      },
    },

    inverted: {
      true: {
        backgroundColor: '$yellow200',
        opacity: 1,
      },
    },

    size: {
      xSmall: {
        size: '64px',
      },
      small: {
        size: '110px',
      },
      medium: {
        size: '144px',
      },
      large: {
        size: '172px',
      },
      xLarge: {
        size: '212px',
      },
    },
  },

  compoundVariants: [
    {
      duotone: true,
      inverted: true,
      css: {
        '&::before': {
          backgroundColor: '$yellow500',
          opacity: 0.65,
        },
      },
    },
  ],
});

export const StyledSkillBubbleSkill = styled(Copy, {
  zIndex: 1,
});
