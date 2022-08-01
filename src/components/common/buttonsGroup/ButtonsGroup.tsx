import { FC, ReactElement } from 'react';

import './ButtonsGroup.scss';

type ButtonsGroupPropsTypes = {
  next: string | null;
  previous: string | null;
  clickHandler: (url: string | null) => void;
};

export const ButtonsGroup: FC<ButtonsGroupPropsTypes> = ({
  next,
  previous,
  clickHandler
}): ReactElement => {
  const isDisabled = (url: string | null): boolean => (url ? false : true);

  return (
    <div className='buttons-group'>
      <button
        className='buttons-group__button'
        onClick={() => clickHandler(previous)}
        disabled={isDisabled(previous)}
      >
        <i className='bi bi-arrow-left-circle-fill'></i>
      </button>
      <button
        className='buttons-group__button'
        onClick={() => clickHandler(next)}
        disabled={isDisabled(next)}
      >
        <i className='bi bi-arrow-right-circle-fill'></i>
      </button>
    </div>
  );
};
