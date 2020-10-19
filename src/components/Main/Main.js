import React from 'react';
import { Link } from 'react-router-dom';
import Adivinanzas from '../Juego/Adivinanzas'
import Refranes from '../Juego/Refranes'

export default function Home() {


    return (
        <>
            <Link to="/Logout" className="btn">
                Logout
            </Link>

            <Link to="/Refranes" className="btn">
                Refranes
            </Link>
            <Link to="/Adivinanzas" className="btn">
                Adivinanzas
            </Link>
        </>
    );
 }

// <button onClick={Refranes}>Refranes</button><hr></hr>

// <button onClick={Juego}>Adivinanzas</button>
//     // useEffect(() => {

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


//export default Main
