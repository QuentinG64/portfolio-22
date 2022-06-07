import React from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  // Coded --> blur background and fixed navbar when scrolling
  // const [color, setColor] = useState(false);
  // const changeColor = () => {
  //   if (window.scrollY >= 50) {
  //     setColor(true);
  //   } else {
  //     setColor(false);
  //   }
  // };
  // window.addEventListener("scroll", changeColor);

  return (
    <div>
      <nav className="flex justify-between sm:px-1 md:px-3 items-center z-50 bg-nav-1 h-20 w-screen">
        <div className="cursor-pointer">
          <Link
            to="Home"
            activeClass="active"
            spy
            smooth
            isDynamic
            duration={1000}
          >
            <img
              className="pt-1 md:h-[45px] md:w-[45px] sm:h-[30px] sm:pl-1 md:pl-0 sm:w-[30px]"
              src="./assets/images/logobw.svg"
              alt="logoQuentin"
            />
          </Link>
        </div>
        <ul className="md:gap-5 sm:gap-3 flex mb-3 md:text-lg sm:text-[0.9rem] justify-center lg:pl-0 md:ml-7 pt-[15px] w-screen z-40">
          <li className="text-white font-xlight cursor-pointer border-2 rounded-xl md:px-2 sm:px-2 hover:border-main-1 hover:text-main-1 transition-all ease-in-out duration-300">
            <Link
              to="About"
              activeClass="active"
              spy
              smooth
              isDynamic
              duration={1000}
            >
              ABOUT ME
            </Link>
          </li>
          <li className="text-white font-xlight border-2 cursor-pointer rounded-xl md:px-2 sm:px-2 hover:border-main-1 hover:text-main-1 transition-all ease-in-out duration-300">
            <Link
              to="Project"
              activeClass="active"
              spy
              smooth
              isDynamic
              duration={1000}
            >
              PROJECTS
            </Link>
          </li>
          <li className="text-white font-xlight border-2 cursor-pointer rounded-xl md:px-2 sm:px-2 hover:border-main-1 hover:text-main-1 transition-all ease-in-out duration-300">
            <Link
              to="Contact"
              activeClass="active"
              spy
              smooth
              isDynamic
              duration={1000}
            >
              CONTACT
            </Link>
          </li>
        </ul>
        <a
          href="https://github.com/QuentinG64"
          target="_blank"
          rel="noreferrer"
          className="relative px-3 sm:hidden md:block"
        >
          <img
            src="./assets/images/Github.png"
            height="28"
            width="28"
            alt="github"
          />
        </a>

        <a
          href="https://www.linkedin.com/in/quenting64/"
          target="_blank"
          rel="noreferrer"
          className="sm:hidden md:block"
        >
          <img
            src="./assets/images/Linkedin.png"
            height="28"
            width="28"
            alt="Linkedin"
          />
        </a>
      </nav>
    </div>
  );
};

export default Navbar;
