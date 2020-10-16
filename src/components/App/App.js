import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
//import logo from './logo.svg';
import Header from '../Header/Header'
import Main from '../Main/Main'
import Home from '../Home/Home'
import Login from '../Login/Login'
import Signup from '../Signup/Signup'
import Footer from '../Footer/Footer'
import firebaseConfig from "../Firebase/firebase"
import { FirebaseAppProvider } from "reactfire"
import firebase from '../Firebase/firebase';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App/App.css';


function App() {
  return (
    <BrowserRouter>
      <Header />
      <FirebaseAppProvider firebaseConfig={firebaseConfig}>
        <main>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route path="/Main" component={Main} />
            <Route path="/signup" component={Signup} />
          </Switch>
        </main>

      </FirebaseAppProvider>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
