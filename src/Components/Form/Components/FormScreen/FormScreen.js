import React, { useEffect, useState } from "react";
import Card from "../../../Shared/Card/Card";
import "../../../../assets/styles/transitionAnimations/leftRight/leftRight.css";
import { CSSTransition } from "react-transition-group";
import FormScreenBody from "./FormScreenBody";
import FormScreenFooter from "./FormScreenFooter";
import FormScreenHeader from "./FormScreenHeader";
import { useSelector } from "react-redux";

const FormScreen = (props) => {
  const [show, setShow] = useState(true);
  const [isForward, setIsForward] = useState(true);
  const formStep = useSelector((state) => state.formStep);
  useEffect(() => {
    setIsForward(formStep.isForward);
    if (formStep === props.show) {
      setShow(true);
    }
  }, [formStep.isForward]);

  return (
    <CSSTransition
      in={props.show}
      timeout={500}
      classNames={formStep.isForward ? "card-slide-left" : "card-slide-right"}
      mountOnEnter
      unmountOnExit
    >
      <Card id={props.id}>
        <form className="form-screen-card-inner-wrapper">
          <FormScreenHeader title={props.title} subTitle={props.subTitle} />
          <FormScreenBody>{props.children}</FormScreenBody>
          <FormScreenFooter
            nextHandler={props.nextHandler}
            backHandler={props.backHandler}
          />
        </form>
      </Card>
    </CSSTransition>
  );
};

export default FormScreen;
