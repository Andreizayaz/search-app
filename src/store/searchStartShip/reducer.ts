import { createSlice, createAction, PayloadAction } from '@reduxjs/toolkit';

import { searchStarShipResultType } from './types';

type initialStateType = {
  searchStarShipResult: searchStarShipResultType;
};

const initialState: initialStateType = {
  searchStarShipResult: {
    count: 0,
    next: null,
    previous: null,
    results: []
  }
};

const slice = createSlice({
  name: 'searchStarShip',
  initialState,
  reducers: {
    setSearchStarShip: (
      state,
      action: PayloadAction<searchStarShipResultType>
    ) => {
      state.searchStarShipResult = action.payload;
    }
  }
});

export const fetchSearchStarShip = createAction<string>('get/starship');
export const fetchPrevOrNextPageSearchStarShip =
  createAction<string>('get/starshipByPage');

export const { setSearchStarShip } = slice.actions;
export const setSearchStarShipReducer = slice.reducer;
