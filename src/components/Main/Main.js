import React, { useState, useContext, useEffect } from 'react'
import FirebaseContext from '../Firebase'
import Juego from '../Juego/Juego'
import Logout from '../Logout/Logout'
import CargarDatos from '../CargarDatos/CargarDatos'
import "firebase/firebase-auth"
import * as firebase from "firebase/app";
import Refranes from '../Juego/Refranes'


///////////////////////////////////////////////////////////////


const Main = props => {


    const firebase = useContext(FirebaseContext);

    const [userSession, setUserSession] = useState(null);
    
    const [userData, setUserData] = useState({});
    

    
        return (
        
              <div className="mainJuego">

                      <di className mainRight>
                        
                      </di>
                      <div className="mainLeft">

                      </div>

              </div>)
    
    // useEffect(() => {

    //     let listener = firebase.auth.onAuthStateChanged(user => {
    //         user ? setUserSession(user) : props.history.push('/');
    //     })

    //     if (!!userSession) {
    //         firebase.user(userSession.uid)
    //             .get()
    //             .then(doc => {
    //                 if (doc && doc.exists) {
    //                     const myData = doc.data();
    //                     setUserData(myData)
    //                 }
    //             })
    //             .catch(error => {
    //                 console.log(error);
    //             })
    //     }

    //     return () => {
    //         listener()
    //     };
    // }, [userSession, firebase, props.history])

    //     return userSession !== null  ?(
    //         <CargarDatos
    //             loadingMsg={"Tienes que loggearte  ..."}

    //         />
    //     ) :
    //      (

    //             <div className="quiz-bg">
    //                 <div className="container">
    //                     <h1>Hola</h1>

    //                      <Logout />,
    //                     <Juego userData={userData} /> 
    //                     <Refranes userData={userData} />
    //                 </div>
    //             </div>

    //         )
    // }
}

export default Main
