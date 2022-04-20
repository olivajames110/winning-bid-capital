import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateFormState } from "../../../../redux/actions/formStateActions";
import FormGroup from "../shared/FormGroup";

import FormInput from "./FormInput";
import "./styles/ImageUpload.css";

const ImageUpload = (props) => {
  const [file, setFile] = useState();
  const [previewUrl, setPreviewUrl] = useState("");
  const [isValid, setIsValid] = useState(false);

  const imageUploadRef = useRef(null);

  const formState = useSelector((state) => state.formState);
  const dispatch = useDispatch();
  const imagePickerHandler = () => {
    imageUploadRef.current.click();
    setFile(true);
  };

  const pickedHandler = (e) => {
    //ensures we actually have files
    let pickedFile;
    let fileIsValid;
    if (e.target.files || e.target.files.length !== 0) {
      pickedFile = e.target.files[0];
      console.log("PICKED FILE", pickedFile);
      const fileReader = new FileReader();
      fileReader.onload = () => {
        console.log(props.keyName);
        setPreviewUrl(fileReader.result);
        dispatch(
          updateFormState({
            keyName: props.keyName,
            value: fileReader.result,
          })
        );

        // props.handleUpdateData("playerImg", fileReader.result);
      };
      fileReader.readAsDataURL(pickedFile);

      // -----

      setIsValid(true);
      fileIsValid = true;
    } else {
      setIsValid(false);
      fileIsValid = false;
    }
  };

  const imagePreview = (
    <div className="image-upload-preview">
      <div
        role="button"
        onClick={() =>
          dispatch(
            updateFormState({
              keyName: props.keyName,
              value: "",
            })
          )
        }
        id="close-icon"
        className="icon-wrapper"
      >
        {closeIcon}
      </div>
      <img
        src={
          formState[props.keyName] ||
          "https://www.dmarge.com/wp-content/uploads/2021/01/dwayne-the-rock-.jpg"
        }
        alt=""
        srcset=""
      />
    </div>
  );
  return (
    <FormGroup
      keyName={props.keyName}
      title={props.title}
      isRequired={props.isRequired}
      customInvalidRequirements={formState[props.keyName] === "" ? true : ""}
    >
      <FormInput>
        <div className="image-upload-inner-wrapper">
          <button
            type="button"
            onClick={imagePickerHandler}
            className="image-upload-box"
          >
            {uploadIcon}
            <div className="image-upload__title">Upload Image</div>
          </button>
          <input
            ref={imageUploadRef}
            style={{ display: "none" }}
            id="image-upload"
            required={
              formState[props.keyName] !== "" ? false : props.isRequired
            }
            type="file"
            accept=".jpg, .png, .jpeg"
            onChange={pickedHandler}
          />
          {formState[props.keyName] && imagePreview}
        </div>
        <p className="helper-text">{props.helperText}</p>
      </FormInput>
    </FormGroup>
  );
};
export default ImageUpload;

const uploadIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
    />
  </svg>
);

const closeIcon = (
  <svg xmlns="http://www.w3.org/2000/svg">
    <path d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z"></path>
  </svg>
);
