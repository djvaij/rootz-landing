import { useRef, useState } from 'react';
import styles from './Search.module.scss';
import { Button } from '../Button';
import classNames from 'classnames';

const Icon = () => (
  <svg className={styles.icon} width="14" height="20" viewBox="0 0 14 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7 0C3.134 0 0 3.134 0 7C0 12 7 20 7 20C7 20 14 12 14 7C14 3.134 10.866 0 7 0ZM7 10C5.343 10 4 8.657 4 7C4 5.343 5.343 4 7 4C8.657 4 10 5.343 10 7C10 8.657 8.657 10 7 10Z" fill="#666666"/>
  </svg>
);

const defaultPlaceholder = "Find the place to help";

function Search() {
  const [isInputFocus, setIsInputFocus] = useState(false);
  const inputRef = useRef();

  const placeholder = isInputFocus ? '' : defaultPlaceholder;

  return (
    <div
      onClick={() => inputRef.current.focus()}
      className={styles.search}
    >
      <Icon />
      <input
        ref={inputRef}
        className={styles.input}
        type="text"
        placeholder={placeholder}
        onFocus={() => setIsInputFocus(() => true)}
        onBlur={() => setIsInputFocus(() => false)}
      />
      <Button
        text="search"
        className={classNames(
          styles.button,
          styles.btn
        )}
      />
    </div>
  );
}

export default Search;
