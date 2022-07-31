import { combineReducers } from '@reduxjs/toolkit';

import { setSearchStarShipReducer } from './searchStartShip';

export const rootReducer = combineReducers({
  searchStarShip: setSearchStarShipReducer
});
