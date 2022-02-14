import { camelCase } from 'lodash-es';

export const startCamelCase = (str: string): string => {
    const base: string = camelCase(str);
    return base.charAt(0).toUpperCase().concat(base.substring(1));
};
