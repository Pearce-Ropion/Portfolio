import { ComponentMeta, ComponentStory } from '@storybook/react';
import * as Form from '@radix-ui/react-form';

import { useInverted } from '@sb/utils/hooks';
import { Chapter, Foundation, mkStoryTitle } from 'utils/storybook';

import { Input } from './Input';

export default {
  title: mkStoryTitle(Chapter.FOUNDATION, Foundation.CONTROL, 'Input'),
  component: Input,
  args: {
    label: 'First Name',
    name: 'fname',
  },
  decorators: [
    Story => (
      <Form.Root>
        <Story />
      </Form.Root>
    ),
  ],
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = args => {
  const inverted = useInverted();
  return <Input {...args} inverted={inverted} />;
};

export const Default = Template.bind({});

export const Placeholder = Template.bind({});
Placeholder.args = {
  placeholder: 'Enter your name',
};

export const Focused = Template.bind({});
Focused.args = {
  focused: true,
};

export const Error = Template.bind({});
Error.args = {
  error: true,
};

export const Success = Template.bind({});
Success.args = {
  success: true,
};
