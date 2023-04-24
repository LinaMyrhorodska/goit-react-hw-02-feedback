import { Component } from 'react';
import { GobalStyle } from "../GlobalStyle";
import { Layout } from "./Layout/Layout";
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';

export class App extends Component {
state = {
    good: 0,
    neutral: 0,
    bad: 0,
};
  
  updateState = nameFeedback => {
    this.setState(oldData => {
      let object = { ...oldData };
      object[nameFeedback] = oldData[nameFeedback] + 1;
      return object; 
    });
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    return Math.floor(
      (this.state.good /
        (this.state.good + this.state.neutral + this.state.bad)) *
        100 || 0 
    );
  };
  
render () {
  return (
    <Layout>
      <Section
        title="Please leave feedback">
      </Section>
      <FeedbackOptions
        options={Object.keys(this.state)}
        onLeaveFeedback={this.updateState}
      />
      <Section title="Statistics">
        
        {this.countTotalFeedback() === 0 ? (
          <Notification message="There is no feedback yet..."/>
        ) : 
          (<Statistics
        options={Object.keys(this.state)}
        statistic={this.state}
        total={this.countTotalFeedback()}
        positives={this.countPositiveFeedbackPercentage}
          />
          )}
        </Section>
       <GobalStyle/>
    </Layout>
)
}
};
