import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { WindowLocation } from '@reach/router';

export type LayoutElement = DetailedHTMLProps<
    HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
>;

export type StyledLayoutProps = LayoutElement;

export interface LayoutProps extends LayoutElement {
    location?: WindowLocation;
}
