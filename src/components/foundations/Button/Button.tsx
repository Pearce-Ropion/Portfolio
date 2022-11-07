import type { SegmentEvent } from '@segment/analytics-next';
import type { ComponentProps, VariantProps } from '@stitches/react';
import type { ReactNode } from 'react';
import { forwardRef, memo } from 'react';

import { ButtonBase } from 'components/foundations/Button/ButtonBase';
import { Copy } from 'components/foundations/Typography';
import { styled } from 'stitches.config';
import { Transition } from 'styles/tokens/animation';
import { Elevation } from 'styles/tokens/elevation';
import { MemoForwardRefComponent_t } from 'types/component';
import { border } from 'utils/style/format';
import { toPercent, toPx } from 'utils/style/units';
import { getDefaultVariants } from 'utils/variants';
import {
  ButtonPrefix,
  ButtonSuffix,
} from 'components/foundations/Button/ButtonAffix';
import {
  DEFAULT_BUTTON_VARIANT,
  SECONDARY_BUTTON_BORDER_WIDTH,
  BUTTON_HORIZONTAL_PADDING,
  BUTTON_VERTICAL_PADDING,
} from 'components/foundations/Button/util';
import { Flex } from 'components/foundations/Flex';

export const ButtonCopy = styled(Copy, {
  variants: {
    inverted: { true: {} },

    variant: {
      primary: {
        color: '$neutral0',
      },
      secondary: {
        color: '$navy900',
      },
    },
  },

  compoundVariants: [
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

export const ButtonInner = styled(Flex, {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',

  variants: {
    variant: {
      primary: {
        paddingY: toPx(BUTTON_VERTICAL_PADDING),
        paddingX: toPx(BUTTON_HORIZONTAL_PADDING),
      },
      secondary: {
        paddingY: toPx(BUTTON_VERTICAL_PADDING - SECONDARY_BUTTON_BORDER_WIDTH),
        paddingX: toPx(
          BUTTON_HORIZONTAL_PADDING - SECONDARY_BUTTON_BORDER_WIDTH,
        ),
      },
    },

    prefix: {
      true: {
        paddingLeft: 0,
      },
    },

    suffix: {
      true: {
        paddingRight: 0,
      },
    },
  },

  compoundVariants: [
    {
      variant: 'primary',
      prefix: true,
      css: {
        paddingLeft: 0,
      },
    },
    {
      variant: 'primary',
      suffix: true,
      css: {
        paddingRight: 0,
      },
    },
    {
      variant: 'secondary',
      prefix: true,
      css: {
        paddingLeft: 0,
      },
    },
    {
      variant: 'secondary',
      suffix: true,
      css: {
        paddingRight: 0,
      },
    },
  ],

  defaultVariants: {
    variant: DEFAULT_BUTTON_VARIANT,
  },
});

export const StyledButton = styled(ButtonBase, {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '$large',
  cursor: 'pointer',
  userSelect: 'none',
  border: 'none',
  outline: 'none',
  transition: Transition.standard,
  whiteSpace: 'nowrap',
  textAlign: 'center',
  margin: 0,
  padding: 0,

  '&:hover, &:focus': {
    boxShadow: Elevation.level2,
    transform: 'translateY(-1px)',
  },

  variants: {
    disabled: {
      true: {
        opacity: 0.4,
        cursor: 'default',

        '&:hover, &:focus': {
          boxShadow: 'none',
          transform: 'none',
        },
      },
    },

    fullWidth: {
      true: {
        width: toPercent(100),
      },
    },

    inverted: { true: {} },
    prefix: {
      true: {
        paddingLeft: toPx(BUTTON_HORIZONTAL_PADDING),
        justifyContent: 'space-between',
      },
    },
    suffix: {
      true: {
        paddingRight: toPx(BUTTON_HORIZONTAL_PADDING),
        justifyContent: 'space-between',
      },
    },

    variant: {
      primary: {
        color: '$neutral0',
        backgroundColor: '$navy900',
      },
      secondary: {
        color: '$navy900',
        backgroundColor: 'transparent',
        border: border(SECONDARY_BUTTON_BORDER_WIDTH, '$navy900'),
      },
    },
  },

  compoundVariants: [
    {
      variant: 'primary',
      inverted: true,
      css: {
        backgroundColor: '$orange800',
      },
    },
    {
      variant: 'primary',
      prefix: true,
      css: {
        paddingLeft: toPx(BUTTON_HORIZONTAL_PADDING),
      },
    },
    {
      variant: 'primary',
      suffix: true,
      css: {
        paddingRight: toPx(BUTTON_HORIZONTAL_PADDING),
      },
    },
    {
      variant: 'secondary',
      inverted: true,
      css: {
        color: '$yellow900',
        borderColor: '$yellow900',
      },
    },
    {
      variant: 'secondary',
      prefix: true,
      css: {
        paddingLeft: toPx(
          BUTTON_HORIZONTAL_PADDING - SECONDARY_BUTTON_BORDER_WIDTH,
        ),
      },
    },
    {
      variant: 'secondary',
      suffix: true,
      css: {
        paddingRight: toPx(
          BUTTON_HORIZONTAL_PADDING - SECONDARY_BUTTON_BORDER_WIDTH,
        ),
      },
    },
  ],

  defaultVariants: {
    variant: DEFAULT_BUTTON_VARIANT,
  },
});

export type StyledButtonVariants_t = VariantProps<typeof StyledButton>;
export type StyledButtonProps_t = Omit<
  ComponentProps<typeof StyledButton>,
  'prefix' | 'suffix'
>;

const defaultVariants = getDefaultVariants<typeof StyledButton>(StyledButton);

export type ButtonElement_t = HTMLButtonElement;
export type ButtonVariants_t = StyledButtonVariants_t;
export interface ButtonProps_t extends StyledButtonProps_t {
  prefix?: ReactNode;
  suffix?: ReactNode;
  segment?: SegmentEvent;
}

export type Button_t = MemoForwardRefComponent_t<
  ButtonElement_t,
  ButtonProps_t
>;

export const Button: Button_t = memo(
  forwardRef<ButtonElement_t, ButtonProps_t>(
    (
      {
        children,
        inverted,
        prefix,
        suffix,
        variant = defaultVariants.variant,
        ...rest
      },
      ref,
    ) => {
      let inner = children;
      if (typeof children === 'string') {
        inner = (
          <ButtonCopy variant={variant} inverted={inverted}>
            {children}
          </ButtonCopy>
        );
      }

      let prefixNode = prefix;
      if (typeof prefix === 'string') {
        prefixNode = (
          <ButtonPrefix variant={variant} inverted={inverted}>
            {prefix}
          </ButtonPrefix>
        );
      }

      let suffixNode = suffix;
      if (typeof suffix === 'string') {
        suffixNode = (
          <ButtonSuffix variant={variant} inverted={inverted}>
            {suffix}
          </ButtonSuffix>
        );
      }

      return (
        <StyledButton
          ref={ref}
          {...rest}
          inverted={inverted}
          prefix={!!prefix}
          suffix={!!suffix}
          variant={variant}
        >
          {prefixNode}
          <ButtonInner variant={variant} prefix={!!prefix} suffix={!!suffix}>
            {inner}
          </ButtonInner>
          {suffixNode}
        </StyledButton>
      );
    },
  ),
);

Button.defaultProps = defaultVariants;
