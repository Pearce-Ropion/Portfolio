import { cx } from '@emotion/css';
import { css, CSSObject, SerializedStyles } from '@emotion/react';
import styled, { StyledComponent } from '@emotion/styled';
import * as CSS from 'csstype';

import { FormLabel } from 'components/form/Label';
import {
    InputStateProps,
    StyledInputLabelProps,
    StyledInputProps,
} from 'components/inputs/Input';

import { Shorthand, toEm, toPercent, toPixels } from 'utils/styles';

import { styledComponentOptions, styledTagOptions } from 'styles/styled';
import { Transitions } from 'styles/tokens/animation';
import { Colors } from 'styles/tokens/colors';
import { FontFamily, Weights } from 'styles/tokens/font';
import { BorderRadius, ZIndex } from 'styles/tokens/layout';

const iconFontSize: CSS.Property.FontSize = toPixels(14);
const borderWidth = 0.125; // em
const paddingDefault = 0.625; // em
const iconPadding = 2.25; // em;

const paddingWithBorder: CSS.Property.Padding = Shorthand.paddingToEm(
    paddingDefault - borderWidth
);

const paddingWithFloatingBorder: CSS.Property.Padding = Shorthand.paddingToEm(
    0.875 - borderWidth,
    0.625 - borderWidth,
    0.375 - borderWidth
);

export const StyledInputLabel: StyledComponent<StyledInputLabelProps> = styled(
    FormLabel,
    styledComponentOptions
)(
    ({ componentState }): CSSObject => ({
        ...(componentState.floating && {
            position: 'absolute',
            top: 0,
            left: 0,
            transformOrigin: cx('top', 'left'),
            transform: Shorthand.translateToEm(0.625, 0.625),
            fontSize: toPixels(16),
            fontWeight: Weights.normal,
            lineHeight: 1.5,
            whiteSpace: 'nowrap',
            color: Colors.neutral700,
            padding: 0,
            margin: 0,
            zIndex: ZIndex.positive,
            transition: Transitions.standard,

            ...(componentState.icon && {
                zIndex: 1,
                marginLeft: toEm(1.5),
            }),

            ...(componentState.focused && {
                color: Colors.orange900,
            }),

            ...((componentState.filled || componentState.focused) && {
                fontWeight: Weights.bold,
                padding: Shorthand.paddingToEm(0, 0.25),
                backgroundColor: Colors.neutral0,
                transform: cx(
                    Shorthand.translateToEm(0.625, -0.625),
                    Shorthand.scale(0.75)
                ),
            }),

            ...(!(componentState.filled && componentState.focused) && {
                cursor: 'text',
            }),
        }),
    })
);

export const inputIconStyles = (
    componentState: InputStateProps
): SerializedStyles => {
    const styles: CSSObject = {
        position: 'absolute',
        left: toPixels(8),
        top: `calc(50% - (${iconFontSize} / 2))`,
        fontSize: iconFontSize,
        cursor: 'text',
        transition: Transitions.standard,
        willChange: 'transform',
    };

    if (componentState.icon) {
        styles.transform = Shorthand.translateToPx(4);
    }

    return css(styles);
};

export const StyledInput: StyledComponent<StyledInputProps> = styled(
    'input',
    styledTagOptions
)(
    ({ componentState }): CSSObject => ({
        display: 'block',
        width: toPercent(100),
        margin: 0,
        padding: Shorthand.paddingToEm(paddingDefault),

        background: Colors.neutral200,
        color: Colors.neutral800,
        border: 'none',
        borderRadius: BorderRadius.small,
        outline: 'none',

        fontFamily: FontFamily.roboto,
        fontSize: toPixels(16),
        lineHeight: 1.5,

        transition: Transitions.standard,
        transitionProperty: 'background-color',

        '&::placeholder': {
            color: Colors.neutral500,
        },

        '&:hover': {
            background: Colors.neutral300,
        },

        ...(componentState.disabled && {
            opacity: 0.4,

            '&:hover': {
                background: Colors.neutral200,
            },
        }),

        ...(componentState.icon && {
            paddingLeft: Shorthand.paddingToEm(iconPadding),
        }),

        ...((componentState.filled ||
            componentState.focused ||
            componentState.bordered) && {
            appearance: 'none',
            padding: paddingWithBorder,
            border: Shorthand.borderToEm(
                borderWidth,
                'solid',
                Colors.neutral800
            ),

            '&:hover': {
                background: Colors.neutral0,
            },

            ...((componentState.filled || componentState.focused) && {
                background: Colors.neutral0,
            }),

            ...(componentState.focused && {
                borderColor: Colors.orange900,
            }),

            ...(componentState.floating && {
                padding: paddingWithFloatingBorder,
            }),

            ...(componentState.icon && {
                paddingLeft: Shorthand.paddingToEm(iconPadding - borderWidth),
            }),
        }),
    })
);
