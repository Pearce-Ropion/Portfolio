import { HTML } from 'components/Html';
import { MarkdownProvider } from 'components/composites/Markdown/MarkdownContext';
import { useMarkdown } from 'components/composites/Markdown/useMarkdown';
import { Box } from 'components/foundations';
import { createComponentWithRef } from 'utils/component';

export type MarkdownElement_t = HTMLDivElement;
export interface MarkdownProps_t extends Omit<HTML.DivProps_t, 'children'> {
  inverted?: boolean;
  markdown: string;
}

export const Markdown = createComponentWithRef<
  MarkdownElement_t,
  MarkdownProps_t
>(({ inverted, markdown, ...rest }, forwardedRef) => {
  const content = useMarkdown(markdown);

  return (
    <MarkdownProvider inverted={inverted} raw={markdown}>
      <Box ref={forwardedRef} {...rest}>
        {content}
      </Box>
    </MarkdownProvider>
  );
});
