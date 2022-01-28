import { FC, HTMLAttributes } from 'react';
import { CSSObject } from '@emotion/react';
import styled from '@emotion/styled';

import { useViewport, viewportSelectors } from 'state/viewport';

import { Shorthand, toEm, toPixels } from 'utils/styles';
import { withStyles } from 'utils/with-styles';

import { Colors } from 'styles/tokens/colors';
import { FontFamily, Weights } from 'styles/tokens/font';

export const SpecialVariants = [
    'quote1',
    'quote2',
    'subtitle',
    'code1',
    'code2',
    'annotation',
    'label1',
    'label2',
    'tag',
] as const;

export interface StyledSpecialProps extends HTMLAttributes<HTMLDivElement> {
    variant?: typeof SpecialVariants[number];
    alignCenter?: boolean;
    alignCenterMobile?: boolean;
    alignRight?: boolean;
    inverted?: boolean;
    color?: string;
    inline?: boolean;
}

export const StyledSpecial: FC<StyledSpecialProps> = props => {
    const {
        variant,
        alignCenter,
        alignCenterMobile,
        alignRight,
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

    if (variant === 'quote1') {
        styles.fontFamily = FontFamily.serif;
        styles.fontSize = toPixels(22);
        styles.lineHeight = toPixels(38);
        styles.fontStyle = 'italic';

        if (isMobile) {
            styles.fontSize = toPixels(20);
            styles.lineHeight = toPixels(34);
        }
    } else if (variant === 'quote2') {
        styles.fontFamily = FontFamily.serif;
        styles.fontSize = toPixels(14);
        styles.lineHeight = toPixels(24);
        styles.fontStyle = 'italic';
    } else if (variant === 'subtitle') {
        styles.fontSize = toPixels(20);
        styles.lineHeight = toPixels(28);
    } else if (variant === 'code1') {
        styles.fontFamily = FontFamily.monospace;
        styles.fontSize = toPixels(16);
        styles.lineHeight = toPixels(24);

        if (isMobile) {
            styles.fontSize = toPixels(18);
        }
    } else if (variant === 'code2') {
        styles.fontFamily = FontFamily.monospace;
        styles.fontSize = toPixels(14);
        styles.lineHeight = toPixels(20);

        if (isMobile) {
            styles.fontSize = toPixels(16);
            styles.lineHeight = toPixels(22);
        }
    } else if (variant === 'annotation') {
        styles.fontSize = toPixels(12);
        styles.lineHeight = toPixels(16);

        if (isMobile) {
            styles.fontSize = toPixels(14);
            styles.lineHeight = toPixels(20);
        }
    } else if (variant === 'label1') {
        styles.fontSize = toPixels(14);
        styles.lineHeight = toPixels(16);
        styles.fontWeight = Weights.bold;

        if (isMobile) {
            styles.fontSize = toPixels(15);
            styles.lineHeight = toPixels(20);
        }
    } else if (variant === 'label2') {
        styles.fontSize = toPixels(12);
        styles.lineHeight = toPixels(16);
        styles.fontWeight = Weights.bold;
        styles.letterSpacing = toEm(0.04);
        styles.textTransform = 'uppercase';

        if (isMobile) {
            styles.fontSize = toPixels(12);
            styles.lineHeight = toPixels(18);
        }
    } else if (variant === 'tag') {
        styles.fontSize = toPixels(12);
        styles.lineHeight = toPixels(16);
        styles.fontWeight = Weights.bold;

        if (isMobile) {
            styles.fontSize = toPixels(14);
            styles.lineHeight = toPixels(18);
        }
    }

    return withStyles(styled.div(styles), props);
};

export type SpecialProps = StyledSpecialProps;

export const Special: FC<SpecialProps> = ({
    children,
    variant = 'label1',
    ...props
}) => {
    return (
        <StyledSpecial variant={variant} {...props}>
            {children}
        </StyledSpecial>
    );
};
