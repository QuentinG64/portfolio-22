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
    <div name="Project" className="h-full w-full bg-main-4 pt-6">
      <div className="flex 2xl:pt-[5%] lg:pt-[7%] items-center flex-col">
        <div className="text-main-3 text-4xl font-reg flex gap-1">
          <Bounce left cascade>
            <div>SOME </div>
          </Bounce>
          <Bounce right>
            <div>
              <span className="text-main-1 font-bold text-4xl">PROJECTS</span>
            </div>
          </Bounce>
        </div>
        <div className="mt-2">
          <img
            src="./assets/images/Line3.png"
            height="30"
            width="150"
            alt="lineHome"
          />
        </div>
      </div>
      <Reveal>
        <div className="flex flex-wrap mx-4 mt-16 justify-center pb-24">
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
