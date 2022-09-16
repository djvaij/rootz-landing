import styles from './App.module.scss';
import { Header } from './layout/Header';
import { Logo } from './components/Logo';
import { Menu } from './components/Menu';
import { LeadingSection } from './components/sections/LeadingSection';

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
    </div>
  );
}

export default App;
