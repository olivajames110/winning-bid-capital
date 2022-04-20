export const checkInvalidInputs = () => {
  let invalidQs = [];
  const requiredInputs = document.querySelectorAll("input[required]");
  const requiredNonInputs = document.querySelectorAll(
    ".form-group-outer-wrapper.required"
  );

  // const allRequiredInputs = [...requiredInputs, ...requiredNonInputs];
  // console.log("allRequiredInputs", allRequiredInputs);
  requiredInputs.forEach((i) => {
    if (i.value === "") {
      invalidQs.push(i);
    }
  });
  return invalidQs;
};
