import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Adivinanzas from "../Juego/Adivinanzas"
import Refranes from '../Juego/Refranes'
import Header from '../Header/Header'
import Gentilicios from '../Juego/Gentilicios'
import Provincias from '../Juego/Provincias'
//import Nav from '../Nav/Nav'
import Main from '../Main/Main'
import Login from '../Login/Login'
import Signup from '../Signup/Signup'
import Footer from '../Footer/Footer'
import firebaseConfig from "../Firebase/firebase"
import { FirebaseAppProvider } from "reactfire"
import { UserProvider } from "./contextUser"
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App/App.css';


function App() {

  const [userC, setUserC] = useState("piedra")
  return (
    <UserProvider value={{ contexto: userC, metodo: setUserC }}>
      <div>
        <Router>
          <Header />
          <FirebaseAppProvider firebaseConfig={firebaseConfig}>
            <Switch>
              <Route exact path="/" component={Login} />

              <Route path="/Main" component={Main} />
              <Route path="/signup" component={Signup} />
              <Route path="/Adivinanzas" component={Adivinanzas} />
              <Route path="/Refranes" component={Refranes} />
              <Route path="/Gentilicios" component={Gentilicios} />
              <Route path="/Provincias" component={Provincias} />
            </Switch>

          </FirebaseAppProvider>

          <Footer />
        </Router>
      </div>
    </UserProvider>
  )
}

export default App;
