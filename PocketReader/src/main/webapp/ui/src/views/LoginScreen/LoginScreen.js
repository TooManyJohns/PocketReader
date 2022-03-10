import React, { useState, useContext } from "react";
import styled from "styled-components";
import { AuthContext } from "../../App";

import firebase from "firebase/app";
import "firebase/auth";

import logoImg from "../../assets/pocketdexlogo.png";

import Logo from "../../components/Logo/Logo";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setErrors] = useState("");

  const infoTextFields = {
    loginTitle: "Track how many Pokémon you've seen.",
    createTitle: "Don't have an account? Create one to get started!",
  };

  const Auth = useContext(AuthContext);
  const handleLogin = (e) => {
    e.preventDefault();
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((res) => {
        console.log(res);
        if (res.user) Auth.setLoggedIn(true);
      })
      .catch((e) => {
        setErrors(e.message);
      });
  };

  return (
    <Background>
      <Header>
        <Logo imageUrl={logoImg}></Logo>
      </Header>
      <Modal>
        <InputCard>
          <LoginTitleText>{infoTextFields.loginTitle}</LoginTitleText>
          <TextInput
            maxLength={320}
            type="text"
            placeholder="Username"
            value={email}
            onChange={(input) => setEmail(input.target.value)}
          ></TextInput>
          <TextInput
            type="password"
            value={password}
            onChange={(input) => setPassword(input.target.value)}
            placeholder="Password"
          ></TextInput>
          <form style={{'align-self':'center', 'width':'80%', 'align-items':'center'}} onSubmit={(e) => handleLogin(e)}>
            <LoginButton>Login</LoginButton>
          </form>
          <ErrorText>
            {error ? "Invalid email/password credentials" : ""}
          </ErrorText>
          <CreateTitleText>{infoTextFields.createTitle}</CreateTitleText>
          <CreateAccountButton>Create Account</CreateAccountButton>
        </InputCard>
      </Modal>
    </Background>
  );
};

export default LoginScreen;


const Background = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  background-size: cover;
  top: 0;
  left: 0;
  background-color: #BB0F15;
  display: flex;
  flex-direction: column;
`

const Header = styled.h1`
  padding-top: 1%;
  display: flex;
  align-items: center;
  justify-content: center;
  width 100%;
  height: 100%;
  flex:1;
`

const Modal = styled.div`
  margin-top: -5%;
  display: flex;
  align-items: center;
  justify-content: center;
  width 100%;
  height: 100%;
  transform: translateY(-50%, -50%);
`

// Create a Title component that'll render an <h1> tag with some styles
const InputCard = styled.div`
  justify-content: center;
  height: auto;
  width: 30%;
  max-width: 30%;
  min-width: 500px;
  background-color: #AE0E14;
  display: flex;
  flex-direction: column;
  padding-bottom: 30px;
  padding-top: 25px;
  border-radius: 15px;
  margin:auto; 
`;

const LoginTitleText = styled.div`
  text-align: center;
  height: 100%;
  margin-top: 3%;
  margin-bottom: 2%;
  font-size: 1.4em;
  color: white;
  font-family: Lucida Grande;
  padding:10px;
  display: block;
`;

const TextInput = styled.input`
  height: 100%;
  margin: 10px;
  margin-left: 20px;
  margin-right: 20px;
  box-sizing: border-box;
  border: 3px solid #ccc;
  outline: none;
  border-radius: 15px;
  color: black;
  font-family: Lucida Grande;
  font-size: 1.5em;
  padding-left: 15px;
  padding:10px;
  ::placeholder {
    color: grey;
    font-family: Lucida Grande;
  }
`;

const LoginButton = styled.button`
  font-size: 2em;
  text-align: center;
  height: 100%;
  width: 100%;
  border: 3px dark red;
  background-color: #FA141D;
  font-family: Lucida Grande;
  color: white;
  border-radius: 15px;
  margin-top: 20px;
  margin-bottom: 20px;
  padding: 15px;
`;

const ErrorText = styled.div`
  font-size: 1.2em;
  color: red;
  font-family: Lucida Grande;
  text-align: center;
`;


const CreateTitleText = styled.div`
  font-size: 1.2em;
  color: white;
  font-family: Lucida Grande;
  text-align: center;
`;

const CreateAccountButton = styled.button`
  font-size: 1.2em;
  text-align: center;
  height: 100%;
  border: 3px dark red;
  background-color: #FA141D;
  font-family: Lucida Grande;
  color: white;
  border-radius: 15px;
  margin: 20px;
  margin-bottom: 40px;
  margin-top: 5px;
  padding: 10px;
`;

