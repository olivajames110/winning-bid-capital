import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
// import TextboxField from './WaiverForm/FormInputs/TextboxField/TextboxField';

const Email = () => {
  const form = useRef();
  const [formSent, setFormSent] = useState(false);

  const sendEmail = (e) => {
    setFormSent(true);
    console.log(form.current);
    emailjs
      .sendForm(
        "service_ehu8fai",
        "template_e0tci3p",
        form.current,
        "scCzVqaPXVULniIEU"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    emailjs
      .sendForm(
        "service_ehu8fai",
        "template_uazwrvr",
        form.current,
        "scCzVqaPXVULniIEU"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const successMessage = <div>Form Submitted!!</div>;

  const formm = (
    <>
      <form ref={form} onSubmit={sendEmail}>
        <TextboxField
          name={"user_firstName"}
          keyName="lastName"
          label="First Name"
        />
        <TextboxField
          name={"user_lastName"}
          keyName="lastName"
          label="Last Name"
        />
        <TextboxField name={"user_email"} keyName="email" label="Your Email" />
        <TextboxField
          name={"user_phoneNumber"}
          keyName="phoneNumber"
          label="Phone Number"
        />
        <TextboxField name={"message"} keyName="message" label="Message" />
        <input type="submit" value="Send" />
      </form>
    </>
  );

  return <>{formSent ? successMessage : formm}</>;
};

export default Email;
