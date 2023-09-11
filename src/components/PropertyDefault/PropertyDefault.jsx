/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const PropertyDefault = ({ className, divClassName, text = "BUTTON" }) => {
  return (
    <div className={`property-default ${className}`}>
      <div className={`BUTTON ${divClassName}`}>{text}</div>
    </div>
  );
};

PropertyDefault.propTypes = {
  text: PropTypes.string,
};
