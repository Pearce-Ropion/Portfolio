import { FC } from 'react';

import {
    Markdown,
    MarkdownContextModel,
    useMarkdown,
} from 'components/Markdown';

export type MarkdownStylerProps = MarkdownContextModel;

export const MarkdownStyler: FC<MarkdownStylerProps> = ({
    children,
    ...props
}) => {
    const markdown: string = useMarkdown(children as string);
    return (
        <Markdown {...props}>
            {/* eslint-disable-next-line react/no-danger */}
            <span dangerouslySetInnerHTML={{ __html: markdown }} />
        </Markdown>
    );
};
