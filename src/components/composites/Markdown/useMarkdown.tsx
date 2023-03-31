import { useEffect, useState, createElement, Fragment, ReactNode } from 'react';
import rehypeReact from 'rehype-react';
import remarkGfm from 'remark-gfm';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import { unified } from 'unified';

import { MarkdownComponents } from 'components/composites/Markdown/elements';

const markdownProcessor = unified()
  // @ts-ignore
  .use(remarkParse)
  .use(remarkGfm)
  .use(remarkRehype)
  // @ts-ignore
  .use(rehypeReact, {
    createElement,
    Fragment,
    components: MarkdownComponents,
  });

export const useMarkdown = (markdown: string) => {
  const [content, setContent] = useState<ReactNode>(<Fragment />);

  useEffect(() => {
    const processMarkdown = async () => {
      const output = await markdownProcessor.process(markdown);
      setContent(output.result as ReactNode);
    };

    void processMarkdown();
  }, [markdown]);

  return content;
};
