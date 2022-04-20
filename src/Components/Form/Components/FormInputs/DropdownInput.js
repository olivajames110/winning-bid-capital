import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React, { useDebugValue, useState } from "react";
import "./styles/DropdownInput.css";
import FormInput from "./FormInput";
import { useDispatch, useSelector } from "react-redux";
import { updateFormState } from "../../../../redux/actions/formStateActions";
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: 200,
      // width: 250,
    },
  },
};
const DropdownInput = (props) => {
  const [value, setValue] = useState(props.value || "");

  const dispatch = useDispatch();
  const formStepIsValid = useSelector((state) => state.formStep.stepIsValid);
  const formState = useSelector((state) => state.formState);
  const handleChange = (event) => {
    setValue(event.target.value);
    dispatch(
      updateFormState({ keyName: props.keyName, value: event.target.value })
    );
    // props.handleOnChange(event.target.value);
  };
  return (
    <FormInput id="dropdown-input">
      <FormControl fullWidth size="small">
        <InputLabel
          shrink={formState[props.keyName] === "" ? false : true}
          id="select-label"
          required={props.isRequired}
          error={
            !formStepIsValid &&
            props.isRequired &&
            formState[props.keyName] === ""
          }
        >
          {props.label}
        </InputLabel>
        <Select
          sx={{ fontSize: "0.8rem", maxHeight: "100px" }}
          size="small"
          labelId="select-label"
          id="select"
          value={props.value}
          label={`${props.value}`}
          MenuProps={MenuProps}
          onChange={handleChange}
          placeholder={"as"}
          required={props.isRequired}
          error={
            !formStepIsValid &&
            props.isRequired &&
            formState[props.keyName] === ""
          }
        >
          {props.downdownItems.map((d, i) => (
            <MenuItem key={i} value={typeof d === "object" ? d.value : d}>
              {typeof d === "object" ? d.label : d}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </FormInput>
  );
};

export default DropdownInput;
