import { combineReducers } from '@reduxjs/toolkit';

import { setStarShipReducer } from './searchStartShip';
import { loaderReducer } from './loader';
import { alertReducer } from './alert';
import { mistakeTextReducer } from './mistakeText';

export const rootReducer = combineReducers({
  starShip: setStarShipReducer,
  loader: loaderReducer,
  alert: alertReducer,
  mistakeText: mistakeTextReducer
});
