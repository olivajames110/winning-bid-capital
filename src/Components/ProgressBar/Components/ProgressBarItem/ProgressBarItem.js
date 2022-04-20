import React from "react";

import ProgressBarLine from "../ProgressBarLine/ProgressBarLine";
import ProgressBarStep from "../ProgressBarStep/ProgressBarStep";

const ProgressBarItem = (props) => {
  return (
    <div className={`progress-bar-item ${props.isLastChild && "last-child"}`}>
      <ProgressBarStep
        label={props.label}
        stepNumber={props.stepNumber}
        isActive={props.isActive}
        isCompleted={props.isCompleted}
      />
      <ProgressBarLine
        isActive={props.isActive}
        isCompleted={props.isCompleted}
      />
    </div>
  );
};
export default ProgressBarItem;
