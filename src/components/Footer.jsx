import React from "react";

const Footer = () => {
  return (
    <div className="gap-5 flex pt-3 justify-center cursor-pointer">
      <a href="https://github.com/QuentinG64" target="_blank" rel="noreferrer">
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
    </div>
  );
};

export default Footer;
