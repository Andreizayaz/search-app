import {
  ChangeEvent,
  FC,
  FormEvent,
  MutableRefObject,
  ReactElement
} from 'react';

import { SEARCH_LABEL } from 'src/constants';

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
      <div id='search-autocomplete' className='form-outline'>
        <i className='bi bi-search'></i>
        <input
          ref={inputRef}
          onChange={(e) => changeInputHandler(e)}
          type='search'
          id='search'
          className='form-control'
          placeholder='SearchForm...'
        />
      </div>
      <button type='submit' className='btn btn-primary'>
        {SEARCH_LABEL}
      </button>
    </div>
  </form>
);
