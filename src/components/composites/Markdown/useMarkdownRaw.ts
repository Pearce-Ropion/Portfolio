// import { useMemo } from 'react';
import { useEffect, useState } from 'react';
import rehypeStringify from 'rehype-stringify';
import remarkGfm from 'remark-gfm';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import { unified } from 'unified';

const markdownProcessor = unified()
  // @ts-ignore
  .use(remarkParse)
  .use(remarkGfm)
  .use(remarkRehype)
  // @ts-ignore
  .use(rehypeStringify);

export const useMarkdownRaw = (markdown: string): string => {
  const [html, setHtml] = useState('');

  useEffect(() => {
    const processMarkdown = async () => {
      const output = await markdownProcessor.process(markdown);
      setHtml(output.value as string);
    };

    void processMarkdown();
  }, [markdown]);

  return html;
};
