import { FC, LabelHTMLAttributes } from 'react';
import { CSSObject } from '@emotion/react';
import styled from '@emotion/styled';

import { themeSelectors, useTheme } from 'state/theme';

import { Shorthand, toEm } from 'utils/styles';
import { withStyles } from 'utils/with-styles';

import { Colors } from 'styles/tokens/colors';
import { Weights } from 'styles/tokens/font';

export interface StyledFieldLabelProps
    extends LabelHTMLAttributes<HTMLLabelElement> {
    inverted?: boolean;
    floating?: boolean;
}

export const StyledFieldLabel: FC<StyledFieldLabelProps> = ({
    inverted,
    floating,
    ...props
}) => {
    const isInverted = useTheme(themeSelectors.inverted) || inverted;

    const styles: CSSObject = {
        display: 'block',
        fontSize: toEm(0.75),
        fontWeight: Weights.black,
        lineHeight: toEm(0.875),
        color: Colors.neutral700,
        margin: Shorthand.marginToEm(0, 0, 0.5, 0),
    };

    if (isInverted) {
        styles.color = Colors.neutral100;
    }

    if (floating) {
        styles.cursor = 'text';
        styles.userSelect = 'none';
        styles.pointerEvents = 'none';
    }

    return withStyles(styled.label(styles), props);
};

export type FieldLabelProps = StyledFieldLabelProps;

export const FieldLabel: FC<FieldLabelProps> = ({ children, ...props }) => (
    <StyledFieldLabel {...props}>{children}</StyledFieldLabel>
);
