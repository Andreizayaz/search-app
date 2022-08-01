import {
  ChangeEvent,
  FC,
  FormEvent,
  MutableRefObject,
  ReactElement
} from 'react';

import { SEARCH_TEXT } from 'src/constants';

import './SearchForm.scss';

type SearchPropsTypes = {
  inputRef: MutableRefObject<HTMLInputElement>;
  changeInputHandler: (e: ChangeEvent<HTMLInputElement>) => void;
  handleForm: (e: FormEvent<HTMLFormElement>) => void;
};

export const SearchForm: FC<SearchPropsTypes> = ({
  inputRef,
  changeInputHandler,
  handleForm
}): ReactElement => (
  <form onSubmit={handleForm}>
    <div className='input-group'>
      <div
        id='search-autocomplete'
        className='form-outline search-autocomplete'
      >
        <i className='bi bi-search'></i>
        <input
          ref={inputRef}
          onChange={(e) => changeInputHandler(e)}
          type='search'
          id='search'
          className='form-control'
          placeholder={`${SEARCH_TEXT}...`}
        />
      </div>
      <button type='submit' className='btn btn-primary'>
        {SEARCH_TEXT}
      </button>
    </div>
  </form>
);
