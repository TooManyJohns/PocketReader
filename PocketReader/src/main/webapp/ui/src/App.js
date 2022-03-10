import React, { useState  }  from 'react';
import LoginScreen from './views/LoginScreen/LoginScreen'
import withFirebaseAuth from 'react-with-firebase-auth'
import firebase from 'firebase/app'
import 'firebase/auth';
import firebaseConfig from './firebaseConfig';
import HomeScreen from './views/HomeScreen/HomeScreen';

const firebaseApp = firebase.initializeApp(firebaseConfig);

export const AuthContext = React.createContext(null);

function App() {
  const [isLoggedIn, setLoggedIn, user] = useState(false);

    return (
      <AuthContext.Provider value={{ isLoggedIn, setLoggedIn }}>
      <React.Fragment>
          {
            isLoggedIn
              ? <HomeScreen></HomeScreen>
              : <LoginScreen></LoginScreen>
          }
      </React.Fragment>
      </AuthContext.Provider>
    );
  }


const firebaseAppAuth = firebaseApp.auth();

const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider(),
};

export default withFirebaseAuth({
  providers,
  firebaseAppAuth,
})(App);
