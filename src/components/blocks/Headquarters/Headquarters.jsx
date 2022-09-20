import classNames from 'classnames';
import styles from './Headquarters.module.scss';

function Headquarters({className}) {
  return (
    <div
      className={classNames(
        styles.headquarters,
        className,
      )}
    >
      <div className={styles.title}>
        Headquarters
      </div>
      <div className={styles.content}>
        1234 Taliban <br />
        Los Angeles, La 1234567 <br/>
        (123) 456-7890
      </div>
    </div>
  );
}

export default Headquarters;
