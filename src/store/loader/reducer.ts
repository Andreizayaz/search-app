import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type initialStateType = {
  isVisible: boolean;
};

const initialState: initialStateType = {
  isVisible: false
};

const slice = createSlice({
  name: 'setLoader',
  initialState,
  reducers: {
    setLoader: (state, action: PayloadAction<boolean>) => {
      state.isVisible = action.payload;
    }
  }
});

export const { setLoader } = slice.actions;
export const loaderReducer = slice.reducer;
