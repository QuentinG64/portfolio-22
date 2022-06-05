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
      <nav className="flex justify-between px-3 items-center fixed z-50">
        <div>
          <Link
            to="Home"
            activeClass="active"
            spy
            smooth
            isDynamic
            duration={1000}
          >
            <img
              className="pt-3"
              src="./assets/images/logobw.svg"
              alt="logoQuentin"
              height="45"
              width="45"
            />
          </Link>
        </div>
        <ul className="gap-5 flex mb-3 justify-center fixed top-0 left-[50%] right-[25%] translate-x-[-50%] pt-[15px] w-screen z-40">
          <li className="text-white font-xlight border-2 rounded-xl px-2 hover:border-main-1">
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
          <li className="text-white font-xlight border-2 rounded-xl px-2 hover:border-main-1">
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
          <li className="text-white font-xlight border-2 rounded-xl px-2 hover:border-main-1">
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
      </nav>
    </div>
  );
};

export default Navbar;
