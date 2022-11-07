const { Files } = require('../utils/files');
const { getConfig } = require('../utils/paths');

module.exports = {
  files: [Files.JSX, Files.TSX],
  extends: [getConfig('react')],
};
