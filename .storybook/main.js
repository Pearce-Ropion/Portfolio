// @ts-nocheck
const path = require('path');

const webpack = require('webpack');

module.exports = {
  stories: ['../src/**/*.stories.tsx'],
  addons: [
    'storybook-addon-gatsby',
    '@storybook/addon-essentials',
    '@storybook/addon-a11y',
  ],
  framework: '@storybook/react',
  core: {
    builder: 'webpack5',
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
};
