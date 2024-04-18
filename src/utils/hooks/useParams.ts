// import { useLocation } from '@reach/router';

import { getParams } from 'utils/params';

export const useParams = () => {
  // const location = useLocation();
  return getParams(location.search);
};
