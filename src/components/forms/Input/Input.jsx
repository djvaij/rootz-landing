import classNames from 'classnames';
import styles from './Input.module.scss';

function Input({
  type = 'text',
  placeholder = '',
  className,
  ...props
}) {
  return (
    <input
      className={classNames(
        styles.input,
        className
      )}
      type={type}
      placeholder={placeholder}
      {...props}
    />
  );
}

export default Input;
