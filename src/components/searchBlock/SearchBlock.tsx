import {
  ChangeEvent,
  FC,
  FormEvent,
  MutableRefObject,
  ReactElement
} from 'react';

import { resultType } from 'src/store/searchStartShip';
import { SearchForm } from './searchForm';
import { SearchResultDropDown } from './searchResultDropDown';
import { SearchResultList } from './searchResultList';

type SearchBlockPropsTypes = {
  next: string | null;
  previous: string | null;
  results: resultType[];
  isVisibleDropDownSearchResult: boolean;
  isVisibleSearchList: boolean;
  inputRef: MutableRefObject<HTMLInputElement>;
  changeInputHandler: (e: ChangeEvent<HTMLInputElement>) => void;
  clickHandler: (url: string | null) => void;
  handleForm: (e: FormEvent<HTMLFormElement>) => void;
};

export const SearchBlock: FC<SearchBlockPropsTypes> = ({
  next,
  previous,
  results,
  isVisibleDropDownSearchResult,
  isVisibleSearchList,
  inputRef,
  changeInputHandler,
  clickHandler,
  handleForm
}): ReactElement => (
  <div className='search'>
    <div className='container search__container'>
      <SearchForm
        inputRef={inputRef}
        changeInputHandler={changeInputHandler}
        handleForm={handleForm}
      />
      {isVisibleDropDownSearchResult && (
        <div className='search__live-result-list'>
          <SearchResultDropDown clickHandler={clickHandler} />
        </div>
      )}
    </div>
    {isVisibleSearchList && !!results.length && (
      <div className='container search__result-list'>
        <SearchResultList
          next={next}
          previous={previous}
          results={results}
          clickHandler={clickHandler}
        />
      </div>
    )}
  </div>
);
