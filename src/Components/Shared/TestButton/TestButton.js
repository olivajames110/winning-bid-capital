import React from "react";
import "./TestButton.css";
const TestButton = (props) => {
  return (
    <div style={props.style} className="test-button-container">
      <button onClick={props.onClick}>{props.label || "Test"}</button>
    </div>
  );
};
export default TestButton;
