import { FC, HTMLAttributes } from 'react';
import { CSSObject } from '@emotion/react';
import styled from '@emotion/styled';
import { startCase } from 'lodash-es';
import { regular } from '@fortawesome/fontawesome-svg-core/import.macro';

import { Icon } from 'components/Icon';
import { AnchorLink } from 'components/Link';

import { useViewport, viewportSelectors } from 'state/viewport';

import { Shorthand, toEm, toPixels } from 'utils/styles';
import { withStyles } from 'utils/with-styles';

import { Transitions } from 'styles/tokens/animation';
import { Colors } from 'styles/tokens/colors';
import { FontFamily, Weights } from 'styles/tokens/font';

export const TitleVariants = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] as const;
type TitleVariant = typeof TitleVariants[number];

export interface StyledTitleProps extends HTMLAttributes<HTMLHeadingElement> {
    variant: TitleVariant;
    alignCenter?: boolean;
    alignCenterMobile?: boolean;
    alignRight?: boolean;
    inline?: boolean;
    inverted?: boolean;
    color?: string;
}

export const StyledTitle: FC<StyledTitleProps> = props => {
    const {
        variant,
        alignCenter,
        alignCenterMobile,
        alignRight,
        inline,
        inverted,
        color,
    } = props;

    const isMobile = useViewport(viewportSelectors.isMobile);
    const isTablet = useViewport(viewportSelectors.isTablet);

    const styles: CSSObject = {
        fontFamily: FontFamily.sansSerif,
        fontWeight: Weights.bold,
        color: Colors.neutral900,
        position: 'relative',
        margin: 0,

        '&:hover': {
            AnchorLink: {
                opacity: 0.5,
                transform: 'translateX(0)',

                '&:hover': {
                    opacity: 0.8,
                },
            },
        },
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

    if (variant === 'h1') {
        styles.fontSize = toPixels(48);
        styles.lineHeight = toPixels(62);

        if (isTablet) {
            styles.fontSize = toPixels(30);
            styles.lineHeight = toPixels(36);
        }
    } else if (variant === 'h2') {
        styles.fontSize = toPixels(30);
        styles.lineHeight = toPixels(36);

        if (isTablet) {
            styles.fontSize = toPixels(24);
            styles.lineHeight = toPixels(30);
        }
    } else if (variant === 'h3') {
        styles.fontSize = toPixels(24);
        styles.lineHeight = toPixels(28);

        if (isTablet) {
            styles.fontSize = toPixels(22);
            styles.lineHeight = toPixels(26);
        }
    } else if (variant === 'h4' || variant === 'h5' || variant === 'h6') {
        styles.fontSize = toPixels(20);
        styles.lineHeight = toPixels(26);
    }

    return withStyles(styled(variant)(styles), props);
};

export interface TitleProps extends StyledTitleProps {
    anchorId?: string;
}

export const Title: FC<TitleProps> = ({
    children,
    variant = 'h2',
    anchorId,
    ...props
}) => (
    <StyledTitle variant={variant} {...props}>
        {children}
        {anchorId && (
            <AnchorLink
                href={`#${anchorId}`}
                css={{
                    position: 'absolute',
                    top: toEm(0.08),
                    marginLeft: toPixels(10),
                    fontSize: toEm(0.8),
                    color: Colors.neutral700,
                    opacity: 0,
                    transform: `translate(${toPixels(-5)})`,
                    transition: Transitions.standard,
                }}
            >
                <Icon icon={regular('link')} title={startCase(anchorId)} />
            </AnchorLink>
        )}
    </StyledTitle>
);
