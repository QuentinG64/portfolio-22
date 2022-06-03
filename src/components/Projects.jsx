import React, { useEffect, useState } from "react";
import Bounce from "react-reveal/Bounce";
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
      <div className="flex pt-[5%] items-center">
        <div>
          <img
            src="./assets/images/Line1.png"
            height="30"
            width="150"
            alt="lineHome"
          />
        </div>

        <div className="text-main-2 text-4xl font-reg pl-4 flex gap-1">
          <Bounce left cascade>
            <div>SOME </div>
          </Bounce>
          <Bounce right>
            <div>
              <span className="text-main-1 font-bold text-4xl">PROJECTS.</span>
            </div>
          </Bounce>
        </div>
      </div>
      <div className="flex flex-wrap gap-14 mx-4 mt-12 justify-center pb-24">
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
