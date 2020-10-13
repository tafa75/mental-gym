import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
//import logo from './logo.svg';
import Header from '../Header/Header'
import Main from '../Main/Main'
import Home from '../Home/Home'
import Login from '../Login/Login'
import Signup from '../Signup/Signup'
import Footer from '../Footer/Footer'
import FirebaseContext from "../Firebase/FirebaseContext"
import firebase from '../Firebase/firebase';

import '../App/App.css';


function App() {
  return (
    <BrowserRouter>
      <Header />
      <FirebaseContext.Provider value={"new firebase()"}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/Main" component={Main} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
        </Switch>
      </FirebaseContext.Provider>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
