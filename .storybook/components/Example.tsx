import { FC, HTMLAttributes } from 'react';
import styled, { StyledComponent } from '@emotion/styled';

import { MarkdownStyler } from 'components/Markdown';
import { Title } from 'components/Title';

export type StyledExampleProps = HTMLAttributes<HTMLElement>;

export const StyledExample: StyledComponent<StyledExampleProps> = styled.div();

export interface ExampleProps extends StyledExampleProps {
    title?: string;
    description?: string;
    inverted?: boolean;
}

export const Example: FC<ExampleProps> = ({
    children,
    title,
    description,
    inverted,
    ...props
}) => (
    <StyledExample {...props}>
        {title && (
            <Title variant="header" tag="h3" inverted={inverted}>
                <MarkdownStyler inverted={inverted}>{title}</MarkdownStyler>
            </Title>
        )}

        {description && (
            <MarkdownStyler inverted={inverted}>{description}</MarkdownStyler>
        )}

        {children}
    </StyledExample>
);
