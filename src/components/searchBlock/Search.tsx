import { FC, ReactElement } from 'react';

import { SEARCH_LABEL } from 'src/constants';

export const Search: FC = (): ReactElement => (
  <div className='input-group'>
    <div id='search-autocomplete' className='form-outline'>
      <i className='bi bi-search'></i>
      <input
        type='search'
        id='search'
        className='form-control'
        placeholder='Search...'
      />
    </div>
    <button type='button' className='btn btn-primary'>
      {SEARCH_LABEL}
    </button>
  </div>
);
