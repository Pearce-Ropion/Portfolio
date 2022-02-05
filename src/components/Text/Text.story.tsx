import { ReactNode } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Text, TextWeights } from 'components/Text';

import { Colors } from 'styles/tokens/colors';

const Template: ComponentStory<typeof Text> = args => (
    <div>
        {TextWeights.map(
            (weight: typeof TextWeights[number]): ReactNode => (
                <div key={weight}>
                    <Text color={Colors.orange900} weight="bold">
                        Variant {weight}
                    </Text>

                    <Text weight={weight} {...args}>
                        They looked up at the sky and saw a million stars
                    </Text>
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
    title: 'Typography/Text',
    component: Text,
} as ComponentMeta<typeof Text>;
