import { useMarkdownContext } from 'components/composites/Markdown/MarkdownContext';
import {
  Divider,
  DividerElement_t,
  DividerProps_t,
} from 'components/foundations';
import { createComponentWithRef } from 'utils/component';

export const Rule = createComponentWithRef<DividerElement_t, DividerProps_t>(
  (props, forwardedRef) => {
    const { inverted } = useMarkdownContext();
    return <Divider ref={forwardedRef} {...props} isInverted={inverted} />;
  },
);
