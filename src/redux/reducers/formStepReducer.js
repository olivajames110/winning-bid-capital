const initState = {
  step: 1,
  stepIsValid: true,
  isForward: true,
  stepTitles: [
    "Borrower Information",
    "Loan Information",
    "Property Information",
    "Refinance Details",
    "Legal Disclosure & Signature",
  ],
};

const formStepReducer = (state = initState, action) => {
  switch (action.type) {
    case "INCREASE_FORM_STEP":
      return {
        ...state,
        step: state.step + 1,
        stepIsValid: true,
        isForward: true,
      };
    case "DECREASE_FORM_STEP":
      return {
        ...state,
        step: state.step - 1,
        isForward: false,
      };
    case "SET_FORM_STEP_INVALID":
      return {
        ...state,
        stepIsValid: false,
      };
    case "SET_FORM_STEP_VALID":
      return {
        ...state,
        stepIsValid: true,
      };
    case "RESET_FORM_STEP":
      return initState;
    default:
      return state;
  }
};
export default formStepReducer;
