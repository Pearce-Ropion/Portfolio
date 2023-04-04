import { anchorate } from 'anchorate';
import smoothScroll from 'smoothscroll-polyfill';

import 'utils/colord';

export const onClientEntry = () => {
  smoothScroll.polyfill();
};

export const onRouteUpdate = () => {
  anchorate();
};
