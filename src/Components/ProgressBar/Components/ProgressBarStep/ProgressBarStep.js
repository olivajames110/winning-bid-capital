import React from "react";

const ProgressBarStep = (props) => {
  return (
    <div
      className={`progress-bar-item__step ${props.isActive && "is-active"} ${
        props.isCompleted && "is-completed"
      }`}
    >
      <div className="progress-bar-step__circle">
        <div className="circle-number">{props.stepNumber}</div>
      </div>
      <div className="progress-bar-step__label">
        <span>{props.label}</span>
      </div>
    </div>
  );
};
export default ProgressBarStep;
