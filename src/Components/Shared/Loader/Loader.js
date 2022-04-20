import * as React from "react";
import { TailSpin } from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import "./Loader.css";

const Loader = (props) => {
  return (
    <div className="loader-wrapper">
      <div className="loader-text">Fetching your number...and some string.</div>
      <TailSpin height="100" width="100" color="#fff" ariaLabel="loading" />
    </div>
  );
};

export default Loader;
