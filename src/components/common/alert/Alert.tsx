import { FC, ReactElement } from 'react';

import './Alert.scss';

type AlertPropsTypes = {
  text: string;
};

export const Alert: FC<AlertPropsTypes> = ({ text }): ReactElement => (
  <div className='alert-wrapper'>
    <div className='alert alert-secondary' role='alert'>
      {text}
    </div>
  </div>
);
