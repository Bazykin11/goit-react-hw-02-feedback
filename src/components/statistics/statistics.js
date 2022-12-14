import styled from "@emotion/styled"
import React from "react"
import PropTypes from 'prop-types';

export const Statistics = ({good, neutral, bad, total, percent}) => {
    return (
     <div>
        <h2>Statistics</h2>
        <Stat>Good: {good}</Stat>
        <Stat>Neutral: {neutral}</Stat>
        <Stat>Bad: {bad}</Stat>
        <Stat>Total: {total}</Stat>
        <Stat>Positive feedback: {percent}%</Stat>
    </div>
    )
}



///////////////////////////////////    STYLE    ///////////////////////////

const Stat = styled.div`
margin-bottom: 4px;
`;

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    percent: PropTypes.number.isRequired
  };