import React from 'react';
import styled from "styled-components";

export interface LogoProps {
    //image url
    imageUrl: string;

    //background color (set default as transparent, being = '')
    backgroundColor?: string;
}

const Logo: React.FunctionComponent<LogoProps> = ({imageUrl, backgroundColor = ''}) =>
( 
<Container backgroundColor={backgroundColor}>
    <LogoItself imageUrl={imageUrl} />
</Container>
);
export default Logo;


// Styled component named StyledButton
const Container = styled.div`
  background: ${(props: {backgroundColor: string}) => props.backgroundColor};
  width: 500px;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items:center;
  margin:auto; 
`;

// Styled component named Logo
const LogoItself = styled.div`
  background-image: url(${(props: {imageUrl: string}) => props.imageUrl});
  width: 500px;
  height: 300px;
  background-size: contain;
  background-repeat: no-repeat;
  display: block;
`;