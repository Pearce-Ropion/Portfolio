const { Files } = require('../utils/files');
const { getConfig } = require('../utils/paths');

module.exports = {
  files: [Files.MDX],

  settings: {
    'import/extensions': ['.mdx'],
    'import/resolver': {
      node: {
        extensions: ['.mdx'],
      },
    },
  },

  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },

  plugins: ['mdx'],

  extends: [
    getConfig('common'),
    getConfig('javascript'),
    'plugin:mdx/recommended',
    getConfig('import'),
    getConfig('react'),
  ],
};
