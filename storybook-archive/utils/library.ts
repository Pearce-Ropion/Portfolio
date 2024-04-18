import '@fortawesome/fontawesome-svg-core/styles.css';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/pro-solid-svg-icons';
import { far } from '@fortawesome/pro-regular-svg-icons';
import { fal } from '@fortawesome/pro-light-svg-icons';
import { fat } from '@fortawesome/pro-thin-svg-icons';
import { fad } from '@fortawesome/pro-duotone-svg-icons';

import { mkEnumOptions, selectControl } from 'utils/storybook';

let initialized = false;

if (!initialized) {
  library.add(fab);
  library.add(fas);
  library.add(far);
  library.add(fal);
  library.add(fat);
  library.add(fad);

  initialized = true;
}

const variants = ['fas', 'far', 'fal', 'fat', 'fad'];
const icons = Object.keys(library.definitions.fas).sort();

export const iconVariantControl = selectControl({
  options: variants,
  labels: {
    fas: 'Solid',
    far: 'Regular',
    fal: 'Light',
    fat: 'Thin',
    fad: 'Duotone',
  },
});

export const iconControl = mkEnumOptions(icons);
