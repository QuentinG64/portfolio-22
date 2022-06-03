/* eslint-disable */
import React from "react";

const ProjectCard = ({ picture, title, skills, description, name, url }) => {
  return (
    <div className="w-[40%]">
      <div>
        <img src={picture} alt={title} />
      </div>
      <div className="dataCard relative flex flex-col items-center gap-1 text-center">
        <h1 className="text-white font-bold text-2xl">{name}</h1>
        <h2 className="text-white font-reg">{title}</h2>
        <h4 className="text-white font-xlight">{skills}</h4>
        <div className="mt-1 ">
          <a href={url} target="_blank" className="button hover:text-main-1">
            WEBSITE
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
