const { Files } = require('../utils/files');
const { Paths, getConfig } = require('../utils/paths');
const { pathsWithTypes } = require('../utils/paths-with-types');

module.exports = {
  parser: '@typescript-eslint/parser',

  env: {
    node: true,
    es2022: true,
    browser: true,
  },

  parserOptions: {
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: Paths.tsConfig,
  },

  globals: {
    process: 'readonly',
    Buffer: 'readonly',
    module: 'readonly',
  },

  plugins: ['@typescript-eslint'],

  extends: [
    getConfig('common'),
    getConfig('javascript'),
    'plugin:@typescript-eslint/eslint-recommended',
  ],

  overrides: [
    {
      files: pathsWithTypes(
        ['**/__mocks__/**/*', '**/__tests__/**/*', '**/*.test', '**/*_spect'],
        [Files.JS, Files.JSX, Files.TS, Files.TSX],
      ),

      extends: [getConfig('common'), getConfig('jest')],
    },
  ],

  rules: {
    'no-unused-vars': 'off',

    // @typescript-eslint/eslint-plugin
    '@typescript-eslint/array-type': ['error', { default: 'array-simple' }],
    '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
    '@typescript-eslint/no-floating-promises': 'error',
    '@typescript-eslint/no-inferrable-types': 'error',
    '@typescript-eslint/no-unnecessary-type-assertion': 'error',
    '@typescript-eslint/no-unused-vars': [
      'error',
      // {
      //   argsIgnorePattern: '^_',
      //   destructuredArrayIgnorePattern: '^_',
      //   varsIgnorePattern: '^_',
      // },
    ],
  },
};
