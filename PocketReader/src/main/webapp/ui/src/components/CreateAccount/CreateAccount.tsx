import React from 'react';
import styled from "styled-components";
import Background from "../Background/Background"

export interface CreateAccountProps {
    //background color (set default as transparent, being = '')
    backgroundColor?: string;
}

const CreateAccount: React.FunctionComponent<CreateAccountProps> = () =>
( 
    <Background backgroundColor={'black'} backgroundOpacity={'0.5'}>

    </Background>
);
export default CreateAccount;

