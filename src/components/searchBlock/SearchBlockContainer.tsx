import {
  ChangeEvent,
  FC,
  FormEvent,
  MutableRefObject,
  ReactElement,
  useEffect,
  useRef,
  useState
} from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectAlert } from 'src/store/alert';
import { selectLoader } from 'src/store/loader';
import { selectMistakeText, setMistakeText } from 'src/store/mistakeText';
import {
  selectStarShip,
  fetchStarShip,
  setStarShip,
  fetchPage
} from 'src/store/searchStartShip';

import { DELAY } from 'src/constants';

import { SearchBlock } from './SearchBlock';

import './SearchBlock.scss';

const SearchBlockContainer: FC = (): ReactElement => {
  const inputRef = useRef<HTMLInputElement>();
  const [isDropDownSearch, setIsDropDownSearch] = useState(false);
  const [isSearchList, setIsSearchList] = useState(false);
  const [searchText, setSearchText] = useState('');

  const { next, previous, results } = useSelector(selectStarShip);
  const isLoader = useSelector(selectLoader);
  const isAlert = useSelector(selectAlert);
  const isMistakeText = useSelector(selectMistakeText);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchTimeout = setTimeout(() => {
      if (!searchText.trim().length) {
        dispatch(
          setStarShip({ count: 0, next: null, previous: null, results: [] })
        );
        return;
      }
      dispatch(fetchStarShip(searchText));
    }, DELAY);

    return () => clearTimeout(fetchTimeout);
  }, [searchText]);

  const getSearchResult = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    isMistakeText && dispatch(setMistakeText(false));
    !isDropDownSearch && setIsDropDownSearch(true);
    setSearchText(value);
  };

  const getPage = (url: string | null) => {
    if (url) {
      dispatch(fetchPage(url));
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const input = inputRef.current;
    if (input) {
      input.value = '';
    }
    setIsDropDownSearch(false);
    setIsSearchList(true);
  };

  return (
    <SearchBlock
      inputRef={inputRef as MutableRefObject<HTMLInputElement>}
      results={results}
      clickHandler={getPage}
      changeInputHandler={getSearchResult}
      handleForm={handleSubmit}
      next={next}
      previous={previous}
      isDropDownSearch={isDropDownSearch}
      isSearchList={isSearchList}
      isLoader={isLoader}
      isAlert={isAlert}
    />
  );
};

export default SearchBlockContainer;
SearchBlockContainer.displayName = 'SearchBlockContainer';
