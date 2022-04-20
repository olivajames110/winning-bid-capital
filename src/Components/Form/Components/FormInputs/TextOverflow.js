import React from "react";
import FormInput from "./FormInput";
import "./styles/TextOverflow.css";
const TextOverflow = (props) => {
  const styles = {
    ...props.style,
    height: props.height,
  };
  return (
    <FormInput>
      <div style={styles} className="text-overflow-container">
        {props.children}
      </div>
    </FormInput>
  );
};
export default TextOverflow;
