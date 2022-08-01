import { RootStateType } from '../index';

export const selectAlert = (state: RootStateType): boolean =>
  state.alert.isVisible;
