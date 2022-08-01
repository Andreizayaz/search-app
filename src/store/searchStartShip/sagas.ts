import { call, put, takeLatest } from 'redux-saga/effects';

import { getStarShip, getStarShipByPage } from 'src/api';

import { setStarShip, fetchStarShip, fetchPage } from './reducer';

import { setLoader } from '../loader';
import { setAlert } from '../alert';
import { setMistakeText } from '../mistakeText';

import { starShipType, ActionType } from './types';

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

function* fetchSearchStarShipData(fetchStarShip: ActionType<string>) {
  try {
    yield put(setLoader(true));
    const starShip: starShipType = yield call(() =>
      getStarShip(fetchStarShip.payload)
    );

    if (!starShip) {
      setAlertAndLoaderErrorState();
      return;
    }

    if (!starShip.results.length) {
      yield put(setMistakeText(true));
    }

    yield put(setStarShip(starShip));
    yield put(setLoader(false));
  } catch (error: Error | any) {
    setAlertAndLoaderErrorState();
    console.log(error);
  }
}

function* fetchStarShipByPage(fetchPage: ActionType<string>) {
  try {
    yield put(setLoader(true));
    const prevOrNextPageStarShipResult: starShipType = yield call(() =>
      getStarShipByPage(fetchPage.payload)
    );

    if (!prevOrNextPageStarShipResult) {
      setAlertAndLoaderErrorState();
      return;
    }

    yield put(setStarShip(prevOrNextPageStarShipResult));
    yield put(setLoader(false));
  } catch (error: Error | any) {
    setAlertAndLoaderErrorState();
    console.log(error);
  }
}

export function* getStarShipSaga(): Generator {
  yield takeLatest(fetchStarShip.type, fetchSearchStarShipData);
}

export function* getPageStarShipSaga(): Generator {
  yield takeLatest(fetchPage.type, fetchStarShipByPage);
}
