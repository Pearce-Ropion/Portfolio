import { CSSObject } from '@emotion/react';

import { Families } from 'styles/tokens/font';
import { spacing } from 'styles/tokens/layout';

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
        fontFamily: Families.sansSerif,
        margin: spacing(0),
        textRendering: 'optimizeLegibility',
        WebkitFontSmoothing: 'antialiased',
        MozOsxFontSmoothing: 'greyscale',
    },

    '[tabindex="-1"]': {
        outline: 0,
    },
};
