import { FC, ReactElement } from 'react';

type SearchMistakeTextPropsTypes = {
  text: string;
};

export const SearchMistakeText: FC<SearchMistakeTextPropsTypes> = ({
  text
}): ReactElement => <p className='no-search'>{text}</p>;
