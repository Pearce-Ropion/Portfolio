import { FC } from 'react';

import { Card } from 'components/Card';
import { CardProjectAction, CardProjectProps } from 'components/CardProject';
import { Link } from 'components/Link';
import { Text } from 'components/Text';
import { Title } from 'components/Title';

import { Shorthand, toPercent } from 'utils/styles';

import { Colors } from 'styles/tokens/colors';
import { Weights } from 'styles/tokens/font';
import { MQ } from 'styles/tokens/media-query';

export const CardProject: FC<CardProjectProps> = ({
    header,
    description,
    tags,
    actions,
    inverted,
}) => {
    return (
        <Card
            shadow
            css={{
                padding: Shorthand.paddingToPx(40, 40, 24),
                display: 'flex',
                flexDirection: 'column',

                [MQ.isMobile]: {
                    padding: Shorthand.paddingToPx(24),
                },
            }}
            inverted={inverted}
        >
            <Title
                inverted={inverted}
                weight={Weights.semibold}
                css={{ marginBottom: Shorthand.marginToEm(1) }}
            >
                {header}
            </Title>
            <Text
                inverted={inverted}
                weight={Weights.light}
                css={{ marginBottom: Shorthand.marginToEm(1.5) }}
            >
                {description}
            </Text>
            {Boolean(tags?.length) && (
                <div
                    css={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        marginBottom: Shorthand.marginToEm(1),

                        [MQ.isMobile]: {
                            display: 'grid',
                            gridTemplateColumns: '1fr 1fr',
                            flexWrap: 'unset',
                        },
                    }}
                >
                    {tags?.sort().map((tag: string, idx: number) => (
                        <Text
                            key={tag}
                            inline
                            color={
                                inverted ? Colors.neutral300 : Colors.neutral500
                            }
                            css={{
                                marginRight:
                                    idx !== tags.length - 1
                                        ? Shorthand.marginToEm(2)
                                        : 0,
                                marginBottom: Shorthand.marginToEm(0.5),
                            }}
                        >
                            {tag}
                        </Text>
                    ))}
                </div>
            )}
            {Boolean(actions?.length) && (
                <div css={{ display: 'flex', flexWrap: 'wrap' }}>
                    {actions?.map(
                        (
                            {
                                content,
                                secondary,
                                ...linkProps
                            }: CardProjectAction,
                            idx: number
                        ) => {
                            const isLast = idx === actions.length - 1;
                            return (
                                <Link
                                    key={content}
                                    inverted
                                    variant={
                                        secondary ? 'secondary' : 'primary'
                                    }
                                    css={{
                                        marginRight: isLast
                                            ? 0
                                            : Shorthand.marginToEm(2),
                                        marginBottom: Shorthand.marginToEm(1),

                                        [MQ.isMobile]: {
                                            justifyContent: 'center',
                                            width: toPercent(100),
                                            marginRight: 0,
                                            marginBottom: isLast
                                                ? 0
                                                : Shorthand.marginToEm(0.5),
                                        },
                                    }}
                                    {...linkProps}
                                >
                                    {content}
                                </Link>
                            );
                        }
                    )}
                </div>
            )}
        </Card>
    );
};
