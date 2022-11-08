import { colorControl, inlineRadioControl } from 'utils/storybook/controls';
import {
  themedDefaultColorOptions,
  themedFormColorOptions,
} from 'utils/storybook/controls/color';

export const tabIndexControl = inlineRadioControl({ options: [-1, 0] });

export const themedColorControl = colorControl(themedDefaultColorOptions);
export const themedFormColorControl = colorControl(themedFormColorOptions);
