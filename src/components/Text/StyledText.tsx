import { CSSObject } from '@emotion/react';
import { StyledComponent } from '@emotion/styled';

import styled from 'components/styled';
import { StyledTextProps, TextStateProps } from 'components/Text';

import { isThemeOverride, Shorthand, toPixels } from 'utils/styles';

import { Colors } from 'styles/tokens/colors';
import { FontFamily, Weights } from 'styles/tokens/font';
import { MQ } from 'styles/tokens/media-query';

export const StyledText: StyledComponent<StyledTextProps> = styled.p(
    ({ theme, componentState }): CSSObject => {
        const inverted: boolean = isThemeOverride<TextStateProps>(
            theme,
            componentState,
            'inverted'
        );

        return {
            fontFamily: FontFamily.roboto,
            fontWeight: Weights.normal,
            fontSize: toPixels(18),
            lineHeight: toPixels(22),
            color: Colors.neutral900,
            margin: 0,

            [MQ.isMobile]: {
                fontSize: toPixels(20),
                lineHeight: toPixels(24),
            },

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

            ...(componentState.weight && {
                fontWeight: componentState.weight,
            }),
        };
    }
);
