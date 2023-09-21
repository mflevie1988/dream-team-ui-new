import { applyMiddleware, compose, configureStore } from '@reduxjs/toolkit';

import { createBrowserHistory } from 'history';
import { createReduxHistoryContext } from 'redux-first-history';
import createRootReducer from './reducers';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';

const SagaMiddleware = createSagaMiddleware();
const { createReduxHistory, routerMiddleware } = createReduxHistoryContext({ history: createBrowserHistory() });

const store = configureStore({
  reducer: createRootReducer(),
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({ thunk: false, serializableCheck: false }).concat(SagaMiddleware).concat(routerMiddleware);
  },
  devTools: process.env.NODE_ENV !== 'production'
});

SagaMiddleware.run(rootSaga, store.dispatch);

export const history = createReduxHistory(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
