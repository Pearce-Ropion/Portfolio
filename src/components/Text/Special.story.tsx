import { ReactNode } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Special, SpecialVariants, Text } from 'components/Text';

import { Colors } from 'styles/tokens/colors';

const Template: ComponentStory<typeof Special> = args => (
    <div>
        {SpecialVariants.map(
            (variant: typeof SpecialVariants[number]): ReactNode => (
                <div key={variant}>
                    <Text color={Colors.orange900} weight="bold">
                        Variant {variant}
                    </Text>

                    <Special variant={variant} {...args}>
                        They looked up at the sky and saw a million stars
                    </Special>
                </div>
            )
        )}
    </div>
);

export const Basic = Template.bind({});

export const Inverted = Template.bind({});
Inverted.args = {
    inverted: true,
};
Inverted.parameters = {
    backgrounds: {
        default: 'neutral900',
    },
};

export const WithColor = Template.bind({});
WithColor.args = {
    color: Colors.green900,
};

export const WithAlignCenter = Template.bind({});
WithAlignCenter.args = {
    alignCenter: true,
};

export const WithAlignRight = Template.bind({});
WithAlignRight.args = {
    alignRight: true,
};

export default {
    title: 'Typography/Special',
    component: Special,
} as ComponentMeta<typeof Special>;
