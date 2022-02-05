import { ReactNode } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Text } from 'components/Text';
import { Title, TitleVariants } from 'components/Title';

import { Colors } from 'styles/tokens/colors';

const Template: ComponentStory<typeof Title> = args => (
    <div>
        {TitleVariants.map(
            (variant: typeof TitleVariants[number]): ReactNode => (
                <div key={variant}>
                    <Text color={Colors.orange900} weight="bold">
                        Variant {variant}
                    </Text>

                    <Title {...args} variant={variant}>
                        They looked up at the sky and saw a million stars
                    </Title>
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
    title: 'Typography/Title',
    component: Title,
} as ComponentMeta<typeof Title>;
