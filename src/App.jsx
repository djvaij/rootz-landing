import { Header } from './layout/Header';
import { Logo } from './components/Logo';
import { Menu } from './components/Menu';

function App() {
  return (
    <div className="App">
      <Header>
        <Logo />
        <Menu />
      </Header>
    </div>
  );
}

export default App;
