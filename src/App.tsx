import Nav from './components/Nav';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Journey from './components/Journey';
import Stack from './components/Stack';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <div className="aurora" aria-hidden="true" />
      <div className="grain" aria-hidden="true" />

      <Nav />

      <main className="relative">
        <Hero />
        <About />
        <Projects />
        <Journey />
        <Stack />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
