import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
import Foods from './components/Foods/Foods';

function App() {
  return (
    <Router>
      <Header></Header>
      <Switch>
        <Route path='/login'>
          <Login></Login>
        </Route>
        <Route path='/sign-up'>
          <SignUp></SignUp>
        </Route>
        <Route path='/:type'>
          <Foods></Foods>
        </Route>
        <Route path='/'></Route>
      </Switch>
    </Router>
  );
}

export default App;
