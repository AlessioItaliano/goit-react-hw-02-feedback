import { Component } from 'react';

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  feedbackCounter = e => {
    switch (e.target.id) {
      case 'good':
        this.setState(prevState => ({ good: prevState.good + 1 }));
        break;
      case 'neutral':
        this.setState(prevState => ({ neutral: prevState.neutral + 1 }));
        break;
      case 'bad':
        this.setState(prevState => ({ bad: prevState.bad + 1 }));
        break;
      default:
        break;
    }
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
    // const { good, neutral, bad } = this.state;
    // const total = this.countTotalFeedback();
    // const positivePercentage = this.countPositiveFeedbackPercentage();

    return (
      <div>
        <h1>Please leave feedback</h1>
        <div>
          <button onClick={this.feedbackCounter} type="button" id="good">
            Good
          </button>
          <button onClick={this.feedbackCounter} type="button" id="neutral">
            Neutral
          </button>
          <button onClick={this.feedbackCounter} type="button" id="bad">
            Bad
          </button>
        </div>
        {/* <h2>Statistics</h2>
        <p>Good: {good}</p>
        <p>Neutral: {neutral}</p>
        <p>Bad: {bad}</p>
        <p>Total: {total}</p>
        <p>PositiveFeedback: {positivePercentage}%</p> */}
      </div>
    );
  }
}

export default Feedback;
