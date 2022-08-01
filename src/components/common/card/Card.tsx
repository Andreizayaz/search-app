import { FC, ReactElement } from 'react';
import { resultType } from 'src/store/searchStartShip';

import './Card.scss';

type CardPropsTypes = {
  result: resultType;
};

export const Card: FC<CardPropsTypes> = ({ result }): ReactElement => (
  <div className='card w-100'>
    <div className='card__img-wrapper'>
      <img
        className='card__img'
        src={result.imgSrc}
        alt={result.name}
        title={result.name}
      />
    </div>
    <div className='card-body'>
      <h5 className='card-title'>{result.name}</h5>
      <p className='card-text'>
        <span>{result.manufacturer}</span>
        <span className='card-text__border'></span>
        <span>{result.crew}</span>
      </p>
    </div>
    <div className='card__icon-wrapper'>
      <img
        className='card__icon'
        src={result.iconSrc}
        alt={result.name}
        title={result.name}
      />
    </div>
  </div>
);
