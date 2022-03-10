import React from 'react';
import styled from "styled-components";

export interface CustomButtonProps {
    //background color (set default as transparent, being = '')
    backgroundColor?: string;
}

const CustomButton: React.FunctionComponent<CustomButtonProps> = ({backgroundColor = ''}) =>
( 
<ButtonCtn backgroundColor={backgroundColor}>
    
</ButtonCtn>
);
export default CustomButton;

// Styled Background component for the background of each screen to fill up, also takes in background color prop
const ButtonCtn = styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
    background-size: cover;
    top: 0;
    left: 0;
    background-color: ${(props: {backgroundColor: string}) => props.backgroundColor};
`;
