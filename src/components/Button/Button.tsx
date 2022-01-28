import { ButtonHTMLAttributes, FC, MouseEventHandler, ReactNode } from 'react';
import { CSSObject } from '@emotion/react';
import styled, { StyledComponent } from '@emotion/styled';
import { SegmentEvent } from '@segment/analytics-next';
import * as CSS from 'csstype';

import { Analytics, useAnalytics } from 'components/AnalyticsContext';
import { iconFactory, IconFactoryIconProp } from 'components/Icon';
import { Link } from 'components/Link';

import { Shorthand, toPixels } from 'utils/styles';

import { Shadows, Transitions } from 'styles/tokens/animation';
import { Colors } from 'styles/tokens/colors';
import { FontFamily, Weights } from 'styles/tokens/font';
import { BorderRadius } from 'styles/tokens/layout';

export const ButtonVariants = ['primary', 'secondary', 'link'] as const;
export const IconPositions = ['left', 'right'] as const;

const buttonPadding = (
    borderWidth: number,
    verticalPadding = 13,
    horizontalPadding = 50
): CSS.Property.Padding => {
    return Shorthand.paddingToPx(
        verticalPadding - borderWidth,
        horizontalPadding - borderWidth
    );
};

export interface StyledButtonProps
    extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant: typeof ButtonVariants[number];
    disabled?: boolean;
    inverted?: boolean;
    marginLeft?: boolean;
    marginRight?: boolean;
}

export const StyledButton: StyledComponent<StyledButtonProps> = styled.button(
    {
        display: 'flex',
        fontFamily: FontFamily.sansSerif,
        fontSize: toPixels(16),
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
        border: 'none',
        outline: 'none',
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
                transform: `translateY(${toPixels(-1)})`,
                filter: 'brightness(1.1)',
            };

            styles['&:hover'] = styled;
            styles['&:focus'] = styled;
        }

        if (marginLeft) {
            styles.marginLeft = toPixels(6);
        }

        if (marginRight) {
            styles.marginRight = toPixels(6);
        }

        if (variant === 'primary') {
            styles.color = Colors.neutral0;
            styles.background = Colors.navy900;

            if (inverted) {
                styles.background = Colors.orange800;
            }
        }

        if (variant === 'secondary') {
            const borderWidth = 3;

            styles.color = Colors.navy900;
            styles.background = 'transparent';
            styles.border = Shorthand.border(
                borderWidth,
                'solid',
                Colors.navy900
            );

            styles.padding = buttonPadding(borderWidth);

            if (inverted) {
                styles.color = Colors.yellow900;
                styles.borderColor = Colors.yellow900;
            }
        }

        return styles;
    }
);

export interface ButtonProps extends StyledButtonProps {
    to?: string;
    icon?: IconFactoryIconProp;
    iconPosition?: typeof IconPositions[number];
    segmentEvent?: SegmentEvent;
    onClick?: MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
}

export const Button: FC<ButtonProps> = ({
    children,
    variant = 'primary',
    to,
    icon,
    iconPosition = 'left',
    segmentEvent,
    onClick,
    ...props
}) => {
    const { disabled } = props;

    const analytics: Analytics = useAnalytics();

    const handleClick: ButtonProps['onClick'] = async event => {
        if (disabled) {
            event.preventDefault();
            event.stopPropagation();
        } else {
            if (onClick) {
                onClick(event);
            }

            try {
                await analytics?.track('click-button', segmentEvent);
            } catch (err) {
                console.error(
                    '[Analytics]<Button> Unable to track `click-anchor` event',
                    err
                );
            }
        }
    };

    const inner: ReactNode = (
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

    if (to || variant === 'link') {
        return (
            <Link to={to} onClick={handleClick}>
                {inner}
            </Link>
        );
    }

    console.log(props.css);

    return (
        <StyledButton variant={variant} onClick={handleClick} {...props}>
            {children}
        </StyledButton>
    );
};
