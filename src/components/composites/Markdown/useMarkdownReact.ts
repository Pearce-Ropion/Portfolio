import type { ReactNode } from 'react';
import { createElement, Fragment, useMemo } from 'react';
import rehypeReact from 'rehype-react';
import remarkGfm from 'remark-gfm';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import { unified } from 'unified';

const markdownReactProcessor = unified()
  .use(remarkParse)
  .use(remarkGfm)
  .use(remarkRehype)
  .use(rehypeReact, {
    createElement,
    Fragment,
    // components: COMPONENTS,
  });

export const mdToReact = (content: string): ReactNode => {
  return markdownReactProcessor.processSync(content).result;
};

export const useMarkdownReact = (content?: string): ReactNode | null => {
  return useMemo(() => {
    if (!content) {
      return null;
    }

    return mdToReact(content);
  }, [content]);
};
