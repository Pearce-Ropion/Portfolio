import { FC, HTMLAttributes } from 'react';
import { CSSObject } from '@emotion/react';
import styled from '@emotion/styled';

import { useViewport, viewportSelectors } from 'state/viewport';

import { Shorthand, toEm, toPixels } from 'utils/styles';
import { withStyles } from 'utils/with-styles';

import { Colors } from 'styles/tokens/colors';
import { FontFamily, Weights } from 'styles/tokens/font';

export const TextVariants = ['p1', 'p2'] as const;
export const TextWeights = ['normal', 'bold', 'caps'] as const;

export interface StyledTextProps extends HTMLAttributes<HTMLParagraphElement> {
    variant?: typeof TextVariants[number];
    alignCenter?: boolean;
    alignCenterMobile?: boolean;
    alignRight?: boolean;
    weight?: typeof TextWeights[number];
    inverted?: boolean;
    color?: string;
    inline?: boolean;
}

export const StyledText: FC<StyledTextProps> = props => {
    const {
        variant,
        alignCenter,
        alignCenterMobile,
        alignRight,
        weight,
        inverted,
        color,
        inline,
    } = props;

    const isMobile = useViewport(viewportSelectors.isMobile);

    const styles: CSSObject = {
        fontFamily: FontFamily.sansSerif,
        color: Colors.neutral800,
        margin: 0,
    };

    if (alignCenter || (alignCenterMobile && isMobile)) {
        styles.textAlign = 'center';
        styles.margin = Shorthand.margin(0, 'auto');
    }

    if (alignRight) {
        styles.textAlign = 'right';
    }

    if (inline) {
        styles.display = 'inline-block';
    }

    if (inverted) {
        styles.color = Colors.neutral0;
    }

    if (color) {
        styles.color = color;
    }

    if (variant === 'p1') {
        styles.fontSize = toPixels(16);
        styles.lineHeight = toPixels(24);
        styles.fontWeight = Weights.normal;

        if (isMobile) {
            styles.fontSize = toPixels(18);
            styles.lineHeight = toPixels(26);
        }

        if (weight === 'bold') {
            styles.fontWeight = Weights.bold;
        } else if (weight === 'caps') {
            styles.fontWeight = Weights.bold;
            styles.textTransform = 'uppercase';
            styles.letterSpacing = toEm(0.04);
        }
    } else if (variant === 'p2') {
        styles.fontSize = toPixels(14);
        styles.lineHeight = toPixels(20);
        styles.fontWeight = Weights.normal;

        if (isMobile) {
            styles.fontSize = toPixels(16);
            styles.lineHeight = toPixels(22);
        }

        if (weight === 'bold') {
            styles.fontWeight = Weights.bold;
        } else if (weight === 'caps') {
            styles.fontSize = toPixels(13);
            styles.fontWeight = Weights.bold;
            styles.textTransform = 'uppercase';
            styles.letterSpacing = toEm(0.04);
        }
    }

    return withStyles(styled.p(styles), props);
};

export type TextProps = StyledTextProps;

export const Text: FC<TextProps> = ({
    children,
    variant = 'p1',
    weight = 'normal',
    ...props
}) => {
    return (
        <StyledText variant={variant} weight={weight} {...props}>
            {children}
        </StyledText>
    );
};
