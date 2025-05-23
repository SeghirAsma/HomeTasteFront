import React from 'react';
import {BrowserRouter as Router, Route,Routes} from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';
import HomePage from './components/HomePage';
import SignUpPage from './components/SignUpPage';
import SignInPage from './components/SignInPage';
import CompleteProfilePage from './components/CompleteProfilePage';

function App() {
  return (
  <GoogleOAuthProvider clientId="221870636622-p64vf5nl6gifde25a18dns2aq6s73668.apps.googleusercontent.com">
   <Router>
    <Routes>
      <Route path="/" exact Component={HomePage}></Route>
      <Route path="/SignUp" exact Component={SignUpPage}></Route>
      <Route path="/SignIn" exact Component={SignInPage}></Route>
       <Route path="/CompleteProfile" exact Component={CompleteProfilePage}></Route>
    </Routes>
   </Router>
  </GoogleOAuthProvider>
  );
}

export default App;
