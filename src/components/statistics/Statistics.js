import React from "react";
import Notification from "./notification/Notification";
// import PropTypes from "prop-types";
const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <>
      {console.log(!total)}
      {!!total ? (
        <>
          <p>Good: {good}</p>
          <p>Neutral: {neutral}</p>
          <p>Bad: {bad}</p>
          <p>Total: {total}</p>
          <p>Positive feedback: {positivePercentage}</p>
        </>
      ) : (
        <Notification message="No feedback given" />
      )}
    </>
  );
};
export default Statistics;
Statistics.defaultProps = { total: 0 };
