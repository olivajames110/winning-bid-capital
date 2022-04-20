import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Columns from "../../../layout/shared/Columns";
import AddressAutofill from "../Components/FormInputs/AddressAutofill";
import DatePickerInput from "../Components/FormInputs/DatePicker";
import NumberField from "../Components/FormInputs/NumberField";
import RadioSelector from "../Components/FormInputs/RadioSelector";
import RadioSelectorItem from "../Components/FormInputs/RadioSelectorItem";
import TextboxField from "../Components/FormInputs/TextboxField";
import FormScreen from "../Components/FormScreen/FormScreen";
import FormGroup from "../Components/shared/FormGroup";
// import "./Component.css";

const PropertyInfo = (props) => {
  const [state, setState] = useState(null);

  const formState = useSelector((state) => state.formState);
  const formStep = useSelector((state) => state.formStep);
  // useEffect(() => {}, []);

  return (
    <FormScreen
      title="Property Information"
      nextHandler={props.nextHandler}
      backHandler={props.backHandler}
      show={formStep.step === 3}
      direction={formStep.direction}
    >
      <RadioSelector
        title="Is application related to financing of a single or multiple properties?"
        keyName="hasMultipleProperties"
        isRequired
        radioItems={[
          {
            label: "Single Properties",
            keyName: "hasMultipleProperties",
            value: false,
          },
          {
            label: "Multiple Properties",
            keyName: "hasMultipleProperties",
            value: true,
          },
        ]}
      />

      <FormGroup title="Subject Property Address">
        <AddressAutofill keyName="subjectPropertyAddress" />
      </FormGroup>
      <FormGroup title="Subject Property Details">
        <Columns>
          <NumberField
            keyName="numOfUnits"
            label={"Number of Units"}
            maxLength={4}
          />
          <NumberField
            keyName="numOfOccupants"
            label={"Current Occupancy"}
            maxLength={4}
          />
        </Columns>
        <NumberField
          keyName="requestedLoanAmount"
          label={"Requested Loan Amount"}
          maxLength={4}
        />
        <Columns>
          <NumberField
            keyName="purchasePrice"
            label={"Purchase Price"}
            maxLength={4}
          />

          <DatePickerInput keyName="purchaseDate" label={"Purchase Date"} />
          <NumberField
            keyName="estimatedAsInValue"
            label={"Estimated As-Is Value"}
            maxLength={4}
            helperText="(Appraised Value)"
          />
        </Columns>
        <Columns>
          <NumberField
            keyName="renovationBudget"
            label={"Renovation Budget"}
            maxLength={4}
          />
          <NumberField
            keyName="estimatedAfterRepairValue"
            label={"Estimated After Repair Value"}
            maxLength={4}
          />
        </Columns>
        <NumberField
          keyName="monthlyRent"
          label={"Monthly Rent"}
          maxLength={4}
          helperText=" (all units)"
        />
      </FormGroup>
      {formState.hasMultipleProperties === "true" && (
        <FormGroup title="Enter any additional addresses for multiple property loan:">
          <AddressAutofill keyName="subjectPropertyAddress" />
          <Columns>
            <NumberField
              keyName="estimatedAsInValue"
              label={"Estimated As-Is Value"}
              maxLength={4}
            />

            <NumberField
              keyName="renovationBudget"
              label={"Reno Budget"}
              maxLength={4}
            />
            <NumberField
              keyName="estimatedAfterRepairValue"
              label={"Estimated After Repair Value"}
              maxLength={4}
            />
            <NumberField
              keyName="subjectPropertyAddressMonthlyRent"
              label={"Monthly Rent"}
              maxLength={4}
              helperText=" (all units)"
            />
          </Columns>
        </FormGroup>
      )}
    </FormScreen>
  );
};

export default PropertyInfo;
