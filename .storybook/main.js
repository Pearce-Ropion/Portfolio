// @ts-nocheck
const path = require('path');

const webpack = require('webpack');

module.exports = {
    stories: ['../src/**/*.story.tsx'],
    addons: [
        'storybook-addon-gatsby',
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-a11y',
    ],
    framework: '@storybook/react',
    core: {
        builder: 'webpack5',
    },
    features: {
        emotionAlias: false,
    },
    webpackFinal: config => {
        config.resolve.modules.push(
            path.resolve(__dirname),
            path.resolve(__dirname, '../src')
        );

        config.resolve.fallback.path = require.resolve('path-browserify');
        config.resolve.fallback.fs = false;
        config.resolve.fallback.os = false;
        config.resolve.fallback.module = false;

        config.module.rules[0].use[0].options.plugins.unshift([
            require.resolve('@emotion/babel-plugin'),
            {
                sourceMap: process.env.NODE_ENV !== 'production',
                autoLabel: `dev-only`,
                labelFormat: `[local]`,
                cssPropOptimization: true,
            },
        ]);

        config.module.rules[0].use[0].options.presets[2][1].importSource =
            '@emotion/react';

        config.plugins.push(
            new webpack.ProvidePlugin({
                process: 'process/browser',
            })
        );

        return config;
    },
};
