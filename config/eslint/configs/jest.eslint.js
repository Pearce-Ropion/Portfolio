module.exports = {
  env: {
    jest: true,
  },
  globals: {
    jest: true,
  },
  settings: {
    jest: {
      version: 'detect',
    },
  },
  plugins: ['jest'],
  extends: [
    'plugin:jest/recommended',
    'plugin:jest/style',
    'plugin:jest-dom/recommended',
    'plugin:testing-library/react',
  ],
  rules: {
    'jest/consistent-test-it': 'error',
    'jest/no-test-return-statement': 'error',
    'jest/prefer-called-with': 'warn',
    'jest/prefer-lowercase-title': 'warn',
    'jest/prefer-todo': 'warn',
    'jest/require-top-level-describe': 'error',
  },
};
