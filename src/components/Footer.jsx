import React from "react";

const Footer = () => {
  return (
    <div className="gap-5 flex mb-3 justify-center fixed bottom-0 left-[50%] right-[25%] translate-x-[-50%] cursor-pointer">
      <a href="https://github.com/QuentinG64" target="_blank" rel="noreferrer">
        <img
          src="../src/assets/images/Github.png"
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
          src="../src/assets/images/Linkedin.png"
          height="28"
          width="28"
          alt="Linkedin"
        />
      </a>
    </div>
  );
};

export default Footer;
