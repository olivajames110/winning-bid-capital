import React, { useEffect, useRef, useState } from "react";
import { TextField } from "@mui/material";
import FormInput from "./FormInput";
import { useDispatch, useSelector } from "react-redux";
import { updateFormState } from "../../../../redux/actions/formStateActions";
import "./styles/LongTextInput.css";
import FormGroup from "../shared/FormGroup";
const LongTextInput = (props) => {
  const [value, setValue] = useState("");
  const [charCount, setCharCount] = useState(0);
  const [isValid, setIsValid] = useState(true);

  const formState = useSelector((state) => state.formState);

  const dispatch = useDispatch();
  const textboxRef = useRef();
  const handleChange = (event) => {
    let val = event.target.value;
    let keyName = props.keyName;
    if (val === "") {
      console.log("Not Valid");
      setIsValid(false);
    } else {
      console.log("Valid");
      setIsValid(true);
      setValue(val);
    }
    console.log("TEXTBOX", textboxRef.current);
    setCharCount(textboxRef.current?.value.length);
    console.log(props.keyName, val);
    dispatch(updateFormState({ keyName, value: val }));
    if (charCount >= 25) {
    }
  };

  return (
    <FormGroup
      keyName={props.keyName}
      title={props.title}
      isRequired={props.isRequired}
      customInvalidRequirements={
        formState[props.keyName].length < props.invalidValue
          ? formState[props.keyName]
          : ""
      }
      invalidValue={props.invalidValue}
    >
      <FormInput id="long-text">
        <input
          style={{ display: "none" }}
          type="text"
          required={props.isRequired}
          value={
            formState[props.keyName].length < props.invalidValue
              ? ""
              : formState[props.keyName].length
          }
        />
        <div className="css-md26zr-MuiInputBase-root-MuiOutlinedInput-root">
          <textarea
            error={true}
            ref={textboxRef}
            onChange={handleChange}
            draggable="false"
            value={formState[props.keyName]}
            className="css-1n4twyu-MuiInputBase-input-MuiOutlinedInput-input"
            placeholder={props.placeholder}
            // required={props.isRequired}
          ></textarea>
        </div>

        <div className={`char-count-container ${charCount >= 25 && "valid"}`}>
          <span>{charCount}/25</span>
        </div>
      </FormInput>
    </FormGroup>
  );
};

export default LongTextInput;
