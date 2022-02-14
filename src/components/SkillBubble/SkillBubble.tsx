import { FC } from 'react';
import { useTheme } from '@emotion/react';
import * as CSS from 'csstype';

import { SkillBubbleProps, SkillBubbleSizes } from 'components/SkillBubble';
import { Text } from 'components/Text';

import { Shorthand, toPercent, toPixels } from 'utils/styles';

import { Colors } from 'styles/tokens/colors';
import { Weights } from 'styles/tokens/font';

export const SkillBubbleSizeMap: Record<
    typeof SkillBubbleSizes[number],
    number
> = {
    'small-x': 84,
    small: 110,
    medium: 144,
    large: 172,
    'large-x': 212,
};

export const SkillBubble: FC<SkillBubbleProps> = ({
    skill,
    subSkill,
    size,
    bordered,
    inverted,
    ...props
}) => {
    const theme = useTheme();
    const isInverted = theme.inverted || inverted;

    const dimensions: number = SkillBubbleSizeMap[size] - (bordered ? 32 : 0);

    let primaryColor: CSS.Property.BackgroundColor = isInverted
        ? Colors.yellow500
        : Colors.orange500;

    const secondaryColor: CSS.Property.BackgroundColor = isInverted
        ? Colors.yellow200
        : Colors.orange200;

    if (!bordered) {
        primaryColor = secondaryColor;
    }

    return (
        <div
            {...props}
            css={{
                backgroundColor: primaryColor,
                width: toPixels(dimensions),
                height: toPixels(dimensions),
                borderRadius: toPercent(100),
                border: Shorthand.borderToPx(
                    bordered ? 16 : 0,
                    'solid',
                    secondaryColor
                ),
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <Text alignCenter>{skill}</Text>
            {subSkill && (
                <Text
                    alignCenter
                    weight={Weights.light}
                    css={{
                        fontSize: toPixels(14),
                    }}
                >
                    {subSkill}
                </Text>
            )}
        </div>
    );
};
