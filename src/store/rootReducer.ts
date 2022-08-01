import { combineReducers } from '@reduxjs/toolkit';

import { setSearchStarShipReducer } from './searchStartShip';
import { loaderReducer } from './loader';
import { alertReducer } from './alert';
import { mistakeTextReducer } from './mistakeText';

export const rootReducer = combineReducers({
  searchStarShip: setSearchStarShipReducer,
  loader: loaderReducer,
  alert: alertReducer,
  mistakeText: mistakeTextReducer
});
