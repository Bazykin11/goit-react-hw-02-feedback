import React from "react";
import styled from '@emotion/styled';

export const FeedbackOptions = ({handelGood,handelNeutral,handelBad}) => {
return (
    <div>
        <Btn type="button" position="good" onClick={handelGood}>good</Btn>
        <Btn type="button" position="neutral" onClick={handelNeutral}>neutral</Btn>
        <Btn type="button" position="bad" onClick={handelBad}>bad</Btn>
    </div>
)
}



///////////////////////////////////    STYLE    ///////////////////////////

const Btn = styled.button`
margin-right: 10px;
margin-top: 20px;
`;

