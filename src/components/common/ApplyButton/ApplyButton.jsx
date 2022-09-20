import styles from './ApplyButton.module.scss';
import classNames from 'classnames';

function ApplyButton({className, setMenuIsActive}) {

  const onClickHandler = (event) => {
    event.preventDefault();
    setMenuIsActive(false);
    setMenuIsActive()
    const element = document.getElementById('login-form');

    if (!element) {
      return;
    }

    const scrollToElementData = element.getBoundingClientRect();
    const scrollY = scrollToElementData.y || scrollToElementData.top;
    const scrollYPosition = window.innerWidth >= 768 ? scrollY - 50 : scrollY;

    window.scrollTo({
      top: scrollYPosition,
    });

    setTimeout(() => {
      document.getElementById('name').focus();
    }, 700);
  };

  return (
    <button
      className={classNames(
        styles.button,
        className,
      )}
      onClick={onClickHandler}
    >
      Apply
    </button>
  );
}

export default ApplyButton;
