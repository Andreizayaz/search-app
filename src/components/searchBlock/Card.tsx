import { FC, ReactElement } from 'react';

export const Card: FC = (): ReactElement => (
  <div className='card w-100'>
    <div className='card-body'>
      <h5 className='card-title'>Card title</h5>
      <p className='card-text'>
        With supporting text below as a natural lead-in to additional content.
      </p>
    </div>
  </div>
);
