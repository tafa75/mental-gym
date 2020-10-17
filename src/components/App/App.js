import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Juego from "../Juego/Juego"
import Refranes from '../Juego/Refranes'
import Header from '../Header/Header'
import Main from '../Main/Main'
import Login from '../Login/Login'
import Signup from '../Signup/Signup'
import Footer from '../Footer/Footer'
import firebaseConfig from "../Firebase/firebase"
import { FirebaseAppProvider } from "reactfire"
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App/App.css';


function App() {
  return (
    <Router>
      <Header />
      <FirebaseAppProvider firebaseConfig={firebaseConfig}>
        <main>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route path="/Main" component={Main} />
            <Route path="/signup" component={Signup} />
            <Route path="/Juego" component={Juego} />
            <Route path="/Refranes" component={Refranes} />
          </Switch>
        </main>

      </FirebaseAppProvider>

      <Footer />
    </Router>
  );
}

export default App;
