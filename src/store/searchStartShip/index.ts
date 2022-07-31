export {
  setSearchStarShipReducer,
  setSearchStarShip,
  fetchSearchStarShip,
  fetchPrevOrNextPageSearchStarShip
} from './reducer';
export { searchStarShipSaga, searchPrevOrNextPageStarShipSaga } from './sagas';
export { selectSearchStarShipResult } from './selectors';
export type { searchStarShipResultType, resultType } from './types';
