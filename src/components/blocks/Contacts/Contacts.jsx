import classNames from 'classnames';
import styles from './Contacts.module.scss';

const yearNow = new Date().getFullYear();

function Contacts({className}) {
  return (
    <div
      className={classNames(
        styles.contacts,
        className,
      )}
    >
      <div className={styles.title}>
        Contacts
      </div>
      <div className={styles.content}>
        {yearNow} Rootz Foundation. All rights reserved
      </div>
    </div>
  );
}

export default Contacts;
