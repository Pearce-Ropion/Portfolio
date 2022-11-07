const { Files } = require('../utils/files');
const { getConfig } = require('../utils/paths');

module.exports = {
  files: [Files.JS, Files.JSX],
  extends: [getConfig('common'), getConfig('javascript')],
};
