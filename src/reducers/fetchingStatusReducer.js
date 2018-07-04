import { Map } from 'immutable';

import types from '../actions/types';

const initialState = Map({
  isDataFetching: false,
});

export default function fetchingStatusReducer(state = initialState, { type, payload }) {
  switch (type) {
    case types.SET_STATE_DATA_FETCHING:
      return state.set('isDataFetching', payload);

    default:
      return state;
  }
}
