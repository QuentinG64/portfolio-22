/* eslint-disable */
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AnimatedCursor from "react-animated-cursor";
import Projects from "./components/Projects";
import HomePage from "./components/HomePage";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import SkillsTech from "./components/SkillsTech";
import SkillsDesign from "./components/SkillsDesign";

function App() {
  return (
    <div className="bg-gradient-to-r from-f-stop via-s-stop to-t-stop h-full w-full bg-cover -z-20">
      <AnimatedCursor
        innerSize={8}
        outerSize={12}
        color="232, 198, 76"
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
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/aboutme" element={<AboutMe />} />
        <Route path="/aboutme/tech" element={<SkillsTech />} />
        <Route path="/aboutme/design" element={<SkillsDesign />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
