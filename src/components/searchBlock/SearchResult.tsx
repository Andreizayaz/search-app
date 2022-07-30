import { FC, ReactElement } from 'react';

import { Card } from './Card';

export const SearchResult: FC = (): ReactElement => (
  <div className='result-container'>
    <ul className='list-group'>
      <li className='list-group-item' aria-current='true'>
        <Card />
      </li>
      <li className='list-group-item' aria-current='true'>
        <Card />
      </li>
      <li className='list-group-item' aria-current='true'>
        <Card />
      </li>
    </ul>
    <div className='wrapper'>
      <button className='btn-view-more'>Searched: 15 items. View All</button>
    </div>
  </div>
);
