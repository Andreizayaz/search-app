import { FC, ReactElement } from 'react';

import { Search } from './Search';
import { SearchResult } from './SearchResult';

export const SearchBlock: FC = (): ReactElement => (
  <div className='search'>
    <div className='container search__container'>
      <Search />
      <div className='search__live-result-list'>
        <SearchResult />
      </div>
      <div className='search__result-list'>
        <SearchResult />
      </div>
    </div>
  </div>
);
