import Container from './../../../layout/Container/Container';
import styles from './LeadingSection.module.scss';
import { Inscription, Card, Parrot } from './Elements';
import { Search } from '../../common/Search';


function LeadingSection() {
  return (
    <section id="places" className={styles.section}>
      <Container className={styles.container}>
        <div className={styles.left}>
          <Inscription />
          <p className={styles.text}>
            The scale of the challenges facing our planet can seem daunting, but we can all do something.
          </p>
          <Search />
        </div>
        <div className={styles.right}>
          <Parrot />
          <Card />
        </div>
      </Container>
    </section>
  );
}

export default LeadingSection;
