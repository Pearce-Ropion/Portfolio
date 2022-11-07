import { forwardRef, memo } from 'react';
import type { ComponentProps, VariantProps } from '@stitches/react';

import { styled } from 'stitches.config';
import { Flex } from 'components/foundations/Flex';
import { toEm, toPercent } from 'utils/style/units';
import { Copy } from 'components/foundations/Typography';
import { DEFAULT_BUTTON_VARIANT } from 'components/foundations/Button/util';

const ButtonAffixCopy = styled(Copy, {
  color: '$neutral500',

  variants: {
    inverted: { true: {} },
    variant: {
      primary: {
        color: '$neutral300',
      },
      secondary: {
        color: '$neutral700',
      },
    },
  },

  compoundVariants: [
    {
      variant: 'primary',
      inverted: true,
      css: {
        color: '$neutral0',
      },
    },
    {
      variant: 'secondary',
      inverted: true,
      css: {
        color: '$yellow900',
      },
    },
  ],

  defaultVariants: {
    variant: DEFAULT_BUTTON_VARIANT,
  },
});

type ButtonAffixElement = HTMLDivElement;
const ButtonAffix = styled(Flex, {
  whiteSpace: 'nowrap',
  alignItems: 'center',
  justifyContent: 'center',
  height: toEm(0.01),
  maxHeight: toPercent(100),
});

const StyledButtonPrefix = styled(ButtonAffix, {
  marginRight: '$4',
});
type StyledButtonPrefixProps_t = ComponentProps<typeof StyledButtonPrefix>;

export interface ButtonPrefixProps_t
  extends StyledButtonPrefixProps_t,
    VariantProps<typeof ButtonAffixCopy> {}

export const ButtonPrefix = memo(
  forwardRef<ButtonAffixElement, ButtonPrefixProps_t>(
    (
      { children, variant = DEFAULT_BUTTON_VARIANT, inverted, ...rest },
      ref,
    ) => {
      let inner = children;
      if (typeof children === 'string') {
        inner = (
          <ButtonAffixCopy variant={variant} inverted={inverted}>
            {children}
          </ButtonAffixCopy>
        );
      }

      return (
        <StyledButtonPrefix ref={ref} {...rest}>
          {inner}
        </StyledButtonPrefix>
      );
    },
  ),
);

const StyledButtonSuffix = styled(ButtonAffix, {
  marginLeft: '$4',
});

type StyledButtonSuffixProps_t = ComponentProps<typeof StyledButtonSuffix>;
export interface ButtonSuffixProps_t
  extends StyledButtonSuffixProps_t,
    VariantProps<typeof ButtonAffixCopy> {}

export const ButtonSuffix = memo(
  forwardRef<ButtonAffixElement, ButtonSuffixProps_t>(
    (
      { children, variant = DEFAULT_BUTTON_VARIANT, inverted, ...rest },
      ref,
    ) => {
      let inner = children;
      if (typeof children === 'string') {
        inner = (
          <ButtonAffixCopy variant={variant} inverted={inverted}>
            {children}
          </ButtonAffixCopy>
        );
      }

      return (
        <StyledButtonSuffix ref={ref} {...rest}>
          {inner}
        </StyledButtonSuffix>
      );
    },
  ),
);
