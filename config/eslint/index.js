const { Files } = require('./utils/files');
const { Paths, getConfig } = require('./utils/paths');
const { getInternalImports } = require('./utils/internal-imports');
const { pathsWithTypes } = require('./utils/paths-with-types');
const commonConfig = require('./configs/common.eslint');
const importConfig = require('./configs/import.eslint');
const javascriptConfig = require('./configs/javascript.eslint');
const jestConfig = require('./configs/jest.eslint');
const lodashConfig = require('./configs/lodash.eslint');
const reactConfig = require('./configs/react.eslint');
const reactHooksConfig = require('./configs/react-hooks.eslint');
const storybookConfig = require('./configs/storybook.eslint');
const typescriptConfig = require('./configs/typescript.eslint');
const javascriptOverride = require('./overrides/javascript.eslint');
const mdxOverride = require('./overrides/mdx.eslint');
const reactOverride = require('./overrides/react.eslint');
const reacHooksOverride = require('./overrides/react-hooks.eslint');
const storybookOverride = require('./overrides/storybook.eslint');
const typescriptOverride = require('./overrides/typescript.eslint');

module.exports = {
  Files,
  Paths,

  utils: {
    getInternalImports,
    pathsWithTypes,
    getConfig,
  },

  configs: {
    common: commonConfig,
    import: importConfig,
    javascript: javascriptConfig,
    jest: jestConfig,
    lodash: lodashConfig,
    react: reactConfig,
    reactHooks: reactHooksConfig,
    storybook: storybookConfig,
    typescript: typescriptConfig,
  },

  overrides: {
    javascript: javascriptOverride,
    mdx: mdxOverride,
    react: reactOverride,
    reactHooks: reacHooksOverride,
    storybook: storybookOverride,
    typescript: typescriptOverride,
  },
};
