import { FC, ReactElement } from 'react';

import { SearchBlock } from './SearchBlock';

import './SearchBlock.scss';

const SearchBlockContainer: FC = (): ReactElement => {
  return <SearchBlock />;
};

export default SearchBlockContainer;
SearchBlockContainer.displayName = 'SearchBlockContainer';
