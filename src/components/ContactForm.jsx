/* eslint-disable */

import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Bounce from "react-reveal/Bounce";
import classNames from "classnames";
import toast, { Toaster } from "react-hot-toast";
import { MdOutlineClose } from "react-icons/md";
import styles from "../App.module.css";

const ContactForm = () => {
  // Notif alert
  const notify = () =>
    toast.custom(
      (t) => (
        <div
          className={classNames([
            styles.notificationWrapper,
            t.visible ? "top-0" : "-top-96",
          ])}
        >
          <div className={styles.contentWrapper}>
            <h1>🥳 Success 🥳</h1>
            <p>
              Your <span className="text-bg-2">message</span> has been sent 🤙
            </p>
          </div>
          <div className={styles.closeIcon} onClick={() => toast.dismiss(t.id)}>
            <MdOutlineClose />
          </div>
        </div>
      ),
      { id: "unique-notification", position: "top-center" }
    );
  // email submit with EmailJs dependency
  const form = useRef();
  const sendEmail = (e) => {
    notify();
    e.preventDefault();

    emailjs
      .sendForm(
        "service_0zxrnog",
        "template_vlxi70q",
        form.current,
        "FFp8KAYVd-wIVQMSM"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div
      name="Contact"
      className="h-screen w-screen bg-bg-1 pt-6 overflow-hidden"
    >
      <div className="flex 2xl:pt-[5%] lg:pt-[7%] md:pt-[10%] sm:pt-[18%] items-center flex-col">
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
        <div>
          <Toaster />
        </div>
        {/* FORM */}
        <form
          action=""
          autoComplete="none"
          className="flex flex-col gap-2 md:w-[500px] sm:w-[300px] mt-12"
          ref={form}
          onSubmit={sendEmail}
        >
          <input
            type="text"
            placeholder="Name"
            name="user_name"
            required="required"
            className="bg-contact-form h-[40px] pl-2 text-main-2 border-transparent border-none focus:outline-none"
          />
          <input
            type="text"
            placeholder="Email"
            name="user_email"
            required="required"
            className="bg-contact-form h-[40px] pl-2 text-main-2 border-transparent border-none focus:outline-none"
          />
          <textarea
            type="text"
            placeholder="Message"
            name="user_message"
            required="required"
            className="bg-contact-form h-[140px] pl-2 text-main-2 border-transparent border-none focus:outline-none"
          />
          <input
            type="submit"
            className="buttonSubmit w-32 hover:text-main-2 hover:bg-left hover:border-bg-2 ease-in-out mt-3 self-center"
            value="Submit"
          />
        </form>

        {/* <div className="text-white pt-4">
          Your <span className="text-bg-2">message</span> has been sent 🤙🏼
        </div> */}
      </div>
      <div className="w-full flex justify-center 2xl:pt-72 1xl:pt-56 lg:pt-24 md:pt-96 sm:pt-24">
        <p className="text-xs text-white"> Cooked by</p>
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
