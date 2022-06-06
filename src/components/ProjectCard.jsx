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
    <div className=" w-1/2 relative group overflow-hidden">
      <div className="absolute inset-0 z-10 text-center flex flex-col flex-wrap items-center justify-center opacity-0 hover:opacity-100 text-white bg-opacity-90 duration-300 ">
        <h1 className="text-white font-bold text-4xl">{name}</h1>
        <h2 className="text-white font-reg text-2xl">{title}</h2>
        <div className="gap-3 flex justify-center mx-auto">
          <div>
            <img className="w-12 mx-3 py-5" src={stackA} alt="" />
          </div>
          <div className={stackC ? "" : "hidden"}>
            <img className="w-12 mx-3 py-5" src={stackB} alt="" />
          </div>
          <div className={stackC ? "" : "hidden"}>
            <img className="w-12 mx-3 py-5" src={stackC} alt="" />
          </div>
          <div className={stackD ? "" : "hidden"}>
            <img className="w-12 mx-3 py-5" src={stackD} alt="" />
          </div>
          <div className={stackE ? "" : "hidden"}>
            <img className="w-12 mx-3 py-5" src={stackE} alt="" />
          </div>
          <div className={stackF ? "" : "hidden"}>
            <img className="w-12 mx-3 py-5" src={stackF} alt="" />
          </div>
        </div>
        <div className={url && github ? "mt-6 flex gap-8 text-sm" : "hidden"}>
          <a href={url} target="_blank" className="cursor-pointer">
            <ButtonProject naming="DEMO" />
          </a>
          <a href={github} target="_blank" className="cursor-pointer">
            <ButtonProject naming="CODE" />
          </a>
        </div>
      </div>
      <div className="relative group-hover:brightness-50 ">
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
