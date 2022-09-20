import styles from './ApplyButton.module.scss';
import classNames from 'classnames';

function ApplyButton({className}) {

  const onClickHandler = (event) => {
    event.preventDefault();
    const element = document.getElementById('login-form');

    if (!element) {
      return;
    }

    const scrollToElementData = element.getBoundingClientRect();
    const scrollY = scrollToElementData.y || scrollToElementData.top;
    const scrollYPosition = scrollY - 50;

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
