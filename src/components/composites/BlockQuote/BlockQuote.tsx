import { ElementRef } from 'react';

import { StyledBlockQuote } from 'components/composites/BlockQuote/styles';
import {
  createComponentWithRef,
  OmitComponentVariantProps_t,
} from 'utils/component';
import { Copy } from 'components/foundations';

export type BlockQuoteElement_t = ElementRef<typeof StyledBlockQuote>;
export interface BlockQuoteProps_t
  extends OmitComponentVariantProps_t<typeof StyledBlockQuote> {
  inverted?: boolean;
}

export const BlockQuote = createComponentWithRef<
  BlockQuoteElement_t,
  BlockQuoteProps_t
>(({ children, inverted, ...rest }, forwardedRef) => {
  return (
    <StyledBlockQuote ref={forwardedRef} {...rest} inverted={inverted}>
      <Copy inverted={inverted} weight="light">
        {children}
      </Copy>
    </StyledBlockQuote>
  );
});
