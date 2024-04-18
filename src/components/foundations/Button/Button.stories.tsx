import { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button';

export default {
  component: Button,
  args: {
    children: 'Click me!',
  },
} as Meta<typeof Button>;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    variant: 'primary',
  },
};
