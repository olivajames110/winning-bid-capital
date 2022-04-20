import { FormControlLabel, Radio, RadioGroup } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import FormGroup from "../shared/FormGroup";

import "./styles/RadioSelector.css";
import RadioSelectorItem from "./RadioSelectorItem";
import {
  clearFormState,
  setFormState,
  updateFormState,
} from "../../../../redux/actions/formStateActions";
const PreviousUserRadioSelector = (props) => {
  const formState = useSelector((state) => state.formState);

  const dispatch = useDispatch();

  useEffect(() => {
    console.log(localStorage.getItem("userData"));
  }, []);
  return (
    <FormGroup
      style={{
        borderBottom: "2px dashed #c0b7b7",
        paddingBottom: "15px",
        marginBottom: "15px",
        textAlign: "center",
        marginLeft: "-10px",
        marginRight: "-10px",
      }}
      title="Would you like to use data from your previous visit?"
    >
      <div className="radio-selection-wrapper">
        <RadioGroup
          aria-labelledby="radio-selection-buttons-group-label"
          defaultValue={""}
          name="radio-buttons-group"
          style={{ justifyContent: "center" }}
          className="radio-selector-items-container"
        >
          <div
            style={{ margin: "15px 20px" }}
            className="radio-selector-item-wrapper"
          >
            <FormControlLabel
              value={"yes"}
              control={<Radio onChange={props.onChange} />}
              label="Yes Please"
              labelPlacement={"bottom"}
            />
          </div>
          <div
            style={{ margin: "15px 20px" }}
            className="radio-selector-item-wrapper"
          >
            <FormControlLabel
              value={"no"}
              control={<Radio onChange={props.onChange} />}
              label="No Thanks"
              labelPlacement={"bottom"}
            />
          </div>
          <div
            style={{ margin: "15px 20px" }}
            className="radio-selector-item-wrapper"
          >
            <FormControlLabel
              value={"clear"}
              control={<Radio onChange={props.onChange} />}
              label="Clear My Data"
              labelPlacement={"bottom"}
            />
          </div>
        </RadioGroup>
      </div>
    </FormGroup>
  );
};
export default PreviousUserRadioSelector;
