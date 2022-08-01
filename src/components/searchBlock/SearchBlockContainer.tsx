import {
  ChangeEvent,
  FC,
  FormEvent,
  MutableRefObject,
  ReactElement,
  useRef,
  useState
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectAlert } from 'src/store/alert';
import { selectLoader } from 'src/store/loader';
import { selectMistakeText, setMistakeText } from 'src/store/mistakeText';
import {
  selectSearchStarShipResult,
  fetchSearchStarShip,
  setSearchStarShip,
  fetchPrevOrNextPageSearchStarShip
} from 'src/store/searchStartShip';

import { SearchBlock } from './SearchBlock';

import './SearchBlock.scss';

const SearchBlockContainer: FC = (): ReactElement => {
  const inputRef = useRef<HTMLInputElement>();
  const [isVisibleDropDownSearchResult, setIsVisibleDropDownSearchResult] =
    useState(false);
  const [isVisibleSearchList, setIsVisibleSearchList] = useState(false);

  const { next, previous, results } = useSelector(selectSearchStarShipResult);
  const isLoader = useSelector(selectLoader);
  const isAlert = useSelector(selectAlert);
  const isMistakeText = useSelector(selectMistakeText);
  const dispatch = useDispatch();

  const getSearchResult = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    isMistakeText && dispatch(setMistakeText(false));
    !isVisibleDropDownSearchResult && setIsVisibleDropDownSearchResult(true);
    if (!value.trim().length) {
      dispatch(
        setSearchStarShip({ count: 0, next: null, previous: null, results: [] })
      );
      return;
    }
    dispatch(fetchSearchStarShip(value));
  };

  const getPreviousOrNextPage = (url: string | null) => {
    if (url) {
      dispatch(fetchPrevOrNextPageSearchStarShip(url));
    }
  };

  const handleSubmitForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputRef.current) {
      inputRef.current.value = '';
    }
    setIsVisibleDropDownSearchResult(false);
    setIsVisibleSearchList(true);
  };

  return (
    <SearchBlock
      inputRef={inputRef as MutableRefObject<HTMLInputElement>}
      results={results}
      clickHandler={getPreviousOrNextPage}
      changeInputHandler={getSearchResult}
      handleForm={handleSubmitForm}
      next={next}
      previous={previous}
      isVisibleDropDownSearchResult={isVisibleDropDownSearchResult}
      isVisibleSearchList={isVisibleSearchList}
      isLoader={isLoader}
      isAlert={isAlert}
    />
  );
};

export default SearchBlockContainer;
SearchBlockContainer.displayName = 'SearchBlockContainer';
