import styles from './FormSection.module.scss';
import { Container } from '../../../layout/Container';
import { LoginForm } from '../../blocks/LoginForm';

function FormSection() {
  return (
    <section id="login-form" className={styles.section}>
      <Container className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.infoWrapper}>
            <h3 className={styles.title}>
              Get started today!
            </h3>
            <p className={styles.text}>
              Learn more about how you can save our planet's nature. From smart consumption to switching to renewable energy, each of us can do our part to save the planet. 
            </p>
          </div>
          <div className={styles.formWrapper}>
            <LoginForm />
          </div>
        </div>
      </Container>
    </section>
  );
}

export default FormSection;
