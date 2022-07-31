import { FC, ReactElement } from 'react';
import { resultType } from 'src/store/searchStartShip';

type SearchResultPropsTypes = {
  result: resultType;
};

export const Card: FC<SearchResultPropsTypes> = ({ result }): ReactElement => (
  <div className='card w-100'>
    <div className='card-body'>
      <h5 className='card-title'>{result.name}</h5>
      <p className='card-text'>
        <span>{result.manufacturer}</span>
        <span className='card-text__border'></span>
        <span>{result.crew}</span>
      </p>
    </div>
  </div>
);
