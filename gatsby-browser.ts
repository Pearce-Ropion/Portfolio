import { anchorate } from 'anchorate';
import smoothScroll from 'smoothscroll-polyfill';

export const onClientEntry = () => {
    console.log('LOADED');
    smoothScroll.polyfill();
};

export const onRouteUpdate = () => {
    anchorate();
};
