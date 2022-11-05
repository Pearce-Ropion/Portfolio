// @ts-nocheck
const path = require('path');

const webpack = require('webpack');

const skipPropsWithName = ['css', 'as', 'ref'];
const typescriptConfiguration = {
  reactDocgenTypescriptOptions: {
    propFilter: prop => {
      if (skipPropsWithName.includes(prop.name)) {
        return false;
      }

      // https://github.com/storybookjs/storybook/blob/master/lib/core-server/src/presets/common-preset.ts#L53
      if (prop.parent) {
        return !/node_modules/.test(prop.parent.fileName);
      }

      return true;
    },
    shouldRemoveUndefinedFromOptional: true,
    shouldExtractLiteralValuesFromEnum: true,
    shouldExtractValuesFromUnion: true,
  },
};

module.exports = {
  stories: ['../src/**/*.stories.tsx'],
  addons: [
    'storybook-addon-gatsby',
    '@storybook/addon-essentials',
    '@storybook/addon-a11y',
  ],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-webpack5',
  },
  features: {
    postcss: false,
    emotionAlias: false,
  },
  staticDirs: ['../static'],
  webpackFinal: config => {
    config.resolve.modules.push(
      path.resolve(__dirname),
      path.resolve(__dirname, '../src'),
    );

    config.resolve.fallback.path = require.resolve('path-browserify');
    config.resolve.fallback.fs = false;
    config.resolve.fallback.os = false;
    config.resolve.fallback.module = false;

    config.plugins.push(
      new webpack.ProvidePlugin({
        process: 'process/browser',
      }),
    );

    return config;
  },
  typescript: typescriptConfiguration,
};
