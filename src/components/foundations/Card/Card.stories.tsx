import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Card } from 'components/foundations/Card/Card';
import { useInverted } from 'utils/hooks';
import {
  booleanControl,
  Chapter,
  faker,
  Foundation,
  mkStoryTitle,
} from 'utils/storybook';

export default {
  title: mkStoryTitle(Chapter.FOUNDATION, Foundation.LAYOUT, 'Card'),
  component: Card,
  args: {
    children: faker.lorem.paragraph(),
    isPadded: true,
  },
  argTypes: {
    isBordered: booleanControl,
    isPadded: booleanControl,
    isInverted: booleanControl,
  },
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = args => {
  const inverted = useInverted();
  return <Card {...args} isInverted={inverted} />;
};

export const Default = Template.bind({});

export const Bordered = Template.bind({});
Bordered.args = {
  isBordered: true,
};

export const NoPadding = Template.bind({});
NoPadding.args = {
  isPadded: false,
};

export const Inverted = Template.bind({});
Inverted.args = {
  isInverted: true,
};
