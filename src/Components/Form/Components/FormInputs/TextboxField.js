import React, { useEffect, useReducer, useState } from "react";
import { TextField } from "@mui/material";
import FormInput from "./FormInput";
import { useDispatch, useSelector } from "react-redux";
import { updateFormState } from "../../../../redux/actions/formStateActions";

// import "./TextField.css";

const inputReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE":
      return {
        ...state,
        value: action.val,
        isValid: true,
      };
    default:
      return state;
  }
};

const TextboxField = (props) => {
  const [value, setValue] = useState("");
  const [inputState, inputDispatch] = useReducer(inputReducer, {
    value: "",
    isValid: false,
  });
  const [isValid, setIsValid] = useState(true);
  //
  const formState = useSelector((state) => state.formState);
  //
  const formStepIsValid = useSelector((state) => state.formStep.stepIsValid);

  const dispatch = useDispatch();

  const handleChange = (event) => {
    let val = event.target.value;
    let keyName = props.keyName;
    inputDispatch({ type: "CHANGE", val: val });
    if (val === "") {
      console.log("Not Valid");
      setIsValid(false);
    } else {
      console.log("Valid");
      setIsValid(true);
      setValue(val);
    }

    dispatch(updateFormState({ keyName, value: val }));
  };

  return (
    <div className="text-box-wrapper">
      <FormInput>
        <TextField
          helperText={props.helperText}
          error={
            !formStepIsValid &&
            props.isRequired &&
            formState[props.keyName] === ""
          }
          required={props.isRequired}
          variant="outlined"
          size="small"
          fullWidth
          datatype={props.keyName}
          name={props.keyName}
          id="outlined-basic"
          label={props.label}
          onChange={handleChange}
          value={formState[props.keyName]}
          style={props.style}
          InputLabelProps={{
            shrink:
              formState[props.keyName] === "" ||
              formState[props.keyName] === undefined
                ? false
                : true,
          }}
          inputProps={props.inputProps}
        />
      </FormInput>
    </div>
  );
};

export default TextboxField;
