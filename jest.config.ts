import { Config } from 'jest';

const config: Config = {
  modulePaths: ['<rootDir>/src'],

  preset: 'ts-jest',
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
  testEnvironment: 'jsdom',

  testMatch: ['<rootDir>/src/**/*.{spec,test}.{js,jsx,ts,tsx}'],
  testPathIgnorePatterns: ['<rootDir>/node_modules', '<rootDir>/build'],
};

export default config;
