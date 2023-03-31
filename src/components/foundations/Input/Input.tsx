import { ElementRef, ReactNode } from 'react';
import * as Form from '@radix-ui/react-form';

import { StyledInput } from 'components/foundations/Input/styles';
import {
  createComponentWithRef,
  OmitComponentVariantProps_t,
} from 'utils/component';
import { Flex } from 'components/foundations/Flex';

export type InputElement_t = ElementRef<typeof StyledInput>;
export interface InputProps_t
  extends OmitComponentVariantProps_t<typeof StyledInput> {
  error?: boolean | string;
  message?: string;
}

export const Input = createComponentWithRef<InputElement_t, InputProps_t>(
  ({ error, message, ...rest }, forwardedRef) => {
    return (
      <Form.Field name="fname">
        <Flex>
          <Form.Label>First Name</Form.Label>
          <Form.Control asChild>
            <StyledInput ref={forwardedRef} {...rest} />
          </Form.Control>
        </Flex>
        {message && <Form.Message>{message}</Form.Message>}
        {error && typeof error === 'string' && (
          <Form.Message>{error}</Form.Message>
        )}
      </Form.Field>
    );
  },
);
