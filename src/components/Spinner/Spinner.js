import React from "react";
import "./Spinner.css";

const Spinner = () => {
  return (
    <div className="d-flex align-items-center justify-content-center">
      <div className="lds-dual-ring"></div>
    </div>
  );
};

export default Spinner;
