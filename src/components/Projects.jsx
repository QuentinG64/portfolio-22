import React, { useEffect, useState } from "react";
import Bounce from "react-reveal/Bounce";
import Reveal from "react-reveal/Reveal";
import LoaderProjects from "./LoaderWebsite";
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
    <div name="Project" className="h-screen w-screen bg-main-4">
      <div className="flex pt-[5%] items-center">
        <div>
          <img
            src="./assets/images/Line3.png"
            height="30"
            width="150"
            alt="lineHome"
          />
        </div>

        <div className="text-main-3 text-4xl font-reg pl-4 flex gap-1">
          <Bounce left cascade>
            <div>SOME </div>
          </Bounce>
          <Bounce right>
            <div>
              <span className="text-bg-1 font-bold text-4xl">PROJECTS.</span>
            </div>
          </Bounce>
        </div>
      </div>
      <Reveal>
        <div className="flex flex-wrap gap-6 mx-4 mt-36 justify-center pb-24">
          {projectsData &&
            projectsData.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
        </div>
      </Reveal>
    </div>
  );
};

export default Projects;
