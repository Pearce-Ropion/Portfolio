import { CSSObject } from '@emotion/react';
import styled, { StyledComponent } from '@emotion/styled';
import * as CSS from 'csstype';
import { Link as GatsbyLink } from 'gatsby';

import { WithState, WithTheme } from 'components';
import { ButtonVariants, styledButtonStyles } from 'components/Button';
import {
    LinkStateProps,
    StyledGatsbyLinkProps,
    StyledLinkProps,
    StyledSpanLinkProps,
} from 'components/Link';

import { isThemeOverride, toEm } from 'utils/styles';

import { styledComponentOptions, styledTagOptions } from 'styles/styled';
import { Colors } from 'styles/tokens/colors';

export const DEFAULT_LINK_COLOR = Colors.orange900;
export const DEFAULT_LINK_COLOR_INVERTED = Colors.orange800;
export const DEFAULT_LINK_BORDER = toEm(0.125);

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

export const styledLinkComponentStyles = <S extends LinkStateProps>({
    theme,
    componentState: { variant, ...componentState },
}: WithState<S> & WithTheme): CSSObject => {
    const inverted: boolean = isThemeOverride<Omit<S, 'variant'>>(
        theme,
        componentState,
        'inverted'
    );

    const isButtonVariant: boolean = ButtonVariants.some(
        (buttonVariant: typeof ButtonVariants[number]): boolean =>
            buttonVariant === variant
    );

    return {
        ...baseLinkStyles,

        ...(variant === 'styled' &&
            styledLinkStyles(
                inverted ? DEFAULT_LINK_COLOR_INVERTED : DEFAULT_LINK_COLOR
            )),

        ...(isButtonVariant && {
            width: 'fit-content',

            ...styledButtonStyles({
                theme,
                componentState: {
                    ...componentState,
                    variant: variant as typeof ButtonVariants[number],
                },
            }),
        }),
    };
};

export const StyledSpanLink: StyledComponent<StyledSpanLinkProps> = styled(
    'span',
    styledTagOptions
)(styledLinkComponentStyles);

export const StyledLink: StyledComponent<StyledLinkProps> = styled(
    'a',
    styledTagOptions
)(styledLinkComponentStyles);

export const StyledGatsbyLink: StyledComponent<StyledGatsbyLinkProps> = styled(
    GatsbyLink,
    styledComponentOptions
)(styledLinkComponentStyles);
