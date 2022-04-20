import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ContentLoader, { Code } from "react-content-loader";

import FormScreen from "../Components/FormScreen/FormScreen";

import "./styles/SuccessScreen.css";

const SuccessScreen = (props) => {
  const [isLoading, setIsLoading] = useState(true);

  const formState = useSelector((state) => state.formState);
  const formStep = useSelector((state) => state.formStep);

  const placeholderContent = (
    <div id="placeholder" className="content-area">
      <div className="success-screen__header">
        {/* <h3>Analyzing Results</h3> */}
        <p>Please wait while we are process your form.</p>
      </div>
      <div className="success-screen__body">
        {" "}
        <PlaceholderLoader />
      </div>
    </div>
  );
  const resultContent = (
    <div id="result" className="content-area">
      <div className="success-screen__header">
        <div className="checkmark-wrapper">{checkmark}</div>
        {/* <h3>Submission Successful!</h3> */}
        <p>
          Thank you for your submission. Please check your email at{" "}
          <b> {formState.emailAddress} </b> for more information.
        </p>

        <div className="success-screen__body"></div>
      </div>
    </div>
  );

  useEffect(() => {
    if (formStep.step === 2) {
      setTimeout(() => {
        setIsLoading(false);
        localStorage.setItem("userData", JSON.stringify(formState));
      }, 4000);
    } else {
      setIsLoading(true);
    }
  }, [formStep]);

  return (
    <FormScreen
      id="success-screen"
      title={isLoading ? "Analyzing Results" : "Submission Successful!"}
      nextHandler={props.nextHandler}
      backHandler={props.backHandler}
      show={formStep.step === 2}
    >
      <div className="success-screen-inner-wrapper">
        {isLoading ? placeholderContent : resultContent}
      </div>
    </FormScreen>
  );
};

const checkmark = (
  <div className="w4rAnimated_checkmark">
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 130.2 130.2"
    >
      <circle
        class="path circle"
        fill="none"
        stroke="#73AF55"
        stroke-width="6"
        stroke-miterlimit="10"
        cx="65.1"
        cy="65.1"
        r="62.1"
      />
      <polyline
        class="path check"
        fill="none"
        stroke="#73AF55"
        stroke-width="6"
        stroke-linecap="round"
        stroke-miterlimit="10"
        points="100.2,40.2 51.5,88.8 29.8,67.5 "
      />
    </svg>
  </div>
);

const PlaceholderLoader = (props) => (
  <ContentLoader
    speed={1}
    // width={340}
    // height={84}
    viewBox="0 0 340 84"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="54" y="0" rx="3" ry="3" width="67" height="11" />
    <rect x="143" y="0" rx="3" ry="3" width="140" height="11" />
    <rect x="132" y="48" rx="3" ry="3" width="67" height="11" />
    <rect x="216" y="48" rx="3" ry="3" width="104" height="11" />
    <rect x="18" y="48" rx="3" ry="3" width="100" height="11" />
    <rect x="16" y="71" rx="3" ry="3" width="310" height="11" />
    <rect x="18" y="23" rx="3" ry="3" width="140" height="11" />
    <rect x="166" y="23" rx="3" ry="3" width="173" height="11" />
  </ContentLoader>
);
export default SuccessScreen;
