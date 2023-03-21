import path from 'path';
import { Configuration, DefinePlugin, ProvidePlugin } from 'webpack';
import type { PropItem } from 'react-docgen-typescript';
import { mapValues } from 'lodash';

export const stories = ['../src/**/*.stories.tsx'];
export const staticDirs = ['../static'];

export const addons = [
  // 'storybook-addon-gatsby',
  '@storybook/addon-essentials',
  '@storybook/addon-a11y',
];

export const framework = '@storybook/react';

export const core = {
  builder: '@storybook/builder-webpack5',
};

export const features = {
  postcss: false,
  emotionAlias: false,
};

export const webpackFinal = (config: Configuration) => {
  if (!config.resolve) config.resolve = {};
  if (!config.resolve.fallback) config.resolve.fallback = {};
  if (!config.resolve.modules) config.resolve.modules = [];
  if (!config.plugins) config.plugins = [];

  config.resolve.modules.push(
    path.resolve(__dirname),
    path.resolve(__dirname, '../src'),
  );

  Object.assign(config.resolve.fallback, {
    path: require.resolve('path-browserify'),
    process: require.resolve('process/browser'),
  });

  const rawEnv = {
    NODE_ENV: process.env.NODE_ENV || 'development',
    STORYBOOK_ENV: true,
  };

  config.plugins.push(
    new ProvidePlugin({
      process: 'process/browser',
    }),
    new DefinePlugin({
      'process.env': mapValues(rawEnv, value => JSON.stringify(value)),
    }),
  );

  return config;
};

const skipPropsWithName = ['as', 'css', 'ref'];
export const typescript = {
  reactDocgenTypescriptOptions: {
    propFilter: (prop: PropItem) => {
      if (skipPropsWithName.includes(prop.name)) {
        return false;
      }

      // https://github.com/storybookjs/storybook/blob/master/lib/core-server/src/presets/common-preset.ts#L53
      if (prop.parent) {
        return !/node_modules/.test(prop.parent.fileName);
      }

      return true;
    },
    shouldExtractLiteralValuesFromEnum: true,
    shouldExtractValuesFromUnion: true,
    shouldRemoveUndefinedFromOptional: true,
  },
};
