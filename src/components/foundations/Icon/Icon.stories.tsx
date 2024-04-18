import { ComponentMeta, ComponentStory } from '@storybook/react';

import {
  booleanControl,
  Chapter,
  Foundation,
  mkEnumOptions,
  mkStoryTitle,
  rangeControl,
  themedColorControl,
} from 'utils/storybook';
import { theme } from 'stitches.config';
import { iconControl } from '@sb/utils/library';

import { Icon } from './Icon';

export default {
  title: mkStoryTitle(Chapter.FOUNDATION, Foundation.ICON, 'Icon'),
  component: Icon,
  args: {
    icon: 'image',
    size: '3x',
  },
  argTypes: {
    icon: iconControl,
    color: themedColorControl,
    opacity: rangeControl({ min: 0, max: 1, step: 0.1 }),
    primaryColor: {
      ...themedColorControl,
      if: { arg: 'isDuotone' },
    },
    secondaryColor: {
      ...themedColorControl,
      if: { arg: 'isDuotone' },
    },
    primaryOpacity: {
      ...rangeControl({ min: 0, max: 1, step: 0.1 }),
      if: { arg: 'isDuotone' },
    },
    secondaryOpacity: {
      ...rangeControl({ min: 0, max: 1, step: 0.1 }),
      if: { arg: 'isDuotone' },
    },
    size: mkEnumOptions(
      ['1x', '2x', '3x', '4x', '5x', '6x', '7x', '8x', '9x', '10x'],
      false,
    ),
    swapOpacity: booleanControl,
  },
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = args => <Icon {...args} />;

export const Default = Template.bind({});

export const Color = Template.bind({});
Color.args = {
  color: theme.colors.orange900.value,
};

export const Opacity = Template.bind({});
Opacity.args = {
  opacity: 0.6,
};

export const Duotone = Template.bind({});
Duotone.args = {
  isDuotone: true,
  variant: 'fad',
};

export const SwapOpacity = Template.bind({});
SwapOpacity.args = {
  isDuotone: true,
  variant: 'fad',
  swapOpacity: true,
};

export const PrimaryColor = Template.bind({});
PrimaryColor.args = {
  isDuotone: true,
  variant: 'fad',
  primaryColor: theme.colors.orange800.value,
};

export const PrimaryOpacity = Template.bind({});
PrimaryOpacity.args = {
  isDuotone: true,
  variant: 'fad',
  primaryOpacity: 0.7,
};

export const SecondaryColor = Template.bind({});
SecondaryColor.args = {
  isDuotone: true,
  variant: 'fad',
  secondaryColor: theme.colors.orange800.value,
};

export const SecondaryOpacity = Template.bind({});
SecondaryOpacity.args = {
  isDuotone: true,
  variant: 'fad',
  secondaryOpacity: 0.7,
};
