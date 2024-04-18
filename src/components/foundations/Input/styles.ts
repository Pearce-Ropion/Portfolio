import * as Form from '@radix-ui/react-form';
import { colord } from 'colord';

import { Box } from 'components/foundations/Box';
import { HTML } from 'components/Html';
import { Copy } from 'components/foundations/Typography';
import { styled, theme } from 'stitches.config';

export const StyledInputMessage = styled(Form.Message, Copy.Styled, {
  fontSize: '10px',

  variants: {
    error: {
      true: {
        color: '$red800',
      },
    },
  },
});

export const StyledInput = styled(HTML.Input, {
  boxSizing: 'border-box',
  border: 'none',
  outline: 'none',

  fontFamily: '$primary',
  fontSize: '$small',
  lineHeight: '$medium',

  width: '100%',
  padding: '6px $2',

  color: '$neutral900',
  backgroundColor: 'transparent',

  '&::placeholder': {
    color: '$neutral500',
  },

  variants: {
    active: {
      true: {},
    },
    disabled: {
      true: {},
    },
    error: {
      true: {
        color: '$red800',
      },
    },
    filled: { true: {} },
    floating: {
      true: {},
    },
    focused: {
      true: {},
    },
    labelled: {
      true: {},
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
    variant: {
      bordered: {},
      filled: {},
      standard: {},
    },
  },

  compoundVariants: [
    {
      floating: true,
      labelled: true,
      css: {
        '&::placeholder': {
          color: 'transparent',
        },
      },
    },
    {
      floating: true,
      labelled: true,
      focused: true,
      css: {
        '&::placeholder': {
          color: '$neutral500',
        },
      },
    },
  ],
});

export const StyledInputLabel = styled(Form.Label, Copy.Styled, {
  display: 'block',
  marginBottom: '$1',

  variants: {
    active: {
      true: {},
    },

    disabled: {
      true: {
        opacity: 0.4,
        cursor: 'default',
      },
    },

    error: {
      true: {
        color: '$red800',
      },
    },

    filled: {
      true: {},
    },

    floating: {
      true: {
        marginBottom: 0,
        fontSize: '$small',
        lineHeight: '$medium',
        position: 'absolute',
        display: 'inline-block',
        top: 'calc($1 + 2px)',
        left: '$2',
        backgroundColor: '$neutral0',
        cursor: 'text',
        pointerEvents: 'none',
        borderX: '0 solid $neutral0',

        transition: '0.15s ease-in-out',
        transitionProperty: 'transform, border-left, border-right, line-height',
        willChange: 'transform, border-left, border-right, line-height',
      },
    },

    focused: {
      true: {},
    },

    success: {
      true: {
        color: '$green800',
      },
    },
  },

  compoundVariants: [
    {
      active: true,
      floating: true,
      css: {
        borderXWidth: '$sizes$1',
        transform: 'translate(-15px, -15.5px) scale(0.75)',
        lineHeight: '$sizes$4',
      },
    },
  ],
});

export const StyledInputControl = styled(Box, {
  appearance: 'none',
  cursor: 'text',
  width: '100%',
  minWidth: 0, // override firefox's default minWidth
  alignItems: 'center',
  justifyContent: 'space-between',

  variants: {
    active: {
      true: {},
    },
    disabled: {
      true: {
        opacity: 0.4,
        cursor: 'default',
      },
    },
    error: {
      true: {},
    },
    floating: {
      true: {},
    },
    focused: {
      true: {},
    },
    fullWidth: {
      true: {
        minWidth: 'unset',
        width: '100%',
      },
    },
    inverted: {
      true: {},
    },
    labelled: {
      true: {
        // marginTop: '$1',
      },
    },
    success: {
      true: {},
    },
    variant: {
      bordered: {
        border: '1px solid',
        borderColor: '$neutral500',
        borderRadius: '$small',
      },
      filled: {
        backgroundColor: colord(theme.colors.neutral900.value)
          .alpha(0.09)
          .toRgbString(),
        borderTopLeftRadius: '$small',
        borderTopRightRadius: '$small',
        willChange: 'border-bottom-width, padding-bottom',

        '&:hover': {
          backgroundColor: colord(theme.colors.neutral900.value)
            .alpha(0.13)
            .toRgbString(),
          borderBottomWidth: '2px',

          [`& ${StyledInput}`]: {
            paddingBottom: '5px',
          },
        },
      },
      standard: {
        marginTop: '$4',
        borderBottom: '1px solid',
        borderBottomColor: '$neutral500',
        willChange: 'border-bottom-width, padding-bottom',

        '&:hover': {
          borderBottomWidth: '2px',

          [`& ${StyledInput}`]: {
            paddingBottom: '5px',
          },
        },
      },
    },
  },

  compoundVariants: [
    {
      error: true,
      variant: 'bordered',
      css: {
        borderColor: '$red800',
      },
    },
    {
      error: true,
      inverted: true,
      variant: 'bordered',
      css: {
        borderColor: '$red200',
      },
    },
    {
      focused: true,
      variant: 'bordered',
      css: {
        borderColor: '$navy800',
      },
    },
    {
      focused: true,
      inverted: true,
      variant: 'bordered',
      css: {
        borderColor: '$navy200',
      },
    },
    {
      inverted: true,
      variant: 'bordered',
      css: {
        borderColor: '$neutral0',
      },
    },
    {
      success: true,
      variant: 'bordered',
      css: {
        borderColor: '$green800',
      },
    },
    {
      inverted: true,
      success: true,
      variant: 'bordered',
      css: {
        borderColor: '$green200',
      },
    },
    {
      error: true,
      variant: 'filled',
      css: {
        borderBottomColor: '$red800',
      },
    },
    {
      error: true,
      inverted: true,
      variant: 'filled',
      css: {
        borderBottomColor: '$red200',
      },
    },
    {
      focused: true,
      variant: 'filled',
      css: {
        borderBottomColor: '$navy800',
        borderBottomWidth: '2px',

        [`& ${StyledInput}`]: {
          paddingBottom: '5px',
        },
      },
    },
    {
      focused: true,
      inverted: true,
      variant: 'filled',
      css: {
        borderBottomColor: '$navy200',
      },
    },
    {
      variant: 'filled',
      inverted: true,
      css: {
        backgroundColor: colord(theme.colors.neutral0.value)
          .alpha(0.09)
          .toRgbString(),

        '&:hover': {
          backgroundColor: colord(theme.colors.neutral0.value)
            .alpha(0.13)
            .toRgbString(),
        },
      },
    },
    {
      success: true,
      variant: 'filled',
      css: {
        borderBottomColor: '$green800',
      },
    },
    {
      inverted: true,
      success: true,
      variant: 'filled',
      css: {
        borderBottomColor: '$green200',
      },
    },
    {
      error: true,
      variant: 'standard',
      css: {
        borderBottomColor: '$red800',
      },
    },
    {
      error: true,
      inverted: true,
      variant: 'standard',
      css: {
        borderBottomColor: '$red200',
      },
    },
    {
      focused: true,
      variant: 'standard',
      css: {
        borderBottomColor: '$navy800',
        borderBottomWidth: '2px',

        [`& ${StyledInput}`]: {
          paddingBottom: '5px',
        },
      },
    },
    {
      focused: true,
      inverted: true,
      variant: 'standard',
      css: {
        borderBottomColor: '$navy200',
      },
    },
    {
      inverted: true,
      variant: 'standard',
      css: {
        backgroundColor: colord(theme.colors.neutral0.value)
          .alpha(0.09)
          .toRgbString(),

        '&:hover': {
          backgroundColor: colord(theme.colors.neutral0.value)
            .alpha(0.13)
            .toRgbString(),
        },
      },
    },
    {
      success: true,
      variant: 'standard',
      css: {
        borderBottomColor: '$green800',
      },
    },
    {
      inverted: true,
      success: true,
      variant: 'standard',
      css: {
        borderBottomColor: '$green200',
      },
    },
  ],

  defaultVariants: {
    variant: 'standard',
  },
});

export const StyledInputField = styled(Form.Field, {
  position: 'relative',
});
