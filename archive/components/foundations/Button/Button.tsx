import { FC, memo } from 'react';

import { Analytics, useAnalytics } from 'components/AnalyticsContext';
import {
    ButtonProps,
    ButtonStateProps,
    DEFAULT_BUTTON_VARIANT,
    DEFAULT_ICON_POSITION,
    StyledButton,
} from 'components/Button';
import { iconFactory } from 'components/Icon';

export const buttonTrackEventName = 'click-button';

export const Button: FC<ButtonProps> = memo(
    ({
        children,
        variant = DEFAULT_BUTTON_VARIANT,
        disabled,
        inverted,
        icon,
        iconPosition = DEFAULT_ICON_POSITION,
        segmentEvent,
        onClick,
        componentState = {},
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
            variant,
            disabled,
            inverted,
            ...componentState,
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
    }
);
