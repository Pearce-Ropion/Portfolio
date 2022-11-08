import { ComponentMeta, ComponentStory } from '@storybook/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  IconName,
  IconPrefix,
  IconProp,
  library,
} from '@fortawesome/fontawesome-svg-core';

import { Chapter, Foundation } from 'utils/storybook/chapters';
import { mkEnumOptions, mkStoryTitle } from 'utils/storybook';
import { StoryComponentProps_t } from 'types/component';
import { Box } from 'components/foundations/Box';
import { theme } from 'stitches.config';
import {
  booleanControl,
  disableControl,
  radioControl,
  removeControl,
  selectControl,
  tabIndexControl,
  textControl,
  themedColorControl,
} from 'utils/storybook/controls';

type FontAwesomeIconStory_t = StoryComponentProps_t<
  typeof FontAwesomeIcon,
  {
    prefix: IconPrefix;
  }
>;

const prefixes = ['fas', 'far', 'fal', 'fat', 'fad'];
const icons = Object.keys(library.definitions.fas).sort();

export default {
  title: mkStoryTitle(Chapter.FOUNDATION, Foundation.ICON, 'FontAwesomeIcon'),
  component: FontAwesomeIcon,
  args: {
    prefix: 'fad',
    icon: 'image',
    size: '3x',
  },
  argTypes: {
    icon: mkEnumOptions(icons),
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
    color: themedColorControl,
    mask: disableControl,
    spin: booleanControl,
    spinPulse: booleanControl,
    pulse: booleanControl,
    beat: booleanControl,
    fade: booleanControl,
    beatFade: booleanControl,
    bounce: booleanControl,
    shake: booleanControl,
    border: booleanControl,
    fixedWidth: disableControl,
    inverse: booleanControl,
    listItem: disableControl,
    flip: mkEnumOptions(['horizonal', 'vertical', 'both']),
    size: mkEnumOptions(
      ['1x', '2x', '3x', '4x', '5x', '6x', '7x', '8x', '9x', '10x'],
      false,
    ),
    pull: disableControl,
    rotation: radioControl({ options: [90, 180, 270] }),
    transform: disableControl,
    symbol: removeControl,
    style: removeControl,
    tabIndex: tabIndexControl,
    title: textControl,
    titleId: removeControl,
    swapOpacity: booleanControl,
  },
} as ComponentMeta<FontAwesomeIconStory_t>;

const Template: ComponentStory<FontAwesomeIconStory_t> = ({
  prefix,
  icon: iconName,
  ...rest
}) => {
  const icon: IconProp = [prefix, iconName as IconName];
  return <FontAwesomeIcon {...rest} icon={icon} />;
};

export const Default = Template.bind({});

export const Color = Template.bind({});
Color.args = {
  color: theme.colors.orange900.value,
};

export const Spin = Template.bind({});
Spin.args = {
  icon: 'cog',
  spin: true,
};

export const SpinPulse = Template.bind({});
SpinPulse.args = {
  icon: 'cog',
  spinPulse: true,
};

export const Pulse = Template.bind({});
Pulse.args = {
  icon: 'cog',
  pulse: true,
};

export const Beat = Template.bind({});
Beat.args = {
  icon: 'heart',
  beat: true,
};

export const Fade = Template.bind({});
Fade.args = {
  icon: 'heart',
  fade: true,
};

export const BeatFade = Template.bind({});
BeatFade.args = {
  icon: 'heart',
  beatFade: true,
};

export const Bounce = Template.bind({});
Bounce.args = {
  bounce: true,
};

export const Shake = Template.bind({});
Shake.args = {
  shake: true,
};

export const Border = Template.bind({});
Border.args = {
  border: true,
};

export const Inverse = Template.bind({});
Inverse.args = {
  inverse: true,
};
Inverse.parameters = {
  backgrounds: { default: 'navy900' },
};

export const Flip = Template.bind({});
Flip.args = {
  flip: 'vertical',
};

export const Size = Template.bind({});
Size.args = {
  size: '10x',
};

export const Rotate = Template.bind({});
Rotate.args = {
  rotation: 90,
};

export const Transform = Template.bind({});
Transform.args = {
  border: true,
  transform: {
    x: 25,
    y: 23,
  },
};
Transform.decorators = [
  Story => (
    <Box css={{ size: '120px' }}>
      <Story />
    </Box>
  ),
];

export const Title = Template.bind({});
Title.args = {
  title: 'Figure',
};

export const SwapOpacity = Template.bind({});
SwapOpacity.args = {
  swapOpacity: true,
};

export const Mask = Template.bind({});
Mask.args = {
  icon: 'pencil',
  prefix: 'fas',
  mask: ['fas', 'comment'],
  transform: {
    size: 6,
    y: -0.5,
  },
};
