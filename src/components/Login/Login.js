import React, { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import FirebaseContext from '../Firebase'
import firebase from "firebase/app";
import 'firebaseui'
import "firebase/auth"
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Login/Login.css';

const Login = (props) => {
    
        const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');

    const firebaseContext = useContext(FirebaseContext);
    const [btn, setBtn] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        if (password.length > 5 && email !== '') {
            setBtn(true)
        } else if (btn) {
            setBtn(false)
        }
    }, [password, email, btn])

    const handleSubmit = e => {
         //e.preventDefault();

        firebaseContext.loginUser(email, password)
            .then(user => {
                
                setEmail('');
                setPassword('');
                props.history.push('/Main');
            })
            .catch(error => {
                setError(error);
                setEmail('');
                setPassword('');
            })

    }
    function authGoogle(e) {
 
        const provider = new firebase.auth.GoogleAuthProvider()
        firebase.auth().signInWithPopup(provider)
        .then(function (result) {
            
            var token = result.credential.accessToken;
            var user = result.user;
            props.history.push('/Main');
        }).catch(function (error) {
        
            var errorCode = error.code;                                                                                                                                                                                             

            var email = error.email;
        
            var credential = error.credential;
        });

    }

    return (
        <div className="signUpLoginBox">
 
           
                <div className="formContent">

                    {error !== '' && <span>{error.message}</span>}

                    <form onSubmit={handleSubmit}>

                        <h2>Connexion</h2>

                        <div className="inputBox">
                            <input onChange={e => setEmail(e.target.value)}  type="email" autoComplete="off" required />
                            <label htmlFor="email">Email</label>
                        </div>

                        <div className="inputBox">
                            <input onChange={e => setPassword(e.target.value)} type="password" required />
                            <label htmlFor="password">Contraseña</label>
                        </div>
                        
                            <input type="submit" value="conexion"></input> 
                        
                        <button onClick={authGoogle}>Google</button>
                    </form>
                    <div className="linkContainer">
                        <Link className="simpleLink" to="/signup">inscribete</Link>
                        <br />
                    </div>
                </div>
            </div>
     

)
  }

export default Login