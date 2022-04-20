import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { loanPurposes, loanTypes } from "../../../config/formDropdowns";
import Columns from "../../../layout/shared/Columns";
import DatePickerInput from "../Components/FormInputs/DatePicker";
import DropdownInput from "../Components/FormInputs/DropdownInput";
import ImageUpload from "../Components/FormInputs/ImageUpload";
import LongTextInput from "../Components/FormInputs/LongTextInput";
import NumberField from "../Components/FormInputs/NumberField";
import RadioSelector from "../Components/FormInputs/RadioSelector";
import RadioSelectorItem from "../Components/FormInputs/RadioSelectorItem";
import TextboxField from "../Components/FormInputs/TextboxField";
import FormScreen from "../Components/FormScreen/FormScreen";
import FormGroup from "../Components/shared/FormGroup";
// import "./Component.css";

const LoanInfo = (props) => {
  const [isValid, setIsValid] = useState(false);
  const formState = useSelector((state) => state.formState);
  const formStep = useSelector((state) => state.formStep);
  useEffect(() => {}, []);

  return (
    <FormScreen
      title="Loan Information Borrower Background"
      nextHandler={props.nextHandler}
      backHandler={props.backHandler}
      show={formStep.step === 2}
      direction={formStep.direction}
    >
      <FormGroup title="Provide details on the financing being requested">
        <DropdownInput
          keyName="loanType"
          label="Loan Type"
          downdownItems={loanTypes}
          value={formState.loanType}
        />

        <DropdownInput
          keyName="loanPurpose"
          label="Loan Purpose"
          downdownItems={loanPurposes}
          value={formState.loanPurpose}
        />
      </FormGroup>

      <LongTextInput
        invalidValue={25}
        title="Business Plan"
        keyName="businessPlan"
        placeholder="Details on expected timelines, budgets and exit strategy (sale, refinance into long term financing)"
      />

      <FormGroup title="What is your estimated Credit Score?">
        <NumberField
          keyName="creditScore"
          label={"Credit Score"}
          maxLength={3}
        />
      </FormGroup>
      <FormGroup title="Number of Flips Completed in the last:">
        <Columns>
          <NumberField
            keyName="flipsCompleted3years"
            label={"Last 3-year period"}
            maxLength={3}
          />
          <NumberField
            keyName="flipsCompleted1year"
            label={"Last 1-year period"}
            maxLength={3}
          />
        </Columns>
      </FormGroup>

      <ImageUpload
        title="Upload Borrower Track Record Details"
        keyName="borrowerTrackRecordDetails"
        helperText="Excel file with details on past projects"
      />

      <FormGroup title="Please enter the number and dollar value of investment properties currently owned">
        <Columns>
          <NumberField
            keyName="rentalProperties"
            label={"Rental properties"}
            maxLength={3}
          />
          <NumberField
            keyName="totalValue"
            label={"Total Value"}
            maxLength={3}
          />
        </Columns>
      </FormGroup>

      <RadioSelector
        title="Are you a licensed GC?"
        keyName={"isLicensedGC"}
        radioItems={[
          { label: "Yes", keyName: "isLicensedGC", value: true },
          { label: "No", keyName: "isLicensedGC", value: false },
        ]}
      />

      <RadioSelector
        title="Do you have any derogatory housing events such as bankruptcy, foreclosure, deed-in-lieu, short sale, or forbearance in the past 4 years?"
        keyName={"hasForbearanceProperty"}
        radioItems={[
          { label: "Yes", keyName: "hasForbearanceProperty", value: true },
          { label: "No", keyName: "hasForbearanceProperty", value: false },
        ]}
      />
      {formState.hasForbearanceProperty && (
        <>
          <FormGroup title="If applicable, please select housing events:">
            <TextboxField keyName="forbearanceEvents" label={"Select Events"} />
          </FormGroup>
          <FormGroup>
            <LongTextInput
              title="Please briefly explain any derogatory housing events."
              keyName="forbearanceExplanation"
            />
          </FormGroup>
        </>
      )}

      <RadioSelector
        title="Have you ever been convicted of a felony or have you been convicted of a misdemeanor involving fraud or embezzlement?"
        keyName="hasFelony"
        radioItems={[
          { label: "Yes", keyName: "hasFelony", value: true },
          { label: "No", keyName: "hasFelony", value: false },
        ]}
      />
      {formState.hasFelony && (
        <>
          <FormGroup title="Please briefly explain any such items Flatiron Realty Capital would find on your background report.">
            <LongTextInput keyName="felonyExplanation" />
          </FormGroup>
        </>
      )}

      <RadioSelector
        title="What is your marital status? "
        keyName="isMarried"
        radioItems={[
          { label: "Married", keyName: "isMarried", value: true },
          { label: "Not Married", keyName: "isMarried", value: false },
        ]}
      />
    </FormScreen>
  );
};

export default LoanInfo;
