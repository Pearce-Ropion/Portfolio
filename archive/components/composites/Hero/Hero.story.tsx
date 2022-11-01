import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Hero } from 'components/Hero';
import { Lorem } from 'components/Lorem';

import { toPixels } from 'utils/styles';

const Template: ComponentStory<typeof Hero> = args => (
    <Hero {...args}>
        <Lorem
            inverted
            options={{
                avgWordsPerSentence: 3,
            }}
            css={{
                maxWidth: toPixels(300),
                marginLeft: 'auto',
                marginRight: toPixels(100),
            }}
        />
    </Hero>
);

export const Basic = Template.bind({});

export default {
    title: 'Content/Hero',
    component: Hero,
} as ComponentMeta<typeof Hero>;
