import React from "react";
import styles from "./feedback-options.module.css";
const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      <div className={styles.btns__container}>
        {options.map((option) => (
          <button
            key={option}
            name={option}
            onClick={onLeaveFeedback}
            className={styles.feedback__btn}
          >
            {option}
          </button>
        ))}
      </div>
    </>
  );
};
export default FeedbackOptions;
