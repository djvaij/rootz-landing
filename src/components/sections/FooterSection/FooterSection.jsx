import styles from './FooterSection.module.scss';
import {Container} from './../../../layout/Container';
import Contacts from './../../blocks/Contacts/Contacts';
import Headquarters from '../../blocks/Headquarters/Headquarters';
import SocialMedia from './../../blocks/SocialMedia/SocialMedia';

function FooterSection() {
  return (
    <footer className={styles.footer}>
      <Container className={styles.container}>
        <Contacts className={styles.contacts} />
        <Headquarters className={styles.headquarters} />
        <SocialMedia className={styles.socialMedia} />
      </Container>
    </footer>
  );
}

export default FooterSection;
