import { FC } from 'react';

import { Analytics, useAnalytics } from 'components/AnalyticsContext';
import { ButtonProps, ButtonStateProps, StyledButton } from 'components/Button';
import { iconFactory } from 'components/Icon';

export const buttonTrackEventName = 'click-button';

export const Button: FC<ButtonProps> = ({
    children,
    variant = 'primary',
    disabled,
    inverted,
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
        </StyledButton>
    );
};
