import axios from 'axios';

import { searchStarShipResultType } from 'src/store/searchStartShip';

import { SEARCH_URL } from 'src/constants';

export const getStarShipSearchResult = async (
  searchValue: string
): Promise<searchStarShipResultType | undefined> => {
  try {
    const response = await axios.get<searchStarShipResultType>(
      `${SEARCH_URL}${searchValue}`
    );
    return response.data;
  } catch (error: Error | any) {
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
    console.log(error);
  }
};
