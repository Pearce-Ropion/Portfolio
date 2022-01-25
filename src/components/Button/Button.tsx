import { ButtonHTMLAttributes, MouseEventHandler } from 'react';
import { CSSObject } from '@emotion/react';
import styled, { StyledComponent } from '@emotion/styled';
import * as CSS from 'csstype';

import { iconFactory, IconFactoryIconProp } from 'components/Icon';
import { Link } from 'components/Link';

import { Shadows, Transitions } from 'styles/tokens/animation';
import { Families, Sizes, Weights } from 'styles/tokens/font';
import { BorderRadius, spacing } from 'styles/tokens/layout';

const buttonPadding = (
    borderWidth: CSS.Property.BorderWidth,
    verticalPadding: CSS.Property.Padding = spacing(1.5, { em: true }),
    horizontalPadding: CSS.Property.Padding = spacing(3, { em: true })
): CSSObject => ({
    padding: `calc(${verticalPadding} - ${borderWidth}) calc(${horizontalPadding} - ${borderWidth})`,
});

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant: 'primary' | 'secondary' | 'link';
    to?: string;
    disabled?: boolean;
    outlined?: boolean;
    icon?: IconFactoryIconProp;
    iconPosition?: 'left' | 'right';
    marginLeft?: boolean;
    marginRight?: boolean;
    onClick?: MouseEventHandler<HTMLButtonElement>;
}

const StyledButton: StyledComponent<ButtonProps> = styled.button(
    {
        display: 'flex',
        fontFamily: Families.sansSerif,
        fontSize: Sizes.sm,
        fontWeight: Weights.bold,
        lineHeight: 1,
        textAlign: 'center',
        whiteSpace: 'nowrap',
        borderRadius: BorderRadius.small,
        transition: Transitions.standard,
        cursor: 'pointer',
        verticalAlign: 'middle',
        userSelect: 'none',
        ...buttonPadding(0),
    },
    ({
        variant,
        disabled,
        marginLeft,
        marginRight,
    }: ButtonProps): CSSObject => {
        const styles: CSSObject = {};

        if (disabled) {
            styles.opacity = 0.4;
            styles.cursor = 'default';
        } else {
            const styled: CSSObject = {
                boxShadow: Shadows.sm,
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

        return styles;
    }
);

export const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
    const { to, disabled, icon, iconPosition, onClick } = props;

    const handleClick: MouseEventHandler<HTMLButtonElement> = event => {
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
        return <Link to={to}>{inner}</Link>;
    }

    return (
        <StyledButton {...props} onClick={handleClick}>
            {children}
        </StyledButton>
    );
};
