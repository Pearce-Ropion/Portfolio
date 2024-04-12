import type { CSSProperties } from '@stitches/react';

import { theme, themeConfig } from 'stitches.config';
import type { PropertyValue_t } from 'types/stitches';
import { entries, values, keys } from 'utils/entries';

type TokenType_t = Exclude<
  keyof typeof themeConfig,
  'className' | 'selector' | 'toString'
>;

function isInvalidThemeType<T>(
  tokens: T,
): tokens is Extract<T, string | number | ((...args: any[]) => any)> {
  return (
    typeof tokens === 'string' ||
    typeof tokens === 'number' ||
    typeof tokens === 'function'
  );
}

const tokensByType = entries(theme).reduce((acc, [tokenType, tokens]) => {
  if (isInvalidThemeType(tokens)) return acc;
  acc[tokenType as TokenType_t] = new Set(Object.keys(tokens));
  return acc;
}, {} as Record<TokenType_t, Set<string>>);

const allTokens = values(theme).reduce((acc, tokens) => {
  if (isInvalidThemeType(tokens)) return acc;
  for (const token of keys(tokens)) {
    acc.add(token);
  }
  return acc;
}, new Set<string>());

const tokenToTokenType = entries(theme).reduce<Record<string, TokenType_t>>(
  (acc, [tokenType, tokens]) => {
    if (isInvalidThemeType(tokens)) return acc;
    for (const token of keys(tokens)) {
      acc[token] = tokenType as TokenType_t;
    }
    return acc;
  },
  {},
);

export function tokenToVariable(
  propertyValue: PropertyValue_t<keyof CSSProperties> | undefined,
  tokenType?: TokenType_t,
) {
  if (!propertyValue || typeof propertyValue !== 'string') return propertyValue;
  if (!propertyValue.startsWith('$')) return propertyValue;

  const tokens = propertyValue.split('$').slice(1);
  if (!tokens.length || tokens.length > 2) return propertyValue;

  const tokenHasType = tokens.length === 2;

  if (tokenHasType || tokenType) {
    const tokenTypeName = (tokenHasType ? tokens[0] : tokenType) as TokenType_t;
    const tokenName = tokenHasType ? tokens[1] : tokens[0];

    if (!allTokens.has(tokenName)) return propertyValue;

    if (tokenTypeName) {
      const tokenTypeTokens = tokensByType[tokenTypeName];
      if (tokenTypeTokens) {
        if (tokenTypeTokens.has(tokenName)) {
          // @ts-ignore - `theme` is a complex type that doesn't know it can be indexed by `tokenTypeName`
          return theme[tokenTypeName][tokenName].computedValue;
        }
      }
    }
  } else if (tokens.length === 1) {
    const tokenName = tokens[0];
    if (!allTokens.has(tokenName)) return propertyValue;

    const tokenTypeName = tokenToTokenType[tokenName];
    if (tokenTypeName) {
      // @ts-ignore - `theme` is a complex type that doesn't know it can be indexed by `tokenTypeName`
      return theme[tokenTypeName][tokenName].computedValue;
    }
  }

  return propertyValue;
}
