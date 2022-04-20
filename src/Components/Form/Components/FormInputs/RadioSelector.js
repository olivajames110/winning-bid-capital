import { RadioGroup } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

import "./styles/RadioSelector.css";
import RadioSelectorItem from "./RadioSelectorItem";
import FormGroup from "../shared/FormGroup";
import { updateFormState } from "../../../../redux/actions/formStateActions";
const RadioSelector = (props) => {
  const formState = useSelector((state) => state.formState);
  const formStepIsValid = useSelector((state) => state.formStep.stepIsValid);

  const dispatch = useDispatch();

  const onChangeHandler = (e) => {
    console.log("change", props.value, props.keyName, e.target.value);
    let keyName = props.keyName;
    let val = e.target.value;
    dispatch(
      updateFormState({
        keyName,
        value: val,
      })
    );
  };
  return (
    <FormGroup
      keyName={props.keyName}
      title={props.title}
      isRequired={props.isRequired}
    >
      <div className="radio-selection-wrapper">
        <input
          style={{ display: "none" }}
          type="text"
          required={props.isRequired}
          value={formState[props.keyName]}
        />
        <RadioGroup
          aria-labelledby="radio-selection-buttons-group-label"
          defaultValue={formState[props.keyName]}
          name="radio-buttons-group"
          className="radio-selector-items-container"
          onChange={onChangeHandler}
        >
          {props.radioItems.map((r) => (
            <RadioSelectorItem
              label={r.label}
              keyName={r.keyName}
              value={r.value}
              labelPlacement="bottom"
            />
          ))}
        </RadioGroup>
      </div>
    </FormGroup>
  );
};
export default RadioSelector;
