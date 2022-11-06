// @ts-nocheck
import path from 'path';
import type { Configuration } from 'webpack';
import { ProvidePlugin } from 'webpack';

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
  config.resolve.modules.push(
    path.resolve(__dirname),
    path.resolve(__dirname, '../src'),
  );

  config.resolve.fallback.path = require.resolve('path-browserify');
  config.resolve.fallback.fs = false;
  config.resolve.fallback.os = false;
  config.resolve.fallback.module = false;

  config.plugins.push(
    new ProvidePlugin({
      process: 'process/browser',
    }),
  );

  return config;
};

const skipPropsWithName = ['css', 'as', 'ref'];
export const typescript = {
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
