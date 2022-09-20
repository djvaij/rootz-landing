import styles from './App.module.scss';
import { Header } from './layout/Header';
import { Logo } from './components/common/Logo';
import { Menu } from './components/common/Menu';
import { LeadingSection } from './components/sections/LeadingSection';
import { TeamSection } from './components/sections/TeamSection';
import { FormSection } from './components/sections/FormSection';
import { FAQSection } from './components/sections/FAQSection';
import { CarouselSection } from './components/sections/CarouselSection';
import FooterSection from './components/sections/FooterSection/FooterSection';

function App() {
  return (
    <div className="App">
      <div className={styles.leadingBg}>
        <Header>
          <Logo />
          <Menu />
        </Header>
        <LeadingSection />
      </div>
      <TeamSection />
      <FormSection />
      <FAQSection />
      <CarouselSection />
      <FooterSection />
    </div>
  );
}

export default App;
