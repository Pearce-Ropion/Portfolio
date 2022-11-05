import { TransitionEasing } from 'styles/tokens/animation';
import type { PropertyValue_t } from 'types/stitches';
import { toPx, toMs } from 'utils/style/units';

export function border(
  width: PropertyValue_t<'borderWidth'>,
  color: PropertyValue_t<'borderColor'>,
  style: PropertyValue_t<'borderStyle'> = 'solid',
): PropertyValue_t<'border'> {
  let _width = width;
  if (typeof width === 'number') {
    _width = toPx(width);
  }

  return `${_width} ${style} ${color}`;
}

export function transition(
  properties: string | string[],
  durationMs: string | number,
  easingFunc: string = TransitionEasing.easeInOut,
): string {
  return (Array.isArray(properties) ? properties : [properties])
    .map(property => {
      const duration =
        typeof durationMs === 'string'
          ? durationMs
          : toMs(Math.round(durationMs));
      return `${property} ${duration} ${easingFunc}`;
    })
    .join(',');
}
