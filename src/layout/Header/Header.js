import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { resetFormStep } from "../../redux/actions/formStepActions";
import { clearFormState } from "../../redux/actions/formStateActions";

import "./Header.css";

const Header = (props) => {
  //Redux
  const dispatch = useDispatch();
  const currentStep = useSelector((state) => state.formStep);

  //Functions
  const resetHandler = () => {
    dispatch(clearFormState());
    dispatch(resetFormStep());
  };
  return (
    <header className={currentStep !== 0 && "active"}>
      <div className="header-inner-wrapper">
        <div onClick={resetHandler} className="logo-wrapper">
          {logo}
        </div>
      </div>
    </header>
  );
};
export default Header;
const logo = (
  <svg id="a" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1169.51 486.39">
    <path d="M172,201.03l-37.9,113.37h-17.01l-30.93-90.53-30.93,90.53h-17.33L0,201.03H16.68l30.61,92.15,31.91-92.15h14.9l31.26,92.64,31.26-92.64h15.39Zm23,0h16.2v113.37h-16.2v-113.37Zm150.94,0v113.37h-13.28l-68.02-84.54v84.54h-16.2v-113.37h13.28l68.02,84.54v-84.54h16.2Zm134.75,0v113.37h-13.28l-68.02-84.54v84.54h-16.2v-113.37h13.28l68.02,84.54v-84.54h16.2Zm37.25,0h16.2v113.37h-16.2v-113.37Zm150.95,0v113.37h-13.28l-68.02-84.54v84.54h-16.2v-113.37h13.28l68.02,84.54v-84.54h16.2Zm115.8,56.04h15.55v44.21c-11.34,9.56-27.05,14.41-42.92,14.41-34.82,0-60.41-24.46-60.41-57.98s25.59-57.98,60.73-57.98c17.98,0,33.2,5.99,43.57,17.49l-10.04,10.04c-9.39-9.07-20.08-13.12-32.88-13.12-26.24,0-45.19,18.3-45.19,43.57s18.95,43.57,45.02,43.57c9.56,0,18.46-2.11,26.56-7.29v-36.93Zm194.03,26.72c0,19.44-14.74,30.61-43.41,30.61h-54.09v-113.37h50.85c26.07,0,40.65,11.01,40.65,29.31,0,12.31-6.32,20.89-15.22,25.27,12.79,3.56,21.22,13.12,21.22,28.18Zm-81.3-69.64v36.28h33.2c16.52,0,25.91-6.15,25.91-18.14s-9.39-18.14-25.91-18.14h-33.2Zm64.94,68.35c0-13.12-9.72-18.95-27.69-18.95h-37.25v37.74h37.25c17.98,0,27.69-5.67,27.69-18.79Zm44.7-81.46h16.2v113.37h-16.2v-113.37Zm53.45,0h47.78c36.44,0,61.22,23,61.22,56.68s-24.78,56.69-61.22,56.69h-47.78v-113.37Zm46.8,99.28c28.02,0,46-17.17,46-42.59s-17.98-42.59-46-42.59h-30.61v85.19h30.61Z" />
    <path d="M563.9,48.25l-34.24,34.24c-1.56,1.56-4.09,1.56-5.66,0l-26.3-26.3c-1.56-1.56-1.56-4.09,0-5.66l34.24-34.24c1.56-1.56,4.09-1.56,5.66,0l26.3,26.3c1.56,1.56,1.56,4.09,0,5.66Zm15.12-10.67L542.62,1.17c-1.56-1.56-4.09-1.56-5.66,0l-2.29,2.29c-1.56,1.56-1.56,4.09,0,5.66l36.41,36.41c1.56,1.56,4.09,1.56,5.66,0l2.29-2.29c1.56-1.56,1.56-4.09,0-5.66Zm39.1,88.36l-62.38-59.55c-1.56-1.56-4.09-1.56-5.66,0l-2.29,2.29c-1.56,1.56-1.56,4.09,0,5.66l59.55,62.38c1.56,1.56,4.09,1.56,5.66,0l5.12-5.12c1.56-1.56,1.56-4.09,0-5.66Zm-91.19-36.27l-36.41-36.41c-1.56-1.56-4.09-1.56-5.66,0l-2.29,2.29c-1.56,1.56-1.56,4.09,0,5.66l36.41,36.41c1.56,1.56,4.09,1.56,5.66,0l2.29-2.29c1.56-1.56,1.56-4.09,0-5.66Zm124.4-7.18l26.3-26.3c1.56-1.56,1.56-4.09,0-5.66l-34.24-34.24c-1.56-1.56-4.09-1.56-5.66,0l-26.3,26.3c-1.56,1.56-1.56,4.09,0,5.66l34.24,34.24c1.56,1.56,4.09,1.56,5.66,0Zm5.01,15.12l36.41-36.41c1.56-1.56,1.56-4.09,0-5.66l-2.29-2.29c-1.56-1.56-4.09-1.56-5.66,0l-36.41,36.41c-1.56,1.56-1.56,4.09,0,5.66l2.29,2.29c1.56,1.56,4.09,1.56,5.66,0Zm-88.36,39.1l59.55-62.38c1.56-1.56,1.56-4.09,0-5.66l-2.29-2.29c-1.56-1.56-4.09-1.56-5.66,0l-62.38,59.55c-1.56,1.56-1.56,4.09,0,5.66l5.12,5.12c1.56,1.56,4.09,1.56,5.66,0Zm36.27-91.19l36.41-36.41c1.56-1.56,1.56-4.09,0-5.66l-2.29-2.29c-1.56-1.56-4.09-1.56-5.66,0l-36.41,36.41c-1.56,1.56-1.56,4.09,0,5.66l2.29,2.29c1.56,1.56,4.09,1.56,5.66,0Z" />
    <path d="M314.07,421.58h-5.9l-1.08-14.03c-2.46-2.92-5.65-5.28-9.58-7.08s-8.49-2.7-13.65-2.7c-10.33,0-18.54,3.76-24.63,11.27-6.09,7.51-9.14,17.21-9.14,29.1v1.33c0,11.89,3.02,21.61,9.04,29.17,6.03,7.55,13.95,11.33,23.77,11.33,5.21,0,9.93-.91,14.19-2.73,4.25-1.82,7.59-4.17,10-7.05l1.08-14.03h5.9v16.25c-2.88,3.98-7.08,7.3-12.6,9.97-5.52,2.67-11.71,4-18.57,4-11.85,0-21.54-4.39-29.07-13.17-7.53-8.78-11.3-20.03-11.3-33.74v-1.21c0-13.75,3.75-25.02,11.27-33.8,7.51-8.78,17.34-13.17,29.49-13.17,6.86,0,12.98,1.34,18.38,4.03,5.4,2.69,9.53,6.02,12.41,10v16.25Zm34.45,57.89l6.79-.51,32.82-86.33h7.17l32.5,86.33,6.92,.51v5.59h-22.79v-5.59l8.06-.63-7.62-20.69h-41.51l-7.68,20.69,8.06,.63v5.59h-22.72v-5.59Zm24.88-28.12h36.5l-17.96-48.88h-.38l-18.15,48.88Zm132.77-58.72c9.69,0,17.19,2.47,22.5,7.39,5.31,4.93,7.97,11.46,7.97,19.58s-2.66,14.77-7.97,19.68c-5.31,4.91-12.81,7.36-22.5,7.36h-21.07v31.99l10.35,.83v5.59h-28.25v-5.59l10.35-.83v-79.54l-10.35-.83v-5.65h38.97Zm-21.07,47.54h21.07c7.62,0,13.34-1.94,17.17-5.81,3.83-3.87,5.74-8.75,5.74-14.63s-1.9-10.84-5.71-14.76c-3.81-3.91-9.54-5.87-17.2-5.87h-21.07v41.07Zm87.77-41.89v-5.65h28.31v5.65l-10.35,.83v79.54l10.35,.83v5.59h-28.31v-5.59l10.35-.83v-79.54l-10.35-.83Zm134.74-5.65v19.49h-6.73l-.57-13.01h-25.64v79.54l10.35,.83v5.59h-28.31v-5.59l10.35-.83v-79.54h-25.64l-.51,13.01h-6.79v-19.49h73.51Zm19.4,86.84l6.79-.51,32.82-86.33h7.17l32.5,86.33,6.92,.51v5.59h-22.79v-5.59l8.06-.63-7.62-20.69h-41.51l-7.68,20.69,8.06,.63v5.59h-22.72v-5.59Zm24.88-28.12h36.5l-17.96-48.88h-.38l-18.15,48.88Zm93.8,33.71v-5.59l10.35-.83v-79.54l-10.35-.83v-5.65h28.31v5.65l-10.35,.83v79.54h38.4l.57-13.01h6.73v19.42h-63.67Z" />
  </svg>
);