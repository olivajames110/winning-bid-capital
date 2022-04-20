export const increaseFormStep = (data) => {
  return {
    type: "INCREASE_FORM_STEP",
    payload: data,
  };
};

export const decreaseFormStep = (data) => {
  return {
    type: "DECREASE_FORM_STEP",
    payload: data,
  };
};

export const setFormStepInvalid = () => {
  return {
    type: "SET_FORM_STEP_INVALID",
  };
};

export const setFormStepValid = () => {
  return {
    type: "SET_FORM_STEP_VALID",
  };
};

export const resetFormStep = () => {
  return {
    type: "RESET_FORM_STEP",
  };
};
