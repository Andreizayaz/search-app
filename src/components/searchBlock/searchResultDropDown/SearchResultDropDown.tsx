import { FC, ReactElement } from 'react';

import { resultType } from 'src/store/searchStartShip';

import { SearchResult } from 'src/components/common';
import { ButtonsGroup } from 'src/components/common';

type SearchResultPropsTypes = {
  next: string | null;
  previous: string | null;
  results: resultType[];
  clickHandler: (url: string | null) => void;
};

export const SearchResultDropDown: FC<SearchResultPropsTypes> = ({
  next,
  previous,
  results,
  clickHandler
}): ReactElement => (
  <div className='result-container'>
    {!results.length && (
      <p className='no-search'>
        No search result. Try input correct name or model
      </p>
    )}
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
