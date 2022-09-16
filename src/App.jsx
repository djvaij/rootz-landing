import { Header } from './layout/Header';
import { Logo } from './components/Logo';
import { Menu } from './components/Menu';
import styles from './App.module.scss';

function App() {
  return (
    <div className="App">
      <div className={styles.leadingBg}>
        <Header>
          <Logo />
          <Menu />
        </Header>
      </div>
    </div>
  );
}

export default App;
