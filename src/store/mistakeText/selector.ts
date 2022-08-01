import { RootStateType } from '../index';

export const selectMistakeText = (state: RootStateType): boolean =>
  state.mistakeText.isVisible;
