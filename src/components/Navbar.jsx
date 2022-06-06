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
      <nav className="flex justify-between px-3 items-center z-50 bg-nav-1 h-20">
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
              className="pt-1"
              src="./assets/images/logobw.svg"
              alt="logoQuentin"
              height="45"
              width="45"
            />
          </Link>
        </div>
        <ul className="gap-5 flex mb-3 justify-center pt-[15px] w-screen z-40">
          <li className="text-white font-xlight cursor-pointer border-2 rounded-xl px-2 hover:border-main-1 hover:text-main-1 transition-all ease-in-out duration-300">
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
          <li className="text-white font-xlight border-2 cursor-pointer rounded-xl px-2 hover:border-main-1 hover:text-main-1 transition-all ease-in-out duration-300">
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
          <li className="text-white font-xlight border-2 cursor-pointer rounded-xl px-2 hover:border-main-1 hover:text-main-1 transition-all ease-in-out duration-300">
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
          className="relative px-3"
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
