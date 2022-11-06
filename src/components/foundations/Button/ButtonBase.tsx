import { forwardRef, memo, MouseEventHandler, useCallback } from 'react';

import {
  Button as Primitive,
  ButtonProps_t as PrimitiveProps_t,
} from 'components/foundations/Html';

export interface ButtonBaseProps_t extends PrimitiveProps_t {}

export const ButtonBase = memo(
  forwardRef<HTMLButtonElement, ButtonBaseProps_t>(
    ({ children, disabled, onClick, ...rest }, ref) => {
      const handleClick: MouseEventHandler<HTMLButtonElement> = useCallback(
        event => {
          if (disabled) {
            event.preventDefault();
            event.stopPropagation();
            return;
          }

          // handle tracking

          if (onClick) onClick(event);
        },
        [disabled, onClick],
      );

      return (
        <Primitive
          ref={ref}
          {...rest}
          disabled={disabled}
          onClick={handleClick}
        >
          {children}
        </Primitive>
      );
    },
  ),
);
