import { call, put, takeLatest } from 'redux-saga/effects';

import {
  setSearchStarShip,
  fetchSearchStarShip,
  fetchPrevOrNextPageSearchStarShip
} from './reducer';

import {
  getStarShipSearchResult,
  getPrevOrNextPageStarShipSearch
} from 'src/api';
import { searchStarShipResultType, ActionType } from './types';

function* fetchSearchStarShipData(fetchSearchStarShip: ActionType<string>) {
  try {
    const searchStarShipResult: searchStarShipResultType = yield call(() =>
      getStarShipSearchResult(fetchSearchStarShip.payload)
    );

    yield put(setSearchStarShip(searchStarShipResult));
  } catch (error: Error | any) {
    console.log(error);
  }
}

function* fetchPrevOrNextPageSearchStarShipData(
  fetchPrevOrNextPageSearchStarShip: ActionType<string>
) {
  try {
    const PrevOrNextPageStarShipResult: searchStarShipResultType = yield call(
      () =>
        getPrevOrNextPageStarShipSearch(
          fetchPrevOrNextPageSearchStarShip.payload
        )
    );

    yield put(setSearchStarShip(PrevOrNextPageStarShipResult));
  } catch (error: Error | any) {
    console.log(error);
  }
}

export function* searchStarShipSaga(): Generator {
  yield takeLatest(fetchSearchStarShip.type, fetchSearchStarShipData);
}

export function* searchPrevOrNextPageStarShipSaga(): Generator {
  yield takeLatest(
    fetchPrevOrNextPageSearchStarShip.type,
    fetchPrevOrNextPageSearchStarShipData
  );
}
