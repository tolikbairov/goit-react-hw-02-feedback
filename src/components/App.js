import React, { Component } from "react";
import Section from "./section/section";
import FeedbackOptions from "./feedback-options/feedback-options";
import Statistics from "./statistics/Statistics";
import Notification from "./notification/Notification";
class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  calculateTotal = () => {
    const total = this.state.good + this.state.neutral + this.state.bad;
    return total;
  };
  calculatePositivePercentage = () => {
    const positivePercentage = Math.round(
      (this.state.good / this.calculateTotal()) * 100
    );
    return positivePercentage;
  };
  handleBtnClick = (event) => {
    const name = event.target.name;
    this.setState((prevState) => ({
      [name]: prevState[name] + 1,
    }));
  };
  render() {
    const total = this.calculateTotal();
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={["good", "neutral", "bad"]}
            onLeaveFeedback={this.handleBtnClick}
          />
        </Section>

        <Section title="Statistics">
          {total ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={total}
              positivePercentage={this.calculatePositivePercentage()}
            />
          ) : (
            <Notification message="No feedback given" />
          )}
        </Section>
      </>
    );
  }
}
export default App;
