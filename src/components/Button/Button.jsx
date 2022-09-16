import styles from './Button.module.scss';
import classNames from 'classnames';

function Button({text, className, onClick}) {

  const onCLickHandler = (event) => {
    event.stopPropagation();
    onClick();
  };

  return (
    <button
      onClick={onCLickHandler}
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
