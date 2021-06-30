import './App.css';
import { Header } from './components/Header/Header';
import { HomeContent } from './components/HomeContent/HomeContent';

function App() {
  return (
    <>
      <Header avatarLink="/assets/avatar.jpg" links={[{ text: "Home", href: "/" }]} active={0} />
      <HomeContent locale={0} />
    </>
  );
}

export default App;
