import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Columns from "../../../layout/shared/Columns";
import TextboxField from "../Components/FormInputs/TextboxField";
import FormScreen from "../Components/FormScreen/FormScreen";
import FormGroup from "../Components/shared/FormGroup";
import { months, nameTitles } from "../../../config/formDropdowns";

import DropdownInput from "../Components/FormInputs/DropdownInput";
import { VALIDATOR_REQUIRE } from "../../../utils/validators";
import NumberField from "../Components/FormInputs/NumberField";

import PhoneNumberInput from "../Components/FormInputs/PhoneNumberInput";

import PreviousUserRadioSelector from "../Components/FormInputs/PreviousUserRadioSelector";
import {
  clearFormState,
  setFormState,
} from "../../../redux/actions/formStateActions";

// import "./Component.css";

const BorrowerInfo = (props) => {
  const [isPreviousUser, setIsPreviousUser] = useState(false);
  const [pageIsValid, setPageIsValid] = useState(false);

  const formState = useSelector((state) => state.formState);
  const formStep = useSelector((state) => state.formStep);
  const formStepIsValid = useSelector((state) => state.formStep.stepIsValid);

  const dispatch = useDispatch();

  const handlePreviousUserRadio = (e) => {
    let val = e.target.value;
    console.log("----------------Val", val);
    if (val === "yes") {
      const data = JSON.parse(localStorage.getItem("userData"));
      console.log(data);
      dispatch(setFormState(data));
      console.log("sent");
      return;
    }

    if (val === "no") {
      console.log("clear");
      dispatch(clearFormState());
    }

    if (val === "clear") {
      localStorage.removeItem("userData");
      dispatch(clearFormState());
      setIsPreviousUser(false);
    }
  };

  useEffect(() => {
    if (localStorage.getItem("userData")) {
      console.log("User Exists");
      setIsPreviousUser(true);
    } else {
      setIsPreviousUser(false);
    }
  }, []);
  return (
    <FormScreen
      title="Contact Us Today"
      subTitle="Send us a message to learn more information about Winning Bid Capital."
      nextHandler={props.nextHandler}
      backHandler={props.backHandler}
      show={formStep.step === 1}
      direction={formStep.direction}
    >
      {/* {isPreviousUser && (
        <PreviousUserRadioSelector onChange={handlePreviousUserRadio} />
      )} */}

      {/* NAME  */}
      <FormGroup title="Personal Information">
        <Columns customColumns={[2, 5, 5]}>
          <DropdownInput
            keyName="nameTitle"
            label="Title"
            downdownItems={nameTitles}
            value={formState.nameTitle}
          />

          <TextboxField keyName="nameFirst" label={"First Name"} isRequired />
          <TextboxField keyName="nameLast" label={"Last Name"} isRequired />
        </Columns>
      </FormGroup>

      {/* CONTACT INFORMATION  */}
      <FormGroup title="Contact Information">
        <PhoneNumberInput keyName="primaryPhoneNumber" isRequired />
        <TextboxField
          keyName="emailAddress"
          label={"Email Address"}
          isRequired
        />
      </FormGroup>

      {/* DOB */}
      <FormGroup title="Date of Birth">
        <Columns>
          <DropdownInput
            keyName="dobMonth"
            label="Month"
            downdownItems={months}
            value={formState.dobMonth}
            isRequired
          />
          <NumberField
            keyName="dobDay"
            label={"Day"}
            maxLength={2}
            isRequired
          />
          <NumberField
            keyName="dobYear"
            label={"Year"}
            maxLength={4}
            isRequired
          />
        </Columns>
      </FormGroup>
    </FormScreen>
  );
};

export default BorrowerInfo;
