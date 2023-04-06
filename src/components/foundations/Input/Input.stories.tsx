import { ComponentMeta, ComponentStory } from '@storybook/react';
import * as Form from '@radix-ui/react-form';

import { Input } from 'components/foundations/Input/Input';
import { useInverted } from 'utils/hooks';
import {
  Chapter,
  Foundation,
  mkStoryComponent,
  mkStoryTitle,
} from 'utils/storybook';

export default {
  title: mkStoryTitle(Chapter.FOUNDATION, Foundation.CONTROL, 'Input'),
  component: mkStoryComponent(Input),
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
