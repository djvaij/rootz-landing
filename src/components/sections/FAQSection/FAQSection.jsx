import { Container } from '../../../layout/Container';
import { Button } from '../../Button';
import { Collapsible } from '../../Collapsible';
import styles from './FAQSection.module.scss';

const questions = [
  {
    title: 'What can I do to protect our planet?',
    description: `Not to make an open fire in nature and to clean up litter; not to pollute open water bodies; to switch to alternative energy sources; to reduce the use of non-renewable resources`,
  },
  {
    title: 'How to save nature ecology?',
    description: `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).`,
  },
  {
    title: 'What is nature conservation?',
    description: `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.`,
  },
];

function FAQSection() {

  const allQuestions = questions.map(({title, description}) => (
    <Collapsible
      title={title}
      description={description}
      key={crypto.randomUUID() || title}
    />
  ));

  return (
    <section className={styles.section}>
      <Container className={styles.container}>
        <div className={styles.infoWrapper}>
          <h3 className={styles.title}>
            Ready to Get started?
          </h3>
          <p className={styles.description}>
            When pattern is mentioned in interior design, it is easy to asso- ciate it with a geometric patterned wallpaper or colourful prints on interior fabrics.
          </p>
          <Button text="Contact us" />
        </div>
        <div className={styles.accordionWrapper}>
          {allQuestions}
        </div>
      </Container>
    </section>
  );
}

export default FAQSection;
