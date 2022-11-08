declare module '@fortawesome/fontawesome-svg-core' {
  import {
    IconPrefix,
    IconName,
    IconDefinition,
  } from '@fortawesome/fontawesome-svg-core';

  interface Library {
    definitions: Record<IconPrefix, Record<IconName, IconDefinition>>;
  }
}

export = {};
