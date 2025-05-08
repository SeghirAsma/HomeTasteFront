import React from 'react';
import {BrowserRouter as Router, Route,Routes} from 'react-router-dom';
import HomePage from './components/HomePage';
import SignUpPage from './components/SignUpPage';
import SignInPage from './components/SignInPage';

function App() {
  return (
   <Router>
    <Routes>
      <Route path="/" exact Component={HomePage}></Route>
      <Route path="/SignUp" exact Component={SignUpPage}></Route>
      <Route path="/SignIn" exact Component={SignInPage}></Route>
    </Routes>
   </Router>
  );
}

export default App;
