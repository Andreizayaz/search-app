import { FC, ReactElement } from 'react';
import { useSelector } from 'react-redux';

import { selectSearchStarShipResult } from 'src/store/searchStartShip';

import { MISTAKE_TEXT } from 'src/constants';

import { SearchResultDropDown } from './SearchResultDropDown';
import { selectMistakeText } from 'src/store/mistakeText';

type SearchResultDropDownContainerPropsTypes = {
  clickHandler: (url: string | null) => void;
};

const SearchResultDropDownContainer: FC<
  SearchResultDropDownContainerPropsTypes
> = ({ clickHandler }): ReactElement => {
  const { next, previous, results } = useSelector(selectSearchStarShipResult);
  const isMistakeText = useSelector(selectMistakeText);

  return (
    <SearchResultDropDown
      mistakeText={MISTAKE_TEXT}
      isMistakeText={isMistakeText}
      next={next}
      previous={previous}
      results={results}
      clickHandler={clickHandler}
    />
  );
};

export default SearchResultDropDownContainer;
SearchResultDropDownContainer.displayName = 'SearchResultDropDownContainer';
