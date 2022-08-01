import { FC, ReactElement } from 'react';
import { useSelector } from 'react-redux';

import { selectStarShip } from 'src/store/searchStartShip';
import { selectMistakeText } from 'src/store/mistakeText';

import { MISTAKE_TEXT } from 'src/constants';

import { SearchDropDown } from './SearchDropDown';

type SearchDropDownContainerPropsTypes = {
  clickHandler: (url: string | null) => void;
};

const SearchDropDownContainer: FC<SearchDropDownContainerPropsTypes> = ({
  clickHandler
}): ReactElement => {
  const { next, previous, results } = useSelector(selectStarShip);
  const isMistakeText = useSelector(selectMistakeText);

  return (
    <SearchDropDown
      mistakeText={MISTAKE_TEXT}
      isMistakeText={isMistakeText}
      next={next}
      previous={previous}
      results={results}
      clickHandler={clickHandler}
    />
  );
};

export default SearchDropDownContainer;
SearchDropDownContainer.displayName = 'SearchDropDownContainer';
