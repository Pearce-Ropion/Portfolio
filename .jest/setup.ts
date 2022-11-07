import 'whatwg-fetch';
import '@testing-library/jest-dom';

import React, { useEffect } from 'react';
import jestFetchMock from 'jest-fetch-mock';
import { noop } from 'lodash';

React.useLayoutEffect = useEffect;

jestFetchMock.enableMocks();

window.matchMedia =
  window.matchMedia ||
  function () {
    return {
      matches: false,
      addListener: noop,
      removeListener: noop,
    };
  };
