import '@fortawesome/fontawesome-svg-core/styles.css';

import { library, config } from '@fortawesome/fontawesome-svg-core';
import { faBook as faBookSolid } from '@fortawesome/pro-solid-svg-icons';

config.measurePerformance = process.env.NODE_ENV === 'development';

library.add(faBookSolid);
