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
import { border } from 'utils/style/format';
import { Box } from 'components/foundations/Box';

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
  },
  argTypes: {
    icon: mkEnumOptions(icons),
    prefix: mkEnumOptions(prefixes),
  },
} as ComponentMeta<FontAwesomeIconStory_t>;

const Template: ComponentStory<FontAwesomeIconStory_t> = ({
  prefix,
  icon: iconName,
  ...rest
}) => {
  const icon: IconProp = [prefix, iconName as IconName];
  return <FontAwesomeIcon size="3x" {...rest} icon={icon} />;
};

export const Default = Template.bind({});

export const Color = Template.bind({});
Color.args = {
  color: 'red',
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
  transform: {
    x: 30,
    y: 30,
  },
};
Transform.decorators = [
  Story => (
    <Box css={{ border: border(1, '$red800'), size: '100px' }}>
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
