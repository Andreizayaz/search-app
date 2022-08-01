import { createSlice, createAction, PayloadAction } from '@reduxjs/toolkit';

import { starShipType } from './types';

type initialStateType = {
  starShip: starShipType;
};

const initialState: initialStateType = {
  starShip: {
    count: 0,
    next: null,
    previous: null,
    results: []
  }
};

const slice = createSlice({
  name: 'starShip',
  initialState,
  reducers: {
    setStarShip: (state, action: PayloadAction<starShipType>) => {
      state.starShip = action.payload;
    }
  }
});

export const fetchStarShip = createAction<string>('get/starship');
export const fetchPage = createAction<string>('get/starshipByPage');

export const { setStarShip } = slice.actions;
export const setStarShipReducer = slice.reducer;
