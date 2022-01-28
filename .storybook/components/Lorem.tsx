import { VFC } from 'react';
import { loremIpsum } from 'react-lorem-ipsum';

import { Text, TextProps } from 'components/Text';

export interface LoremProps extends TextProps {
    options?: Parameters<typeof loremIpsum>[0];
}

export const Lorem: VFC<LoremProps> = ({ options, ...props }) => {
    return <Text {...props}>{loremIpsum(options)}</Text>;
};
