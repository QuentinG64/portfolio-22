import React, { useEffect, useState } from "react";
import Bounce from "react-reveal/Bounce";
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
    <div name="Contact" className="h-screen w-screen bg-bg-1">
      <div className="flex pt-[5%] items-center flex-col">
        <div className="text-main-3 text-4xl font-reg flex gap-1">
          <Bounce left cascade>
            <div>CODE </div>
          </Bounce>
          <Bounce right>
            <div>
              <span className="text-main-2 font-bold text-4xl">WITH Q?</span>
            </div>
          </Bounce>
        </div>
        <div className="mt-2">
          <img
            src="./assets/images/Line4.png"
            height="30"
            width="150"
            alt="lineHome"
          />
        </div>
        <div className="mt-16 font-light text-lg text-bg-2">
          {" "}
          Question, coffee or work together?
        </div>
      </div>
      <div className="text-white text-center">Made by Q with love ©2022</div>
    </div>
  );
};

export default Contact;
