import {
  BlockQuote as RawBlockQuote,
  BlockQuoteElement_t,
  BlockQuoteProps_t,
} from 'components/composites';
import { createComponentWithRef } from 'utils/component';

import { useMarkdownContext } from '../MarkdownContext';

export const BlockQuote = createComponentWithRef<
  BlockQuoteElement_t,
  BlockQuoteProps_t
>((props, forwardedRef) => {
  const { inverted } = useMarkdownContext();
  return <RawBlockQuote ref={forwardedRef} {...props} inverted={inverted} />;
});
