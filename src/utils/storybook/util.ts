import { camelCase, upperFirst } from 'lodash-es';

export const mkStoryTitle = (...segments: string[]): string => {
  return segments.filter(Boolean).join('/');
};

export const mkEnumOptions = (options: string[]) => {
  return {
    control: {
      type: options.length <= 4 ? 'radio' : 'select',
      options,
      labels: options.reduce<Record<string, string>>((acc, option) => {
        acc[option] = upperFirst(camelCase(option));
        return acc;
      }, {}),
    },
  };
};
