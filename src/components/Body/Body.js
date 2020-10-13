import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Main from '../Main/Main'
import Home from '../Home/Home'
import Login from '../Login/Login'
import Signup from '../Signup/Signup'
import FirebaseContext from "../Firebase/FirebaseContext"
import Firebase from "../Firebase/firebase";

class Body extends Component {
    render() {
        return (
            <BrowserRouter >
                <FirebaseContext.Provider value={Firebase}>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/Main" component={Main} />
                        <Route path="/login" component={Login} />
                        <Route path="/signup" component={Signup} />
                    </Switch>
                </FirebaseContext.Provider>
            </BrowserRouter >
        )
    }
}

export default Body;