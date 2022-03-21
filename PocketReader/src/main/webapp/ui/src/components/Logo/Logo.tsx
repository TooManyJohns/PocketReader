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
  height:100%;
  width:100%;
  flex-direction: column;
  align-items: center;
`;

// Styled component named Logo
const LogoItself = styled.div`
  background-image: url(${(props: {imageUrl: string}) => props.imageUrl});
  width: 100%;
  height: 100%;
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;

`;
