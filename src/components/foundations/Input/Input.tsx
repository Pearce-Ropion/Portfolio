import {
  ChangeEvent,
  FocusEvent,
  ElementRef,
  HTMLInputTypeAttribute,
  ReactNode,
  useCallback,
  useEffect,
  useState,
  useMemo,
} from 'react';
import * as Form from '@radix-ui/react-form';
import { useControllableState } from '@radix-ui/react-use-controllable-state';

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
import {
  ComposedEventHandler_t,
  useComposedEvent,
} from 'utils/hooks/useComposedEvent';
import { useLocalRef } from 'utils/hooks/useComposedRef';

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
  extends Omit<OmitComponentVariantProps_t<typeof StyledInput>, 'name'> {
  bordered?: boolean;
  clearable?: boolean;
  error?: boolean | string;
  floating?: boolean;
  focused?: boolean;
  icon?: IconProp_t;
  inverted?: boolean;
  label?: string;
  message?: string;
  name: string;
  onValueChange?: (value: string, event: ChangeEvent<InputElement_t>) => void;
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
      name,
      onBlur,
      onChange,
      onFocus,
      onValueChange,
      prefix,
      success,
      suffix,
      value: valueProp,
      ...rest
    },
    forwardedRef,
  ) => {
    const [ref, composedRefs] = useLocalRef(forwardedRef);

    const [focused, setFocused] = useState(autoFocus || false);
    const [value, setValue] = useControllableState({
      prop: valueProp,
    });

    const filled = useMemo(() => {
      if (typeof value === 'string') {
        return !!value.length;
      } else if (typeof value === 'number') {
        return true;
      } else if (Array.isArray(value)) {
        return !!value.length;
      }
      return false;
    }, [value]);

    const handleChange = useComposedEvent(
      onChange as ComposedEventHandler_t<ChangeEvent<InputElement_t>>,
      useCallback(
        (event?: ChangeEvent<InputElement_t>) => {
          if (event) {
            setValue(event.target.value);
            onValueChange?.(event.target.value, event);
          }
        },
        [setValue, onValueChange],
      ),
    );

    const handleFocus = useComposedEvent(
      onFocus as ComposedEventHandler_t<FocusEvent<InputElement_t>>,
      useCallback(() => {
        if (focusedProp) return;
        setFocused(true);
      }, [focusedProp]),
    );

    const handleBlur = useComposedEvent(
      onBlur as ComposedEventHandler_t<FocusEvent<InputElement_t>>,
      useCallback(() => {
        if (focusedProp) return;
        setFocused(false);
      }, [focusedProp]),
    );

    useEffect(() => {
      if (focusedProp && !focused) {
        setFocused(true);
        ref.current?.focus();
      }
    }, [focusedProp, focused, ref]);

    const active = floating && (filled || focused);

    return (
      <StyledInputField name={name}>
        {label && (
          <StyledInputLabel
            // @ts-ignore - `active` is a valid HTML `label` attribute but it wont
            // get passed through due to the stitches variant of the same name
            active={active}
            error={!!error}
            floating={floating}
            focused={focused}
            size="small"
            success={success}
          >
            First Name
          </StyledInputLabel>
        )}
        <StyledInputControl
          active={active}
          error={!!error}
          floating={floating}
          focused={focused}
          labelled={!!label}
          success={success}
        >
          {prefix}
          <Form.Control asChild>
            <StyledInput
              ref={composedRefs}
              {...rest}
              error={!!error}
              floating={floating}
              focused={focused}
              labelled={!!label}
              onBlur={handleBlur}
              onChange={handleChange}
              onFocus={handleFocus}
              value={value}
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
