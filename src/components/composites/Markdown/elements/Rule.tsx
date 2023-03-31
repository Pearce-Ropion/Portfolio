import { useMarkdownContext } from 'components/composites/Markdown/MarkdownContext';
import { Hr, HrElement_t, HrProps_t } from 'components/foundations';
import { createComponentWithRef } from 'utils/component';

export const Rule = createComponentWithRef<HrElement_t, HrProps_t>(
  (props, forwardedRef) => {
    const { inverted } = useMarkdownContext();
    return <Hr ref={forwardedRef} {...props} inverted={inverted} />;
  },
);
