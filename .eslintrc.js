const path = require('path');

const { utils, overrides } = require('./config/eslint');

module.exports = {
  settings: {
    'import/internal-regex': utils.getInternalImports(
      path.resolve(__dirname, 'src'),
    ),
  },

  overrides: [overrides.typescript, overrides.react, overrides.reactHooks],
};
