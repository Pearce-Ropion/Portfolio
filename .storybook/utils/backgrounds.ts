import * as CSS from 'csstype';

import { Colors } from 'styles/tokens/colors';

export const InvertedBackgrounds: string[] = [
    'neutral900',
    'neutral800',
    'neutral700',
    'navy900',
    'navy800',
    'green900',
    'green800',
    'yellow900',
    'red900',
    'red800',
];

export const Backgrounds: Record<string, CSS.Property.Color>[] = [
    { name: 'neutral0', value: Colors.neutral0 },
    { name: 'neutral100', value: Colors.neutral100 },
    { name: 'neutral200', value: Colors.neutral200 },
    { name: 'neutral300', value: Colors.neutral300 },
    { name: 'neutral500', value: Colors.neutral500 },
    { name: 'neutral700', value: Colors.neutral700 },
    { name: 'neutral800', value: Colors.neutral800 },
    { name: 'neutral900', value: Colors.neutral900 },

    { name: 'navy900', value: Colors.navy900 },
    { name: 'navy800', value: Colors.navy800 },
    { name: 'navy500', value: Colors.navy500 },
    { name: 'navy200', value: Colors.navy200 },
    { name: 'navy100', value: Colors.navy100 },
];
