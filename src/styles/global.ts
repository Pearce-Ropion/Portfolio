import { CSSObject } from '@emotion/react';

import { FontFamily } from 'styles/tokens/font';

import 'normalize.css/normalize.css';

export const GlobalStyles: CSSObject = {
    html: {
        boxSizing: 'border-box',
    },

    '*': {
        '&': {
            boxSizing: 'border-box',
        },
        '&::before': {
            boxSizing: 'border-box',
        },
        '&::after': {
            boxSizing: 'border-box',
        },
    },

    body: {
        fontFamily: FontFamily.sansSerif,
        margin: 0,
        textRendering: 'optimizeLegibility',
        WebkitFontSmoothing: 'antialiased',
        MozOsxFontSmoothing: 'greyscale',
    },

    '[tabindex="-1"]': {
        outline: 0,
    },
};
