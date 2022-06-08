/* eslint-disable */
import React from "react";
import ButtonProject from "./ButtonProject";

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
    <div className=" lg:w-1/2 md:w-full relative group overflow-hidden">
      <div className="absolute inset-0 z-10 text-center flex flex-col flex-wrap items-center justify-center hover:backdrop-blur-[2px] opacity-0 hover:opacity-100 text-white bg-opacity-90 duration-300 ">
        <h1 className="text-white font-bold md:text-4xl sm:text-1xl">{name}</h1>
        <h2 className="text-white font-reg md:text-2xl sm:text-lg">{title}</h2>
        <div className="md:gap-3 sm:gap-1 flex justify-center mx-auto">
          <div>
            <img
              className="md:w-12 sm:w-8 mx-3 md:py-5 sm:py-2"
              src={stackA}
              alt=""
            />
          </div>
          <div className={stackC ? "" : "hidden"}>
            <img
              className="md:w-12 sm:w-8 mx-3 md:py-5 sm:py-2"
              src={stackB}
              alt=""
            />
          </div>
          <div className={stackC ? "" : "hidden"}>
            <img
              className="md:w-12 sm:w-8 mx-3 md:py-5 sm:py-2"
              src={stackC}
              alt=""
            />
          </div>
          <div className={stackD ? "" : "hidden"}>
            <img
              className="md:w-12 sm:w-8 mx-3 md:py-5 sm:py-2"
              src={stackD}
              alt=""
            />
          </div>
          <div className={stackE ? "" : "hidden"}>
            <img
              className="md:w-12 sm:w-8 mx-3 md:py-5 sm:py-2"
              src={stackE}
              alt=""
            />
          </div>
          <div className={stackF ? "" : "hidden"}>
            <img
              className="md:w-12 sm:w-8 mx-3 md:py-5 sm:py-2"
              src={stackF}
              alt=""
            />
          </div>
        </div>
        <div
          className={
            url && github
              ? "md:mt-6 sm:mt-4 md:flex md:gap-8 sm:gap-4 text-sm sm:hidden"
              : "hidden"
          }
        >
          <a href={url} target="_blank" className="cursor-pointer">
            <ButtonProject naming="DEMO" />
          </a>
          <a href={github} target="_blank" className="cursor-pointer">
            <ButtonProject naming="CODE" />
          </a>
        </div>
      </div>
      <div className="relative group-hover:brightness-50">
        <img
          src={src}
          alt=""
          className="w-full h-full transition-all duration-1000 transform group-hover:scale-[1.02]"
        />
      </div>
    </div>
  );
};

export default ProjectCard;
