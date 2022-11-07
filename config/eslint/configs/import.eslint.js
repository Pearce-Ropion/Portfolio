const { Paths } = require('../utils/paths');

module.exports = {
  settings: {
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
        project: Paths.tsConfig,
      },
    },
  },

  plugins: ['import'],

  extends: ['plugin:import/recommended', 'plugin:import/typescript'],

  rules: {
    'import/default': 'error',
    'import/first': 'error',
    'import/newline-after-import': 'error',
    'import/no-extraneous-dependencies': 'error',
    'import/no-named-as-default-member': 'off',
    'import/order': [
      'error',
      {
        groups: [
          ['builtin', 'external'],
          'internal',
          ['parent', 'sibling', 'index'],
        ],
        'newlines-between': 'always',
      },
    ],
  },
};
