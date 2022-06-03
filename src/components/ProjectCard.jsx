/* eslint-disable */
import React from "react";

const ProjectCard = ({
  src,
  title,
  stackA,
  stackB,
  stackC,
  stackD,
  stackE,
  stackF,
  name,
  url,
  github,
}) => {
  return (
    <div className="w-[30%] relative group">
      <div className="absolute inset-0 z-10 text-center flex flex-col items-center justify-center  opacity-0 hover:opacity-100 text-white bg-opacity-90 duration-300 ">
        <h1 className="text-white font-bold text-4xl">{name}</h1>
        <h2 className="text-white font-reg text-2xl">{title}</h2>
        <div className="gap-3 flex justify-center mx-auto">
          <div>
            <img className="w-12 mx-4 py-5" src={stackA} alt="" />
          </div>
          <div>
            <img className="w-12 mx-4 py-5" src={stackB} alt="" />
          </div>
          <div className={stackC ? "" : "hidden"}>
            <img className="w-12 mx-4 py-5" src={stackC} alt="" />
          </div>
          <div className={stackD ? "" : "hidden"}>
            <img className="w-12 mx-4 py-5" src={stackD} alt="" />
          </div>
          <div className={stackE ? "" : "hidden"}>
            <img className="w-12 mx-4 py-5" src={stackD} alt="" />
          </div>
          <div className={stackF ? "" : "hidden"}>
            <img className="w-12 mx-4 py-5" src={stackD} alt="" />
          </div>
        </div>
        <div className="mt-1 flex">
          <a
            href={url}
            target="_blank"
            className="button hover:text-main-1 cursor-pointer"
          >
            DEMO
          </a>
          <a
            href={github}
            target="_blank"
            className="button hover:text-main-1 cursor-pointer"
          >
            CODE
          </a>
        </div>
      </div>
      <div className="relative group-hover:brightness-50 ">
        <img
          src={src}
          alt=""
          className="w-full h-full transition-all duration-1000 transform group-hover:scale-105"
        />
      </div>
    </div>
  );
};

export default ProjectCard;
