import styles from './Button.module.scss';
import classNames from 'classnames';

function Button({text, className}) {
  return (
    <button
      className={classNames(
        styles.button,
        className,
      )}
    >
      {text}
    </button>
  );
}

export default Button;
