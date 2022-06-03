import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import LoaderProjects from "./LoaderProjects";
import Navbar from "./Navbar";
import ProjectCard from "./ProjectCard";
import projectsData from "../data/projectsData";

const Projects = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return loading ? (
    <LoaderProjects />
  ) : (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <img
          className="mt-12"
          src="../src/assets/images/projectsTitle.svg"
          height="300"
          width="300"
          alt=""
        />
        <img
          src="../src/assets/images/Line1.png"
          height="300"
          width="300"
          alt=""
        />
      </div>
      <div className="flex flex-wrap gap-3 mx-4 mt-24 justify-center">
        {projectsData.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Projects;
