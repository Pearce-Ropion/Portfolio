declare global {
  namespace NodeJS {
    interface ProcessEnv {
      readonly NODE_ENV: 'development' | 'production' | 'test';
      readonly STORYBOOK_ENV: boolean;
    }
  }
}

export const { NODE_ENV, STORYBOOK_ENV } = process.env;
export const IS_PRODUCTION = NODE_ENV === 'production';
export const IS_DEVELOPMENT = NODE_ENV === 'development';
export const IS_STORYBOOK = STORYBOOK_ENV === true;

export const BASE_URL = 'pearce-ropion.com';
export const SITE_ORIGIN = new URL(`https://www.${BASE_URL}`);
export const SITE_URL = new URL(`https://www.${BASE_URL}/`);

export const SEGMENT_WRITE_KEY = 'BAzg4Wh5wwaFAEcdDRcWxDrgufDobHCs';
export const FORMSPREE_KEY = 'xwkyookg';
export const RECAPTCHA_V3_KEY = '6LdwYX8eAAAAAIsB1kvsu5X7qpLd1Eq94NL0UQ08';
