import { FontAwesomeIconProps } from '@fortawesome/react-fontawesome';
import { useMemo } from 'react';
import { IconLookup } from '@fortawesome/fontawesome-common-types';
import { startCase } from 'lodash-es';

import { FontAwesomeIconImplProps_t } from 'components/foundations/Icon/types';

export interface UseFontAwesomePropsOptions_t
  extends Partial<FontAwesomeIconImplProps_t> {}

export interface UseFontAwesomePropsResult_t
  extends Partial<FontAwesomeIconProps> {}

export function useFontAwesomeProps(
  iconLookup: IconLookup,
  props: UseFontAwesomePropsOptions_t,
): UseFontAwesomePropsResult_t {
  const {
    animation: animationProp,
    flipped,
    hasBorder,
    isFixedWidth,
    isInverted,
    isListItem,
    label,
    pullDirection,
    rotation,
    size,
    swapOpacity,
    transform,
  } = props;

  const title = useMemo(() => {
    if (label) return label;
    return `${startCase(iconLookup.iconName)} Icon`;
  }, [iconLookup, label]);

  const animationProps = useMemo(() => {
    if (!animationProp) return {};

    return (
      Array.isArray(animationProp) ? animationProp : [animationProp]
    ).reduce<Partial<FontAwesomeIconProps>>((acc, name) => {
      switch (name) {
        case 'beat-fade':
          acc.beatFade = true;
          break;
        case 'spin-pulse':
          acc.spinPulse = true;
          break;
        case 'spin-reverse':
          acc.spinReverse = true;
          break;

        default:
          acc[name] = true;
          break;
      }

      return acc;
    }, {});
  }, [animationProp]);

  return {
    ...animationProps,
    border: hasBorder,
    fixedWidth: isFixedWidth,
    inverse: isInverted,
    flip: flipped,
    listItem: isListItem,
    pull: pullDirection,
    rotation,
    size,
    swapOpacity,
    title,
    transform,
  };
}
