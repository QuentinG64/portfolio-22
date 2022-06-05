/* eslint-disable */
import "./App.css";
import AnimatedCursor from "react-animated-cursor";
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
      <AnimatedCursor
        innerSize={8}
        outerSize={12}
        color="12, 194, 201"
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={2}
        clickables={[
          "a",
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          "label[for]",
          "select",
          "textarea",
          "button",
          ".link",
        ]}
      />
      <div>
        <HomePage />
        <AboutMe />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
