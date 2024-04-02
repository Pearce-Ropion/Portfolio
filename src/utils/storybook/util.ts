import { startCase } from 'lodash';

import {
  BaseEnumOptions_t,
  EnumOption_t,
  baseEnumControl,
} from 'utils/storybook/controls';

export function mkStoryTitle(...segments: string[]): string {
  return segments.filter(Boolean).join('/');
}

export const mkEnumOptions = (
  options?: Array<string | number>,
  withLabels = true,
  multiSelect?: boolean,
) => {
  if (!options) {
    return undefined;
  }

  const controlType = multiSelect
    ? 'multi-select'
    : options.length <= 4
    ? 'radio'
    : 'select';

  const baseEnumOptions: BaseEnumOptions_t = {
    options,
  };

  if (withLabels) {
    baseEnumOptions.labels = options.reduce<Record<string, EnumOption_t>>(
      (acc, option) => {
        acc[option] = typeof option === 'number' ? option : startCase(option);
        return acc;
      },
      {},
    );
  }

  return baseEnumControl(controlType, baseEnumOptions);
};
