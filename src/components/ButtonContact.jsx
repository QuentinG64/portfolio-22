/* eslint-disable */
import React from "react";
import PropTypes from "prop-types";

const ButtonContact = ({ naming }) => {
  return (
    <div className="buttonContact hover:text-main-2 hover:bg-left hover:border-bg-2 ease-in-out md:text-xl lg:text-2xl">
      {naming}
    </div>
  );
};

ButtonContact.propTypes = {
  naming: PropTypes.string.isRequired,
};
export default ButtonContact;
