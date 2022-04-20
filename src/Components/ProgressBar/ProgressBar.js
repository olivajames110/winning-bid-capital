import React, { useEffect, useState } from "react";
import "./ProgressBar.css";
import "../../assets/styles/transitionAnimations/slideUp/slideUp.css";

import ProgressBarItem from "./Components/ProgressBarItem/ProgressBarItem";

const ProgressBar = ({ steps, formStep }) => {
  return (
    <div className="progress-bar-container">
      {steps &&
        steps.map((p, i) => {
          if (p) {
            return (
              <ProgressBarItem
                key={i + 1}
                label={p}
                stepNumber={i + 1}
                currentStep={formStep}
                isActive={i + 1 === formStep}
                isCompleted={i + 1 < formStep}
                isLastChild={i === steps.length - 1}
              />
            );
          }
        })}
    </div>
  );
};
export default ProgressBar;
