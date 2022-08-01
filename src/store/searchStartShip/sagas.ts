import { call, put, takeLatest } from 'redux-saga/effects';

import {
  getStarShipSearchResult,
  getPrevOrNextPageStarShipSearch
} from 'src/api';

import {
  setSearchStarShip,
  fetchSearchStarShip,
  fetchPrevOrNextPageSearchStarShip
} from './reducer';

import { setLoader } from '../loader';

import { searchStarShipResultType, ActionType } from './types';
import { setAlert } from '../alert';
import { setMistakeText } from '../mistakeText';

function* setAlertAndLoaderErrorState() {
  yield put(setLoader(false));
  yield put(setAlert(true));
  yield new Promise(() =>
    setTimeout(() => {
      put(setAlert(false));
    }, 2000)
  );
  console.log('error');
}

function* fetchSearchStarShipData(fetchSearchStarShip: ActionType<string>) {
  try {
    yield put(setLoader(true));
    const searchStarShipResult: searchStarShipResultType = yield call(() =>
      getStarShipSearchResult(fetchSearchStarShip.payload)
    );

    if (!searchStarShipResult) {
      setAlertAndLoaderErrorState();
      return;
    }

    if (!searchStarShipResult.results.length) {
      yield put(setMistakeText(true));
    }

    yield put(setSearchStarShip(searchStarShipResult));
    yield put(setLoader(false));
  } catch (error: Error | any) {
    setAlertAndLoaderErrorState();
    console.log(error);
  }
}

function* fetchPrevOrNextPageSearchStarShipData(
  fetchPrevOrNextPageSearchStarShip: ActionType<string>
) {
  try {
    yield put(setLoader(true));
    const prevOrNextPageStarShipResult: searchStarShipResultType = yield call(
      () =>
        getPrevOrNextPageStarShipSearch(
          fetchPrevOrNextPageSearchStarShip.payload
        )
    );

    if (!prevOrNextPageStarShipResult) {
      setAlertAndLoaderErrorState();
      return;
    }

    yield put(setSearchStarShip(prevOrNextPageStarShipResult));
    yield put(setLoader(false));
  } catch (error: Error | any) {
    setAlertAndLoaderErrorState();
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
