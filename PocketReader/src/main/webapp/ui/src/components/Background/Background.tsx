import React from 'react';
import styled from "styled-components";

export interface BackgroundProps {
    //background color (set default as transparent, being = '')
    backgroundOpacity?: string;
    backgroundColor?: string;
}

const Background: React.FC<BackgroundProps> = ( {backgroundColor='', backgroundOpacity='1'}) =>
( 
<BackgroundCtn backgroundColor={backgroundColor} backgroundOpacity={backgroundOpacity}>
    
</BackgroundCtn>
);
export default Background;

// Styled Background component for the background of each screen to fill up, also takes in background color prop
const BackgroundCtn = styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
    background-size: cover;
    top: 0;
    left: 0;
    background-color: ${(props: {backgroundColor: string, backgroundOpacity: string}) => props.backgroundColor};
    opacity: ${(props: {backgroundOpacity: string}) => props.backgroundOpacity};
    `;


