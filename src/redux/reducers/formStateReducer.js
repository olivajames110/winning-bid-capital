const initState = {
  nameTitle: "",
  nameFirst: "",
  nameLast: "",
  phoneNumber: "",
  emailAddress: "",
  dobMonth: "",
  dobDay: "",
  dobYear: "",
};

const formStateReducer = (state = initState, action) => {
  switch (action.type) {
    case "SET_FORM_STATE":
      return action.payload;

    case "UPDATE_FORM_STATE":
      let newState = { ...state };
      console.log(action.payload.keyName, action.payload.value);
      newState[action.payload.keyName] = action.payload.value;
      return newState;

    case "CLEAR_FORM_STATE":
      return initState;

    default:
      return state;
  }
};

export default formStateReducer;
