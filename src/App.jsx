/* eslint-disable */
import "./App.css";
import Projects from "./components/Projects";
import HomePage from "./components/HomePage";
import AboutMe from "./components/AboutMe";
import { useEffect, useState } from "react";
import LoaderWebsite from "./components/LoaderWebsite";
import ContactForm from "./components/ContactForm";
import Navbar from "./components/Navbar";

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
    <div className="h-full w-screen overflow-x-hidden; -z-20 ">
      <HomePage />
      <div className="sticky top-0 z-[999]">
        <Navbar />
      </div>
      <AboutMe />
      <Projects />
      <ContactForm />
    </div>
  );
}

export default App;
