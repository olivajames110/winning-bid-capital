import React from "react";
import "./styles/FormScreenBody.css";

const FormScreenBody = (props) => {
  return <div className="form-screen-body-outer-wrapper">{props.children}</div>;
};

export default FormScreenBody;
