import { anchorate } from 'anchorate';
import smoothScroll from 'smoothscroll-polyfill';

export const onClientEntry = () => {
    smoothScroll.polyfill();
};

export const onRouteUpdate = () => {
    anchorate();
};
