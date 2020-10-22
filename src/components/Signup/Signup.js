import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import "firebase/auth"; import firebase from "firebase/app"
import '../Signup/Signup.css';
import "firebase/firestore"
import { useFirebaseApp, useFirestoreCollection } from "reactfire"
import { getMaxListeners } from 'process';

///////////////////////////////////////////
const Signup = (props) => {

    // const firebaseC = useContext(FirebaseContext);
    const [user, setUser] = useState("");
    const [email, setEmail] = useState("");
    const [age, setAge] = useState("");
    const [password, setPassword] = useState("");
    const [sex, setSex] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const firebase = useFirebaseApp();

    const data = {
        user: '',
        email: '',
        password: '',
        confirmPassword: '',
        sexo: '',
        edad: '',

    }
    const [userId, setUserId] = useState("")
    const [loginData, setLoginData] = useState(data);
    const [error, setError] = useState('')

    const handleChange = e => {

        const userData = {
            "user": "alex2",
            "password": password,
            "age": age,
            "sex": "m",
            "email": "alex3@gmail.com"

        }
        console.log(userData)

        firebase.auth().createUserWithEmailAndPassword(userData.email, userData.password)
            .then(() => console.log("hola"))
            .catch(function (error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                // ...
                console.log("hola error")
            });

    }
    const handleSubmit = e => {
        e.preventDefault()
        const userData = {
            "user": user,
            "password": password,
            "age": age,
            "sex": sex,
            "email": email

        }

        //crear user en AUTH
        firebase.auth().createUserWithEmailAndPassword(userData.email, userData.password)
            .then(data => {
                console.log("User ID :- ", data.user.uid); // Lee el ID
                setUserId(data.user.uid)



                //Llama a Firestore
                const usersDB = firebase.firestore().collection("users");
                const newUser = usersDB.doc(data.user.uid).set(userData)


            })
            .catch(function (error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                // ...
                console.log("hola error")
            });

    }


    return (
        <div className="signUpLoginBox">

            <div className="formBoxRight">
                <div className="formContent">

                    <h2>Inscripción</h2>
                    <form onSubmit={handleSubmit}>

                        <div className="inputBox">
                            <input onChange={event => setUser(event.target.value)} type="text" id="user" autoComplete="off" required />
                            <label htmlFor="user">Usuario</label>
                        </div>

                        <br></br>   <div className="inputBox">
                            <input onChange={event => setEmail(event.target.value)} type="email" id="email" autoComplete="off" required />
                            <label htmlFor="email">Email</label>
                        </div>

                        <br></br>  <div className="inputBox">
                            <input onChange={event => setPassword(event.target.value)} type="password" id="password" autoComplete="off" required />
                            <label htmlFor="password">contraseña</label>
                        </div>
                        <br></br> <div className="inputBox">
                            <input onChange={event => setConfirmPassword(event.target.value)} type="password" id="confirmPassword" autoComplete="off" required />
                            <label htmlFor="confirmPassword">Confirmar contraseña</label>
                        </div>

                        <br></br> <div className="inputBox">
                            <input onChange={event => setSex(event.target.value)} type="text" id="sexo" autoComplete="off" required />
                            <label htmlFor="sexo">Sexo</label>
                        </div>
                        <br></br> <div className="inputBox">
                            <input onChange={event => setAge(event.target.value)} type="number" id="edad" autoComplete="off" required />
                            <label htmlFor="edad">edad</label>

                        </div>
                        <br></br> <div className="inputBox">
                            <input onChange={event => setAge(event.target.value)} type="texty" id="aut" autoComplete="off" required />
                            <label htmlFor="edad">Autonomía</label>
                        </div>

                        <br></br>   <div>
                            <Link to="/Main">   <button className="btn_conex">Inscripción</button></Link>
                            <br></br>    <button className="btn-">Enviar</button>
                            <br />  <Link to="/"><button className="btn-log">Volver</button></Link>
                        </div>

                    </form>

                </div>
            </div>
        </div>

    )
}

export default Signup