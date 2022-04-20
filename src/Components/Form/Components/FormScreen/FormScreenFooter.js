import React from "react";
import { useSelector } from "react-redux";
import "./styles/FormScreenFooter.css";

const FormScreenFooter = (props) => {
  const formStep = useSelector((state) => state.formStep);

  const nextContent = (
    <>
      <span>Submit Form</span>
      <div className="icon-wrapper">{arrow}</div>
    </>
  );

  const submitContent = (
    <>
      <span>Reset Form</span>
    </>
  );
  const nextAndBackButtons = (
    <div className="form-footer-button-outer-wrapper">
      <button
        onClick={props.nextHandler}
        id="next"
        type="button"
        className="form-screen-footer-button"
      >
        {formStep.step > 1 ? submitContent : nextContent}
      </button>
    </div>
  );
  return (
    <div className="form-screen-footer-outer-wrapper">
      {nextAndBackButtons}
      {/* {formStep.step >= 6 && (
        <button
          onClick={props.nextHandler}
          type="button"
          id="next"
          className="form-screen-footer-button"
        >
          Reset Form
        </button>
      )} */}
    </div>
  );
};

export default FormScreenFooter;

const arrow = (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
    <path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"></path>
  </svg>
);
