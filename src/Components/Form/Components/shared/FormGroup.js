import React from "react";
import { useSelector } from "react-redux";
import "./styles/FormGroup.css";

const FormGroup = (props) => {
  const formStepIsValid = useSelector((state) => state.formStep.stepIsValid);
  const formState = useSelector((state) => state.formState);

  const invalidRequirements = props.customInvalidRequirements
    ? props.customInvalidRequirements
    : formState[props.keyName] === "";

  return (
    <div
      style={props.style}
      className={`form-group-outer-wrapper ${
        !formStepIsValid && props.isRequired && invalidRequirements && "error"
      } ${props.isRequired && "required"}`}
    >
      <div className="form-group__title">
        {props.title} {props.isRequired && "*"}
      </div>
      {props.children}
    </div>
  );
};

export default FormGroup;
