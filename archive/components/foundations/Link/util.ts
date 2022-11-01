import { SITE_URL } from 'config';

export const EXTERNAL_URL_REGEX = /^https?:\/\/|mailto:/;

export const isExternal = (url: string): boolean =>
    EXTERNAL_URL_REGEX.test(url);

export const isPortfolio = (url: string): boolean =>
    url.includes(SITE_URL.hostname);

export const isAnchor = (url: string): boolean => url.charAt(0) === '#';

export const isTelephone = (url: string): boolean => url.startsWith('tel');

export interface LinkModel {
    link: string;
    location?: URL;
    isExternalLink: boolean;
    isTelephoneLink: boolean;
    isAnchorLink: boolean;
    isPortfolioLink: boolean;
    containsQueryParams: boolean;
}

export const analyzeLink = (to: string | URL): LinkModel => {
    let link: string = to instanceof URL ? to.href : to;

    let location;
    let containsQueryParams = false;

    try {
        location = new URL(to);
        containsQueryParams = Boolean(location.search.length);
    } catch (err) {
        // ignore
    }

    const isExternalLink: boolean = isExternal(link);
    const isTelephoneLink: boolean = isTelephone(link);
    const isAnchorLink: boolean = isAnchor(link);
    const isPortfolioLink: boolean = isPortfolio(link);

    if (
        !isExternalLink &&
        !isTelephoneLink &&
        !isAnchorLink &&
        !containsQueryParams &&
        !link.endsWith('/')
    ) {
        link = link.concat('/');
    }

    return {
        link,
        location,
        isExternalLink,
        isTelephoneLink,
        isAnchorLink,
        isPortfolioLink,
        containsQueryParams,
    };
};
