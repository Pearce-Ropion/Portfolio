import { createElement, Fragment, ReactElement, useMemo } from 'react';
import rehypeReact from 'rehype-react';
import rehypeStringify from 'rehype-stringify';
import remarkGfm from 'remark-gfm';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import { unified } from 'unified';

// import { COMPONENTS } from 'components/markdown';

const markdownProcessor = unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype)
    .use(rehypeStringify);

export const mdToHtml = (content: string): string => {
    return markdownProcessor.processSync(content).toString();
};

export const useMarkdown = (content?: string): string => {
    return useMemo(() => {
        if (!content) {
            return '';
        }

        return mdToHtml(content);
    }, [content]);
};

const markdownReactProcessor = unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype)
    .use(rehypeReact, {
        createElement: createElement,
        Fragment: Fragment,
        // components: COMPONENTS,
    });

export const mdToReact = (content: string): ReactElement => {
    return markdownReactProcessor.processSync(content).result;
};

export const useMarkdownReact = (content?: string): ReactElement | null => {
    return useMemo(() => {
        if (!content) {
            return null;
        }

        return mdToReact(content);
    }, [content]);
};
