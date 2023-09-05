import "./App.css";
import Hero from "./components/Hero";
import Navbar from "./Layouts/Navbar";
import Skills from "./components/Skills";
import Service from "./components/Services";
import Projects from "./components/Projects";

import Hireme from "./components/Hireme";
import Contact from "./components/Contact";

// Animation package

function App() {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <Skills />
      <Service />
      <Projects />
      {/* <Testimonials /> */}
      <Hireme />
      <Contact />
      <footer className="p-3 text-center">
        <h6 className="mb-3">CRISTIAN AGUDELO</h6>
        <p>CopyRights © 2023 | All Rights Reserved</p>
      </footer>
    </div>
  );
}

export default App;
