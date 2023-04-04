import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Card } from 'components/foundations/Card/Card';
import { useInverted } from 'utils/hooks';
import {
  Chapter,
  faker,
  Foundation,
  mkStoryComponent,
  mkStoryTitle,
} from 'utils/storybook';

export default {
  title: mkStoryTitle(Chapter.FOUNDATION, Foundation.LAYOUT, 'Card'),
  component: mkStoryComponent(Card),
  args: {
    ...Card.defaultProps,
    children: faker.lorem.paragraph(),
  },
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = args => {
  const inverted = useInverted();
  return <Card {...args} inverted={inverted} />;
};

export const Default = Template.bind({});

export const Bordered = Template.bind({});
Bordered.args = {
  bordered: true,
};

export const NoPadding = Template.bind({});
NoPadding.args = {
  padded: false,
};

export const Inverted = Template.bind({});
Inverted.args = {
  inverted: true,
};
