import * as Form from '@radix-ui/react-form';

import { Flex } from 'components/foundations/Flex';
import { HTMLInput } from 'components/foundations/Html';
import { styled } from 'stitches.config';

export const StyledInputWrapper = styled(Flex, {
  appearance: 'none',
  cursor: 'text',
  margin: 0,
  width: '100%',
  minWidth: 0, // override firefox's default minWidth
  alignItems: 'center',
  justifyContent: 'space-between',

  color: 'var(--input-text, $textNeutral)',
  backgroundColor: 'var(--input-background, $backgroundNeutralHighContrast)',

  variants: {
    bordered: {
      true: {
        border: '1px solid var(--input-bordered-border, $borderNeutralDarker)',
        borderRadius: 'var(--input-bordered-border-radius, $small)',
      },
    },
    disabled: {
      true: {
        opacity: 0.4,
        cursor: 'default',
      },
    },
    error: {
      true: {
        borderColor: 'var(--input-error-border, $controlBorderError)',
      },
    },
    focused: {
      true: {
        borderColor: 'var(--input-focused-border, $controlBorderActive)',
      },
    },
    fullWidth: {
      true: {
        minWidth: 'unset',
        width: '100%',
      },
    },
    prefix: {
      true: {
        paddingLeft: '$2',
      },
    },
    success: {
      true: {
        borderColor: 'var(--input-success-border, $controlBorderSuccess)',
      },
    },
    suffix: {
      true: {
        paddingRight: '$3',
      },
    },
  },

  defaultVariants: {
    bordered: true,
  },
});

export const StyledInput = styled(HTMLInput, {
  boxSizing: 'border-box',
  width: '100%',
  padding: '6px $2',

  fontFamily: 'var(--input-font-family, $primary)',
  fontSize: 'var(--input-font-size, $medium)',
  lineHeight: 'var(--input-line-height, $medium)',

  border: 'none',
  outline: 'none',
  color: 'var(--input-text, $textNeutral)',
  backgroundColor: 'transparent',

  '&::placeholder': {
    color: 'var(--input-placeholder, $textNeutralPlaceholder)',
  },

  variants: {
    bordered: {
      true: {
        borderRadius: 'var(--input-bordered-border-radius, $small)',
      },
    },
    error: {
      true: {
        color: 'var(--input-error-text, $fillDanger)',
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
});

export const StyledMessage = styled(Form.Message, {});
