import { ReactNode } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Text } from 'components/Text';

import { Shorthand } from 'utils/styles';

import { Colors } from 'styles/tokens/colors';
import { Weights } from 'styles/tokens/font';

const TextWeights = (Object.values(Weights) as Weights[]).filter(
    (weight: Weights): boolean => {
        return !isNaN(weight);
    }
);

const Template: ComponentStory<typeof Text> = args => (
    <div>
        {TextWeights.map(
            (weight: Weights): ReactNode => (
                <div
                    key={weight}
                    css={{ marginBottom: Shorthand.marginToEm(1) }}
                >
                    <Text color={Colors.orange900} weight={Weights.bold}>
                        Weights.{Weights[weight]}
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
