import React, { useState, useEffect, useContext } from 'react'
import FirebaseContext from '../Firebase'
import firebase from "firebase/app";
import { UserConsumer } from "../App/contextUser"
import { Link, useHistory } from 'react-router-dom'

import "firebase/auth"
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Login/Login.css';

const Login = (props) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userId, setUserId] = useState("")

    const firebaseContext = useContext(FirebaseContext);
    const [btn, setBtn] = useState(false);
    const [error, setError] = useState('');
    let history = useHistory();

    useEffect(() => {
        if (password.length > 5 && email !== '') {
            setBtn(true)
        } else if (btn) {
            setBtn(false)
        }
    }, [password, email, btn])

    const submitUser = funcionContext => {
        let usuarioId;
        let userNombre;
        console.log("handle submit")
        console.log(email);
        console.log(password);

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((data) => {

                console.log("User ID :- ", data.user.uid); // Lee el ID

                usuarioId = data.user.uid
                funcionContext(data.user.uid)
                // history.push('/Main')
                return (data.user.uid)
            }).then((userUid) => {

                const zapato = firebase.firestore().collection("users").doc(userUid)
                const perro = zapato.get();
                console.log(perro);
                return firebase.firestore().collection("users").doc(userUid).get()

            }).then(doc => {




                userNombre = doc.data().user
                funcionContext({ "nombre": userNombre, "id": usuarioId })

            })
            .catch(function (error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log(errorCode)
                console.log(errorMessage);
                // ...
            });




    }

    function authGoogle(e) {




        const provider = new firebase.auth.GoogleAuthProvider()
        firebase.auth().signInWithPopup(provider)
            .then(function (result) {

                var token = result.credential.accessToken;
                var user = result.user;
                props.history.push('/Main');
                return (token, user)
            }).catch(function (error) {

                var errorCode = error.code;

                var email = error.email;

                var credential = error.credential;
            });

    }
    return (
        <UserConsumer>
            {(value) =>
                (
                    <div className="signUpLoginBox">
                        <div className="formContent">

                            {error !== '' && <span>{error.message}</span>}


                            <h1>{value.contexto.nombre}</h1>
                            <h1>{value.contexto.id}</h1>

                            <img src="./media/Logo-1.png" alt="logo" class="center" />

                            <div className="inputBox">
                                <input onChange={e => setEmail(e.target.value)} type="email" autoComplete="on" required />
                                <label htmlFor="email">Email</label>
                            </div>

                            <div className="inputBox">
                                <input onChange={e => setPassword(e.target.value)} type="password" required />
                                <label htmlFor="password">Contraseña</label>
                            </div>
                            <div style={{ textAlign: "center" }}>

                                {/* <Link to="/Main"><button className="btn_conex">Conexión</button></Link> */}
                               <br></br> <Link to="/Main">   <button className="btn_conex" onClick={() => submitUser(value.metodo)}>Conexión</button></Link>

                                <br></br>   <button onClick={authGoogle}>Google</button>

                                <div className="linkContainer" style={{ display: "inline" }}>
                                <br></br>    <Link to="/Signup"><button className="btn-sign">Inscríbete</button></Link><br></br>

                                </div>

                            </div>
                        </div>
                    </div>
                )
            }



        </UserConsumer >
    )


}



export default Login