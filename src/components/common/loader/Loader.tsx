import { FC, ReactElement } from 'react';

import './Loader.scss';

export const Loader: FC = (): ReactElement => (
  <div className='loader'>
    <div className='spinner-border text-secondary' role='status'>
      <span className='visually-hidden'>Loading...</span>
    </div>
  </div>
);
