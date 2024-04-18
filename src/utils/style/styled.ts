import { StyledConfig_t } from 'types/stitches';

export type ShouldForwardStitchesProp_t = (propName: string) => boolean;

export function shouldForwardStitchesProps(
  ...propNames: string[]
): ShouldForwardStitchesProp_t {
  const propsSet = new Set(propNames);
  return (propName: string) => propsSet.has(propName);
}

export function shouldForwardStitchesConfig(
  ...propNames: string[]
): StyledConfig_t {
  return {
    shouldForwardStitchesProp: shouldForwardStitchesProps(...propNames),
  };
}
