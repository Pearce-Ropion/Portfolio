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
import { PropertyValue_t } from 'types/stitches';
import { border } from 'utils/style/format';
import { toPercent, toPx } from 'utils/style/units';
import { getDefaultVariants } from 'utils/variants';
import {
  ButtonPrefix,
  ButtonSuffix,
} from 'components/foundations/Button/ButtonAffix';
import { Flex } from 'components/foundations/Flex';

export const BUTTON_TRACK_EVENT_NAME = 'click-button';
export const SECONDARY_BUTTON_BORDER_WIDTH = 3;

const buttonPadding = (
  borderWidth: number,
  affix?: 'left' | 'right' | 'both',
): PropertyValue_t<'padding'> => {
  const verticalPadding = 12;
  const horizontalPadding = 24;

  const vertical = toPx(verticalPadding - borderWidth);
  const defaultHorizontalPadding = horizontalPadding - borderWidth;

  let left = defaultHorizontalPadding;
  let right = defaultHorizontalPadding;
  const affixPadding = defaultHorizontalPadding - 6;

  if (affix === 'left' || affix === 'both') {
    left = affixPadding;
  }

  if (affix === 'right' || affix === 'both') {
    right = affixPadding;
  }

  return `${vertical} ${toPx(right)} ${vertical} ${toPx(left)}`;
};

export const StyledButtonInner = styled(Flex, {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  paddingY: 

  variants: {
    prefix: {
      true: {

      }
    },

    suffix: {
      true: {

      }
    }
  }
})

export const StyledButton = styled(ButtonBase, {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  borderRadius: '$large',
  cursor: 'pointer',
  userSelect: 'none',
  border: 'none',
  outline: 'none',
  transition: Transition.standard,
  whiteSpace: 'nowrap',
  textAlign: 'center',

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
    prefix: { true: {} },
    suffix: { true: {} },

    variant: {
      primary: {
        color: '$neutral0',
        backgroundColor: '$navy900',
        padding: buttonPadding(0),
      },
      secondary: {
        color: '$navy900',
        backgroundColor: 'transparent',
        padding: buttonPadding(SECONDARY_BUTTON_BORDER_WIDTH),
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
        padding: buttonPadding(0, 'left'),
      },
    },
    {
      variant: 'primary',
      suffix: true,
      css: {
        padding: buttonPadding(0, 'right'),
      },
    },
    {
      variant: 'primary',
      prefix: true,
      suffix: true,
      css: {
        padding: buttonPadding(0, 'both'),
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
        padding: buttonPadding(SECONDARY_BUTTON_BORDER_WIDTH, 'left'),
      },
    },
    {
      variant: 'secondary',
      suffix: true,
      css: {
        padding: buttonPadding(SECONDARY_BUTTON_BORDER_WIDTH, 'right'),
      },
    },
    {
      variant: 'secondary',
      prefix: true,
      suffix: true,
      css: {
        padding: buttonPadding(SECONDARY_BUTTON_BORDER_WIDTH, 'both'),
      },
    },
  ],

  defaultVariants: {
    variant: 'primary',
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
        inner = <Copy align="center">{children}</Copy>;
      }

      let prefixNode = prefix;
      if (typeof prefix === 'string') {
        prefixNode = <ButtonPrefix>{prefix}</ButtonPrefix>;
      }

      let suffixNode = suffix;
      if (typeof suffix === 'string') {
        suffixNode = <ButtonSuffix>{suffix}</ButtonSuffix>;
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
          {inner}
          {suffixNode}
        </StyledButton>
      );
    },
  ),
);

Button.defaultProps = defaultVariants;
