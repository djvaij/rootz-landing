import Input from '../../forms/Input/Input';
import styles from './LoginForm.module.scss';
import { Button } from '../../common/Button';

function LoginForm() {
  const onSubmitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <form
      onSubmit={onSubmitHandler}
      className={styles.form}
    >
      <div className={styles.title}>Log in</div>
      <Input placeholder="Name" className={styles.input} />
      <Input type="email" placeholder="Email" className={styles.input} />
      <Button
        className={styles.submitButton}
        text="Book a demo"
        type="submit"
        onClick={() => console.log('Login form submit handler.')}
      />
      <div className={styles.redLeaf}></div>
      <div className={styles.blueLeaf}></div>
    </form>
  );
}

export default LoginForm;
