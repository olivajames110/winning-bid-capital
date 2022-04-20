import * as React from "react";

import ReactDOM from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import { CSSTransition } from "react-transition-group";
import { setFormStepValid } from "../../../redux/actions/formStepActions";
import { checkInvalidInputs } from "../../../utils/checkInvalidInputs";
import Backdrop from "../Backdrop/Backdrop";

import "./FixedErrorMessage.css";

const FixedErrorMessageOverlay = (props) => {
  const { className, style, onCancel, contentClass, footer, footerClass } =
    props;
  const [invalidQuestions, setInvalidQuestions] = React.useState([]);
  const formState = useSelector((state) => state.formState);
  const formStepValid = useSelector((state) => state.formStep.stepIsValid);
  const dispatch = useDispatch();

  const handleCloseBanner = () => {
    // let invalidQs = checkInvalidInputs();
    // if (invalidQs.length === 0) {
    // }
    document.querySelector("#root").scrollTo(0, document.body.scrollHeight);
    dispatch(setFormStepValid());
  };

  const handleSeeError = () => {
    let invalidQs = checkInvalidInputs();
    let input = invalidQs[0];
    const y = input.getBoundingClientRect().top + window.pageYOffset - 10;
    document.querySelector("#root").scrollTo({ top: y, behavior: "smooth" });
  };

  const validContent = (
    <div className="valid-content">
      <div className="icon-wrapper">{check}</div>
      All errors fixed!
      {/* <div onClick={handleCloseBanner} className="view-errors-btn" rol="button">
        Scroll To Bottom
      </div> */}
    </div>
  );
  const invalidContent = (
    <>
      <div>
        You have
        <span className="num-of-invalid">{invalidQuestions.length}</span>
        error{invalidQuestions.length === 1 ? "" : "s"}!
      </div>
      <div onClick={handleSeeError} className="view-errors-btn" rol="button">
        View Missing Fields
      </div>
    </>
  );

  const content = (
    <div
      className={`fixed-error-message ${
        invalidQuestions.length === 0 ? "valid" : "invalid"
      }`}
      style={style}
    >
      <div className="fixed-error-message__header">
        {invalidQuestions.length === 0 && (
          <button onClick={handleCloseBanner} className="cancel">
            {timesIcon}
          </button>
        )}
      </div>

      <div className={`fixed-error-message__content ${contentClass}`}>
        {invalidQuestions.length === 0 ? validContent : invalidContent}
      </div>
    </div>
  );

  React.useEffect(() => {
    let invalidQs = checkInvalidInputs();
    let input = invalidQs[0];
    if (input) {
      // handleSeeError();
    }

    setInvalidQuestions(invalidQs);
  }, [formState]);

  return ReactDOM.createPortal(
    content,
    document.getElementById("fixed-error-hook")
  );
};

const FixedErrorMessage = (props) => {
  const { show, onCancel } = props;
  return (
    <React.Fragment>
      {/* {show && <Backdrop onClick={onCancel} />} */}
      <CSSTransition
        in={show}
        timeout={200}
        classNames="fade-in"
        mountOnEnter
        unmountOnExit
      >
        <FixedErrorMessageOverlay {...props} />
      </CSSTransition>
    </React.Fragment>
  );
};

const check = (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18">
    <path d="m10 15.586-3.293-3.293-1.414 1.414L10 18.414l9.707-9.707-1.414-1.414z"></path>
  </svg>
);

const timesIcon = (
  <svg xmlns="http://www.w3.org/2000/svg">
    <path d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z"></path>
  </svg>
);

export default FixedErrorMessage;
