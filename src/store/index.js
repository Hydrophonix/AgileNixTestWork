import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

import rootReducer from '../reducers';
import rootSaga from '../sagas';

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];
const isDev = process.env.NODE_ENV === 'development';

if (isDev) {
  middlewares.push(createLogger({
    collapsed: true,
    duration: true,
  }));
}

// eslint-disable-next-line
const composeEnchancers = isDev && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(
  rootReducer,
  composeEnchancers(applyMiddleware(...middlewares)),
);

sagaMiddleware.run(rootSaga);
