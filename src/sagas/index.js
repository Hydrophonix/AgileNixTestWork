import { takeEvery } from 'redux-saga/effects';

import asyncTypes from '../actions/asyncTypes';
import callFetchBitcoinPricesWorker from './fetchBitcoinPrice';

const bitcoinPricesWatchers = Object.freeze({
  * watchFetchBitcoinPrices() {
    yield takeEvery(asyncTypes.FETCH_BITCOIN_PRICES_ASYNC, callFetchBitcoinPricesWorker);
  },
});

export default bitcoinPricesWatchers.watchFetchBitcoinPrices;
