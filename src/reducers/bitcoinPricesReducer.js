import { List, fromJS } from 'immutable';

import types from '../actions/types';

const initialState = List();

export default function bitcoinPricesReducer(state = initialState, { type, payload }) {
  switch (type) {
    case types.FETCH_BITCOIN_PRICES_SUCCESS:
      return fromJS(payload);

    default:
      return state;
  }
}
