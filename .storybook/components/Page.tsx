import { FC, HTMLAttributes } from 'react';
import { CSSObject } from '@emotion/react';
import styled, { StyledComponent } from '@emotion/styled';

import { Hr } from 'components/Hr';
import { MarkdownStyler } from 'components/Markdown';
import { Title } from 'components/Title';

import { Shorthand, toPixels } from 'utils/styles';

export interface StyledPageProps extends HTMLAttributes<HTMLElement> {
    noHorizontalPadding?: boolean;
}

export interface PageProps extends StyledPageProps {
    title?: string;
    description?: string;
    inverted?: boolean;
}

const StyledPage: StyledComponent<StyledPageProps> = styled.div(
    ({ noHorizontalPadding }: StyledPageProps): CSSObject => {
        const styles: CSSObject = {
            padding: toPixels(24),
        };

        if (noHorizontalPadding) {
            styles.paddingLeft = 0;
            styles.paddingRight = 0;
        }

        return styles;
    }
);

export const Page: FC<PageProps> = ({
    children,
    title,
    description,
    inverted,
    ...props
}) => (
    <StyledPage {...props}>
        <Title variant="title" tag="h1" inverted={inverted}>
            {title}
        </Title>

        {description && (
            <MarkdownStyler inverted={inverted}>{description}</MarkdownStyler>
        )}

        <Hr
            fullBleed
            css={{ margin: Shorthand.marginToEm(1, 0) }}
            inverted={inverted}
        />

        {children}
    </StyledPage>
);
