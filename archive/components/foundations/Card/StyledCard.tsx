import { CSSObject } from '@emotion/react';
import styled, { StyledComponent } from '@emotion/styled';

import { CardStateProps, StyledCardProps } from 'components/Card';

import { isThemeOverride, Shorthand } from 'utils/styles';

import { styledTagOptions } from 'styles/styled';
import { Shadows, Transitions } from 'styles/tokens/animation';
import { Colors } from 'styles/tokens/colors';
import { BorderRadius } from 'styles/tokens/layout';

export const StyledCard: StyledComponent<StyledCardProps> = styled(
    'div',
    styledTagOptions
)(({ theme, componentState }): CSSObject => {
    const inverted: boolean = isThemeOverride<CardStateProps>(
        theme,
        componentState,
        'inverted'
    );

    return {
        display: 'block',
        color: Colors.neutral800,
        border: Shorthand.borderToPx(1, 'solid', Colors.neutral500),
        borderRadius: BorderRadius.medium,
        transition: Transitions.standard,
        padding: Shorthand.paddingToEm(1),

        ...(componentState.link && {
            cursor: 'pointer',
        }),

        ...(componentState.hover && {
            '&:hover': {
                boxShadow: Shadows.medium,
                transform: Shorthand.translateYToPx(-1),
            },
        }),

        ...(componentState.shadow && {
            boxShadow: Shadows.medium,
        }),

        ...(inverted && {
            color: Colors.neutral0,
            borderColor: Shorthand.hexToRgb(Colors.neutral0, 0.5),
        }),
    };
});
