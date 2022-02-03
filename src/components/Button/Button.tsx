import { FC, ReactNode } from 'react';

import { Analytics, useAnalytics } from 'components/AnalyticsContext';
import {
    ButtonProps,
    ButtonStateProps,
    StyledButton,
    StyledButtonLink,
} from 'components/Button';
import { iconFactory } from 'components/Icon';
import { Link, LinkStateProps } from 'components/Link';

export const buttonTrackEventName = 'click-button';

export const Button: FC<ButtonProps> = ({
    children,
    variant = 'primary',
    disabled,
    inverted,
    to,
    icon,
    iconPosition = 'left',
    segmentEvent,
    onClick,
    componentState,
    ...props
}) => {
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
                await analytics?.track(buttonTrackEventName, segmentEvent);
            } catch (err) {
                console.error(
                    `[Analytics]<Button> Unable to track '${buttonTrackEventName}' event`,
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

    if (to) {
        const linkState: LinkStateProps = {
            ...componentState,
            inverted,
        };

        return (
            <StyledButtonLink
                to={to}
                styled={false}
                componentState={linkState}
                onClick={handleClick}
            >
                {inner}
            </StyledButtonLink>
        );
    }

    const buttonState: ButtonStateProps = {
        ...componentState,
        variant,
        disabled,
        inverted,
    };

    return (
        <StyledButton
            componentState={buttonState}
            onClick={handleClick}
            {...props}
        >
            {children}
        </StyledButton>
    );
};
