import { mergeCSS, mergeStyle } from 'utils/hooks';
import { cx } from 'utils/style/classes';

type AnyProps_t = Record<string, any>;

export function mergeProps(...args: Array<AnyProps_t | undefined>) {
  return args.reduce<AnyProps_t>((mergedProps, props) => {
    if (!props) return mergedProps;
    return Object.entries(props).reduce((nextProps, [propName, propValue]) => {
      if (propValue === undefined) return nextProps;

      const currValue = mergedProps[propName];

      if (
        /^on[A-Z]/.test(propName) &&
        typeof currValue === 'function' &&
        typeof propValue === 'function'
      ) {
        return {
          ...nextProps,
          [propName]: (...args: unknown[]) => {
            currValue(...args);
            propValue(...args);
          },
        };
      }

      switch (propName) {
        case 'style':
          return {
            ...nextProps,
            [propName]: mergeStyle(currValue, propValue),
          };
        case 'css':
          return {
            ...nextProps,
            [propName]: mergeCSS(currValue, propValue),
          };
        case 'className':
          return { ...nextProps, [propName]: cx(currValue, propValue) };

        default:
          return { ...nextProps, [propName]: propValue };
      }
    }, mergedProps);
  }, {});
}
