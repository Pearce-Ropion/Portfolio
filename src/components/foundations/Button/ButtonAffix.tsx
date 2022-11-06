import type { ComponentProps } from '@stitches/react';

import { styled } from 'stitches.config';
import { Flex } from 'components/foundations/Flex';
import { toEm, toPercent } from 'utils/style/units';

export const ButtonAffix = styled(Flex, {
  boxSizing: 'border-box',
  whiteSpace: 'nowrap',
  alignItems: 'center',
  height: toEm(0.01),
  maxHeight: toPercent(100),
  fontFamily: '$primary',
  fontSize: '$medium',
  lineHeight: '$medium',
  color: '$neutral500',
});
export type ButtonAffixProps_t = ComponentProps<typeof ButtonAffix>;

export const ButtonPrefix = styled(ButtonAffix, {
  marginRight: '$2',
});
export type ButtonPrefixProps_t = ComponentProps<typeof ButtonPrefix>;

export const ButtonSuffix = styled(ButtonAffix, {
  marginLeft: '$2',
});
export type ButtonSuffixProps_t = ComponentProps<typeof ButtonSuffix>;
