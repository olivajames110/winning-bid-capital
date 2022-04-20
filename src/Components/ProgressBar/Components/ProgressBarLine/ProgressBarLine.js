import React from "react";

const ProgressBarLine = (props) => {
  return (
    <div
      className={`progress-bar-item__line ${props.isCompleted && "is-active"}`}
    >
      <div className="line-fill"></div>
    </div>
  );
};
export default ProgressBarLine;
