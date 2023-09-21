import { History } from 'history';
import { combineReducers } from '@reduxjs/toolkit';
import { createBrowserHistory } from 'history';
import { createReduxHistoryContext } from 'redux-first-history';
import { customerDetailsSlice } from './customerDetails';
import { destinationSlice } from './destinations';
import { loginSlice } from './login';
import { transportDetailsSlice } from './transportDetails';
import { tripDetailsSlice } from './tripDetails';

const { routerReducer } = createReduxHistoryContext({ history: createBrowserHistory() });

const createRootReducer = () =>
  combineReducers({
    router: routerReducer,
    login: loginSlice.reducer,
    destination: destinationSlice.reducer,
    customerDetails: customerDetailsSlice.reducer,
    tripDetails: tripDetailsSlice.reducer,
    transportDetails: transportDetailsSlice.reducer
  });

export default createRootReducer;
