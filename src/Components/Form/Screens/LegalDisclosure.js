import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Columns from "../../../layout/shared/Columns";
import DatePickerInput from "../Components/FormInputs/DatePicker";
import SignatureAgreement from "../Components/FormInputs/SignatureAgreement";
import TextboxField from "../Components/FormInputs/TextboxField";
import TextOverflow from "../Components/FormInputs/TextOverflow";
import FormScreen from "../Components/FormScreen/FormScreen";
import FormGroup from "../Components/shared/FormGroup";
// import "./Component.css";

const LegalDisclosure = (props) => {
  const [state, setState] = useState(null);

  const formState = useSelector((state) => state.formState);
  const formStep = useSelector((state) => state.formStep);
  useEffect(() => {}, []);

  return (
    <FormScreen
      title="Legal Disclosure & Signature"
      nextHandler={props.nextHandler}
      backHandler={props.backHandler}
      show={formStep.step === 5}
    >
      <FormGroup title="Legal Disclosure">
        <TextOverflow height="100px">
          <p>
            The borrower hereby agrees that all aforementioned information is
            true and in no means is false and intended to influence the credit
            underwriting of Flatiron Realty Capital in regard to the origination
            the loan associated with the subject property. Additionally, the
            borrower understands that this loan application does not constitute
            a commitment from Flatiron Realty Capital to originate the loan
            associated with the subject property. Lastly, the borrower
            acknowledges that the application or appraisal fee associated with
            the subject loan is not refundable in either case of Flatiron Realty
            Capital or the borrower not wishing to pursue the origination of the
            subject loan.
          </p>
        </TextOverflow>
      </FormGroup>
      <FormGroup title="Borrower's Name">
        <Columns>
          <TextboxField
            keyName="legalAgreementfirstName"
            label={"First Name"}
            isRequired
          />
          <TextboxField
            keyName="legalAgreementlastName"
            label={"Last Name"}
            isRequired
          />
        </Columns>
      </FormGroup>
      <FormGroup title="Submission Date">
        <DatePickerInput keyName="submissionDate" label="Today's Date" />
      </FormGroup>
      <SignatureAgreement
        firstName={formState.firstName}
        lastName={formState.lastName}
        height={100}
      />
    </FormScreen>
  );
};

export default LegalDisclosure;
