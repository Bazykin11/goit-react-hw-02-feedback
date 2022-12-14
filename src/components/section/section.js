import styled from "@emotion/styled"
import React from "react";
import PropTypes from 'prop-types';


export const Section = ({title, children}) => {
    return (
        <section>
            {title && <Title>{title}</Title> }
            {children}
        </section>
    )
}


///////////////////////////////////    STYLE    ///////////////////////////

const Title = styled.h2`
font-size: 40px;
margin: 0px;
`

Section.propTypes = {
    title: PropTypes.string,
    children: PropTypes.node,
  };