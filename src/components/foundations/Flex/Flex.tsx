import { ElementRef } from 'react';

import {
  createComponentWithRef,
  OmitComponentVariantProps_t,
} from 'utils/component';
import { StyledFlex } from 'components/foundations/Flex/styles';

export type FlexElement_t = ElementRef<typeof StyledFlex>;
export interface FlexProps_t
  extends OmitComponentVariantProps_t<typeof StyledFlex> {
  center?: boolean;
  direction?: 'row' | 'column';
  align?: 'start' | 'center' | 'end' | 'stretch' | 'baseline';
  justify?: 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly';
  wrap?: 'noWrap' | 'wrap';
  grow?: boolean;
}

interface FlexComponents_t {
  Styled: typeof StyledFlex;
}

export const Flex = createComponentWithRef<
  FlexElement_t,
  FlexProps_t,
  FlexComponents_t
>((props, forwardedRef) => {
  return <StyledFlex ref={forwardedRef} {...props} />;
});

Flex.Styled = StyledFlex;
