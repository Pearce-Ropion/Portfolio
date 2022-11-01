import { FC, ReactNode } from 'react';
import { groupBy, map, padStart, sortBy } from 'lodash-es';

// import { Box } from 'components/Box';
// import { Text } from 'components/Text';

// import { hexToRgb, RGB } from 'utils/color';
// import { Shorthand, toPixels } from 'utils/styles';

// import { Colors as colors } from 'styles/tokens/colors';
// import { FontFamily } from 'styles/tokens/font';

// interface ColorEntry {
//     name: string;
//     color: string;
// }

// type ColorGroups = Record<string, ColorEntry[]>;

// interface ColorGroupEntry {
//     color: string;
//     colors: ColorEntry[];
// }

// type ColorBlockProps = ColorEntry;

// const ColorBlock: FC<ColorBlockProps> = ({ color, name }) => {
//     const rgb: RGB | undefined = hexToRgb(color);

//     return (
//         <div css={{ marginBottom: Shorthand.marginToEm(1) }}>
//             <Box color={color} />
//             <div css={{ marginTop: Shorthand.marginToPx(4) }}>
//                 <Text weight="bold">{name}</Text>
//                 <Text css={{ fontFamily: FontFamily.monospace }}>
//                     {color}
//                     <br />
//                     {rgb &&
//                         map(
//                             rgb,
//                             (value: number, letter: string): ReactNode => (
//                                 <span
//                                     key={letter}
//                                     css={{ marginRight: toPixels(5) }}
//                                 >
//                                     <strong>{letter.toUpperCase()}</strong>
//                                     {padStart(value.toString(), 3, '0')}
//                                 </span>
//                             )
//                         )}
//                 </Text>
//             </div>
//         </div>
//     );
// };

// export const Colors: VFC = () => {
//     const order: string[] = [
//         'neutral',
//         'navy',
//         'orange',
//         'yellow',
//         'red',
//         'green',
//     ];

//     const colorList: ColorEntry[] = Object.entries(colors).map(
//         ([name, color]: [string, string]): ColorEntry => ({
//             name,
//             color,
//         })
//     );

//     const colorGroups: ColorGroups = groupBy(
//         colorList,
//         ({ name }: ColorEntry): string => {
//             return name.replace(/\d/g, '');
//         }
//     );

//     const mappedColorGroups: ColorGroupEntry[] = map(
//         colorGroups,
//         (colors: ColorEntry[], color: string): ColorGroupEntry => ({
//             color,
//             colors,
//         })
//     );

//     const sortedColors: ColorGroupEntry[] = sortBy(
//         mappedColorGroups,
//         ({ color }: ColorGroupEntry): number => order.indexOf(color)
//     );

//     return (
//         <>
//             {sortedColors.map(({ color: prefix, colors }) => (
//                 <div key={prefix} css={{ display: 'flex' }}>
//                     {colors.map(({ name, color }, idx) => (
//                         <div
//                             key={name}
//                             css={{
//                                 marginRight: Shorthand.marginToEm(
//                                     idx === colors.length - 1 ? 0 : 1
//                                 ),
//                             }}
//                         >
//                             <ColorBlock color={color} name={name} />
//                         </div>
//                     ))}
//                 </div>
//             ))}
//         </>
//     );
// };

export default {
  title: 'Tokens/Colors',
};

export const Colors = () => <div />;
