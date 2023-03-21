import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Flex } from 'components/foundations';
import { Hr, HrProps_t } from 'components/foundations/Hr/Hr';
import { Chapter, Foundation } from 'utils/storybook/chapters';
import { mkStoryTitle, mkStoryComponent } from 'utils/storybook';
import { toPx } from 'utils/style/units';

export default {
  title: mkStoryTitle(Chapter.FOUNDATION, Foundation.LAYOUT, 'Hr'),
  component: mkStoryComponent<HrProps_t>(Hr),
  args: {
    ...Hr.defaultProps,
  },
} as ComponentMeta<typeof Hr>;

const Template: ComponentStory<typeof Hr> = args => {
  return (
    <Flex
      align="center"
      justify="center"
      css={{
        width: toPx(args.direction === 'horizontal' ? 1024 : 100),
        height: toPx(args.direction === 'horizontal' ? 100 : 500),
      }}
    >
      <Hr {...args} />
    </Flex>
  );
};

export const Default = Template.bind({});

export const Direction = Template.bind({});
Direction.args = {
  direction: 'vertical',
};

export const Inverted = Template.bind({});
Inverted.args = {
  inverted: true,
};
