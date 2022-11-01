import { Theme } from '@emotion/react';

export interface WithState<P> {
    componentState: P;
}

export type WithOverrideState<S, P = S> = P & Partial<WithState<S>>;

export interface WithTheme {
    theme: Theme;
}

export interface StyledComponentStyling<P> {
    theme: Theme;
    componentState: P;
}
