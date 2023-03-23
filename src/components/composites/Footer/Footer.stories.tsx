import { ComponentMeta, ComponentStory } from '@storybook/react';

import {
  Chapter,
  Composite,
  mkStoryComponent,
  mkStoryTitle,
} from 'utils/storybook';
import { Footer, FooterProps_t } from 'components/composites/Footer/Footer';

export default {
  title: mkStoryTitle(Chapter.COMPOSITE, Composite.SECTION, 'Footer'),
  component: mkStoryComponent<FooterProps_t>(Footer),
  args: {
    ...Footer.defaultProps,
  },
} as ComponentMeta<typeof Footer>;

const Template: ComponentStory<typeof Footer> = args => <Footer {...args} />;

export const Default = Template.bind({});

export const Inverted = Template.bind({});
Inverted.args = {
  inverted: true,
};
Inverted.parameters = {
  backgrounds: { default: 'navy900' },
};
