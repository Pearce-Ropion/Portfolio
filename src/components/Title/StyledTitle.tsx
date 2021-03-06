import { CSSObject } from '@emotion/react';

import { WithTheme } from 'components';
import { StyledTitleProps, TitleStateProps } from 'components/Title';

import { isThemeOverride, Shorthand, toEm, toPixels } from 'utils/styles';

import { Colors } from 'styles/tokens/colors';
import { FontFamily, Weights } from 'styles/tokens/font';
import { MQ } from 'styles/tokens/media-query';

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

        ...(componentState.alignCenterMobile && {
            [MQ.isMobile]: {
                textAlign: 'center',
                margin: Shorthand.margin(0, 'auto'),
            },
        }),

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

        ...(componentState.variant === 'title' && {
            fontFamily: FontFamily.raleway,
            fontWeight: Weights.bold,
            fontSize: toPixels(40),
            lineHeight: toPixels(47),
            letterSpacing: toEm(0.1),
        }),

        ...(componentState.variant === 'section' && {
            fontFamily: FontFamily.raleway,
            fontWeight: Weights.bold,
            fontSize: toPixels(32),
            lineHeight: toPixels(39),
            letterSpacing: toEm(0.1),
        }),

        ...(componentState.variant === 'header' && {
            fontFamily: FontFamily.roboto,
            fontWeight: Weights.medium,
            fontSize: toPixels(24),
            lineHeight: toPixels(29),
        }),

        ...(componentState.weight && {
            fontWeight: componentState.weight,
        }),
    };
};
