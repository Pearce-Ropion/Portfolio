import { ReactNode, VFC } from 'react';
import { groupBy, map, padStart, sortBy } from 'lodash-es';

import { Box } from 'components/Box';
import { Margin } from 'components/Margin';
import { Special, Text } from 'components/Text';

import { hexToRgb, RGB } from 'utils/color';
import { toPixels } from 'utils/styles';

import { Colors as colors } from 'styles/tokens/colors';

interface ColorEntry {
    name: string;
    color: string;
}

type ColorGroups = Record<string, ColorEntry[]>;

interface ColorGroupEntry {
    color: string;
    colors: ColorEntry[];
}

type ColorBlockProps = ColorEntry;

const ColorBlock: VFC<ColorBlockProps> = ({ color, name }) => {
    const rgb: RGB | undefined = hexToRgb(color);

    return (
        <Margin bottom="medium">
            <Box color={color} />
            <Margin top="small-2x">
                <Text variant="p2" weight="bold">
                    {name}
                </Text>
                <Special variant="code2">
                    {color}
                    <br />
                    {rgb &&
                        map(
                            rgb,
                            (value: number, letter: string): ReactNode => (
                                <span
                                    key={letter}
                                    css={{ marginRight: toPixels(5) }}
                                >
                                    <strong>{letter.toUpperCase()}</strong>
                                    {padStart(value.toString(), 3, '0')}
                                </span>
                            )
                        )}
                </Special>
            </Margin>
        </Margin>
    );
};

export const Colors: VFC = () => {
    const order: string[] = [
        'neutral',
        'navy',
        'orange',
        'yellow',
        'red',
        'green',
    ];

    const colorList: ColorEntry[] = Object.entries(colors).map(
        ([name, color]: [string, string]): ColorEntry => ({
            name,
            color,
        })
    );

    const colorGroups: ColorGroups = groupBy(
        colorList,
        ({ name }: ColorEntry): string => {
            return name.replace(/\d/g, '');
        }
    );

    const mappedColorGroups: ColorGroupEntry[] = map(
        colorGroups,
        (colors: ColorEntry[], color: string): ColorGroupEntry => ({
            color,
            colors,
        })
    );

    const sortedColors: ColorGroupEntry[] = sortBy(
        mappedColorGroups,
        ({ color }: ColorGroupEntry): number => order.indexOf(color)
    );

    return (
        <>
            {sortedColors.map(({ color: prefix, colors }) => (
                <div key={prefix} css={{ display: 'flex' }}>
                    {colors.map(({ name, color }, idx) => (
                        <Margin
                            key={name}
                            right={idx === colors.length - 1 ? 'zero' : 'small'}
                        >
                            <ColorBlock color={color} name={name} />
                        </Margin>
                    ))}
                </div>
            ))}
        </>
    );
};

export default {
    title: 'Colors',
};
