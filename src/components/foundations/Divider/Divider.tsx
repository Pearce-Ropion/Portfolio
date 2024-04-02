import type { PropertyValue_t } from 'types/stitches';
import { createComponentWithRef } from 'utils/component';
import { useMergeStyle } from 'utils/hooks';

import { StyledDivider } from './styles';
import { DividerElement_t, DividerProps_t } from './types';

declare module 'react' {
  interface CSSProperties {
    '--divider-length'?: PropertyValue_t<'width' | 'height'>;
    '--divider-thickness'?: PropertyValue_t<'width' | 'height'>;
  }
}

export const Divider = createComponentWithRef<DividerElement_t, DividerProps_t>(
  (
    { direction = 'horizontal', length, style: styleProp, thickness, ...rest },
    forwardedRef,
  ) => {
    const style = useMergeStyle(
      length !== undefined && {
        '--divider-length': length,
      },
      thickness !== undefined && {
        '--divider-thickness': thickness,
      },
      styleProp,
      [length, styleProp, thickness],
    );

    return (
      <StyledDivider
        ref={forwardedRef}
        {...rest}
        aria-orientation={direction}
        direction={direction}
        role="separator"
        style={style}
      />
    );
  },
);
