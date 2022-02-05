import { FC, memo, ReactElement } from 'react';

import { Analytics, useAnalytics } from 'components/AnalyticsContext';
import { CardProps, CardStateProps, StyledCard } from 'components/Card';
import { Link } from 'components/Link';

export const cardTrackEventName = 'click-card';

export const Card: FC<CardProps> = memo(
    ({
        children,
        to,
        segmentEvent,
        hover,
        inverted,
        shadow,
        disabled,
        componentState = {},
        onClick,
        ...props
    }) => {
        console.log(props);
        const analytics: Analytics = useAnalytics();

        const handleClick: CardProps['onClick'] = async event => {
            if (disabled) {
                event.preventDefault();
                event.stopPropagation();
            } else {
                if (onClick) {
                    onClick(event);
                }

                try {
                    await analytics?.track(cardTrackEventName, segmentEvent);
                } catch (err) {
                    console.error(
                        `[Analytics]<Card> Unable to track '${cardTrackEventName}' event`,
                        err
                    );
                }
            }
        };

        const cardState: CardStateProps = {
            hover,
            inverted,
            shadow,
            disabled,
            link: Boolean(to),
            ...componentState,
        };

        const card: ReactElement = (
            <StyledCard
                {...props}
                componentState={cardState}
                onClick={handleClick}
            >
                {children}
            </StyledCard>
        );

        if (to) {
            return (
                <Link
                    to={to}
                    disabled={disabled}
                    variant="unstyled"
                    onClick={handleClick}
                >
                    {card}
                </Link>
            );
        }

        return card;
    }
);
