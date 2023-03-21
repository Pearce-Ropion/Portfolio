import { startCase } from 'lodash';

export function mkStoryTitle(...segments: string[]): string {
  return segments.filter(Boolean).join('/');
}

export interface Control {
  type: string;
  labels?: Record<string, string>;
}
export interface ArgType {
  options?: string[];
  control?: Control;
}

export function mkEnumOptions(options?: string[], withLabels = true) {
  if (!options) {
    return undefined;
  }

  const argType: ArgType = {
    options,
    control: {
      type: options.length <= 4 ? 'radio' : 'select',
    },
  };

  if (withLabels && argType.control) {
    argType.control.labels = options.reduce<Record<string, string>>(
      (acc, option) => {
        acc[option] = startCase(option);
        return acc;
      },
      {},
    );
  }

  return argType;
}
