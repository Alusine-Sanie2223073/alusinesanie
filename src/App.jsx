import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Education } from './components/Education';
import { Skills } from './components/Skills';
import { Footer} from './components/Footer'

export default function App() {
  return (
    <>
      <Header />
      <Hero />
      <Education/>
      <Skills/>
      <Footer/>
    </>
  );
}