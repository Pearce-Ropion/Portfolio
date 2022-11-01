import isPropValid from '@emotion/is-prop-valid';
import { StyledOptions as EmStyledOptions } from '@emotion/styled';

export type ShouldForwardProp = (propName: PropertyKey) => boolean;
export interface StyledOptions<P = Record<string, unknown>>
    extends Omit<EmStyledOptions<P>, 'shouldForwardProp'> {
    shouldForwardProp?: ShouldForwardProp;
}

export const baseShouldForwardProp: ShouldForwardProp = propName => {
    return propName !== 'componentState';
};

export const shouldForwardComponentProp: ShouldForwardProp =
    baseShouldForwardProp;

export const shouldForwardTagProp: ShouldForwardProp = propName => {
    return baseShouldForwardProp(propName) && isPropValid(propName);
};

export const styledTagOptions: StyledOptions = {
    shouldForwardProp: shouldForwardTagProp,
};

export const styledComponentOptions: StyledOptions = {
    shouldForwardProp: shouldForwardComponentProp,
};
