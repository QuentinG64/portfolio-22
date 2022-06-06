/* eslint-disable */
import React from "react";
import PropTypes from "prop-types";

const ButtonProject = ({ naming }) => {
  return (
    <div className="buttonProject hover:text-main-2 hover:bg-left hover:border-main-1 ease-in-out lg:text-sm 2xl:text-2xl">
      {naming}
    </div>
  );
};

ButtonProject.propTypes = {
  naming: PropTypes.string.isRequired,
};
export default ButtonProject;
