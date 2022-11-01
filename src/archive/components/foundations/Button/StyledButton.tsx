import { CSSObject } from '@emotion/react';
import styled, { StyledComponent } from '@emotion/styled';
import * as CSS from 'csstype';

import { WithTheme } from 'components';
import { ButtonStateProps, StyledButtonProps } from 'components/Button';

import { isThemeOverride, Shorthand, toPixels } from 'utils/styles';

import { styledTagOptions } from 'styles/styled';
import { Shadows, Transitions } from 'styles/tokens/animation';
import { Colors } from 'styles/tokens/colors';
import { FontFamily, Weights } from 'styles/tokens/font';
import { BorderRadius } from 'styles/tokens/layout';

export const SECONDARY_BUTTON_BORDER_WIDTH = 3;

export const buttonPadding = (
    borderWidth: number,
    verticalPadding = 12,
    horizontalPadding = 24
): CSS.Property.Padding => {
    return Shorthand.paddingToPx(
        verticalPadding - borderWidth,
        horizontalPadding - borderWidth
    );
};

export const styledButtonStyles = ({
    theme,
    componentState,
}: StyledButtonProps & WithTheme): CSSObject => {
    const inverted: boolean = isThemeOverride<ButtonStateProps>(
        theme,
        componentState,
        'inverted'
    );

    return {
        display: 'flex',
        fontFamily: FontFamily.roboto,
        fontSize: toPixels(18),
        lineHeight: toPixels(22),
        fontWeight: Weights.normal,
        textAlign: 'center',
        whiteSpace: 'nowrap',
        borderRadius: BorderRadius.small,
        transition: Transitions.standard,
        cursor: 'pointer',
        verticalAlign: 'middle',
        userSelect: 'none',
        padding: buttonPadding(0),
        border: 'none',
        outline: 'none',

        ...(componentState.disabled && {
            opacity: 0.4,
            cursor: 'default',
        }),

        ...(!componentState.disabled && {
            '&:hover, &:focus': {
                boxShadow: Shadows.small,
                transform: Shorthand.translateYToPx(-1),
            },
        }),

        ...(componentState.variant === 'primary' && {
            color: Colors.neutral0,
            background: Colors.navy900,

            ...(inverted && {
                background: Colors.orange800,
            }),
        }),

        ...(componentState.variant === 'secondary' && {
            color: Colors.navy900,
            background: 'transparent',
            padding: buttonPadding(SECONDARY_BUTTON_BORDER_WIDTH),
            border: Shorthand.borderToPx(
                SECONDARY_BUTTON_BORDER_WIDTH,
                'solid',
                Colors.navy900
            ),

            ...(inverted && {
                color: Colors.yellow900,
                borderColor: Colors.yellow900,
            }),
        }),
    };
};

export const StyledButton: StyledComponent<StyledButtonProps> = styled(
    'button',
    styledTagOptions
)(styledButtonStyles);
