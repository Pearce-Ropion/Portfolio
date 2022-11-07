const { Files } = require('../utils/files');
const { getConfig } = require('../utils/paths');
const { pathsWithTypes } = require('../utils/paths-with-types');

module.exports = {
  files: [
    ...pathsWithTypes(['.storybook/**/*'], [Files.JS, Files.TS, Files.TSX]),
    ...pathsWithTypes(['*.stories'], [Files.TSX, Files.MDX]),
  ],
  extends: [getConfig('storybook')],
};
