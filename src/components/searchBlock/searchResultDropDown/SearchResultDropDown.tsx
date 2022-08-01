import { FC, ReactElement } from 'react';

import { resultType } from 'src/store/searchStartShip';

import {
  SearchResult,
  ButtonsGroup,
  SearchMistakeText
} from 'src/components/common';

type SearchResultPropsTypes = {
  mistakeText: string;
  isMistakeText: boolean;
  next: string | null;
  previous: string | null;
  results: resultType[];
  clickHandler: (url: string | null) => void;
};

export const SearchResultDropDown: FC<SearchResultPropsTypes> = ({
  mistakeText,
  isMistakeText,
  next,
  previous,
  results,
  clickHandler
}): ReactElement => (
  <div className='result-container'>
    {isMistakeText && <SearchMistakeText text={mistakeText} />}
    {!!results.length && <SearchResult results={results} />}
    {(next || previous) && (
      <ButtonsGroup
        next={next}
        previous={previous}
        clickHandler={clickHandler}
      />
    )}
  </div>
);
