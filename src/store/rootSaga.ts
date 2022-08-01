import { all } from 'redux-saga/effects';

import { getStarShipSaga, getPageStarShipSaga } from './searchStartShip';

export default function* rootSaga(): Generator {
  yield all([getStarShipSaga(), getPageStarShipSaga()]);
}
