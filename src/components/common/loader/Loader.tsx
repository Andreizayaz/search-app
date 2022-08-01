import { FC, ReactElement } from 'react';

import './Loader.scss';

type LoaderPropsTypes = {
  text: string;
};

export const Loader: FC<LoaderPropsTypes> = ({ text }): ReactElement => (
  <div className='loader'>
    <div className='spinner-border text-secondary' role='status'>
      <span className='visually-hidden'>{text}...</span>
    </div>
  </div>
);
