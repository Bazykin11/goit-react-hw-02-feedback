import React from "react";
import styled from '@emotion/styled';
import {Statistics} from "../statistics/statistics";
import {FeedbackOptions} from "../feedbackOptions/feedbackOptions";
import {Section} from "../section/section"
import {Notification} from "../notification/notification"

class Feedback extends React.Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0,
      }

      optionKeys = Object.keys(this.state);

      countTotalFeedback = () => {
       return Object.values(this.state).reduce((total, item) => total + item, 0);
     };

      countPositiveFeedbackPercentage = () => {
        const {good} = this.state;
        const total = this.countTotalFeedback();
        const result = good*100 / total;
        return  Math.round(result);
        
      }

      handelGood = ()=> {
        this.setState ((prevState) => ({
            good: prevState.good+1, 
        }));
      };

      handelNeutral = (event)=>{
        this.setState ((prevState) => ({
          neutral: prevState.neutral+1,
        }));
      };

      handelBad = (event)=>{
        this.setState ((prevState) => ({
          bad: prevState.bad+1,
        }));
      };

      handelTotal = (event)=>{
        this.setState ((prevState) => ({
          total: prevState.bad + prevState.neutral,
        }));
      };

      render(){
        const { good, neutral, bad } = this.state;
        const total = good + neutral + bad
        return (
            <Container>
                <Section title="Please leave feedback">
                <FeedbackOptions
                        handelGood = {this.handelGood}
                        handelNeutral = {this.handelNeutral}
                        handelBad = {this.handelBad}
                />
                {total === 0 ? <Notification message="There is no feedback"></Notification> : <Statistics
                        {...this.state}
                        total={this.countTotalFeedback()}
                        percent={this.countPositiveFeedbackPercentage ()}
                />}
                </Section>
            </Container>
        )
      }

}


export default Feedback;


///////////////////////////////////    STYLE    ///////////////////////////

const Container = styled.div`
padding: 50px;
`;