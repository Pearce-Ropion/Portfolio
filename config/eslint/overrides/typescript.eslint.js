const { Files } = require('../utils/files');
const { getConfig } = require('../utils/paths');

module.exports = {
  files: [Files.JS, Files.JSX, Files.TS, Files.TSX],
  extends: [getConfig('common'), getConfig('typescript')],
};
