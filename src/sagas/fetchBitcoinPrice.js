import { call, put } from 'redux-saga/effects';

import { coinsListApi, bitcoinPriceApi } from '../api';
import { actions } from '../actions';

export default function* callFetchBitcoinPricesWorker() {
  try {
    yield put(actions.setStateDataFetching(true));

    const coinsListResponse = yield call(fetch, coinsListApi, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (coinsListResponse.status !== 200) {
      throw new Error('Fetch coins list failed');
    }

    const { Data } = yield call([coinsListResponse, coinsListResponse.json]);
    const coinsNames = Object.keys(Data).slice(66, 76).toString();

    const bitcoinPricesResponse = yield call(fetch, bitcoinPriceApi(coinsNames), {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (bitcoinPricesResponse.status !== 200) {
      throw new Error('Fetch Bitcoin prices failed');
    }

    const bitcoinPrices = yield call([bitcoinPricesResponse, bitcoinPricesResponse.json]);

    yield put(actions.fetchBitcoinPricesSuccess(Object.entries(bitcoinPrices)));
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
  } finally {
    yield put(actions.setStateDataFetching(false));
  }
}
