import React, { useEffect, useState } from "react";
import Bounce from "react-reveal/Bounce";
import Footer from "./Footer";
import LoaderContact from "./LoaderContact";

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
    <div name="Contact" className="h-screen w-screen">
      <div className="flex pt-[5%] items-center">
        <div>
          <img
            src="./assets/images/Line1.png"
            height="30"
            width="150"
            alt="lineHome"
          />
        </div>

        <div className="text-main-2 text-4xl font-reg pl-4 flex gap-1">
          <Bounce left cascade>
            <div>CODE </div>
          </Bounce>
          <Bounce right>
            <div>
              <span className="text-main-1 font-bold text-4xl">WITH Q?</span>
            </div>
          </Bounce>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Contact;
