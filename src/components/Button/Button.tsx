import { ButtonHTMLAttributes, MouseEventHandler } from 'react';
import { CSSObject } from '@emotion/react';
import styled, { StyledComponent } from '@emotion/styled';
import * as CSS from 'csstype';

import { iconFactory, IconFactoryIconProp } from 'components/Icon';
import { Link } from 'components/Link';

import { Shadows, Transitions } from 'styles/tokens/animation';
import { Colors } from 'styles/tokens/colors';
import { FontFamily, FontSize, Weights } from 'styles/tokens/font';
import { BorderRadius, spacing } from 'styles/tokens/layout';

const buttonPadding = (
    borderWidth: CSS.Property.BorderWidth,
    verticalPadding: CSS.Property.Padding = '13px',
    horizontalPadding: CSS.Property.Padding = '50px'
): CSS.Property.Padding => {
    return `calc(${verticalPadding} - ${borderWidth}) calc(${horizontalPadding} - ${borderWidth})`;
};
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant: 'primary' | 'secondary' | 'link';
    to?: string;
    disabled?: boolean;
    inverted?: boolean;
    outlined?: boolean;
    icon?: IconFactoryIconProp;
    iconPosition?: 'left' | 'right';
    marginLeft?: boolean;
    marginRight?: boolean;
    onClick?: MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
}

const StyledButton: StyledComponent<ButtonProps> = styled.button(
    {
        display: 'flex',
        fontFamily: FontFamily.sansSerif,
        fontSize: FontSize.sm,
        fontWeight: Weights.bold,
        lineHeight: 1,
        textAlign: 'center',
        whiteSpace: 'nowrap',
        borderRadius: BorderRadius.small,
        transition: Transitions.standard,
        cursor: 'pointer',
        verticalAlign: 'middle',
        userSelect: 'none',
        padding: buttonPadding(0),
    },
    ({
        variant,
        disabled,
        inverted,
        marginLeft,
        marginRight,
    }: ButtonProps): CSSObject => {
        const styles: CSSObject = {};

        if (disabled) {
            styles.opacity = 0.4;
            styles.cursor = 'default';
        } else {
            const styled: CSSObject = {
                boxShadow: Shadows.small,
                transform: 'translateY(-1)',
                filter: 'brightness(1.1)',
            };

            styles['&:hover'] = styled;
            styles['&:focus'] = styled;
        }

        if (marginLeft) {
            styles.marginLeft = spacing(0.75);
        }

        if (marginRight) {
            styles.marginRight = spacing(0.75);
        }

        if (variant === 'primary') {
            styles.color = Colors.neutral0;
            styles.background = Colors.navy900;

            if (inverted) {
                styles.background = Colors.orange800;
            }
        }

        if (variant === 'secondary') {
            const borderWidth: CSS.Property.BorderWidth = '3px';

            styles.color = Colors.navy900;
            styles.background = 'transparent';
            styles.border = `${borderWidth} solid ${Colors.navy900}`;

            styles.padding = buttonPadding(borderWidth);

            if (inverted) {
                styles.color = Colors.yellow900;
                styles.borderColor = Colors.yellow900;
            }
        }

        return styles;
    }
);

export const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
    const { to, disabled, icon, iconPosition, onClick } = props;

    const handleClick: MouseEventHandler<
        HTMLButtonElement | HTMLAnchorElement
    > = event => {
        if (disabled) {
            event.preventDefault();
            event.stopPropagation();
        } else {
            if (onClick) {
                onClick(event);
            }
        }
    };

    const inner = (
        <>
            {icon &&
                iconPosition === 'left' &&
                iconFactory(icon, {
                    marginRight: true,
                })}
            {children}
            {icon &&
                iconPosition === 'right' &&
                iconFactory(icon, {
                    marginLeft: true,
                })}
        </>
    );

    if (to) {
        return (
            <Link to={to} onClick={handleClick}>
                {inner}
            </Link>
        );
    }

    return (
        <StyledButton {...props} disabled={disabled} onClick={handleClick}>
            {children}
        </StyledButton>
    );
};
