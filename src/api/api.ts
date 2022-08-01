import axios from 'axios';

import { searchStarShipResultType } from 'src/store/searchStartShip';

import { SEARCH_URL } from 'src/constants';
import { setLoader } from 'src/store/loader';
import { setAlert } from 'src/store/alert';
import { store } from 'src/store';

const setAlertAndLoaderErrorState = async () => {
  store.dispatch(setLoader(false));
  store.dispatch(setAlert(true));
  await new Promise(() =>
    setTimeout(() => {
      store.dispatch(setAlert(false));
    }, 2000)
  );
  console.log('error');
};

export const getStarShipSearchResult = async (
  searchValue: string
): Promise<searchStarShipResultType | undefined> => {
  try {
    const response = await axios.get<searchStarShipResultType>(
      `${SEARCH_URL}${searchValue}`
    );
    return response.data;
  } catch (error: Error | any) {
    await setAlertAndLoaderErrorState();
    console.log(error);
  }
};

export const getPrevOrNextPageStarShipSearch = async (
  pageURL: string
): Promise<searchStarShipResultType | undefined> => {
  try {
    const response = await axios.get<searchStarShipResultType>(`${pageURL}`);
    return response.data;
  } catch (error: Error | any) {
    await setAlertAndLoaderErrorState();
    console.log(error);
  }
};
