import React from "react";
import "./styles/FormInput.css";

const FormInput = (props) => {
  return (
    <div
      id={props.id}
      className={`form-input-outer-wrapper ${props.className}`}
    >
      {props.children}
    </div>
  );
};

export default FormInput;
