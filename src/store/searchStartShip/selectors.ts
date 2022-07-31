import { RootStateType } from '../index';
import { searchStarShipResultType } from './types';

export const selectSearchStarShipResult = (
  state: RootStateType
): searchStarShipResultType => state.searchStarShip.searchStarShipResult;
