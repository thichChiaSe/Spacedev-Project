import React from "react";

export const Field = ({ text, required, type = "text", ...props }) => {
  return (
    <label>
      <p>
        {text} {required && <span>*</span>}
      </p>
      <input {...props} type={type} />
    </label>
  );
};
