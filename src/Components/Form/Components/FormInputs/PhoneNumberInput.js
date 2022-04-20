import React, { useEffect, useRef, useState } from "react";
import { TextField } from "@mui/material";
import FormInput from "./FormInput";
import { useDispatch, useSelector } from "react-redux";
import { updateFormState } from "../../../../redux/actions/formStateActions";

const PhoneNumberInput = (props) => {
  const [value, setValue] = useState("");
  const [isValid, setIsValid] = useState(true);

  const formState = useSelector((state) => state.formState);
  const formStep = useSelector((state) => state.formStep.step);
  const dispatch = useDispatch();
  const phoneNumInputRef = useRef();
  const formStepIsValid = useSelector((state) => state.formStep.stepIsValid);
  const removeFormatting = (num) => {
    if (num.length > 1) {
      let fs = num
        .replace(/[{()}]/g, "")
        .replaceAll("-", "")
        .replaceAll(" ", "");
      return fs;
    } else {
      return num;
    }
  };

  const formatPhoneNum = (num) => {
    if (!num) {
      setValue("");
      return;
    }

    let formattedNum;

    if (num.length >= 7) {
      const splitNum = num.split("");
      splitNum.splice(0, 0, "(");
      splitNum.splice(4, 0, ")");
      splitNum.splice(5, 0, " ");
      splitNum.splice(9, 0, "-");
      formattedNum = splitNum.join("");
      setValue(formattedNum);
      // dispatch(
      //   updateFormState({
      //     keyName: "phoneNumber",
      //     value: formattedNum,
      //   })
      // );
      return formattedNum;
    }

    if (num.length > 3 && num.length <= 6) {
      const splitNum = num.split("");
      splitNum.splice(0, 0, "(");
      splitNum.splice(4, 0, ")");
      splitNum.splice(5, 0, " ");
      formattedNum = splitNum.join("");
      setValue(formattedNum);
      // dispatch(
      //   updateFormState({
      //     keyName: "phoneNumber",
      //     value: formattedNum,
      //   })
      // );
      return formattedNum;
    }
    setValue(num);
    return formattedNum;
  };

  const handleChange = (event) => {
    let val = event.target.value;
    let filtered = removeFormatting(val).split("");
    let lastKeyEntered = filtered[filtered.length - 1];
    if (!isNaN(lastKeyEntered)) {
      if (val.length < 15) {
        formatPhoneNum(removeFormatting(val));
        dispatch(
          updateFormState({
            keyName: "phoneNumber",
            value: formatPhoneNum(removeFormatting(val)),
            // value: removeFormatting(val),
          })
        );
      }
    }
    if (filtered.length === 0) {
      setValue("");
    }
  };
  // useEffect(() => {
  //   console.log("UF PHONE NUMBERRRR", formatPhoneNum(formState.phoneNumber));
  //   let num = formatPhoneNum(formState.phoneNumber);
  //   setValue(num);
  // }, []);
  return (
    <div className="text-box-wrapper">
      <FormInput>
        <TextField
          error={
            !formStepIsValid && props.isRequired && formState.phoneNumber === ""
          }
          variant="outlined"
          size="small"
          fullWidth
          ref={phoneNumInputRef}
          id="outlined-basic"
          label={"Phone Number"}
          onChange={handleChange}
          value={formState.phoneNumber}
          required={props.isRequired}
          style={props.style}
          // onKeyDown={handleChange}

          inputProps={props.inputProps}
        />
      </FormInput>
    </div>
  );
};

export default PhoneNumberInput;
