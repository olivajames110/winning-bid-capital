import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import rootReducer from "./redux/reducers";
import App from "./App";
import { Provider } from "react-redux";

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
