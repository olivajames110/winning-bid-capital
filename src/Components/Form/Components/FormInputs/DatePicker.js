import React, { useState } from "react";
import "./styles/DatePicker.css";

import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import FormInput from "./FormInput";
import { useDispatch, useSelector } from "react-redux";
import { updateFormState } from "../../../../redux/actions/formStateActions";

const DatePickerInput = (props) => {
  const [value, setValue] = useState(null);

  const dispatch = useDispatch();
  const formStepIsValid = useSelector((state) => state.formStep.stepIsValid);
  const formState = useSelector((state) => state.formState);
  return (
    <FormInput
      className={
        !formStepIsValid &&
        props.isRequired &&
        formState[props.keyName] === "" &&
        "error"
      }
      id="date-picker"
    >
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DatePicker
          label={props.label}
          value={
            formState[props.keyName] === "" ? null : formState[props.keyName]
          }
          fontSize="small"
          onChange={(newValue) => {
            dispatch(
              updateFormState({ keyName: props.keyName, value: newValue })
            );
          }}
          renderInput={(params) => (
            <TextField
              size="small"
              icon
              name={props.keyName}
              fontSize="small"
              fullWidth
              helperText={props.helperText}
              required={props.isRequired}
              sx={{ fontSize: ".8rem" }}
              {...params}
            />
          )}
        />
      </LocalizationProvider>
    </FormInput>
  );
};

export default DatePickerInput;
