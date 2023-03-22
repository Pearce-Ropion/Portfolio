import '@fortawesome/fontawesome-svg-core/styles.css';

import { library, config } from '@fortawesome/fontawesome-svg-core';
import { faBook as faBookSolid } from '@fortawesome/pro-solid-svg-icons';

import { IS_DEVELOPMENT } from 'env';

config.measurePerformance = IS_DEVELOPMENT;

library.add(faBookSolid);
