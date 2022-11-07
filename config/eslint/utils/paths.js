// @ts-nocheck
const path = require('path');

const ROOT_DIR = path.resolve(__dirname, '../../..');
const ESLINT_CONFIG = path.join(ROOT_DIR, 'config/eslint');
const CONFIGS_DIR = path.join(ESLINT_CONFIG, 'configs');

const Paths = {
  root: ROOT_DIR,
  eslint: {
    root: ESLINT_CONFIG,
    configs: CONFIGS_DIR,
    overrides: path.join(ESLINT_CONFIG, 'overrides'),
    utils: path.join(ESLINT_CONFIG, 'utils'),
  },
  src: path.join(ROOT_DIR, 'src'),
  tsConfig: path.join(ROOT_DIR, 'tsconfig.json'),
};

module.exports = {
  Paths,
  getConfig: config => path.join(CONFIGS_DIR, `${config}.eslint.js`),
};
