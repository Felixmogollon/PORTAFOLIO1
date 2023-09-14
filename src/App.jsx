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
import { useEffect, useState } from "react";

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
    <div className="">
      <Navbar />
      <Hero />
      <Skills />
      <Service />
      <Projects />
      <Studies />
      <Contact />
      <footer className="p-3 text-center dark:bg-slate-800 ">
        <h6 className="mb-3 dark:text-white">CRISTIAN AGUDELO</h6>
        <p className="dark:text-white">
          CopyRights © 2023 | All Rights Reserved{" "}
        </p>
      </footer>
    </div>
  );
}

export default App;
