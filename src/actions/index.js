import types from './types';
import asyncTypes from './asyncTypes';

export const actions = Object.freeze({
  setStateDataFetching: isDataFetching => ({
    type: types.SET_STATE_DATA_FETCHING,
    payload: isDataFetching,
  }),
  fetchBitcoinPricesSuccess: bitcoinPrices => ({
    type: types.FETCH_BITCOIN_PRICES_SUCCESS,
    payload: bitcoinPrices,
  }),
});


export const asyncActions = Object.freeze({
  fetchBitcoinPricesAsync: () => ({
    type: asyncTypes.FETCH_BITCOIN_PRICES_ASYNC,
  }),
});
