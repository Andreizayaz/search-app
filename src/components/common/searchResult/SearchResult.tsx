import { FC, ReactElement } from 'react';

import { resultType } from 'src/store/searchStartShip';

import { Card } from '../card';

type SearchResultPropsTypes = {
  results: resultType[];
};

export const SearchResult: FC<SearchResultPropsTypes> = ({
  results
}): ReactElement => (
  <div className='result-container'>
    <ul className='list-group'>
      {results.map((result) => (
        <li key={result.name} className='list-group-item' aria-current='true'>
          <Card result={result} />
        </li>
      ))}
    </ul>
  </div>
);
