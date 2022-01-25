import { AnchorHTMLAttributes } from 'react';
import { CSSObject } from '@emotion/react';
import styled, { StyledComponent } from '@emotion/styled';
import * as CSS from 'csstype';

import { spacing } from 'styles/tokens/layout';

export const DEFAULT_LINK_COLOR = '#000';
export const DEFAULT_LINK_COLOR_INVERTED = '#FFF';
export const DEFAULT_LINK_BORDER = spacing(0.25);

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

export const StyledLink: StyledComponent<StyledLinkProps> = styled.a(
    baseLinkStyles,
    dynamicLinkStyles
);
