import React from "react";
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

export const FeedbackOptions = ({options, onLeaveFeedback}) => {
    return (
        <div>
            {options.map(el => (
                <Btn name={el} key={el} onClick={onLeaveFeedback}>
                    {el}    
                </Btn>
            ))}
        </div>
)
}

FeedbackOptions.propTypes = {
    options: PropTypes.array.isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
  };

///////////////////////////////////    STYLE    ///////////////////////////

const Btn = styled.button`
margin-right: 10px;
margin-top: 20px;
`;

