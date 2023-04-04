import { ComponentMeta, ComponentStory } from '@storybook/react';

import {
  Chapter,
  Composite,
  mkStoryComponent,
  mkStoryTitle,
} from 'utils/storybook';
import {
  BlockQuote,
  BlockQuoteProps_t,
} from 'components/composites/BlockQuote/BlockQuote';
import { faker } from 'utils/storybook/faker';

export default {
  title: mkStoryTitle(Chapter.COMPOSITE, Composite.COPY, 'BlockQuote'),
  component: mkStoryComponent<BlockQuoteProps_t>(BlockQuote),
  args: {
    ...BlockQuote.defaultProps,
    children: faker.lorem.paragraph(),
  },
} as ComponentMeta<typeof BlockQuote>;

const Template: ComponentStory<typeof BlockQuote> = args => (
  <BlockQuote {...args} />
);

export const Default = Template.bind({});

export const Inverted = Template.bind({});
Inverted.args = {
  inverted: true,
};
