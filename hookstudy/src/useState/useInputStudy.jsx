import React, { useState } from "react";

const useInput = (initalValue, validator) => {
  const [value, setValue] = useState(initalValue);
  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    let willUpdate = true;
    if (typeof validator === "function") {
      willUpdate = validator(value);
    }
    if (willUpdate) {
      setValue(value);
    }
  };
  return { value, onChange };
};

export default function useInputStudy() {
  const maxLen = (value) => value.length <= 10;
  const isEmail = (value) => !value.includes("@");
  const name = useInput("Mr.", maxLen);
  return (
    <>
      <h1>hello</h1>
      <input placeholder="Name" {...name} />
    </>
  );
}
