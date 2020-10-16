import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import FirebaseContext from '../Firebase/FirebaseContext';
//import firebase from "firebase/app";
import "firebase/auth";
// import firebase from "firebase/app"
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
    const [pedro, setUserId] = useState("")
    const [loginData, setLoginData] = useState(data);
    const [error, setError] = useState('')

    // const handleChange = e => {
    //     setLoginData({ ...data, [e.target.id]: e.target.value });
    //     console.log(loginData)
    // }

    // const handleSubmit = e => {
    //     e.preventDefault();

    //     const { email, password, user, sexo, edad } = loginData;
    //     firebase.signupUser(email, password, sexo, edad)
    //         .then(authUser => {
    //             return firebase.user(authUser.user.uid).set({
    //                 user,
    //                 email
    //             })
    //         })
    //         .then(() => {
    //             setLoginData({ ...data });
    //             props.history.push('/Main');
    //         })
    //         .catch(error => {
    //             setError(error);
    //             setLoginData({ ...data });
    //         })
    // }




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
                console.log(pedro)



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


        //e.preventDefault()
        //firebase.auth().createUserWithEmailAndPassword(userData.email, userData.password).then(() => window.location.replace("/Main"))

        ////////////////////////////
        // .then(res => { if (res.user) Auth.setLoggedIn(true) }).catch(e => { setErrors(e.message) })
        /////////////////////////////
        // firebase.signupUser(email, password, age, user, sex)
        //     .then(authUser => {
        //         return firebase.user(authUser.user.uid).set({
        //             user,
        //             email
        //         })
        //     })
        //     .then(() => {
        //         setLoginData({ ...data });
        //         props.history.push('/Main');
        //     })
        //     .catch(error => {
        //         setError(error);
        //         setLoginData({ ...data });
        //     })

    }
    // const { user, email, password, confirmPassword, sexo, edad } = data;

    // gestion erreurs
    // const errorMsg = error !== '' && <span>{error.message}</span>;

    return (
        <div className="signUpLoginBox">

            <div className="formBoxRight">
                <div className="formContent">

                    <h2>Inscription</h2>
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
                        <br></br>   <div>
                            <input value="enviar" type="submit" id="submit"></input>
                        </div>

                    </form>

                </div>
            </div>
        </div>

    )
}

export default Signup