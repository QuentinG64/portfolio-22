import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="flex justify-between px-3 items-center">
        <div>
          <Link to="/">
            <img
              className="pt-[15px]"
              src="../src/assets/images/logobw.svg"
              alt="logoQuentin"
              height="45"
              width="45"
            />
          </Link>
        </div>
        <ul className="gap-5 flex mb-3 justify-center fixed top-0 left-[50%] right-[25%] translate-x-[-50%] pt-[15px] w-screen z-40">
          <li className="text-white border-2 rounded-xl px-2 hover:border-main-1">
            <Link to="/aboutme">ABOUT ME</Link>
          </li>
          <li className="text-white border-2 rounded-xl px-2 hover:border-main-1">
            <Link to="/projects">PROJECTS</Link>
          </li>
          <li className="text-white border-2 rounded-xl px-2 hover:border-main-1">
            <Link to="/contact">CONTACT</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
