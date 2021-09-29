import React from "react";

// import PropTypes from "prop-types";
const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <>
      <p>
        <b>Good</b>: {good}
      </p>
      <p>
        <b>Neutral</b>: {neutral}
      </p>
      <p>
        <b>Bad</b>: {bad}
      </p>
      <p>
        <b>Total</b>: {total}
      </p>
      <p>
        <b>Positive feedback</b>: {positivePercentage}%
      </p>
    </>
  );
};
export default Statistics;
Statistics.defaultProps = { total: 0 };
