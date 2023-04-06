import { Chapter, Foundation, mkStoryTitle } from 'utils/storybook';

import { default as inputStory, Error, Success } from './Input.stories';

export default {
  ...inputStory,
  title: mkStoryTitle(
    Chapter.FOUNDATION,
    Foundation.CONTROL,
    'Input (floating)',
  ),
  args: {
    ...inputStory.args,
    floating: true,
  },
};

Error.args!.value = 'Incorrect';
Success.args!.value = 'Correct';

export * from './Input.stories';
