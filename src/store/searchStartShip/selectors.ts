import { RootStateType } from '../index';
import { starShipType } from './types';

export const selectStarShip = (state: RootStateType): starShipType =>
  state.starShip.starShip;
