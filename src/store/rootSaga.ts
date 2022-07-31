import { all } from 'redux-saga/effects';

import {
  searchStarShipSaga,
  searchPrevOrNextPageStarShipSaga
} from './searchStartShip';

export default function* rootSaga(): Generator {
  yield all([searchStarShipSaga(), searchPrevOrNextPageStarShipSaga()]);
}
