import styles from './TeamSection.module.scss';
import Container from './../../../layout/Container/Container';
import team1 from '../../../assets/team1.png';
import team2 from '../../../assets/team2.png';
import team3 from '../../../assets/team3.png';

function TeamSection() {
  return (
    <section id="team" className={styles.team}>
      <Container className={styles.container}>
        <div className={styles.info}>
          <h3 className={styles.title}>Our top team</h3>
          <p className={styles.text}>Learn more about how you can save our planet's nature. </p>
        </div>
        <div className={styles.photos}>
          <img src={team1} alt="Team member 1" />
          <img src={team2} alt="Team member 2" />
          <img src={team3} alt="Team member 3" />
        </div>
      </Container> 
    </section>
  );
}

export default TeamSection;
