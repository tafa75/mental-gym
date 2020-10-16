
// import React, { useRef, useEffect, useState, Fragment } from 'react'
// import firebaseApp from "../Firebase/firebase"
// import { Link } from 'react-router-dom'
// import './Home.css'
// import firebase from "firebase/app";
// import "firebase/auth";



// const Home = () => {
//   const [email, setEmail] = useState('');

//   const [password, setPassword] = useState('');
//   const [error, setError] = useState(null);
//   const signInWithEmailAndPasswordHandler =
//     (event, email, password) => {
//       event.preventDefault();
//     };

//   const onChangeHandler = (event) => {
//     const { name, value } = event.currentTarget;

//     if (name === 'userEmail') {
//       setEmail(value);
//     }
//     else if (name === 'userPassword') {
//       setPassword(value);
//     }
//   };

//   function signUpwithGoogle(e) {

//     const provider = new firebase.auth.GoogleAuthProvider()
//     firebase.auth().signInWithPopup(provider).then(function (result) {
//       // This gives you a Google Access Token. You can use it to access the Google API.
//       var token = result.credential.accessToken;
//       // The signed-in user info.
//       var user = result.user;
//       // ...
//     }).catch(function (error) {
//       // Handle Errors here.
//       var errorCode = error.code;
//       var errorMessage = error.message;
//       // The email of the user's account used.
//       var email = error.email;
//       // The firebase.auth.AuthCredential type that was used.
//       var credential = error.credential;
//       // ...
//     });
//   }



//   return (
//     <div className="mt-8">

//       <h1 className=" font-bold"></h1>
//       <div className="border border-blue">
//         {error !== null && <div className="py">{error}</div>}
//         <form className="">
//           <br></br> <label htmlFor="userEmail" className="block">
//             Email:
//       </label>
//           <br></br><input
//             type="email"
//             className=" Rectangle"
//             name="userEmail"
//             value={email}
//             placeholder="exemple@gmail.com"
//             id="userEmail"
//             onChange={(event) => onChangeHandler(event)}
//           />
//           <br></br><label htmlFor="userPassword" className="block">
//             Password:
//       </label>

//           <br></br>  <input
//             type="password"
//             className=" input-pw"
//             name="userPassword"
//             value={password}
//             placeholder="Your Password"
//             id="userPassword"
//             onChange={(event) => onChangeHandler(event)}
//           />
//           <br></br> <button className="Login" onClick={(event) => { signInWithEmailAndPasswordHandler(event, email, password) }}>
//             conectarse
//       </button>
//         </form>
//         <p className=" Login"></p>
//         <button
//           className="bg" onClick={signUpwithGoogle}>
//           conectarse con Google
//     </button>
//         <p className="text-center my-3">
//           no tienes cuenta?{" "}
//           <br></br> <Link to="signUp" className="textRegistrarse">
//             Registrarse
//       </Link>{" "}
//           <br />{" "}
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Home