import { createContext, FC } from 'react';

export const MarkdownSpacingOptions = [
    'medium',
    'small',
    'small-x',
    'small-2x',
] as const;

export interface MarkdownContextModel {
    inverted?: boolean;
    spacing?: typeof MarkdownSpacingOptions[number];
}

export const MarkdownContext = createContext<MarkdownContextModel>({
    inverted: false,
});

export type MarkdownProps = MarkdownContextModel;

export const Markdown: FC<MarkdownProps> = ({
    children,
    inverted,
    spacing,
}) => (
    <MarkdownContext.Provider value={{ inverted, spacing }}>
        {children}
    </MarkdownContext.Provider>
);
