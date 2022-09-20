import styles from './Collapsible.module.scss';
import { useState, useRef } from 'react';
import classNames from 'classnames';

const minusIcon = (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="20" cy="20.0001" r="20" fill="#F2726C"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M13 20.0001C13 19.4478 13.3482 19.0001 13.7778 19.0001L26.2222 19.0001C26.6518 19.0001 27 19.4478 27 20.0001C27 20.5524 26.6518 21.0001 26.2222 21.0001L13.7778 21.0001C13.3482 21.0001 13 20.5524 13 20.0001Z" fill="white"/>
  </svg>
);

const plusIcon = (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="20" cy="20" r="20" fill="#F2726C"/>
    <path d="M20.2007 14L20.2007 26M14 20.0165H26" stroke="white" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const ToggleIcon = ({isActive}) => isActive ? minusIcon : plusIcon;

function Collapsible({title, description, ...props}) {
  const [isActive, setIsActive] = useState(false);
  const descriptionRef = useRef(null);

  const toggle = () => {
    setIsActive(prev => !prev);
    const toggleElement = descriptionRef.current;

    if (toggleElement.style.maxHeight){
      toggleElement.style.maxHeight = null;
    } else {
      toggleElement.style.maxHeight = toggleElement.scrollHeight + "px";
    }
  };

  return (
    <div className={styles.collapsible} {...props}>
      <header
        onClick={toggle}
        className={styles.header}
      >
        <h2 className={styles.title}>
          {title}
        </h2>
        <ToggleIcon isActive={isActive} />
      </header>
      <p
        ref={descriptionRef}
        className={classNames(
          styles.description,
          {
            [styles.active]: isActive,
          },
        )}
      >
        {description}
      </p>
    </div>
  );
}

export default Collapsible;
