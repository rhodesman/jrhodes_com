import { useEffect } from 'react';
import { Nav } from './components/Nav';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Portfolio } from './components/Portfolio';
import { BlackHoleGame } from './components/BlackHoleGame';
import { Contact } from './components/Contact';
import { sysReady } from './lib/ansi';

export function App() {
  // Jurassic Park easter egg — still alive
  useEffect(() => {
    // eslint-disable-next-line no-console
    console.log(sysReady);
    // eslint-disable-next-line no-console
    console.log(
      '%c👋 Hey, you found the console.',
      'color:#00e5ff;font-size:14px;font-weight:bold;',
    );
    // eslint-disable-next-line no-console
    console.log(
      '%cThat means you\'re probably a developer. I like you already.\n' +
      'Jason Rhodes — Senior Frontend Developer — jason.rhodes@gmail.com',
      'color:#b0bec5;font-size:12px;',
    );
  }, []);

  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Portfolio />
        <BlackHoleGame />
        <Contact />
      </main>
    </>
  );
}
