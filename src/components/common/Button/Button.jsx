import styles from './Button.module.scss';
import classNames from 'classnames';

function Button({
  text,
  className,
  onClick,
  ...props
}) {

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
      {...props}
    >
      {text}
    </button>
  );
}

export default Button;
