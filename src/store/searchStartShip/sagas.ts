import { call, put, takeLatest } from 'redux-saga/effects';

import { getStarShip, getStarShipByPage } from 'src/api';

import {
  ODD_IMG_LINK,
  EVEN_IMG_LINK,
  ODD_ICON_LINK,
  EVEN_ICON_LINK
} from 'src/constants';

import { setStarShip, fetchStarShip, fetchPage } from './reducer';

import { setLoader } from '../loader';
import { setAlert } from '../alert';
import { setMistakeText } from '../mistakeText';

import { starShipType, ActionType } from './types';

const modifyArray = (starShip: starShipType) => {
  starShip.results = starShip.results.map((item, index) => {
    if (index % 2) {
      return { ...item, imgSrc: ODD_IMG_LINK, iconSrc: ODD_ICON_LINK };
    }
    return { ...item, imgSrc: EVEN_IMG_LINK, iconSrc: EVEN_ICON_LINK };
  });
};

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

    modifyArray(starShip);

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
    const starShipByPage: starShipType = yield call(() =>
      getStarShipByPage(fetchPage.payload)
    );

    if (!starShipByPage) {
      setAlertAndLoaderErrorState();
      return;
    }

    modifyArray(starShipByPage);

    yield put(setStarShip(starShipByPage));
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
