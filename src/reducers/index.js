import { combineReducers } from 'redux';

import fetchingStatus from './fetchingStatusReducer';
import bitcoinPrices from './bitcoinPricesReducer';

export default combineReducers({
  fetchingStatus,
  bitcoinPrices,
});
