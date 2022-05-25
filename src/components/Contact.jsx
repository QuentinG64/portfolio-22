import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import LoaderContact from "./LoaderContact";
import Navbar from "./Navbar";

const Contact = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return loading ? (
    <LoaderContact />
  ) : (
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
