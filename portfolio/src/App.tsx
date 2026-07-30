import "./App.css";

import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Hero from "./components/Hero";

function App() {
  return (
    <main>
      <Hero />

      <About />

      <Skills />

      <Projects />

      <Contact />
    </main>
  );
}

export default App;