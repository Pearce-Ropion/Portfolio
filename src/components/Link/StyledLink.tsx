import { AnchorHTMLAttributes, forwardRef, Ref } from 'react';
import { CSSObject } from '@emotion/react';
import eStyled from '@emotion/styled';
import * as CSS from 'csstype';

import { themeSelectors, useTheme } from 'state/theme';

import { toEm } from 'utils/styles';
import { withStyles } from 'utils/with-styles';

import { Colors } from 'styles/tokens/colors';

export const DEFAULT_LINK_COLOR = Colors.orange900;
export const DEFAULT_LINK_COLOR_INVERTED = Colors.orange800;
export const DEFAULT_LINK_BORDER = toEm(0.125);

export interface LinkStylingProps {
    styled?: boolean;
    inverted?: boolean;
}

export const baseLinkStyles: CSSObject = {
    cursor: 'pointer',
    textDecoration: 'none',
};

export const styledLinkBaseStyles = (
    color: CSS.Property.Color = DEFAULT_LINK_COLOR,
    height: CSS.Property.PaddingBottom = DEFAULT_LINK_BORDER
): CSSObject => ({
    ...baseLinkStyles,
    color,
    transition: 'background-size 0.15s',
    paddingBottom: height,
    backgroundImage: `linear-gradient(transparent calc(100% - ${height}), ${color} ${height})`,
    backgroundSize: '0% 100%',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'bottom right',
});

export const styledLinkHoverStyles: CSSObject = {
    backgroundSize: '100% 100%',
    backgroundPosition: 'bottom left',
};

export const styledLinkStyles = (
    color: CSS.Property.Color = DEFAULT_LINK_COLOR,
    height: CSS.Property.PaddingBottom = DEFAULT_LINK_BORDER
): CSSObject => ({
    ...styledLinkBaseStyles(color, height),
    '&:hover': {
        ...styledLinkHoverStyles,
    },
});

export const dynamicLinkStyles = ({
    styled,
    inverted,
}: LinkStylingProps): CSSObject | undefined => {
    if (styled) {
        return styledLinkStyles(
            inverted ? DEFAULT_LINK_COLOR_INVERTED : DEFAULT_LINK_COLOR
        );
    }
};

export interface StyledLinkProps
    extends LinkStylingProps,
        AnchorHTMLAttributes<HTMLAnchorElement> {}

export const StyledLink = forwardRef<HTMLAnchorElement, StyledLinkProps>(
    ({ styled, inverted, ...props }, ref) => {
        const themeIsInverted = useTheme(themeSelectors.inverted);

        return withStyles<StyledLinkProps, HTMLAnchorElement>(
            eStyled.a(
                baseLinkStyles,
                dynamicLinkStyles({
                    styled,
                    inverted: inverted || themeIsInverted,
                })
            ),
            props,
            ref
        );
    }
);
