import React from "react";

export const Field = ({
  text,
  required,
  type = "text",
  renderInput,
  ...props
}) => {
  return (
    <label>
      <p>
        {text} {required && <span>*</span>}
      </p>
      {renderInput ? renderInput?.(props) : <input {...props} type={type} />}
    </label>
  );
};
