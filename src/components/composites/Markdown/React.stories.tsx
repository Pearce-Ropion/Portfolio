import { Meta, Story } from '@storybook/react';

import {
  booleanControl,
  Chapter,
  Composite,
  mkStoryTitle,
} from 'utils/storybook';
import { Markdown } from 'components/composites/Markdown/Markdown';

interface Args_t {
  inverted?: boolean;
  markdown: string;
}

export default {
  title: mkStoryTitle(Chapter.COMPOSITE, Composite.COPY, 'Markdown', 'React'),
  args: {
    markdown:
      'Hello *world*. I am **YOUR** savior\n\n---\n\nGet ready for the end!',
  },
  argTypes: {
    inverted: booleanControl,
  },
} as Meta<Args_t>;

const Template: Story<Args_t> = ({ inverted, markdown }) => {
  return <Markdown inverted={inverted} markdown={markdown} />;
};

export const Default = Template.bind({});

export const Inverted = Template.bind({});
Inverted.args = {
  inverted: true,
};
