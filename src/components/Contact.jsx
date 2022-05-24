import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Contact = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <img
          className="mt-12"
          src="../src/assets/images/contactTitle.svg"
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
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Contact;
