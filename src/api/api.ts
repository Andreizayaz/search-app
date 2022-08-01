import axios from 'axios';

import { store } from 'src/store';
import { starShipType } from 'src/store/searchStartShip';
import { setAlert } from 'src/store/alert';
import { setLoader } from 'src/store/loader';

import { SEARCH_URL } from 'src/constants';

const setAlertAndLoaderErrorState = async () => {
  store.dispatch(setLoader(false));
  store.dispatch(setAlert(true));
  await new Promise(() =>
    setTimeout(() => {
      store.dispatch(setAlert(false));
    }, 2000)
  );
};

export const getStarShip = async (
  searchValue: string
): Promise<starShipType | undefined> => {
  try {
    const response = await axios.get<starShipType>(
      `${SEARCH_URL}${searchValue}`
    );
    return response.data;
  } catch (error: Error | any) {
    await setAlertAndLoaderErrorState();
    console.log(error);
  }
};

export const getStarShipByPage = async (
  pageURL: string
): Promise<starShipType | undefined> => {
  try {
    const response = await axios.get<starShipType>(`${pageURL}`);
    return response.data;
  } catch (error: Error | any) {
    await setAlertAndLoaderErrorState();
    console.log(error);
  }
};
