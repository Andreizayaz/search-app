import {
  ChangeEvent,
  FC,
  FormEvent,
  MutableRefObject,
  ReactElement
} from 'react';

import { resultType } from 'src/store/searchStartShip';

import { NETWORK_ERROR_TEXT } from 'src/constants';

import { SearchForm } from './searchForm';
import { SearchResultDropDown } from './searchResultDropDown';
import { SearchResultList } from './searchResultList';
import { Loader, Alert } from 'src/components/common';

type SearchBlockPropsTypes = {
  next: string | null;
  previous: string | null;
  results: resultType[];
  isVisibleDropDownSearchResult: boolean;
  isVisibleSearchList: boolean;
  isLoader: boolean;
  isAlert: boolean;
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
  isLoader,
  isAlert,
  inputRef,
  changeInputHandler,
  clickHandler,
  handleForm
}): ReactElement => (
  <div className='search'>
    {isAlert && <Alert text={NETWORK_ERROR_TEXT} />}
    <div className='container search__container'>
      <SearchForm
        inputRef={inputRef}
        changeInputHandler={changeInputHandler}
        handleForm={handleForm}
      />
      {isLoader && <Loader />}
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
