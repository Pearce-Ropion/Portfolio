import { ComponentMeta, ComponentStory } from '@storybook/react';
import { library } from '@fortawesome/fontawesome-svg-core';

import { Icon, IconProps_t } from 'components/foundations/Icon/Icon';
import {
  booleanControl,
  Chapter,
  Foundation,
  mkEnumOptions,
  mkStoryComponent,
  mkStoryTitle,
  rangeControl,
  selectControl,
  themedColorControl,
} from 'utils/storybook';
import { theme } from 'stitches.config';

const prefixes = ['fas', 'far', 'fal', 'fat', 'fad'];
const icons = Object.keys(library.definitions.fas).sort();

export default {
  title: mkStoryTitle(Chapter.FOUNDATION, Foundation.ICON, 'Icon'),
  component: mkStoryComponent<IconProps_t>(Icon),
  args: {
    ...Icon.defaultProps,
    prefix: 'fas',
    icon: 'image',
    size: '3x',
  },
  argTypes: {
    prefix: selectControl({
      options: prefixes,
      labels: {
        fas: 'Solid',
        far: 'Regular',
        fal: 'Light',
        fat: 'Thin',
        fad: 'Duotone',
      },
    }),
    icon: mkEnumOptions(icons),
    color: themedColorControl,
    opacity: rangeControl({ min: 0, max: 1, step: 0.1 }),
    primaryColor: {
      ...themedColorControl,
      if: { arg: 'duotone' },
    },
    secondaryColor: {
      ...themedColorControl,
      if: { arg: 'duotone' },
    },
    primaryOpacity: {
      ...rangeControl({ min: 0, max: 1, step: 0.1 }),
      if: { arg: 'duotone' },
    },
    secondaryOpacity: {
      ...rangeControl({ min: 0, max: 1, step: 0.1 }),
      if: { arg: 'duotone' },
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
  duotone: true,
  prefix: 'fad',
};

export const SwapOpacity = Template.bind({});
SwapOpacity.args = {
  duotone: true,
  prefix: 'fad',
  swapOpacity: true,
};

export const PrimaryColor = Template.bind({});
PrimaryColor.args = {
  duotone: true,
  prefix: 'fad',
  primaryColor: theme.colors.orange800.value,
};

export const PrimaryOpacity = Template.bind({});
PrimaryOpacity.args = {
  duotone: true,
  prefix: 'fad',
  primaryOpacity: 0.7,
};

export const SecondaryColor = Template.bind({});
SecondaryColor.args = {
  duotone: true,
  prefix: 'fad',
  secondaryColor: theme.colors.orange800.value,
};

export const SecondaryOpacity = Template.bind({});
SecondaryOpacity.args = {
  duotone: true,
  prefix: 'fad',
  secondaryOpacity: 0.7,
};
