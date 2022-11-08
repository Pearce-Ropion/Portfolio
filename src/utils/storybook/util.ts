import { startCase } from 'lodash-es';

import { baseEnumControl } from 'utils/storybook/controls';

export const mkStoryTitle = (...segments: string[]): string => {
  return segments.filter(Boolean).join('/');
};

export const mkEnumOptions = (options: string[], transformLabel = true) => {
  return baseEnumControl(options.length <= 4 ? 'radio' : 'select', {
    options,
    labels: options.reduce<Record<string, string>>((acc, option) => {
      acc[option] = transformLabel ? startCase(option) : option;
      return acc;
    }, {}),
  });
};
