import { useMemo } from 'react';

const EXTERNAL_URL_TYPE = /^https?:\/\/|mailto:/;

export interface UseNormalizedLinkResult_t {
  to?: string | URL;
  isExternal: boolean;
  isAnchor: boolean;
  isTelephone: boolean;
  hasHash: boolean;
  hasSearch: boolean;
}

export const useNormalizedLink = (
  to?: string | URL,
): UseNormalizedLinkResult_t => {
  return useMemo(() => {
    if (!to) {
      return {
        to,
        isExternal: false,
        isAnchor: false,
        isTelephone: false,
        hasHash: false,
        hasSearch: false,
      };
    }

    let link = typeof to === 'string' ? to : to.href;

    const isURL = to instanceof URL;
    const isExternal = EXTERNAL_URL_TYPE.test(link);
    const isAnchor = link.charAt(0) === '#';
    const isTelephone = link.includes('tel');
    const hasHash = link.includes('#');
    const hasSearch = link.includes('?');

    if (
      !isExternal &&
      !isTelephone &&
      !link.endsWith('/') &&
      !hasHash &&
      !hasSearch
    ) {
      link = `${link}/`;
    }

    return {
      to: isURL ? new URL(link) : link,
      isExternal,
      isAnchor,
      isTelephone,
      hasHash,
      hasSearch,
    };
  }, [to]);
};
