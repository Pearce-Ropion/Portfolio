import { ElementRef, HTMLInputTypeAttribute, ReactNode, useState } from 'react';
import * as Form from '@radix-ui/react-form';

import {
  StyledInput,
  StyledInputControl,
  StyledInputField,
  StyledInputLabel,
  StyledInputMessage,
} from 'components/foundations/Input/styles';
import {
  createComponentWithRef,
  OmitComponentVariantProps_t,
} from 'utils/component';
import { IconProp_t } from 'components/foundations/Icon';

export const FLOAT_TYPES: Set<HTMLInputTypeAttribute> = new Set([
  'email',
  'number',
  'password',
  'search',
  'tel',
  'text',
  'url',
]);

export type InputElement_t = ElementRef<typeof StyledInput>;
export interface InputProps_t
  extends OmitComponentVariantProps_t<typeof StyledInput> {
  bordered?: boolean;
  clearable?: boolean;
  error?: boolean | string;
  floating?: boolean;
  focused?: boolean;
  icon?: IconProp_t;
  inverted?: boolean;
  label?: string;
  message?: string;
  prefix?: string | ReactNode;
  success?: boolean;
  suffix?: string | ReactNode;
}

export const Input = createComponentWithRef<InputElement_t, InputProps_t>(
  (
    {
      autoFocus,
      bordered,
      clearable,
      error,
      floating,
      focused: focusedProp,
      icon,
      inverted,
      label,
      message,
      prefix,
      success,
      suffix,
      ...rest
    },
    forwardedRef,
  ) => {
    const [focused, setFocused] = useState(() => {
      if (focusedProp !== undefined) {
        return focusedProp;
      }

      return autoFocus || false;
    });

    return (
      <StyledInputField name="fname">
        {label && (
          <StyledInputLabel floating={floating} focused={focused} size="small">
            First Name
          </StyledInputLabel>
        )}
        <StyledInputControl floating={floating} labelled={!!label}>
          {prefix}
          <Form.Control asChild>
            <StyledInput
              ref={forwardedRef}
              {...rest}
              error={!!error}
              focused={focused}
            />
          </Form.Control>
          {suffix}
        </StyledInputControl>
        {message && <StyledInputMessage>{message}</StyledInputMessage>}
        {error && typeof error === 'string' && (
          <StyledInputMessage error={!!error}>{error}</StyledInputMessage>
        )}
      </StyledInputField>
    );
  },
);
