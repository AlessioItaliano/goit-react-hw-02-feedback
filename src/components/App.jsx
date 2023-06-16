import { Component } from 'react';

import Section from 'components/section';
import Statistics from 'components/statistics';
import FeedbackOptions from 'components/feedbackOptions';
import Notification from 'components/notificationMessage';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  feedbackCounter = option => {
    this.setState(prevState => ({
      [option]: prevState[option] + 1,
    }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    const countTotal = good + neutral + bad;

    return countTotal;
  };

  countPositiveFeedbackPercentage = () => {
    const percent = this.state.good / this.countTotalFeedback();

    return percent === 0 ? 0 : Math.round(percent * 100);
  };

  render() {
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={this.state}
            onLeaveFeedback={this.feedbackCounter}
          ></FeedbackOptions>
        </Section>
        <Section title="Statistics">
          {this.countTotalFeedback() === 0 ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            ></Statistics>
          )}
        </Section>
      </>
    );
  }
}

export default App;
