import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type initialStateType = {
  isVisible: boolean;
};

const initialState: initialStateType = {
  isVisible: false
};

const slice = createSlice({
  name: 'setAlert',
  initialState,
  reducers: {
    setAlert: (state, action: PayloadAction<boolean>) => {
      state.isVisible = action.payload;
    }
  }
});

export const { setAlert } = slice.actions;
export const alertReducer = slice.reducer;
