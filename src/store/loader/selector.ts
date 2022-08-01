import { RootStateType } from '../index';

export const selectLoader = (state: RootStateType): boolean =>
  state.loader.isVisible;
