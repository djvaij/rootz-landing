import styles from './MenuButton.module.scss';
import classNames from 'classnames';

function MenuButton({
  isActive = false,
  onClick,
}) {
  return (
    <div
      className={classNames(
        styles.container,
        {
          [styles.active]: isActive,
        }
      )}
      onClick={onClick}
    >
      <span className={styles.line}></span>
      <span className={styles.line}></span>
      <span className={styles.line}></span>
    </div>
  );
}

export default MenuButton;
