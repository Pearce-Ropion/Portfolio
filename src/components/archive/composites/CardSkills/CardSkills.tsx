import { FC, ReactNode } from 'react';

import { Card } from 'components/Card';
import { CardSkillsProps } from 'components/CardSkills';
import { iconFactory } from 'components/Icon';
import { Text } from 'components/Text';
import { Title } from 'components/Title';

import { Shorthand, toPixels } from 'utils/styles';

import { Colors } from 'styles/tokens/colors';
import { Weights } from 'styles/tokens/font';

export const CardSkills: FC<CardSkillsProps> = ({
    header,
    icon,
    skills,
    inverted,
    ...props
}) => {
    const iconComponent: ReactNode = iconFactory(icon, {
        primaryColor: inverted ? Colors.yellow900 : Colors.navy900,
        secondaryColor: inverted ? Colors.navy500 : undefined,
        secondaryColorOpacity: 0.8,
        size: '3x',
        css: {
            marginBottom: Shorthand.marginToPx(24),
        },
    });

    return (
        <Card
            {...props}
            inverted={inverted}
            css={{
                padding: Shorthand.paddingToPx(40),
                minWidth: toPixels(260),
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: toPixels(25),
                border: 'none',
                backgroundColor: Colors.navy200,

                ...(inverted && {
                    backgroundColor: Colors.navy900,
                }),
            }}
        >
            {iconComponent}
            <Title
                alignCenter
                css={{ margin: Shorthand.marginToEm(0, 0, 1) }}
                inverted={inverted}
            >
                {header}
            </Title>
            <ul css={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {skills.map((skill: string) => (
                    <li
                        key={skill}
                        css={{ marginBottom: Shorthand.marginToEm(0.5) }}
                    >
                        <Text
                            alignCenter
                            weight={Weights.light}
                            inverted={inverted}
                        >
                            {skill}
                        </Text>
                    </li>
                ))}
            </ul>
        </Card>
    );
};
