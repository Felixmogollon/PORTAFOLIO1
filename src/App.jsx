import "./App.css";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Service from "./components/Services";
import Skills from "./components/Skills";
import Navbar from "./layouts/Navbar";

import Contact from "./components/Contact";

// Animation package
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

import Studies from "./components/Studies";

function App() {
  useEffect(() => {
    Aos.init({
      duration: 1800,
      offset: 100,
      disable: "mobile",
    });
  }, []);
  return (
    <div>
      <Navbar />
      <Hero />
      <Skills />
      <Service />
      <Projects />
      <Studies />
      <Contact />
      <footer className="p-3 text-center">
        <h6 className="mb-3">CRISTIAN AGUDELO</h6>
        <p>CopyRights © 2023 | All Rights Reserved </p>
      </footer>
    </div>
  );
}

export default App;
