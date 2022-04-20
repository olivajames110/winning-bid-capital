import formStateReducer from "./formStateReducer";
import formStepReducer from "./formStepReducer";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
  formState: formStateReducer,
  formStep: formStepReducer,
});

export default rootReducer;
