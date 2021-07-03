import './App.css';
import { Header } from './components/Header/Header';
import { HomeBackground } from './components/HomeBackground/HomeBackground';
import { HomeContent } from './components/HomeContent/HomeContent';

const translationData = {
  home: ["Accueil", "Home"],
  projects: ["Projets", "Projects"],
}

const locale = 1;

function App() {
  return (
    <>
      <Header
        avatarLink="/assets/avatar.jpg"
        links={[
          { text: translationData.home[locale], href: "/" },
          { text: translationData.projects[locale], href: "/" },
          { text: "Contact", href: "/" },
        ]}
        active={0}
      />
      <HomeBackground></HomeBackground>
      <HomeContent locale={locale} />
    </>
  );
}

export default App;
