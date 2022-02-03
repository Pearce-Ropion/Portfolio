import { ComponentMeta, ComponentStory } from '@storybook/react';
import { LoremIpsum } from 'react-lorem-ipsum';

import { MaxWidth } from 'components/MaxWidth';

import { Shorthand, toPercent } from 'utils/styles';

import { Colors } from 'styles/tokens/colors';

const Template: ComponentStory<typeof MaxWidth> = args => (
    <MaxWidth
        css={{
            border: Shorthand.borderToPx(5, 'solid', Colors.green900),
            padding: Shorthand.paddingToEm(1),
        }}
        {...args}
    >
        <LoremIpsum />
    </MaxWidth>
);

export const Basic = Template.bind({});

export const Centered = Template.bind({});
Centered.args = {
    centered: true,
    style: { textAlign: 'center' },
};

export default {
    title: 'Components/MaxWidth',
    component: MaxWidth,
    args: {
        width: toPercent(50),
    },
} as ComponentMeta<typeof MaxWidth>;
