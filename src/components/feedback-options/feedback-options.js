import React from "react";
const FeedbackOptions = ({ options, btnOnClick }) => {
  return (
    <>
      {options.map((option) => (
        <button key={option} type="button" name={option} onClick={btnOnClick}>
          {option}
        </button>
      ))}
    </>
  );
};
export default FeedbackOptions;
