import React, { useEffect, useState } from "react";
import { TextField } from "@mui/material";
import FormInput from "./FormInput";
import { useDispatch, useSelector } from "react-redux";
import { updateFormState } from "../../../../redux/actions/formStateActions";

// import "./TextField.css";
const NumberField = (props) => {
  const [value, setValue] = useState("");
  const [isValid, setIsValid] = useState(true);

  const formState = useSelector((state) => state.formState);
  const formStepIsValid = useSelector((state) => state.formStep.stepIsValid);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    let val = event.target.value;
    let keyName = props.keyName;
    console.log();
    if (!isNaN(val) && val.length <= props.maxLength) {
      if (val === "") {
        console.log("Not Valid");
        setIsValid(false);
      } else {
        console.log("Valid");
        setIsValid(true);
        setValue(val);
      }
      console.log(props.keyName, val);
      dispatch(updateFormState({ keyName, value: val }));
    }
  };

  //   useEffect(() => {
  //     console.log("Valid is changed");
  //     if (props.error && props.value === "") {
  //       setIsValid(false);
  //     }
  //   }, [props.error, props.value]);

  return (
    <div className="text-box-wrapper">
      <FormInput>
        <TextField
          error={
            !formStepIsValid &&
            props.isRequired &&
            formState[props.keyName] === ""
          }
          helperText={props.helperText}
          variant="outlined"
          size="small"
          fullWidth
          id="outlined-basic"
          label={props.label}
          onChange={handleChange}
          value={formState[props.keyName]}
          required={props.isRequired}
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

export default NumberField;
