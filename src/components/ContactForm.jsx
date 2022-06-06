import React from "react";
import Bounce from "react-reveal/Bounce";
import ButtonContact from "./ButtonContact";

const ContactForm = () => {
  return (
    <div name="Contact" className="h-screen w-screen bg-bg-1 pt-6">
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

        <div className="mt-16 font-light text-lg text-bg-2 text-center">
          {" "}
          Question, coffee or work together?
        </div>

        {/* FORM */}
        <form
          action=""
          autoComplete="none"
          className="flex flex-col gap-2 w-[500px] mt-12"
        >
          <input
            type="text"
            placeholder="Name"
            required="required"
            className="bg-contact-form h-[40px] pl-2 text-main-2 border-transparent border-none focus:outline-none"
          />
          <input
            type="text"
            placeholder="Email"
            required="required"
            className="bg-contact-form h-[40px] pl-2 text-main-2 border-transparent border-none focus:outline-none"
          />
          <textarea
            type="text"
            placeholder="Message"
            required="required"
            className="bg-contact-form h-[140px] pl-2 text-main-2 border-transparent border-none focus:outline-none"
          />
        </form>
        <div
          className="
        py-10"
        >
          <ButtonContact naming="SUBMIT" />
        </div>
      </div>
      <div className="w-full flex justify-center mt-48">
        <p className="text-xs text-white"> Made by</p>
        <img
          src="./assets/images/logobw.svg"
          alt="logo REACT"
          className="w-4 h-4 mx-1"
        />
        <p className="text-xs text-white">with</p>

        <img
          src="./assets/images/logoSkills/react-svgrepo-com.svg"
          alt="logo REACT"
          className="w-4 h-4 ml-1"
        />
        <img
          src="/assets/images/logoSkills/tailwind-svgrepo-com.svg"
          alt="logo REACT"
          className="w-4 h-4 ml-1"
        />
        <p className="text-xs ml-1 text-white"> and love</p>
      </div>
    </div>
  );
};

export default ContactForm;
