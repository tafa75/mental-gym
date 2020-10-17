import Firebase, { auth } from 'firebase';

import React, { Component, createContext } from "react";


const googleProvider = new Firebase.auth.GoogleAuthProvider()

const UserContext = createContext({ user: null });
class UserProvider extends Component {
    state = {
        user: null
    };

    componentDidMount = () => {
        auth.onAuthStateChanged(userAuth => {
            this.setState({ user: userAuth });
        });
    };
    render() {
        return (
            <UserContext.Provider value={this.state.user}>
                {this.props.children}
            </UserContext.Provider>
        );
    }
    
}

function signInWithGoogle() {
    
    Firebase.auth().signInWithPopup(googleProvider).then(function (result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        // ...
    }).catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
    });
}



// export default signInWithGoogle
export default { UserProvider, signInWithGoogle };




