import { ComponentMeta, ComponentStory } from '@storybook/react';

import {
  Chapter,
  Composite,
  mkStoryComponent,
  mkStoryTitle,
} from 'utils/storybook';
import { Footer, FooterProps_t } from 'components/sections/Footer/Footer';
import { useInverted } from 'utils/hooks';

export default {
  title: mkStoryTitle(Chapter.COMPOSITE, Composite.SECTION, 'Footer'),
  component: mkStoryComponent<FooterProps_t>(Footer),
  args: {
    ...Footer.defaultProps,
  },
} as ComponentMeta<typeof Footer>;

const Template: ComponentStory<typeof Footer> = args => {
  const inverted = useInverted();
  return <Footer {...args} inverted={inverted} />;
};

export const Default = Template.bind({});

export const Inverted = Template.bind({});
Inverted.args = {
  inverted: true,
};
