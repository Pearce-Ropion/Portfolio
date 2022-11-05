import type { ComponentProps, VariantProps } from '@stitches/react';

import { Div } from 'components/foundations/Html';
import { styled } from 'stitches.config';

export const Box = styled(Div, {
  boxSizing: 'border-box',
});

export type BoxProps_t = ComponentProps<typeof Box>;
export type BoxVariants_t = VariantProps<typeof Box>;
