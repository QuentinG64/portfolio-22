import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

const HomePage = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="text-white">Homsse</div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
