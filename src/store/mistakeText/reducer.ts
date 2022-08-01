import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type initialStateType = {
  isVisible: boolean;
};

const initialState: initialStateType = {
  isVisible: false
};

const slice = createSlice({
  name: 'setMistakeText',
  initialState,
  reducers: {
    setMistakeText: (state, action: PayloadAction<boolean>) => {
      state.isVisible = action.payload;
    }
  }
});

export const { setMistakeText } = slice.actions;
export const mistakeTextReducer = slice.reducer;
