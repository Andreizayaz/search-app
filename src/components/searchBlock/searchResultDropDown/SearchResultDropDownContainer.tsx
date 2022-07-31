import { FC, ReactElement } from 'react';
import { useSelector } from 'react-redux';

import { selectSearchStarShipResult } from 'src/store/searchStartShip';

import { SearchResultDropDown } from './SearchResultDropDown';

type SearchResultDropDownContainerPropsTypes = {
  clickHandler: (url: string | null) => void;
};

const SearchResultDropDownContainer: FC<
  SearchResultDropDownContainerPropsTypes
> = ({ clickHandler }): ReactElement => {
  const { next, previous, results } = useSelector(selectSearchStarShipResult);

  return (
    <SearchResultDropDown
      next={next}
      previous={previous}
      results={results}
      clickHandler={clickHandler}
    />
  );
};

export default SearchResultDropDownContainer;
SearchResultDropDownContainer.displayName = 'SearchResultDropDownContainer';
