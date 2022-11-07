const { Files } = require('../utils/files');
const { getConfig } = require('../utils/paths');
const { pathsWithTypes } = require('../utils/paths-with-types');
const prettierConfig = require('../../../.prettierrc');

module.exports = {
  extends: [
    getConfig('common'),
    'eslint:recommended',
    getConfig('import'),
    getConfig('lodash'),
    'plugin:prettier/recommended', // needs to be last
  ],

  overrides: [
    {
      files: pathsWithTypes(
        ['**/__mocks__/**/*', '**/__tests__/**/*', '**/*.spec'],
        [Files.JS, Files.JSX],
      ),

      extends: [getConfig('common'), getConfig('jest')],
    },
  ],

  rules: {
    eqeqeq: ['error', 'allow-null'],
    'no-console': 'error',
    'no-prototype-builtins': 'off',
    'no-unused-expressions': [
      'error',
      {
        allowShortCircuit: true,
        allowTernary: true,
        allowTaggedTemplates: true,
      },
    ],
    'no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
        destructuredArrayIgnorePattern: '^_',
        varsIgnorePattern: '^_',
      },
    ],
    'no-useless-computed-key': 'error',
    'object-shorthand': 'error',
    'prefer-const': [
      'error',
      {
        destructuring: 'all',
      },
    ],
    quotes: ['error', 'single', { avoidEscape: true }],
    'spaced-comment': ['error', 'always', { markers: ['/'] }],
    yoda: 'error',

    // eslint-plugin-prettier
    'prettier/prettier': ['error', prettierConfig],
  },
};
