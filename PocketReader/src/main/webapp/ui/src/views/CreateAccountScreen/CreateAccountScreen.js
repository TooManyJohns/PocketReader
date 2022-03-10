import React, { Component } from "react";
import styled from "styled-components";

export default class CreateAccountScreen extends Component {
  render() {

    return (
      <div>
        <BackgroundWrapper>
        </BackgroundWrapper>
      </div>
    );
  }
}

// Create a Wrapper component that'll render a <section> tag with some styles
const BackgroundWrapper = styled.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-color: #549672;
  align-items: center;
  display: flex;
  flex-direction: column;
`;
