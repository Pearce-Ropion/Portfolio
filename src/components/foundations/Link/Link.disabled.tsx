import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Chapter, Foundation, mkStoryTitle } from 'utils/storybook';
import { useInverted } from 'utils/hooks';

import { Link } from './Link';

export default {
  title: mkStoryTitle(Chapter.FOUNDATION, Foundation.NAVIGATION, 'Link'),
  component: Link,
  args: {
    children: 'Click Me',
  },
} as ComponentMeta<typeof Link>;

const Template: ComponentStory<typeof Link> = args => {
  const inverted = useInverted();
  // eslint-disable-next-line jsx-a11y/anchor-has-content
  return <Link {...args} inverted={inverted} />;
};

export const Default = Template.bind({});

export const Inverted = Template.bind({});
Inverted.args = {
  inverted: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};

export const ExternalLink = Template.bind({});
ExternalLink.args = {
  to: 'https://www.google.com/',
};

export const AnchorLink = Template.bind({});
AnchorLink.args = {
  to: '#skills',
};

export const InternalLink = Template.bind({});
InternalLink.args = {
  to: '/skills',
};
