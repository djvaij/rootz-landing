import styles from './TeamSection.module.scss';

import team1 from '../../../assets/team1.png';
import team2 from '../../../assets/team2.png';
import team3 from '../../../assets/team3.png';
import Container from './../../../layout/Container/Container';

const Line1 = ({className}) => (
  <svg className={className} width="394" height="180" viewBox="0 0 394 180" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path opacity="0.6" d="M1.18344 33.4823C17.7194 13.7838 112.263 -4.86829 162.759 2.47673C213.254 9.82175 226.381 56.133 217.911 66.9871C213.888 74.4202 200.458 77.6858 194.613 70.5584C186.543 60.7165 191.813 51.9398 198.863 44.2917C208.839 33.4699 282.023 37.3118 325.828 62.4603C372.847 89.4546 409.163 133.764 386.348 178.944" stroke="black" strokeDasharray="4 4"/>
  </svg>
);

const Line2 = ({className}) => (
  <svg className={className} width="394" height="180" viewBox="0 0 394 180" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path opacity="0.6" d="M1.18344 146.518C17.7194 166.216 112.263 184.868 162.759 177.523C213.254 170.178 226.381 123.867 217.911 113.013C213.888 105.58 200.458 102.314 194.613 109.442C186.543 119.284 191.813 128.06 198.863 135.708C208.839 146.53 282.023 142.688 325.828 117.54C372.847 90.5454 409.163 46.2362 386.348 1.05649" stroke="black" strokeDasharray="4 4"/>
  </svg>
);

function TeamSection() {
  return (
    <section className={styles.team}>
      <Container className={styles.container}>
        <div className={styles.info}>
          <h3 className={styles.title}>Our top team</h3>
          <p className={styles.text}>Learn more about how you can save our planet's nature. </p>
        </div>
        <div className={styles.photos}>
          <img src={team1} alt="Team member 1" />
          <Line1 className={styles.line1} />
          <img src={team2} alt="Team member 2" />
          <Line2 className={styles.line2} />
          <img src={team3} alt="Team member 3" />
        </div>
      </Container> 
    </section>
  );
}

export default TeamSection;
