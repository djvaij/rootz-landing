import styles from './ApplyButton.module.scss';
import classNames from 'classnames';

function ApplyButton({onClick, className}) {
  return (
    <button
      className={classNames(
        styles.button,
        className,
      )}
      onClick={onClick}
    >
      Apply
    </button>
  );
}

export default ApplyButton;
