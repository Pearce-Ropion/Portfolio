import * as CSS from 'csstype';

interface Transitions {
    standard: CSS.Property.Transition;
}

export const Transitions: Transitions = {
    standard: '0.15s ease-in-out',
};

interface Shadows {
    small: CSS.Property.BoxShadow;
    medium: CSS.Property.BoxShadow;
    large: CSS.Property.BoxShadow;
}

export const Shadows: Shadows = {
    small: '0px 1px 4px rgba(27, 26, 33, 0.25)',
    medium: '0px 2px 6px rgba(27, 26, 33, 0.25)',
    large: '0px 6px 16px rgba(27, 26, 33, 0.25)',
};
