import React from "react";
import ButtonContact from "./ButtonContact";
import Footer from "./Footer";
import Navbar from "./Navbar";

const AboutMe = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>

      <div>
        <img
          className="mt-12"
          src="../src/assets/images/wordsTitle.svg"
          height="300"
          width="300"
          alt=""
        />
        <img
          src="../src/assets/images/Line1.png"
          height="300"
          width="300"
          alt=""
        />
        <div className="text-main-2 font-xlight text-2xl flex flex-row mt-20">
          <img
            className="absolute bottom-0 -z-50"
            src="../src/assets/images/hero.png"
            height="400"
            width="400"
            alt="heroQuentin"
          />
          <div className="flex-col w-full ml-64 mr-64 text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis
            luctus rhoncus. Curabitur sem ante, sollicitudin quis enim nec,
            dictum consequat diam. <br /> <br /> Mauris iaculis sapien vitae
            elit fermentum, vel aliquam nisi luctus. Nam finibus maximus
            maximus. Nullam maximus massa nibh, elementum egestas nibh vulputate
            sit amet.
            <br /> <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis
            luctus rhoncus. Curabitur sem ante, sollicitudin quis enim nec,
            dictum consequat diam.
            <div className="mt-16">
              <ButtonContact naming="Here are my skills!" />
            </div>
          </div>
        </div>
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default AboutMe;
