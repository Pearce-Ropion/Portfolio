import path from 'path';
import type { Configuration } from 'webpack';
import { ProvidePlugin } from 'webpack';
import type { PropItem } from 'react-docgen-typescript';

export const stories = ['../src/**/*.stories.tsx'];
export const staticDirs = ['../static'];

export const addons = [
  'storybook-addon-gatsby',
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
  if (!config.resolve.modules) config.resolve.modules = [];
  if (!config.resolve.fallback)
    config.resolve.fallback = {} as Record<string, string | false | string[]>;
  if (!config.plugins) config.plugins = [];

  config.resolve.modules.push(
    path.resolve(__dirname),
    path.resolve(__dirname, '../src'),
  );

  Object.assign(config.resolve.fallback, {
    fs: false,
    module: false,
    os: false,
    path: require.resolve('path-browserify'),
    process: require.resolve('process/browser'),
  });

  config.plugins.push(
    new ProvidePlugin({
      process: 'process/browser',
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
    shouldRemoveUndefinedFromOptional: true,
    shouldExtractLiteralValuesFromEnum: true,
    shouldExtractValuesFromUnion: true,
  },
};
