/* eslint-disable */
import "./App.css";
import Projects from "./components/Projects";
import HomePage from "./components/HomePage";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import SkillsTech from "./components/SkillsTech";
import SkillsDesign from "./components/SkillsDesign";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";
import LoaderWebsite from "./components/LoaderWebsite";

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return loading ? (
    <LoaderWebsite />
  ) : (
    <div className="h-full w-full -z-20">
      <HomePage />
      <AboutMe />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
