const simpleImportSortOptions = require('./utils/eslint-import-sort');

module.exports = {
    parser: '@typescript-eslint/parser',
    processor: 'disable/disable',
    env: {
        es2021: true,
        browser: true,
    },
    settings: {
        react: {
            version: 'detect',
        },
    },
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
            experimentalObjectRestSpread: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: './tsconfig.json',
    },
    plugins: [
        '@typescript-eslint',
        'babel',
        'disable',
        'eslint-comments',
        'import',
        'prettier',
        'react',
        'react-hooks',
        '@emotion',
        'simple-import-sort',
    ],
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:react/jsx-runtime',
        'plugin:react-hooks/recommended',
        'plugin:eslint-comments/recommended',
        'plugin:prettier/recommended',
    ],
    overrides: [
        {
            files: ['*.ts', '*.tsx'],
            plugins: ['@typescript-eslint'],
            extends: [
                'plugin:@typescript-eslint/recommended',
                'plugin:@typescript-eslint/recommended-requiring-type-checking',
            ],
        },
        {
            files: ['*.spec.ts'],
            env: {
                'jest/globals': true,
            },
            settings: {
                jest: {
                    version: 'detect',
                },
            },
            extends: [
                'plugin:jest/recommended',
                'plugin:jest/style',
                'plugin:jest-dom/recommended',
                'plugin:testing-library/react',
            ],
            plugins: ['jest', 'jest-dom', 'testing-library'],
            rules: {
                'babel/no-invalid-this': 0,

                'jest/consistent-test-it': 1,
                'jest/lowercase-name': 1,
                'jest/no-deprecated-functions': 2,
                'jest/prefer-todo': 1,
            },
        },
    ],
    rules: {
        'arrow-parens': [2, 'as-needed'],
        eqeqeq: 2,
        'no-undef': 0,
        'no-constant-condition': 0,
        'no-console': 0,
        'no-irregular-whitespace': 0,
        'no-multi-str': 1,
        'no-var': 2,

        'babel/no-invalid-this': 2,
        'babel/semi': [2, 'always'],

        'eslint-comments/no-unused-disable': 1,

        'import/first': 2,
        'import/newline-after-import': 1,
        'import/no-duplicates': 2,
        'import/no-extraneous-dependencies': 2,
        'import/no-mutable-exports': 2,
        'import/no-self-import': 2,
        'import/no-useless-path-segments': 2,
        'import/prefer-default-export': 0,

        'jsx-quotes': 2,

        'react/display-name': 0,
        'react/prop-types': 0,
        'react/forbid-prop-types': 0,

        'react/no-array-index-key': 1,
        'react/no-danger': 1,
        'react/no-deprecated': 1,
        'react/no-did-mount-set-state': 1,
        'react/no-did-update-set-state': 1,
        'react/no-typos': 2,
        'react/no-unescaped-entities': 0,
        'react/no-unknown-property': 2,
        'react/no-unsafe': [2, { checkAliases: true }],
        'react/no-unused-prop-types': 1,
        'react/no-unused-state': 1,

        'react/prefer-es6-class': 1,
        'react/self-closing-comp': 1,
        'react/state-in-constructor': [1, 'never'],
        'react/static-property-placement': [1, 'property assignment'],
        'react/style-prop-object': 2,
        'react/void-dom-elements-no-children': 2,

        'react/jsx-boolean-value': 1,
        'react/jsx-closing-bracket-location': 1,
        'react/jsx-closing-tag-location': 1,
        'react/jsx-curly-brace-presence': [1, 'never'],
        'react/jsx-curly-spacing': 1,
        'react/jsx-equals-spacing': 1,
        'react/jsx-first-prop-new-line': [1, 'multiline'],
        'react/jsx-fragments': [1, 'syntax'],
        'react/jsx-handler-names': 1,
        'react/jsx-indent': [1, 4],
        'react/jsx-indent-props': 1,
        'react/jsx-max-depth': [1, { max: 12 }],
        'react/jsx-no-bind': [2, { allowArrowFunctions: true }],
        'react/jsx-no-duplicate-props': 1,
        'react/jsx-no-literals': 0,
        'react/jsx-no-script-url': 2,
        'react/jsx-no-target-blank': 1,
        'react/jsx-no-useless-fragment': 1,
        'react/jsx-pascal-case': 2,
        'react/jsx-props-no-multi-spaces': 1,
        'react/jsx-sort-props': [
            1,
            {
                callbacksLast: true,
                shorthandFirst: true,
                ignoreCase: true,
                noSortAlphabetically: true,
                reservedFirst: true,
            },
        ],
        'react/jsx-tag-spacing': 1,
        'react/jsx-wrap-multilines': 1,

        '@emotion/pkg-renaming': 2,
        '@emotion/styled-import': 2,
        '@emotion/syntax-preference': [2, 'object'],

        'simple-import-sort/imports': [
            2,
            simpleImportSortOptions({
                sortOrder: [
                    'types',
                    'config',
                    'templates',
                    'components',
                    'state',
                    'utils',
                    'styles',
                ],
                initialModuleOrder: ['react$', '@emotion', 'lodash-es'],
                includeCss: true,
            }),
        ],
    },
};
