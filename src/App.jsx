import styles from './App.module.scss';
import { Header } from './layout/Header';
import { Logo } from './components/Logo';
import { Menu } from './components/Menu';
import { LeadingSection } from './components/sections/LeadingSection';
import { TeamSection } from './components/sections/TeamSection';
import { FormSection } from './components/sections/FormSection';
import { FAQSection } from './components/sections/FAQSection';

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
    </div>
  );
}

export default App;
