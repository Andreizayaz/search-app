import { FC, ReactElement } from 'react';

import './SearchMistakeText.scss';

type SearchMistakeTextPropsTypes = {
  text: string;
};

export const SearchMistakeText: FC<SearchMistakeTextPropsTypes> = ({
  text
}): ReactElement => <p className='no-search'>{text}</p>;
