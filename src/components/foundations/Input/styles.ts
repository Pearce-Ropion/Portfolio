import * as Form from '@radix-ui/react-form';

import { Box } from 'components/foundations/Box';
import { HTMLInput } from 'components/foundations/Html';
import { Copy } from 'components/foundations/Typography';
import { styled } from 'stitches.config';
import { border } from 'utils/style/format';

export const StyledInputField = styled(Form.Field, {});

export const StyledInputControl = styled(Box, {
  appearance: 'none',
  cursor: 'text',
  margin: 0,
  width: '100%',
  minWidth: 0, // override firefox's default minWidth
  alignItems: 'center',
  justifyContent: 'space-between',

  variants: {
    bordered: {
      true: {
        border: border(1, '$neutral700'),
        borderRadius: '$small',
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
        borderColor: '$red800',
      },
    },
    floating: {
      true: {},
    },
    focused: {
      true: {
        borderColor: '$navy800',
      },
    },
    fullWidth: {
      true: {
        minWidth: 'unset',
        width: '100%',
      },
    },
    labelled: {
      true: {
        marginTop: '$1',
      },
    },
    success: {
      true: {
        borderColor: '$green800',
      },
    },
  },

  compoundVariants: [
    {
      labelled: true,
      floating: true,
      css: {},
    },
  ],

  defaultVariants: {
    bordered: true,
  },
});

export const StyledInputLabel = styled(Form.Label, Copy.Styled, {
  margin: 0,
  marginBottom: '$1',

  variants: {
    floating: {
      true: {
        marginBottom: 0,
        transform: 'translate(0.625em, -0.625em) scale(0.75)',
        transition: 'transform 0.3s',
      },
    },
    focused: {
      true: {},
    },
  },

  compoundVariants: [
    {
      floating: true,
      focused: true,
      css: {},
    },
  ],
});

export const StyledInputMessage = styled(Form.Message, Copy.Styled, {
  variants: {
    error: {
      true: {
        color: '$red800',
      },
    },
  },
});

export const StyledInput = styled(HTMLInput, {
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
    error: {
      true: {
        color: '$red800',
      },
    },
    floating: {
      true: {},
    },
    focused: {
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
  },
});

export const StyledMessage = styled(Form.Message, {
  fontSize: '10px',
});
