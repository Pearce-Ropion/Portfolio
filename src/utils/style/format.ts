import type { PropertyValue_t } from 'types/stitches';
import { toPx } from 'utils/style/units';

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
