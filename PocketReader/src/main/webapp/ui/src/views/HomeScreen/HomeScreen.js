import React, {useState} from "react";
import styled from "styled-components";
import firebase from 'firebase/app'
import 'firebase/auth';

import ProfilePicture from "../../components/ProfilePicture/ProfilePicture";

const HomeScreen = () => {
  var user = firebase.auth().currentUser;
  var name, email, uid, profilepicture;

  if (user != null) {
    name = user.displayName;
    email = user.email;
    profilepicture = user.profilepicture;
    uid = user.uid;  // The user's ID, unique to the Firebase project. Do NOT use
                     // this value to authenticate with your backend server, if
                     // you have one. Use User.getToken() instead.
  }

    return (
      <Background>
        <DivOne>        
          <DivTwo>          
            {}
          </DivTwo>
        </DivOne>
      </Background>
    );
  }

  export default HomeScreen;


const Background = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  align-items: center;
  background-size: cover;
  top: 0;
  left: 0;
  background-color: red;
  display: flex;
  flex-direction: column;
`
const DivOne = styled.div`
  width: 70%;
  height: 100%;
  position: center;
  background-size: cover;
  top: 0;
  left: 0;
  background-color: blue;
  display: flex;
  flex-direction: column;
`

const DivTwo = styled.div`
  width: 10%;
  height: 100%;
  background-size: cover;
  top: 0;
  left: 0;
  background-color: green;
  display: flex;
  flex-direction: row;
`
