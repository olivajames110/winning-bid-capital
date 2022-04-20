import React from "react";
import "./ErrorMessage.css";
const ErrorMessage = ({ show, styles, text, className }) => {
  return (
    <div style={styles} className={`error-message-container ${className}`}>
      {text}
    </div>
  );
};
export default ErrorMessage;
