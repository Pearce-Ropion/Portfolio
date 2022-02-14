import { DetailedHTMLProps, HTMLAttributes } from 'react';

export type HeroElement = DetailedHTMLProps<
    HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
>;

export interface HeroProps extends HeroElement {
    bubbles?: boolean;
    curve?: boolean;
    inverted?: boolean;
}
