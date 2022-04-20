import React from "react";
import "./TextOverflow.css";
const TextOverflow = (props) => {
  const styles = {
    ...props.style,
    height: props.height,
  };
  return (
    <div style={styles} className="text-overflow-container">
      {props.children}
    </div>
  );
};
export default TextOverflow;
