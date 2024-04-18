import { useMemo } from 'react';
import { CSSProps_t, StyleDOMProps_t } from 'types/dom';
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

interface StyleProps_t extends Omit<StyleDOMProps_t, 'tabIndex'>, CSSProps_t {}

export function useStyleProps(props: AnyProps_t, styles: StyleProps_t = {}) {
  return useMemo(() => {
    return mergeProps(
      {
        className: props.className,
        css: props.css,
        style: props.style,
      },
      {
        className: styles.className,
        css: styles.css,
        style: styles.style,
      },
    );
  }, [
    props.className,
    props.css,
    props.style,
    styles.className,
    styles.css,
    styles.style,
  ]);
}
