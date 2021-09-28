import React, { Component } from "react";
import Section from "./section/section";
import FeedbackOptions from "./feedback-options/feedback-options";
import Statistics from "./statistics/Statistics";
class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  calculateTotal = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };
  handleBtnClick = (event) => {
    const name = event.target.name;
    this.setState((prevState) => ({
      [name]: prevState[name] + 1,
    }));
  };
  render() {
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={["good", "neutral", "bad"]}
            btnOnClick={this.handleBtnClick}
          />
        </Section>
        <Section title="Statistics">
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.calculateTotal()}
            positivePercentage={this.calculateTotal()}
          />
        </Section>
      </>
    );
  }
}
export default App;
