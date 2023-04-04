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
import { useInverted } from 'utils/hooks';

export default {
  title: mkStoryTitle(Chapter.COMPOSITE, Composite.COPY, 'BlockQuote'),
  component: mkStoryComponent<BlockQuoteProps_t>(BlockQuote),
  args: {
    ...BlockQuote.defaultProps,
    children: faker.lorem.paragraph(),
  },
} as ComponentMeta<typeof BlockQuote>;

const Template: ComponentStory<typeof BlockQuote> = args => {
  const inverted = useInverted();
  return <BlockQuote {...args} inverted={inverted} />;
};

export const Default = Template.bind({});

export const Inverted = Template.bind({});
Inverted.args = {
  inverted: true,
};
