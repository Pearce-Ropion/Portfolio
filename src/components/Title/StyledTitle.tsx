import { CSSObject } from '@emotion/react';

import { WithTheme } from 'components';
import {
    StyledTitleProps,
    TitleStateProps,
    TitleWeights,
} from 'components/Title';

import { isThemeOverride, Shorthand, toPercent, toPixels } from 'utils/styles';

import { Colors } from 'styles/tokens/colors';
import { FontFamily, Weights } from 'styles/tokens/font';
import { MQ } from 'styles/tokens/media-query';

export const TitleWeightMap: Record<typeof TitleWeights[number], number> = {
    thin: Weights.thin,
    light: Weights.light,
    normal: Weights.normal,
    medium: Weights.medium,
    semibold: Weights.semibold,
    bold: Weights.bold,
    black: Weights.black,
};

export const styledTitleStyles = ({
    theme,
    componentState,
}: StyledTitleProps & WithTheme): CSSObject => {
    const inverted: boolean = isThemeOverride<TitleStateProps>(
        theme,
        componentState,
        'inverted'
    );

    return {
        fontFamily: FontFamily.roboto,
        fontWeight: Weights.medium,
        fontSize: toPixels(32),
        lineHeight: toPixels(37.5),
        color: Colors.neutral900,
        margin: 0,

        ...(componentState.alignCenter && {
            textAlign: 'center',
            margin: Shorthand.margin(0, 'auto'),
        }),

        ...(componentState.alignCenterMobile &&
            MQ.isMobile({
                textAlign: 'center',
                margin: Shorthand.margin(0, 'auto'),
            })),

        ...(componentState.alignRight && {
            textAlign: 'right',
        }),

        ...(componentState.inline && {
            display: 'inline-block',
        }),

        ...(inverted && {
            color: Colors.neutral0,
        }),

        ...(componentState.color && {
            color: componentState.color,
        }),

        ...((componentState.variant === 'title' ||
            componentState.variant === 'section') && {
            fontFamily: FontFamily.raleway,
            fontWeight: Weights.bold,
            fontSize: toPixels(32),
            lineHeight: toPixels(39),
            letterSpacing: toPercent(10),
        }),

        ...(componentState.variant === 'header' && {
            fontFamily: FontFamily.roboto,
            fontWeight: Weights.medium,
            fontSize: toPixels(24),
            lineHeight: toPixels(29),
        }),

        ...(componentState.weight && {
            fontWeight: TitleWeightMap[componentState.weight],
        }),
    };
};
