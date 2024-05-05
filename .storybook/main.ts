import type { StorybookConfig } from '@storybook/react-vite';
import { readdir } from 'fs-extra';
import path from 'path';

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    // '@storybook/addon-onboarding',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    // '@chromatic-com/storybook',
    // '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  typescript: {
    reactDocgen: false,
  },
  async viteFinal(config, options) {
    const { mergeConfig } = await import('vite');
    const srcDirectories = await readdir(path.resolve(__dirname, '../src'), {
      withFileTypes: true,
    });

    const srcDirectoryAlias = srcDirectories.reduce<Record<string, string>>(
      (acc, dirent) => {
        const name = dirent.isDirectory()
          ? dirent.name
          : path.parse(dirent.name).name;

        acc[name] = path.resolve(__dirname, '../src', dirent.name);
        return acc;
      },
      {},
    );

    return mergeConfig(config, {
      define: {
        'process.env.NODE_ENV': JSON.stringify(
          options.configType?.toLowerCase() ?? 'production',
        ),
        'process.env.STORYBOOK_ENV': true,
      },
      resolve: {
        alias: {
          ...srcDirectoryAlias,
          '@sb': path.resolve(__dirname),
        },
      },
    });
  },
  docs: {
    autodocs: 'tag',
  },
};
export default config;
