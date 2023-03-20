// import { useMemo } from 'react';
import rehypeStringify from 'rehype-stringify';
// import remarkGfm from 'remark-gfm';
import remarkParse from 'remark-parse';
// import remarkRehype from 'remark-rehype';
import { unified } from 'unified';

const markdownProcessor = unified()
  .use(remarkParse)
  // .use(remarkGfm);
  // .use(remarkRehype)
  .use(rehypeStringify);

// export const mdToHtml = (content: string): string => {
//   return markdownProcessor.processSync(content).toString();
// };

// export const useMarkdown = (content?: string): string => {
//   return useMemo(() => {
//     if (!content) {
//       return '';
//     }

//     return mdToHtml(content);
//   }, [content]);
// };
